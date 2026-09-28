/* p8riot Storage 0.2.0
   Product-data-neutral namespaced Web Storage mechanics. */
(function (global) {
  "use strict";

  var core = global.p8riotCore;
  if (!core || !core.modules) {
    if (global.console) {
      global.console.error("[p8riot Storage] p8riot Core must load first.");
    }
    return;
  }

  var MODULE_ID = "storage";
  var MODULE_VERSION = "0.2.0";
  var COMPATIBLE_CORE = "0.2.x";
  var ENVELOPE_VERSION = 1;

  function emit(name, detail) {
    try {
      global.dispatchEvent(new CustomEvent(name, { detail: detail }));
    } catch (error) {
      /* Diagnostic events must never break persistence. */
    }
  }

  function result(ok, extras) {
    var value = { ok: ok === true };
    Object.keys(extras || {}).forEach(function (key) {
      value[key] = extras[key];
    });
    return value;
  }

  function errorResult(code, message, extras) {
    var value = {
      ok: false,
      error: {
        code: code,
        message: message
      }
    };
    Object.keys(extras || {}).forEach(function (key) {
      value[key] = extras[key];
    });
    return value;
  }

  function sanitizeNamespace(namespace) {
    var text = namespace == null ? "" : String(namespace).trim();
    return text;
  }

  function safeStorage(area) {
    var property = area === "session" ? "sessionStorage" : "localStorage";
    try {
      var storage = global[property];
      if (!storage) {
        return {
          available: false,
          storage: null,
          reason: property + "-unavailable"
        };
      }
      var probe = "__p8riot_storage_probe__";
      storage.setItem(probe, "1");
      storage.removeItem(probe);
      return { available: true, storage: storage, reason: null };
    } catch (error) {
      return {
        available: false,
        storage: null,
        reason: property + "-blocked",
        cause: error
      };
    }
  }

  function namespacedKey(namespace, key) {
    return "p8riot:" + encodeURIComponent(namespace) + ":" + encodeURIComponent(String(key));
  }

  function create(options) {
    options = options || {};
    var area = options.area === "session" ? "session" : "local";
    var configuredNamespace = core.config
      ? core.config.get("storage.namespace", "")
      : "";
    var namespace = sanitizeNamespace(options.namespace || configuredNamespace);
    var schemaVersion =
      options.schemaVersion == null ? 1 : options.schemaVersion;
    var migrate =
      typeof options.migrate === "function" ? options.migrate : null;
    var availability = safeStorage(area);

    if (!namespace) {
      availability = {
        available: false,
        storage: null,
        reason: "namespace-required"
      };
    }

    function fail(code, message, key, cause) {
      var detail = {
        module: MODULE_ID,
        area: area,
        namespace: namespace,
        key: key == null ? null : String(key),
        code: code,
        message: message
      };
      if (cause) {
        detail.cause = String(cause && cause.message ? cause.message : cause);
      }
      emit("p8riot:storage-error", detail);
      return errorResult(code, message, {
        key: key == null ? null : String(key),
        value: undefined
      });
    }

    function assertKey(key) {
      if (key == null || String(key).length === 0) {
        return fail("key-required", "Storage key is required.", key);
      }
      return null;
    }

    function fullKey(key) {
      return namespacedKey(namespace, key);
    }

    function status() {
      return {
        available: availability.available === true,
        area: area,
        namespace: namespace,
        schemaVersion: schemaVersion,
        reason: availability.reason || null
      };
    }

    function get(key, fallback) {
      var invalid = assertKey(key);
      if (invalid) {
        invalid.value = fallback;
        return invalid;
      }
      if (!availability.available) {
        return fail(
          availability.reason || "storage-unavailable",
          "Requested storage is unavailable.",
          key
        );
      }

      var raw;
      try {
        raw = availability.storage.getItem(fullKey(key));
      } catch (error) {
        return fail("read-failed", "Storage read failed.", key, error);
      }

      if (raw == null) {
        return result(true, {
          found: false,
          key: String(key),
          value: fallback,
          migrated: false
        });
      }

      var parsed;
      try {
        parsed = JSON.parse(raw);
      } catch (error) {
        var corrupt = fail(
          "invalid-json",
          "Stored value is not valid JSON.",
          key,
          error
        );
        corrupt.found = true;
        corrupt.value = fallback;
        return corrupt;
      }

      var storedSchema = null;
      var storedValue = parsed;
      if (
        parsed &&
        typeof parsed === "object" &&
        parsed.__p8riotStorage === ENVELOPE_VERSION &&
        Object.prototype.hasOwnProperty.call(parsed, "value")
      ) {
        storedSchema = parsed.schemaVersion;
        storedValue = parsed.value;
      }

      if (storedSchema !== schemaVersion) {
        if (!migrate) {
          return errorResult(
            "schema-mismatch",
            "Stored schema version does not match and no migration hook was supplied.",
            {
              found: true,
              key: String(key),
              value: fallback,
              fromVersion: storedSchema,
              toVersion: schemaVersion
            }
          );
        }

        var migratedValue;
        try {
          migratedValue = migrate(
            storedValue,
            storedSchema,
            schemaVersion,
            String(key)
          );
        } catch (error) {
          return fail(
            "migration-failed",
            "Storage migration hook failed.",
            key,
            error
          );
        }

        var saveMigrated = set(key, migratedValue);
        if (!saveMigrated.ok) {
          return saveMigrated;
        }
        emit("p8riot:storage-migrated", {
          module: MODULE_ID,
          area: area,
          namespace: namespace,
          key: String(key),
          fromVersion: storedSchema,
          toVersion: schemaVersion
        });
        return result(true, {
          found: true,
          key: String(key),
          value: migratedValue,
          migrated: true,
          fromVersion: storedSchema,
          toVersion: schemaVersion
        });
      }

      return result(true, {
        found: true,
        key: String(key),
        value: storedValue,
        migrated: false
      });
    }

    function set(key, value) {
      var invalid = assertKey(key);
      if (invalid) {
        return invalid;
      }
      if (!availability.available) {
        return fail(
          availability.reason || "storage-unavailable",
          "Requested storage is unavailable.",
          key
        );
      }

      var serialized;
      try {
        /*
          Validate the top-level value independently before wrapping it.
          JSON.stringify({value: undefined}) silently drops "value", which would
          create an invalid p8riot envelope while incorrectly reporting success.
          A successful write must always contain a recoverable JSON value.
        */
        var serializedValue = JSON.stringify(value);
        if (serializedValue === undefined) {
          return fail(
            "serialize-failed",
            "Value must be JSON-compatible and serializable.",
            key
          );
        }

        var normalizedValue = JSON.parse(serializedValue);
        serialized = JSON.stringify({
          __p8riotStorage: ENVELOPE_VERSION,
          schemaVersion: schemaVersion,
          value: normalizedValue
        });

        var envelopeCheck = JSON.parse(serialized);
        if (
          !envelopeCheck ||
          envelopeCheck.__p8riotStorage !== ENVELOPE_VERSION ||
          !Object.prototype.hasOwnProperty.call(envelopeCheck, "value")
        ) {
          return fail(
            "serialize-failed",
            "Value did not produce a recoverable p8riot Storage envelope.",
            key
          );
        }
      } catch (error) {
        return fail(
          "serialize-failed",
          "Value must be JSON-compatible and serializable.",
          key,
          error
        );
      }

      try {
        availability.storage.setItem(fullKey(key), serialized);
        return result(true, { key: String(key) });
      } catch (error) {
        return fail("write-failed", "Storage write failed.", key, error);
      }
    }

    function remove(key) {
      var invalid = assertKey(key);
      if (invalid) {
        return invalid;
      }
      if (!availability.available) {
        return fail(
          availability.reason || "storage-unavailable",
          "Requested storage is unavailable.",
          key
        );
      }
      try {
        availability.storage.removeItem(fullKey(key));
        return result(true, { key: String(key) });
      } catch (error) {
        return fail("remove-failed", "Storage removal failed.", key, error);
      }
    }

    function clearNamespace() {
      if (!availability.available) {
        return fail(
          availability.reason || "storage-unavailable",
          "Requested storage is unavailable.",
          null
        );
      }
      var prefix = "p8riot:" + encodeURIComponent(namespace) + ":";
      var keys = [];
      try {
        for (var i = 0; i < availability.storage.length; i += 1) {
          var key = availability.storage.key(i);
          if (key && key.indexOf(prefix) === 0) {
            keys.push(key);
          }
        }
        keys.forEach(function (key) {
          availability.storage.removeItem(key);
        });
        return result(true, { removed: keys.length });
      } catch (error) {
        return fail(
          "clear-failed",
          "Namespace clear failed.",
          null,
          error
        );
      }
    }

    return Object.freeze({
      available: availability.available === true,
      area: area,
      namespace: namespace,
      schemaVersion: schemaVersion,
      status: status,
      get: get,
      set: set,
      remove: remove,
      clearNamespace: clearNamespace,
      storageKey: function (key) {
        return fullKey(key);
      }
    });
  }

  var api = Object.freeze({
    version: MODULE_VERSION,
    create: create
  });

  var registration = core.modules.register({
    id: MODULE_ID,
    name: "p8riot Storage",
    version: MODULE_VERSION,
    compatibleCore: COMPATIBLE_CORE,
    requiredModules: [],
    optionalModules: [],
    requiredCss: [],
    api: api
  });

  if (!registration.ok && global.console) {
    global.console.error("[p8riot Storage] Module registration failed.", registration);
  }
})(window);
