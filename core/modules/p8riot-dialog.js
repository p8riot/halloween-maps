/* p8riot Dialog 0.2.0
   Capability-first accessible dialog controller with native and fallback paths. */
(function (global) {
  "use strict";

  var core = global.p8riotCore;
  if (!core || !core.modules) {
    if (global.console) {
      global.console.error("[p8riot Dialog] p8riot Core must load first.");
    }
    return;
  }

  var MODULE_ID = "dialog";
  var MODULE_VERSION = "0.2.0";
  var COMPATIBLE_CORE = "0.2.x";
  var controllers = [];
  var activeController = null;

  var FOCUSABLE_SELECTOR = [
    "a[href]",
    "area[href]",
    "button:not([disabled])",
    "input:not([disabled]):not([type='hidden'])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "iframe",
    "[contenteditable='true']",
    "[tabindex]:not([tabindex='-1'])"
  ].join(",");

  function emit(element, name, detail) {
    try {
      element.dispatchEvent(
        new CustomEvent(name, {
          bubbles: true,
          detail: detail
        })
      );
    } catch (error) {
      /* Events are observational; dialog mechanics must continue. */
    }
  }

  function supportsNativeContract(element) {
    try {
      return !!(
        core.capabilities.nativeDialog &&
        element &&
        String(element.tagName).toLowerCase() === "dialog" &&
        typeof element.showModal === "function" &&
        typeof element.close === "function"
      );
    } catch (error) {
      return false;
    }
  }

  function visibleFocusable(element) {
    return Array.prototype.slice
      .call(element.querySelectorAll(FOCUSABLE_SELECTOR))
      .filter(function (node) {
        if (node.hidden || node.getAttribute("aria-hidden") === "true") {
          return false;
        }
        var style = global.getComputedStyle
          ? global.getComputedStyle(node)
          : null;
        return !style || (style.visibility !== "hidden" && style.display !== "none");
      });
  }

  function resolveInitialFocus(element, option) {
    var candidate = null;
    if (typeof option === "string") {
      candidate = element.querySelector(option);
    } else if (typeof option === "function") {
      try {
        candidate = option(element);
      } catch (error) {
        candidate = null;
      }
    } else if (option && option.nodeType === 1) {
      candidate = option;
    }
    if (candidate && element.contains(candidate)) {
      return candidate;
    }
    candidate = element.querySelector("[autofocus]");
    if (candidate) {
      return candidate;
    }
    var focusables = visibleFocusable(element);
    if (focusables.length) {
      return focusables[0];
    }
    return element;
  }

  function create(element, options) {
    if (!element || element.nodeType !== 1) {
      throw new TypeError("p8riot Dialog requires a dialog element.");
    }

    var existing = controllers.filter(function (controller) {
      return controller.element === element && !controller.destroyed();
    })[0];
    if (existing) {
      return existing;
    }

    options = options || {};
    var closeOnEscape = options.closeOnEscape !== false;
    var closeOnBackdrop = options.closeOnBackdrop !== false;
    var restoreFocus = options.restoreFocus !== false;
    var nativeMode = supportsNativeContract(element);
    var isOpen = false;
    var isDestroyed = false;
    var trigger = null;
    var openingEvent = null;
    var lastOpenResult = Object.freeze({ ok: false, error: "not-opened-yet" });
    var temporaryTabindex = false;
    var fallbackBackground = [];
    var listeners = [];
    var initialState = {
      role: element.getAttribute("role"),
      ariaModal: element.getAttribute("aria-modal"),
      hidden: element.hasAttribute("hidden"),
      tabindex: element.getAttribute("tabindex")
    };

    element.classList.add("p8-dialog");
    element.dataset.p8DialogManaged = "true";
    element.dataset.p8DialogMode = nativeMode ? "native" : "fallback";

    if (!nativeMode) {
      element.dataset.p8DialogFallback = "true";
      element.setAttribute("role", "dialog");
      element.setAttribute("aria-modal", "true");
      if (!element.hasAttribute("hidden")) {
        element.hidden = true;
      }
    }

    function on(target, type, handler, opts) {
      target.addEventListener(type, handler, opts);
      listeners.push(function () {
        target.removeEventListener(type, handler, opts);
      });
    }

    function fallbackIsolationTargets() {
      var targets = [];
      var branch = element;
      var parent = branch.parentElement;

      /*
        Isolate siblings at every ancestor level up to body. This keeps the
        branch containing the dialog interactive while suppressing both nearby
        product controls and content outside the product container.
      */
      while (parent) {
        Array.prototype.forEach.call(parent.children, function (node) {
          if (node !== branch && targets.indexOf(node) === -1) {
            targets.push(node);
          }
        });
        if (parent === global.document.body) {
          break;
        }
        branch = parent;
        parent = parent.parentElement;
      }
      return targets;
    }

    function setFallbackBackgroundInactive(active) {
      if (nativeMode) {
        return;
      }

      if (active) {
        if (fallbackBackground.length) {
          return;
        }
        fallbackBackground = fallbackIsolationTargets().map(function (node) {
          var supportsInert = "inert" in node;
          var record = {
            node: node,
            supportsInert: supportsInert,
            inertValue: supportsInert ? node.inert : undefined,
            hadInertAttribute: node.hasAttribute("inert"),
            inertAttributeValue: node.getAttribute("inert"),
            ariaHidden: node.getAttribute("aria-hidden")
          };

          if (supportsInert) {
            node.inert = true;
          }
          node.setAttribute("aria-hidden", "true");
          return record;
        });
      } else {
        fallbackBackground.forEach(function (record) {
          if (record.supportsInert && "inert" in record.node) {
            record.node.inert = record.inertValue;
            if (record.hadInertAttribute) {
              record.node.setAttribute(
                "inert",
                record.inertAttributeValue == null ? "" : record.inertAttributeValue
              );
            } else if (!record.inertValue) {
              record.node.removeAttribute("inert");
            }
          } else if (!record.hadInertAttribute) {
            record.node.removeAttribute("inert");
          } else {
            record.node.setAttribute(
              "inert",
              record.inertAttributeValue == null ? "" : record.inertAttributeValue
            );
          }

          if (record.ariaHidden == null) {
            record.node.removeAttribute("aria-hidden");
          } else {
            record.node.setAttribute("aria-hidden", record.ariaHidden);
          }
        });
        fallbackBackground = [];
      }
    }

    function focusInside() {
      var target = resolveInitialFocus(element, options.initialFocus);
      if (target === element && !element.hasAttribute("tabindex")) {
        element.setAttribute("tabindex", "-1");
        temporaryTabindex = true;
      }
      try {
        target.focus({ preventScroll: true });
      } catch (error) {
        try {
          target.focus();
        } catch (ignored) {
          /* Focus failure is non-fatal; the dialog remains open. */
        }
      }
    }

    function restoreTriggerFocus() {
      if (
        restoreFocus &&
        trigger &&
        trigger.nodeType === 1 &&
        trigger.isConnected &&
        typeof trigger.focus === "function"
      ) {
        try {
          trigger.focus({ preventScroll: true });
        } catch (error) {
          trigger.focus();
        }
      }
      trigger = null;
      openingEvent = null;
    }

    function afterClosed(reason, returnValue) {
      if (!isOpen) {
        return;
      }
      isOpen = false;
      if (activeController === controller) {
        activeController = null;
      }
      element.removeAttribute("data-p8-dialog-open");
      if (!nativeMode) {
        element.hidden = true;
        setFallbackBackgroundInactive(false);
      }
      if (temporaryTabindex) {
        element.removeAttribute("tabindex");
        temporaryTabindex = false;
      }
      restoreTriggerFocus();
      emit(element, "p8riot:dialog-close", {
        reason: reason || "api",
        returnValue: returnValue == null ? "" : String(returnValue)
      });
    }

    function close(returnValue, reason) {
      if (isDestroyed || !isOpen) {
        return false;
      }
      var normalized = returnValue == null ? "" : String(returnValue);
      if (nativeMode) {
        element.dataset.p8DialogCloseReason = reason || "api";
        try {
          element.close(normalized);
        } catch (error) {
          delete element.dataset.p8DialogCloseReason;
          afterClosed(reason || "api", normalized);
          return true;
        }
        /* Keep Core controller state synchronous with the public close() call.
           A later native `close` event becomes observational cleanup only. */
        afterClosed(reason || "api", normalized);
        delete element.dataset.p8DialogCloseReason;
      } else {
        afterClosed(reason || "api", normalized);
      }
      return true;
    }

    function open(opener, event) {
      if (isDestroyed) {
        lastOpenResult = Object.freeze({
          ok: false,
          error: "dialog-destroyed"
        });
        return false;
      }
      if (isOpen) {
        lastOpenResult = Object.freeze({
          ok: false,
          error: "dialog-already-open"
        });
        return false;
      }

      if (
        activeController &&
        (activeController.destroyed() || !activeController.isOpen())
      ) {
        activeController = null;
      }

      if (activeController && activeController !== controller) {
        lastOpenResult = Object.freeze({
          ok: false,
          error: "core-modal-already-active",
          activeDialogId: activeController.element.id || null
        });
        emit(element, "p8riot:dialog-open-rejected", lastOpenResult);
        return false;
      }

      trigger =
        opener && opener.nodeType === 1
          ? opener
          : global.document.activeElement && global.document.activeElement !== element
            ? global.document.activeElement
            : null;
      openingEvent = event || null;

      if (nativeMode) {
        try {
          element.showModal();
        } catch (error) {
          /* If the native path proves unusable at runtime, degrade the
             controller to the Core-managed fallback without changing API. */
          nativeMode = false;
          element.dataset.p8DialogMode = "fallback";
          element.dataset.p8DialogFallback = "true";
          element.setAttribute("role", "dialog");
          element.setAttribute("aria-modal", "true");
          element.removeAttribute("open");
          element.hidden = false;
          setFallbackBackgroundInactive(true);
        }
      } else {
        element.hidden = false;
        setFallbackBackgroundInactive(true);
      }

      isOpen = true;
      activeController = controller;
      element.dataset.p8DialogOpen = "true";
      lastOpenResult = Object.freeze({
        ok: true,
        mode: nativeMode ? "native" : "fallback"
      });
      global.setTimeout(focusInside, 0);
      emit(element, "p8riot:dialog-open", {});
      return true;
    }

    function trapFallbackTab(event) {
      if (nativeMode || !isOpen || event.key !== "Tab") {
        return;
      }
      var focusables = visibleFocusable(element);
      if (!focusables.length) {
        event.preventDefault();
        focusInside();
        return;
      }

      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (event.shiftKey && global.document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && global.document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    function onKeydown(event) {
      if (!isOpen) {
        return;
      }
      if (event.key === "Escape" && !nativeMode) {
        event.preventDefault();
        if (closeOnEscape) {
          close("", "escape");
        }
        return;
      }
      trapFallbackTab(event);
    }

    function onFocusIn(event) {
      if (!nativeMode && isOpen && !element.contains(event.target)) {
        focusInside();
      }
    }

    function suppressFallbackBackgroundActivation(event) {
      if (
        nativeMode ||
        !isOpen ||
        !event.target ||
        element.contains(event.target) ||
        event.target === element
      ) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
    }

    function onCancel(event) {
      if (!isOpen) {
        return;
      }
      event.preventDefault();
      if (closeOnEscape) {
        close("", "escape");
      }
    }

    function onNativeClose() {
      var reason = element.dataset.p8DialogCloseReason || "native";
      delete element.dataset.p8DialogCloseReason;
      if (!isOpen) {
        return;
      }
      afterClosed(reason, element.returnValue || "");
    }

    function isBackdropActivation(event) {
      if (event.target !== element) {
        return false;
      }
      if (openingEvent && event === openingEvent) {
        return false;
      }
      if (!nativeMode) {
        return true;
      }
      var rect = element.getBoundingClientRect();
      return (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      );
    }

    function onClick(event) {
      if (!isOpen) {
        return;
      }
      if (openingEvent && event === openingEvent) {
        return;
      }

      var target =
        event.target && event.target.closest
          ? event.target.closest("[data-p8-dialog-close]")
          : null;
      if (target && element.contains(target)) {
        close(target.getAttribute("data-p8-dialog-value") || "", "control");
        return;
      }

      if (closeOnBackdrop && isBackdropActivation(event)) {
        close("", "backdrop");
      }
    }

    on(element, "click", onClick);
    on(element, "cancel", onCancel);
    on(element, "close", onNativeClose);
    on(global.document, "keydown", onKeydown, true);
    on(global.document, "focusin", onFocusIn, true);
    on(global.document, "pointerdown", suppressFallbackBackgroundActivation, true);
    on(global.document, "mousedown", suppressFallbackBackgroundActivation, true);
    on(global.document, "touchstart", suppressFallbackBackgroundActivation, true);
    on(global.document, "click", suppressFallbackBackgroundActivation, true);

    var controller = Object.freeze({
      element: element,
      open: open,
      close: close,
      isOpen: function () {
        return isOpen;
      },
      lastOpenResult: function () {
        return lastOpenResult;
      },
      destroyed: function () {
        return isDestroyed;
      },
      destroy: function () {
        if (isDestroyed) {
          return false;
        }
        if (isOpen) {
          if (nativeMode && element.open) {
            try {
              element.close("");
            } catch (error) {
              /* fall through to explicit state cleanup */
            }
          }
          afterClosed("destroy", "");
        }
        listeners.splice(0).forEach(function (remove) {
          remove();
        });
        setFallbackBackgroundInactive(false);
        element.classList.remove("p8-dialog");
        element.removeAttribute("data-p8-dialog-managed");
        element.removeAttribute("data-p8-dialog-open");
        element.removeAttribute("data-p8-dialog-mode");
        element.removeAttribute("data-p8-dialog-fallback");

        if (initialState.role == null) {
          element.removeAttribute("role");
        } else {
          element.setAttribute("role", initialState.role);
        }
        if (initialState.ariaModal == null) {
          element.removeAttribute("aria-modal");
        } else {
          element.setAttribute("aria-modal", initialState.ariaModal);
        }
        element.hidden = initialState.hidden;
        if (initialState.tabindex == null) {
          element.removeAttribute("tabindex");
        } else {
          element.setAttribute("tabindex", initialState.tabindex);
        }

        if (activeController === controller) {
          activeController = null;
        }
        isDestroyed = true;
        controllers = controllers.filter(function (item) {
          return item !== controller;
        });
        emit(element, "p8riot:dialog-destroy", {});
        return true;
      }
    });

    controllers.push(controller);
    return controller;
  }

  var api = Object.freeze({
    version: MODULE_VERSION,
    create: create,
    destroyAll: function () {
      controllers.slice().forEach(function (controller) {
        controller.destroy();
      });
    }
  });

  var registration = core.modules.register({
    id: MODULE_ID,
    name: "p8riot Dialog",
    version: MODULE_VERSION,
    compatibleCore: COMPATIBLE_CORE,
    requiredModules: [],
    optionalModules: [],
    requiredCss: ["./core/modules/p8riot-dialog.css"],
    api: api,
    destroy: api.destroyAll
  });

  if (!registration.ok && global.console) {
    global.console.error("[p8riot Dialog] Module registration failed.", registration);
  }
})(window);
