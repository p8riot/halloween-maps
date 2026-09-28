/* p8riot PWA Helper 0.2.0
   Optional install/update lifecycle mechanics. Product owns manifest, icons,
   service-worker URL/scope, cache contents, and offline policy. */
(function (global) {
  "use strict";

  var core = global.p8riotCore;
  if (!core || !core.modules) {
    if (global.console) {
      global.console.error("[p8riot PWA] p8riot Core must load first.");
    }
    return;
  }

  var MODULE_ID = "pwa";
  var MODULE_VERSION = "0.2.0";
  var COMPATIBLE_CORE = "0.2.x";
  var started = false;
  var startPromise = null;
  var startOperationId = 0;
  var startRequestKey = null;
  var listenersInstalled = false;
  var deferredInstallPrompt = null;
  var registration = null;
  var globalListeners = [];
  var registrationListeners = [];
  var workerListeners = [];
  var registrationRequestId = 0;
  var updateAvailable = false;

  function emit(name, detail) {
    try {
      global.dispatchEvent(new CustomEvent(name, { detail: detail }));
    } catch (error) {
      /* Events are observational only. */
    }
  }

  function installed() {
    var displayMode = false;
    try {
      displayMode =
        typeof global.matchMedia === "function" &&
        global.matchMedia("(display-mode: standalone)").matches;
    } catch (error) {
      displayMode = false;
    }
    return !!(
      displayMode ||
      (global.navigator && global.navigator.standalone === true)
    );
  }

  function supportStatus() {
    var secure = global.isSecureContext === true;
    var serviceWorkerApi = !!(
      global.navigator && "serviceWorker" in global.navigator
    );
    var localFile = !!(
      global.location && global.location.protocol === "file:"
    );
    var canRegister = secure && serviceWorkerApi && !localFile;
    var reason = null;

    if (localFile) {
      reason = "service-worker-unavailable-on-file-origin";
    } else if (!secure) {
      reason = "secure-context-required";
    } else if (!serviceWorkerApi) {
      reason = "service-worker-api-unavailable";
    }

    return {
      secureContext: secure,
      localFile: localFile,
      serviceWorkerSupported: serviceWorkerApi,
      canRegisterServiceWorker: canRegister,
      serviceWorkerReason: reason,
      installed: installed(),
      installPromptAvailable: !!deferredInstallPrompt,
      updateAvailable: updateAvailable,
      registration: registration || null
    };
  }

  function on(bucket, target, name, handler) {
    target.addEventListener(name, handler);
    bucket.push(function () {
      target.removeEventListener(name, handler);
    });
  }

  function clearListeners(bucket) {
    bucket.splice(0).forEach(function (remove) {
      remove();
    });
  }

  function clearRegistrationLifecycle() {
    clearListeners(workerListeners);
    clearListeners(registrationListeners);
  }

  function attachRegistration(nextRegistration) {
    clearRegistrationLifecycle();
    registration = nextRegistration || null;
    updateAvailable = !!(registration && registration.waiting);

    if (!registration) {
      return;
    }

    if (registration.waiting) {
      emit("p8riot:pwa-update-available", supportStatus());
    }

    if (
      registration.addEventListener &&
      registration.removeEventListener
    ) {
      var registrationForHandler = registration;
      on(registrationListeners, registrationForHandler, "updatefound", function () {
        if (registration !== registrationForHandler) {
          return;
        }

        clearListeners(workerListeners);
        var installing = registrationForHandler.installing;
        if (
          !installing ||
          !installing.addEventListener ||
          !installing.removeEventListener
        ) {
          return;
        }

        var workerForHandler = installing;
        on(workerListeners, workerForHandler, "statechange", function () {
          if (registration !== registrationForHandler) {
            return;
          }
          if (
            workerForHandler.state === "installed" &&
            global.navigator.serviceWorker.controller
          ) {
            updateAvailable = true;
            emit("p8riot:pwa-update-available", supportStatus());
          }
        });
      });
    }
  }

  function ensureLifecycleListeners() {
    if (listenersInstalled) {
      return;
    }
    listenersInstalled = true;

    on(globalListeners, global, "beforeinstallprompt", function (event) {
      event.preventDefault();
      deferredInstallPrompt = event;
      emit("p8riot:pwa-install-available", supportStatus());
    });

    on(globalListeners, global, "appinstalled", function () {
      deferredInstallPrompt = null;
      emit("p8riot:pwa-installed", supportStatus());
    });

    if (
      global.navigator &&
      global.navigator.serviceWorker &&
      typeof global.navigator.serviceWorker.addEventListener === "function"
    ) {
      on(globalListeners, global.navigator.serviceWorker, "controllerchange", function () {
        /*
          A controller change means an activated worker has taken control.
          Clear stale "update available" state; products still own whether and
          when they request activation/reload.
        */
        updateAvailable = false;
        emit("p8riot:pwa-controller-change", supportStatus());
      });
    }
  }

  function start(options) {
    options = options || {};
    ensureLifecycleListeners();

    if (started) {
      return Promise.resolve({
        ok: true,
        alreadyStarted: true,
        status: supportStatus()
      });
    }

    /*
      Coalesce overlapping start() calls. Direct register() remains independently
      callable, but start() itself never creates duplicate concurrent
      registration attempts.
    */
    if (startPromise) {
      var requestedKey = options.serviceWorkerUrl
        ? String(options.serviceWorkerUrl) + "\n" + String(options.scope || "")
        : "lifecycle-only";
      if (requestedKey === startRequestKey) {
        return startPromise;
      }
      return Promise.resolve({
        ok: false,
        error: "start-in-progress",
        status: supportStatus()
      });
    }

    if (!options.serviceWorkerUrl) {
      started = true;
      emit("p8riot:pwa-status", supportStatus());
      return Promise.resolve({
        ok: true,
        lifecycleOnly: true,
        status: supportStatus()
      });
    }

    var operationId = ++startOperationId;
    startRequestKey =
      String(options.serviceWorkerUrl) + "\n" + String(options.scope || "");
    var operation = register(options.serviceWorkerUrl, {
      scope: options.scope
    }).then(function (result) {
      /*
        destroy() invalidates outstanding start operations. Do not let an old
        completion mutate a later lifecycle.
      */
      if (operationId !== startOperationId) {
        return {
          ok: false,
          error: "start-superseded",
          registration: null,
          status: supportStatus()
        };
      }

      started = result.ok === true;
      emit("p8riot:pwa-status", supportStatus());

      var response = {
        ok: result.ok,
        registration: result.registration || null,
        error: result.error || null,
        status: supportStatus()
      };

      if (startPromise === operation) {
        startPromise = null;
        startRequestKey = null;
      }
      return response;
    });

    startPromise = operation;
    return operation;
  }

  function register(url, options) {
    options = options || {};
    ensureLifecycleListeners();
    var status = supportStatus();
    if (!status.canRegisterServiceWorker) {
      return Promise.resolve({
        ok: false,
        error: status.serviceWorkerReason,
        status: status
      });
    }
    if (!url) {
      return Promise.resolve({
        ok: false,
        error: "service-worker-url-required",
        status: status
      });
    }

    var registrationOptions = {};
    if (options.scope) {
      registrationOptions.scope = options.scope;
    }

    var requestId = ++registrationRequestId;

    return global.navigator.serviceWorker
      .register(url, registrationOptions)
      .then(function (value) {
        if (requestId !== registrationRequestId) {
          return {
            ok: false,
            error: "registration-superseded",
            registration: value,
            status: supportStatus()
          };
        }

        attachRegistration(value);
        return {
          ok: true,
          registration: registration,
          status: supportStatus()
        };
      })
      .catch(function (error) {
        if (requestId !== registrationRequestId) {
          return {
            ok: false,
            error: "registration-superseded",
            registration: null,
            status: supportStatus()
          };
        }

        emit("p8riot:pwa-error", {
          code: "registration-failed",
          message: String(error && error.message ? error.message : error)
        });
        return {
          ok: false,
          error: "registration-failed",
          message: String(error && error.message ? error.message : error),
          status: supportStatus()
        };
      });
  }

  function promptInstall() {
    if (!deferredInstallPrompt) {
      return Promise.resolve({
        ok: false,
        error: "install-prompt-unavailable",
        status: supportStatus()
      });
    }

    var promptEvent = deferredInstallPrompt;
    deferredInstallPrompt = null;

    try {
      promptEvent.prompt();
      return Promise.resolve(promptEvent.userChoice)
        .then(function (choice) {
          return {
            ok: true,
            choice: choice,
            status: supportStatus()
          };
        })
        .catch(function (error) {
          return {
            ok: false,
            error: "install-prompt-failed",
            message: String(error && error.message ? error.message : error),
            status: supportStatus()
          };
        });
    } catch (error) {
      return Promise.resolve({
        ok: false,
        error: "install-prompt-failed",
        message: String(error && error.message ? error.message : error),
        status: supportStatus()
      });
    }
  }

  function checkForUpdate() {
    if (!registration || typeof registration.update !== "function") {
      return Promise.resolve({
        ok: false,
        error: "registration-unavailable",
        status: supportStatus()
      });
    }
    return registration
      .update()
      .then(function () {
        return { ok: true, status: supportStatus() };
      })
      .catch(function (error) {
        return {
          ok: false,
          error: "update-check-failed",
          message: String(error && error.message ? error.message : error),
          status: supportStatus()
        };
      });
  }

  function destroy() {
    registrationRequestId += 1;
    startOperationId += 1;
    startPromise = null;
    startRequestKey = null;
    clearRegistrationLifecycle();
    clearListeners(globalListeners);
    deferredInstallPrompt = null;
    registration = null;
    updateAvailable = false;
    listenersInstalled = false;
    started = false;
  }

  var api = Object.freeze({
    version: MODULE_VERSION,
    start: start,
    register: register,
    promptInstall: promptInstall,
    checkForUpdate: checkForUpdate,
    status: supportStatus,
    destroy: destroy
  });

  var moduleRegistration = core.modules.register({
    id: MODULE_ID,
    name: "p8riot PWA Helper",
    version: MODULE_VERSION,
    compatibleCore: COMPATIBLE_CORE,
    requiredModules: [],
    optionalModules: [],
    requiredCss: [],
    api: api,
    destroy: destroy
  });

  if (!moduleRegistration.ok && global.console) {
    global.console.error("[p8riot PWA] Module registration failed.", moduleRegistration);
  }
})(window);
