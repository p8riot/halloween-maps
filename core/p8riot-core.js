/* p8riot Core 0.2.0 - Alpha 1
   Appearance-neutral runtime foundation.
   Classic script loading is the canonical deployment path. */
(function (global) {
  "use strict";

  if (!global || !global.document) {
    return;
  }

  var VERSION = "0.2.0";
  var BUILD = "Alpha 1";
  var RELEASE_CHANNEL = "alpha";
  var root = global.document.documentElement;
  var rawConfig =
    global.p8riotAppConfig && typeof global.p8riotAppConfig === "object"
      ? global.p8riotAppConfig
      : null;
  var knownModuleIds = Object.freeze([
    "storage",
    "dialog",
    "pwa",
    "imageViewer",
    "toast",
    "theme",
    "responsiveDrawer",
    "voice",
    "search",
    "favorites",
    "timer",
    "history"
  ]);
  var registry = Object.create(null);
  var configIssues = [];

  function freeze(value) {
    if (value && typeof value === "object" && typeof Object.freeze === "function") {
      return Object.freeze(value);
    }
    return value;
  }

  function emit(name, detail) {
    try {
      global.dispatchEvent(new CustomEvent(name, { detail: detail }));
    } catch (error) {
      /* CustomEvent dispatch is diagnostic only. */
    }
  }

  function getPath(object, path, fallback) {
    if (!path) {
      return object == null ? fallback : object;
    }
    var parts = String(path).split(".");
    var current = object;
    for (var i = 0; i < parts.length; i += 1) {
      if (current == null || !Object.prototype.hasOwnProperty.call(current, parts[i])) {
        return fallback;
      }
      current = current[parts[i]];
    }
    return current;
  }

  function parseVersion(value) {
    var match = String(value || "")
      .trim()
      .match(/^v?(\d+)\.(\d+)\.(\d+)(?:[-+].*)?$/);
    if (!match) {
      return null;
    }
    return [Number(match[1]), Number(match[2]), Number(match[3])];
  }

  function compareVersions(left, right) {
    for (var i = 0; i < 3; i += 1) {
      if (left[i] < right[i]) {
        return -1;
      }
      if (left[i] > right[i]) {
        return 1;
      }
    }
    return 0;
  }

  function wildcardBounds(rangeText) {
    var parts = String(rangeText || "").trim().split(".");
    if (parts.length < 1 || parts.length > 3) {
      return null;
    }
    var wildcardIndex = -1;
    var values = [0, 0, 0];

    for (var i = 0; i < 3; i += 1) {
      var part = parts[i];
      if (part == null || /^[xX*]$/.test(part)) {
        if (wildcardIndex === -1) {
          wildcardIndex = i;
        }
        values[i] = 0;
      } else if (/^\d+$/.test(part) && wildcardIndex === -1) {
        values[i] = Number(part);
      } else {
        return null;
      }
    }

    if (wildcardIndex === -1) {
      return null;
    }

    var upper = values.slice();
    if (wildcardIndex === 0) {
      return { any: true };
    }
    if (wildcardIndex === 1) {
      upper[0] += 1;
      upper[1] = 0;
      upper[2] = 0;
    } else {
      upper[1] += 1;
      upper[2] = 0;
    }
    return { minimum: values, maximumExclusive: upper };
  }

  function comparatorSatisfied(version, token) {
    var match = token.match(/^(>=|<=|>|<|=)?\s*(v?\d+\.\d+\.\d+(?:[-+].*)?)$/);
    if (!match) {
      return null;
    }
    var target = parseVersion(match[2]);
    if (!target) {
      return null;
    }
    var comparison = compareVersions(version, target);
    switch (match[1] || "=") {
      case ">=":
        return comparison >= 0;
      case "<=":
        return comparison <= 0;
      case ">":
        return comparison > 0;
      case "<":
        return comparison < 0;
      default:
        return comparison === 0;
    }
  }

  function versionSatisfies(versionValue, range) {
    var version = parseVersion(versionValue);
    if (!version || !range) {
      return false;
    }
    if (Array.isArray(range)) {
      return range.some(function (item) {
        return versionSatisfies(versionValue, item);
      });
    }

    var text = String(range).trim();
    if (!text) {
      return false;
    }
    if (text === "*" || /^[xX]$/.test(text)) {
      return true;
    }

    if (text.charAt(0) === "^" || text.charAt(0) === "~") {
      var base = parseVersion(text.slice(1));
      if (!base) {
        return false;
      }
      var upper = base.slice();
      if (text.charAt(0) === "~") {
        upper[1] += 1;
        upper[2] = 0;
      } else if (base[0] > 0) {
        upper[0] += 1;
        upper[1] = 0;
        upper[2] = 0;
      } else if (base[1] > 0) {
        upper[1] += 1;
        upper[2] = 0;
      } else {
        upper[2] += 1;
      }
      return compareVersions(version, base) >= 0 && compareVersions(version, upper) < 0;
    }

    var wildcard = wildcardBounds(text);
    if (wildcard) {
      if (wildcard.any) {
        return true;
      }
      return (
        compareVersions(version, wildcard.minimum) >= 0 &&
        compareVersions(version, wildcard.maximumExclusive) < 0
      );
    }

    if (/^(>=|<=|>|<|=)/.test(text) || /[\s,]/.test(text)) {
      var tokens = text
        .replace(/,/g, " ")
        .split(/\s+/)
        .filter(Boolean);
      if (!tokens.length) {
        return false;
      }
      return tokens.every(function (token) {
        var result = comparatorSatisfied(version, token);
        return result === true;
      });
    }

    var exact = parseVersion(text);
    return exact ? compareVersions(version, exact) === 0 : false;
  }

  function compatibleWithCore(range) {
    return versionSatisfies(VERSION, range);
  }

  function normalizeRequiredModule(value) {
    if (typeof value === "string") {
      var stringId = value.trim();
      return stringId
        ? { id: stringId, compatibleVersion: null, declaration: stringId }
        : null;
    }
    if (!value || typeof value !== "object") {
      return null;
    }
    var id = String(value.id || "").trim();
    if (!id) {
      return null;
    }
    var compatibleVersion =
      value.compatibleVersion != null
        ? value.compatibleVersion
        : value.versionRange != null
          ? value.versionRange
          : value.version != null
            ? value.version
            : null;
    return {
      id: id,
      compatibleVersion: compatibleVersion,
      declaration: freeze({
        id: id,
        compatibleVersion: compatibleVersion
      })
    };
  }

  function detectStorage(name) {
    try {
      var storage = global[name];
      if (!storage) {
        return false;
      }
      var probe = "__p8riot_core_probe__";
      storage.setItem(probe, "1");
      storage.removeItem(probe);
      return true;
    } catch (error) {
      return false;
    }
  }

  function supportsNativeDialogContract() {
    try {
      if (typeof global.HTMLDialogElement !== "function") {
        return false;
      }
      var dialog = global.document.createElement("dialog");
      return (
        typeof dialog.showModal === "function" &&
        typeof dialog.close === "function" &&
        "open" in dialog
      );
    } catch (error) {
      return false;
    }
  }

  var matchMediaSupported = typeof global.matchMedia === "function";
  var standaloneQuery = matchMediaSupported
    ? global.matchMedia("(display-mode: standalone)")
    : null;
  var legacyIOSStandalone = global.navigator && global.navigator.standalone === true;

  /* UA flags are retained only as 0.1 compatibility signals. Core capability
     decisions use feature/environment detection instead. */
  var ua = (global.navigator && global.navigator.userAgent) || "";
  var platform = (global.navigator && global.navigator.platform) || "";
  var maxTouchPoints = (global.navigator && global.navigator.maxTouchPoints) || 0;
  var isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (platform === "MacIntel" && maxTouchPoints > 1);
  var isSafari = /^((?!chrome|android).)*safari/i.test(ua);

  var environment = freeze({
    protocol: global.location ? global.location.protocol : "",
    secureContext: global.isSecureContext === true,
    localFile: !!(global.location && global.location.protocol === "file:"),
    isIOS: isIOS,
    isSafari: isSafari
  });

  var capabilities = freeze({
    visualViewport: !!global.visualViewport,
    matchMedia: matchMediaSupported,
    nativeDialog: supportsNativeDialogContract(),
    inert: !!(
      global.HTMLElement &&
      global.HTMLElement.prototype &&
      "inert" in global.HTMLElement.prototype
    ),
    localStorage: detectStorage("localStorage"),
    sessionStorage: detectStorage("sessionStorage"),
    serviceWorker: !!(
      global.navigator &&
      "serviceWorker" in global.navigator &&
      global.isSecureContext === true
    )
  });

  function isStandaloneNow() {
    return !!(
      (standaloneQuery && standaloneQuery.matches) ||
      (global.navigator && global.navigator.standalone === true)
    );
  }

  function addConfigIssue(level, code, message, details) {
    var issue = { level: level, code: code, message: message };
    if (details && typeof details === "object") {
      Object.keys(details).forEach(function (key) {
        issue[key] = details[key];
      });
    }
    configIssues.push(freeze(issue));
  }

  if (rawConfig) {
    if (!rawConfig.coreVersion) {
      addConfigIssue(
        "warning",
        "missing-core-version",
        "p8riotAppConfig does not declare coreVersion."
      );
    } else if (String(rawConfig.coreVersion) !== VERSION) {
      addConfigIssue(
        "warning",
        "core-version-mismatch",
        "Configured coreVersion " +
          rawConfig.coreVersion +
          " does not match loaded Core " +
          VERSION +
          "."
      );
    }

    if (rawConfig.modules != null && typeof rawConfig.modules !== "object") {
      addConfigIssue(
        "warning",
        "invalid-modules-config",
        "p8riotAppConfig.modules must be an object when provided."
      );
    } else if (rawConfig.modules) {
      Object.keys(rawConfig.modules).forEach(function (id) {
        if (knownModuleIds.indexOf(id) === -1) {
          addConfigIssue(
            "warning",
            "unknown-module",
            "Unknown Core module in config: " + id
          );
          return;
        }
        if (typeof rawConfig.modules[id] !== "boolean") {
          addConfigIssue(
            "warning",
            "invalid-module-config-value",
            "Core module config value for " +
              id +
              " must be boolean; received " +
              (rawConfig.modules[id] === null ? "null" : typeof rawConfig.modules[id]) +
              ".",
            {
              moduleId: id,
              valueType: rawConfig.modules[id] === null ? "null" : typeof rawConfig.modules[id]
            }
          );
        }
      });
    }
  }

  var configApi = freeze({
    present: !!rawConfig,
    legacyMode: !rawConfig,
    get: function (path, fallback) {
      return getPath(rawConfig, path, fallback);
    },
    moduleEnabled: function (id) {
      if (!rawConfig || !rawConfig.modules) {
        return null;
      }
      if (!Object.prototype.hasOwnProperty.call(rawConfig.modules, id)) {
        return false;
      }
      return rawConfig.modules[id] === true;
    },
    issues: function () {
      return configIssues.slice();
    }
  });

  /*
    Core 0.1 clipped root/body horizontal overflow globally. 0.2.0 preserves
    that behavior only for legacy/no-config products. A configured 0.2 product
    opts into the modern path and must pass real overflow diagnostics.
  */
  var legacyOverflowCompatibility = !rawConfig;
  root.classList.toggle("p8-overflow-modern", !legacyOverflowCompatibility);
  root.classList.toggle("p8-overflow-legacy", legacyOverflowCompatibility);
  root.dataset.p8OverflowCompatibility = legacyOverflowCompatibility
    ? "legacy-clip"
    : "modern";

  root.classList.toggle("p8-ios", isIOS);
  root.classList.toggle("p8-safari", isSafari);
  root.classList.toggle("p8-standalone", isStandaloneNow());
  root.dataset.p8riotCore = VERSION;

  var viewportMeasurements = {
    width: 0,
    height: 0,
    offsetLeft: 0,
    offsetTop: 0,
    scale: 1
  };

  function updateViewportVariables() {
    var viewport = global.visualViewport;
    var height = viewport ? viewport.height : global.innerHeight;
    var width = viewport ? viewport.width : global.innerWidth;
    var offsetLeft = viewport ? viewport.offsetLeft : 0;
    var offsetTop = viewport ? viewport.offsetTop : 0;
    var scale = viewport && viewport.scale ? viewport.scale : 1;

    viewportMeasurements = {
      width: Number(width) || 0,
      height: Number(height) || 0,
      offsetLeft: Number(offsetLeft) || 0,
      offsetTop: Number(offsetTop) || 0,
      scale: Number(scale) || 1
    };

    root.style.setProperty("--p8-visual-height", viewportMeasurements.height + "px");
    root.style.setProperty("--p8-visual-width", viewportMeasurements.width + "px");
    root.style.setProperty("--p8-visual-offset-left", viewportMeasurements.offsetLeft + "px");
    root.style.setProperty("--p8-visual-offset-top", viewportMeasurements.offsetTop + "px");
    root.style.setProperty("--p8-visual-scale", String(viewportMeasurements.scale));
    root.style.setProperty("--p8-vh", viewportMeasurements.height * 0.01 + "px");

    emit("p8riot:viewport-change", viewportApi.measurements());
    return viewportApi.measurements();
  }

  var viewportApi = freeze({
    update: updateViewportVariables,
    measurements: function () {
      return {
        width: viewportMeasurements.width,
        height: viewportMeasurements.height,
        offsetLeft: viewportMeasurements.offsetLeft,
        offsetTop: viewportMeasurements.offsetTop,
        scale: viewportMeasurements.scale
      };
    }
  });

  function elementOverflowReasons(element, rect, viewportWidth) {
    var reasons = [];
    if (rect.right > viewportWidth + 1) {
      reasons.push("right-edge");
    }
    if (rect.left < -1) {
      reasons.push("left-edge");
    }
    if (element.scrollWidth > element.clientWidth + 1) {
      reasons.push("internal-width");
    }
    return reasons;
  }

  function overflowReport(options) {
    options = options || {};
    var viewportWidth = global.document.documentElement.clientWidth;
    var selector = "body *";
    var nodes = Array.prototype.slice.call(
      global.document.querySelectorAll(selector)
    );
    var offenders = nodes
      .filter(function (element) {
        return !element.closest(".p8-scroll-x, [data-p8-allow-overflow]");
      })
      .map(function (element) {
        var rect = element.getBoundingClientRect();
        var reasons = elementOverflowReasons(element, rect, viewportWidth);
        return {
          element: element,
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          width: Math.round(rect.width),
          scrollWidth: element.scrollWidth,
          clientWidth: element.clientWidth,
          reasons: reasons
        };
      })
      .filter(function (item) {
        return item.reasons.length > 0;
      });

    if (options.log !== false && offenders.length && global.console) {
      global.console.groupCollapsed(
        "[p8riot Core] " +
          offenders.length +
          " possible horizontal overflow source(s)"
      );
      offenders.slice(0, options.limit || 30).forEach(function (item) {
        global.console.warn(item.element, item);
      });
      global.console.groupEnd();
    }

    return offenders;
  }

  var diagnosticsApi = freeze({
    overflowReport: overflowReport,
    configIssues: function () {
      return configIssues.slice();
    },
    legacyOverflowCompatibility: legacyOverflowCompatibility,
    environmentReport: function () {
      return {
        coreVersion: VERSION,
        build: BUILD,
        releaseChannel: RELEASE_CHANNEL,
        environment: environment,
        capabilities: capabilities,
        standalone: isStandaloneNow(),
        configPresent: !!rawConfig,
        configIssues: configIssues.slice(),
        legacyOverflowCompatibility: legacyOverflowCompatibility
      };
    }
  });

  function moduleMetadata(record) {
    if (!record) {
      return null;
    }
    return {
      id: record.id,
      name: record.name,
      version: record.version,
      compatibleCore: record.compatibleCore,
      requiredModules: record.requiredModules.slice(),
      optionalModules: record.optionalModules.slice(),
      requiredCss: record.requiredCss.slice(),
      enabled: record.enabled
    };
  }

  function registeredDependents(moduleId) {
    return Object.keys(registry)
      .filter(function (candidateId) {
        if (candidateId === moduleId) {
          return false;
        }
        return registry[candidateId].requiredModules.some(function (declaration) {
          var normalized = normalizeRequiredModule(declaration);
          return normalized && normalized.id === moduleId;
        });
      })
      .sort();
  }

  var modulesApi = freeze({
    versionSatisfies: versionSatisfies,

    register: function (definition) {
      definition = definition || {};
      var id = String(definition.id || "").trim();
      var requiredModules = Array.isArray(definition.requiredModules)
        ? definition.requiredModules.slice()
        : [];
      var normalizedRequiredModules = requiredModules
        .map(normalizeRequiredModule)
        .filter(Boolean);
      var optionalModules = Array.isArray(definition.optionalModules)
        ? definition.optionalModules.slice()
        : [];
      var requiredCss = Array.isArray(definition.requiredCss)
        ? definition.requiredCss.slice()
        : [];
      var compatibleCore = definition.compatibleCore;

      if (!id) {
        return freeze({ ok: false, error: "module-id-required" });
      }
      if (registry[id]) {
        return freeze({ ok: false, error: "module-already-registered", id: id });
      }
      if (!compatibleWithCore(compatibleCore)) {
        return freeze({
          ok: false,
          error: "incompatible-core",
          id: id,
          coreVersion: VERSION,
          compatibleCore: compatibleCore
        });
      }

      var invalidRequiredModules = requiredModules.filter(function (value) {
        return !normalizeRequiredModule(value);
      });
      if (invalidRequiredModules.length) {
        return freeze({
          ok: false,
          error: "invalid-required-module-declaration",
          id: id,
          invalid: invalidRequiredModules.slice()
        });
      }

      var missing = normalizedRequiredModules
        .filter(function (required) {
          return !registry[required.id];
        })
        .map(function (required) {
          return required.id;
        });
      if (missing.length) {
        return freeze({
          ok: false,
          error: "missing-required-modules",
          id: id,
          missing: missing
        });
      }

      var incompatibleRequiredModules = normalizedRequiredModules
        .filter(function (required) {
          if (!required.compatibleVersion) {
            return false;
          }
          return !versionSatisfies(
            registry[required.id].version,
            required.compatibleVersion
          );
        })
        .map(function (required) {
          return {
            id: required.id,
            loadedVersion: registry[required.id].version,
            compatibleVersion: required.compatibleVersion
          };
        });
      if (incompatibleRequiredModules.length) {
        return freeze({
          ok: false,
          error: "incompatible-required-module-version",
          id: id,
          incompatible: incompatibleRequiredModules
        });
      }

      var enabled = configApi.moduleEnabled(id);
      if (enabled === null) {
        enabled = true;
      }

      registry[id] = {
        id: id,
        name: String(definition.name || id),
        version: String(definition.version || "0.0.0"),
        compatibleCore: compatibleCore,
        requiredModules: normalizedRequiredModules.map(function (required) {
          return required.declaration;
        }),
        optionalModules: optionalModules,
        requiredCss: requiredCss,
        api: definition.api || {},
        destroy:
          typeof definition.destroy === "function" ? definition.destroy : null,
        enabled: enabled
      };

      var registered = moduleMetadata(registry[id]);
      emit("p8riot:module-registered", registered);
      return freeze({ ok: true, module: registered });
    },

    get: function (id) {
      return registry[id] ? registry[id].api : null;
    },

    info: function (id) {
      return moduleMetadata(registry[id]);
    },

    has: function (id) {
      return !!registry[id];
    },

    isEnabled: function (id) {
      return registry[id] ? registry[id].enabled : configApi.moduleEnabled(id);
    },

    list: function () {
      return Object.keys(registry)
        .sort()
        .map(function (id) {
          return moduleMetadata(registry[id]);
        });
    },

    destroy: function (id) {
      var record = registry[id];
      if (!record) {
        return freeze({ ok: false, error: "module-not-registered", id: id });
      }

      var dependents = registeredDependents(id);
      if (dependents.length) {
        return freeze({
          ok: false,
          error: "module-required-by-registered-modules",
          id: id,
          dependents: dependents
        });
      }

      try {
        if (record.destroy) {
          record.destroy();
        }
        delete registry[id];
        emit("p8riot:module-destroyed", { id: id });
        return freeze({ ok: true, id: id });
      } catch (error) {
        return freeze({
          ok: false,
          error: "module-destroy-failed",
          id: id,
          message: String(error && error.message ? error.message : error)
        });
      }
    }
  });

  updateViewportVariables();
  global.addEventListener("resize", updateViewportVariables, { passive: true });
  global.addEventListener("orientationchange", updateViewportVariables, {
    passive: true
  });
  if (global.visualViewport) {
    global.visualViewport.addEventListener("resize", updateViewportVariables, {
      passive: true
    });
    global.visualViewport.addEventListener("scroll", updateViewportVariables, {
      passive: true
    });
  }
  if (standaloneQuery && typeof standaloneQuery.addEventListener === "function") {
    standaloneQuery.addEventListener("change", function () {
      root.classList.toggle("p8-standalone", isStandaloneNow());
      emit("p8riot:standalone-change", { standalone: isStandaloneNow() });
    });
  }

  var debugEnabled = false;
  try {
    debugEnabled = new URLSearchParams(global.location.search).has("p8riot-debug");
  } catch (error) {
    debugEnabled = false;
  }

  if (debugEnabled) {
    global.addEventListener("load", function () {
      global.setTimeout(function () {
        if (legacyOverflowCompatibility && global.console) {
          global.console.warn(
            "[p8riot Core] Legacy horizontal-overflow clipping compatibility is active and deprecated."
          );
        }
        overflowReport();
      }, 250);
    });
    global.addEventListener(
      "resize",
      function () {
        global.setTimeout(overflowReport, 100);
      },
      { passive: true }
    );
    global.p8riotOverflowReport = overflowReport;
  }

  var coreApi = {
    version: VERSION,
    build: BUILD,
    releaseChannel: RELEASE_CHANNEL,
    capabilities: capabilities,
    environment: environment,
    viewport: viewportApi,
    diagnostics: diagnosticsApi,
    modules: modulesApi,
    config: configApi,
    debug: freeze({ enabled: debugEnabled }),

    /* p8riot Core 0.1 compatibility aliases. */
    isIOS: isIOS,
    isSafari: isSafari,
    isStandalone: isStandaloneNow(),
    overflowReport: overflowReport,
    updateViewportVariables: updateViewportVariables
  };

  global.p8riotCore = freeze(coreApi);
  emit("p8riot:core-ready", {
    version: VERSION,
    build: BUILD,
    releaseChannel: RELEASE_CHANNEL
  });
})(window);
