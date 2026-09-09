(function () {
  "use strict";

  var data = window.HalloweenEscapeData;
  if (!data || !Array.isArray(data.maps) || !data.maps.length) {
    throw new Error("HalloweenEscapeData is missing or invalid.");
  }

  var core = window.p8riotCore || null;
  var viewport = document.getElementById("mapViewport");
  var mapImage = document.getElementById("mapImage");
  var markerLayer = document.getElementById("markerLayer");
  var mapTitle = document.getElementById("currentMapTitle");
  var mapTabs = document.getElementById("mapTabs");
  var mapSelect = document.getElementById("mapSelect");
  var legendList = document.getElementById("legendList");
  var selectedLocation = document.getElementById("selectedLocation");
  var themeSelect = document.getElementById("themeSelect");
  var installButton = document.getElementById("installButton");
  var installDialog = document.getElementById("installDialog");
  var appStatus = document.getElementById("appStatus");

  var state = {
    mapIndex: 0,
    scale: 1,
    tx: 0,
    ty: 0,
    fitScale: 1,
    minScale: 0.1,
    maxScale: 8,
    interacted: false,
    selectedId: null,
    markerNodes: [],
    activePointers: new Map(),
    drag: null,
    pinch: null
  };

  var storageStore = null;
  var dialogController = null;
  var pwaApi = null;
  var installedThisSession = false;
  var installKnown = false;

  function announce(message) {
    appStatus.textContent = "";
    window.setTimeout(function () {
      appStatus.textContent = message;
    }, 20);
  }

  function escapeType(type) {
    return data.escapeTypes[type];
  }

  function currentMap() {
    return data.maps[state.mapIndex];
  }

  function makeIcon(type, className) {
    var icon = document.createElement("img");
    icon.src = escapeType(type).icon;
    icon.alt = "";
    icon.className = className || "";
    return icon;
  }

  function renderSelectors() {
    data.maps.forEach(function (map, index) {
      var option = document.createElement("option");
      option.value = map.id;
      option.textContent = map.name;
      mapSelect.appendChild(option);

      var tab = document.createElement("button");
      tab.type = "button";
      tab.className = "map-tab";
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-controls", "mapPanel");
      tab.dataset.mapIndex = String(index);
      tab.textContent = map.name;
      tab.addEventListener("click", function () {
        selectMap(index);
      });
      mapTabs.appendChild(tab);
    });

    mapSelect.addEventListener("change", function () {
      var index = data.maps.findIndex(function (map) {
        return map.id === mapSelect.value;
      });
      if (index >= 0) {
        selectMap(index);
      }
    });
  }

  function syncSelectorState() {
    var map = currentMap();
    mapSelect.value = map.id;

    Array.prototype.forEach.call(mapTabs.querySelectorAll(".map-tab"), function (tab) {
      var active = Number(tab.dataset.mapIndex) === state.mapIndex;
      tab.setAttribute("aria-selected", active ? "true" : "false");
      tab.tabIndex = active ? 0 : -1;
    });
  }

  function renderLegend() {
    var map = currentMap();
    legendList.textContent = "";

    ["cellar", "gate", "car"].forEach(function (type) {
      var info = escapeType(type);
      var count = map.locations.filter(function (location) {
        return location.type === type;
      }).length;

      var card = document.createElement("article");
      card.className = "legend-card";
      card.style.setProperty("--legend-color", info.color);

      var iconWrap = document.createElement("div");
      iconWrap.className = "legend-icon";
      iconWrap.appendChild(makeIcon(type));

      var copy = document.createElement("div");
      copy.className = "legend-copy";

      var heading = document.createElement("h3");
      heading.textContent = info.label;

      var needed = document.createElement("p");
      needed.textContent = "Items needed";

      var list = document.createElement("ul");
      list.className = "item-list";
      info.items.forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
      });

      copy.appendChild(heading);
      copy.appendChild(needed);
      copy.appendChild(list);

      var countBadge = document.createElement("div");
      countBadge.className = "legend-count";
      countBadge.textContent = String(count);
      countBadge.setAttribute("aria-label", count + " possible locations");

      card.appendChild(iconWrap);
      card.appendChild(copy);
      card.appendChild(countBadge);
      legendList.appendChild(card);
    });
  }

  function markerLabel(map, location) {
    var info = escapeType(location.type);
    return (
      info.label +
      " possible location " +
      location.number +
      " on " +
      map.name +
      ". Items needed: " +
      info.items.join("; ")
    );
  }

  function renderMarkers() {
    var map = currentMap();
    markerLayer.textContent = "";
    state.markerNodes = [];

    map.locations.forEach(function (location) {
      var info = escapeType(location.type);
      var marker = document.createElement("button");
      marker.type = "button";
      marker.className = "map-marker";
      marker.dataset.locationId = location.id;
      marker.dataset.type = location.type;
      marker.style.setProperty("--marker-color", info.color);
      marker.setAttribute("aria-label", markerLabel(map, location));

      marker.appendChild(makeIcon(location.type));

      var tooltip = document.createElement("span");
      tooltip.className = "marker-tooltip";

      var tooltipTitle = document.createElement("strong");
      tooltipTitle.textContent = info.label + " · Location " + location.number;

      var tooltipItems = document.createElement("span");
      tooltipItems.textContent = "Items: " + info.items.join(" · ");

      tooltip.appendChild(tooltipTitle);
      tooltip.appendChild(tooltipItems);
      marker.appendChild(tooltip);

      marker.addEventListener("click", function (event) {
        event.stopPropagation();
        selectLocation(location.id);
      });

      markerLayer.appendChild(marker);
      state.markerNodes.push({
        element: marker,
        location: location
      });
    });

    updateMarkerPositions();
  }

  function renderSelectedLocation() {
    var map = currentMap();
    var location = map.locations.find(function (candidate) {
      return candidate.id === state.selectedId;
    });

    state.markerNodes.forEach(function (entry) {
      entry.element.classList.toggle(
        "is-selected",
        !!location && entry.location.id === location.id
      );
    });

    selectedLocation.textContent = "";
    var heading = document.createElement("h3");
    heading.textContent = "Selected location";
    selectedLocation.appendChild(heading);

    if (!location) {
      var empty = document.createElement("p");
      empty.textContent = "Select any escape icon on the map to see its location details here.";
      selectedLocation.appendChild(empty);
      return;
    }

    var info = escapeType(location.type);
    selectedLocation.style.setProperty("--selected-color", info.color);

    var summary = document.createElement("p");
    var typeText = document.createElement("span");
    typeText.className = "selected-type";
    typeText.textContent = info.label;
    summary.appendChild(typeText);
    summary.appendChild(
      document.createTextNode(
        " · possible location " +
          location.number +
          " of " +
          map.locations.filter(function (item) {
            return item.type === location.type;
          }).length +
          " on " +
          map.name
      )
    );
    selectedLocation.appendChild(summary);

    var needed = document.createElement("p");
    needed.style.marginTop = "7px";
    needed.textContent = "Items needed:";
    selectedLocation.appendChild(needed);

    var list = document.createElement("ul");
    list.className = "item-list";
    info.items.forEach(function (item) {
      var li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    selectedLocation.appendChild(list);
  }

  function selectLocation(id) {
    state.selectedId = id;
    renderSelectedLocation();
    var map = currentMap();
    var location = map.locations.find(function (candidate) {
      return candidate.id === id;
    });
    if (location) {
      announce(
        escapeType(location.type).label +
          " location " +
          location.number +
          " selected."
      );
    }
  }

  function selectMap(index) {
    if (index < 0 || index >= data.maps.length || index === state.mapIndex) {
      syncSelectorState();
      return;
    }

    state.mapIndex = index;
    state.selectedId = null;
    state.interacted = false;
    renderMap();
    announce(currentMap().name + " map selected.");
  }

  function renderMap() {
    var map = currentMap();
    mapTitle.textContent = map.name;
    mapImage.src = map.image;
    mapImage.alt = map.name + " map";
    syncSelectorState();
    renderLegend();
    renderMarkers();
    renderSelectedLocation();

    window.requestAnimationFrame(function () {
      resetView();
    });
  }

  function viewportRect() {
    return viewport.getBoundingClientRect();
  }

  function clampView() {
    var map = currentMap();
    var rect = viewportRect();
    var renderedWidth = map.width * state.scale;
    var renderedHeight = map.height * state.scale;
    var minimumVisible = Math.min(96, Math.max(54, Math.min(rect.width, rect.height) * 0.18));

    if (renderedWidth <= rect.width) {
      state.tx = (rect.width - renderedWidth) / 2;
    } else {
      var minX = minimumVisible - renderedWidth;
      var maxX = rect.width - minimumVisible;
      state.tx = Math.max(minX, Math.min(maxX, state.tx));
    }

    if (renderedHeight <= rect.height) {
      state.ty = (rect.height - renderedHeight) / 2;
    } else {
      var minY = minimumVisible - renderedHeight;
      var maxY = rect.height - minimumVisible;
      state.ty = Math.max(minY, Math.min(maxY, state.ty));
    }
  }

  function applyView() {
    clampView();
    mapImage.style.transform =
      "translate3d(" +
      state.tx +
      "px," +
      state.ty +
      "px,0) scale(" +
      state.scale +
      ")";
    updateMarkerPositions();
  }

  function updateMarkerPositions() {
    state.markerNodes.forEach(function (entry) {
      entry.element.style.left = state.tx + entry.location.x * state.scale + "px";
      entry.element.style.top = state.ty + entry.location.y * state.scale + "px";
    });
  }

  function resetView() {
    var map = currentMap();
    var rect = viewportRect();
    if (!rect.width || !rect.height) return;

    var pad = rect.width < 500 ? 8 : 18;
    state.fitScale = Math.min(
      Math.max(1, rect.width - pad * 2) / map.width,
      Math.max(1, rect.height - pad * 2) / map.height
    );
    state.minScale = state.fitScale * 0.72;
    state.maxScale = state.fitScale * 8;
    state.scale = state.fitScale;
    state.tx = (rect.width - map.width * state.scale) / 2;
    state.ty = (rect.height - map.height * state.scale) / 2;
    state.interacted = false;
    applyView();
  }

  function zoomAt(clientX, clientY, factor) {
    var rect = viewportRect();
    var px = clientX - rect.left;
    var py = clientY - rect.top;
    var mapX = (px - state.tx) / state.scale;
    var mapY = (py - state.ty) / state.scale;
    var nextScale = Math.max(
      state.minScale,
      Math.min(state.maxScale, state.scale * factor)
    );

    if (Math.abs(nextScale - state.scale) < 0.000001) {
      return;
    }

    state.scale = nextScale;
    state.tx = px - mapX * state.scale;
    state.ty = py - mapY * state.scale;
    state.interacted = true;
    applyView();
  }

  function zoomCentered(factor) {
    var rect = viewportRect();
    zoomAt(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
      factor
    );
  }

  function panBy(dx, dy) {
    state.tx += dx;
    state.ty += dy;
    state.interacted = true;
    applyView();
  }

  viewport.addEventListener(
    "wheel",
    function (event) {
      event.preventDefault();
      var factor = Math.exp(-event.deltaY * 0.00125);
      zoomAt(event.clientX, event.clientY, factor);
    },
    { passive: false }
  );

  viewport.addEventListener("pointerdown", function (event) {
    if (event.button !== 0 || event.target.closest(".map-marker")) {
      return;
    }

    viewport.setPointerCapture(event.pointerId);
    state.activePointers.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY
    });
    viewport.classList.add("is-dragging");

    if (state.activePointers.size === 1) {
      state.drag = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        startTx: state.tx,
        startTy: state.ty
      };
      state.pinch = null;
      return;
    }

    if (state.activePointers.size === 2) {
      var points = Array.from(state.activePointers.values());
      var dx = points[1].x - points[0].x;
      var dy = points[1].y - points[0].y;
      var distance = Math.max(1, Math.hypot(dx, dy));
      var midX = (points[0].x + points[1].x) / 2;
      var midY = (points[0].y + points[1].y) / 2;
      var rect = viewportRect();
      var localX = midX - rect.left;
      var localY = midY - rect.top;

      state.pinch = {
        startDistance: distance,
        startScale: state.scale,
        mapX: (localX - state.tx) / state.scale,
        mapY: (localY - state.ty) / state.scale
      };
      state.drag = null;
    }
  });

  viewport.addEventListener("pointermove", function (event) {
    if (!state.activePointers.has(event.pointerId)) {
      return;
    }

    state.activePointers.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY
    });

    if (state.activePointers.size >= 2 && state.pinch) {
      var points = Array.from(state.activePointers.values()).slice(0, 2);
      var dx = points[1].x - points[0].x;
      var dy = points[1].y - points[0].y;
      var distance = Math.max(1, Math.hypot(dx, dy));
      var ratio = distance / state.pinch.startDistance;
      var nextScale = Math.max(
        state.minScale,
        Math.min(state.maxScale, state.pinch.startScale * ratio)
      );
      var midX = (points[0].x + points[1].x) / 2;
      var midY = (points[0].y + points[1].y) / 2;
      var rect = viewportRect();
      var localX = midX - rect.left;
      var localY = midY - rect.top;

      state.scale = nextScale;
      state.tx = localX - state.pinch.mapX * state.scale;
      state.ty = localY - state.pinch.mapY * state.scale;
      state.interacted = true;
      applyView();
      return;
    }

    if (
      state.activePointers.size === 1 &&
      state.drag &&
      state.drag.pointerId === event.pointerId
    ) {
      state.tx = state.drag.startTx + (event.clientX - state.drag.startX);
      state.ty = state.drag.startTy + (event.clientY - state.drag.startY);
      state.interacted = true;
      applyView();
    }
  });

  function releasePointer(event) {
    state.activePointers.delete(event.pointerId);

    if (!state.activePointers.size) {
      state.drag = null;
      state.pinch = null;
      viewport.classList.remove("is-dragging");
      return;
    }

    if (state.activePointers.size === 1) {
      var remaining = Array.from(state.activePointers.entries())[0];
      state.drag = {
        pointerId: remaining[0],
        startX: remaining[1].x,
        startY: remaining[1].y,
        startTx: state.tx,
        startTy: state.ty
      };
      state.pinch = null;
    }
  }

  viewport.addEventListener("pointerup", releasePointer);
  viewport.addEventListener("pointercancel", releasePointer);

  viewport.addEventListener("keydown", function (event) {
    if (event.target.closest("button, select, input, a")) {
      return;
    }

    var handled = true;
    if (event.key === "ArrowLeft") {
      panBy(44, 0);
    } else if (event.key === "ArrowRight") {
      panBy(-44, 0);
    } else if (event.key === "ArrowUp") {
      panBy(0, 44);
    } else if (event.key === "ArrowDown") {
      panBy(0, -44);
    } else if (event.key === "+" || event.key === "=") {
      zoomCentered(1.22);
    } else if (event.key === "-" || event.key === "_") {
      zoomCentered(1 / 1.22);
    } else if (event.key === "0") {
      resetView();
    } else {
      handled = false;
    }

    if (handled) {
      event.preventDefault();
    }
  });

  Array.prototype.forEach.call(
    document.querySelectorAll("[data-map-action]"),
    function (button) {
      button.addEventListener("click", function () {
        var action = button.dataset.mapAction;
        if (action === "zoom-in") {
          zoomCentered(1.28);
        } else if (action === "zoom-out") {
          zoomCentered(1 / 1.28);
        } else if (action === "reset") {
          resetView();
        }
      });
    }
  );

  function setupStorageAndTheme() {
    if (core && core.modules) {
      var storageApi = core.modules.get("storage");
      if (storageApi && typeof storageApi.create === "function") {
        storageStore = storageApi.create({
          namespace: "halloween-escape-map",
          area: "local",
          schemaVersion: 1
        });
      }
    }

    var initialTheme = "midnight-manor";
    if (storageStore) {
      var saved = storageStore.get("theme", initialTheme);
      if (
        saved &&
        saved.value &&
        Array.prototype.some.call(themeSelect.options, function (option) {
          return option.value === saved.value;
        })
      ) {
        initialTheme = saved.value;
      }

      var installedState = storageStore.get("install-known", false);
      installKnown = installedState && installedState.value === true;
    }

    applyTheme(initialTheme, false);

    themeSelect.addEventListener("change", function () {
      applyTheme(themeSelect.value, true);
    });
  }

  function applyTheme(theme, persist) {
    document.body.dataset.theme = theme;
    themeSelect.value = theme;
    if (persist && storageStore) {
      storageStore.set("theme", theme);
    }

    var label = themeSelect.options[themeSelect.selectedIndex]
      ? themeSelect.options[themeSelect.selectedIndex].textContent
      : "Theme";
    announce(label + " theme applied.");
  }

  function setupDialog() {
    if (!core || !core.modules) return;
    var dialogApi = core.modules.get("dialog");
    if (dialogApi && typeof dialogApi.create === "function") {
      dialogController = dialogApi.create(installDialog);
    }
  }

  function openInstallInstructions(opener, event) {
    if (dialogController && dialogController.open(opener, event) !== false) {
      return;
    }
    if (typeof installDialog.showModal === "function" && !installDialog.open) {
      installDialog.showModal();
      return;
    }
    installDialog.setAttribute("open", "");
  }

  function setInstallKnown(value) {
    installKnown = value === true;
    if (storageStore) {
      storageStore.set("install-known", installKnown);
    }
  }

  function updateInstallButton() {
    if (!pwaApi) {
      installButton.hidden = false;
      return;
    }

    var status = pwaApi.status();
    if (status.installed) {
      installedThisSession = true;
      setInstallKnown(true);
      installButton.hidden = true;
      return;
    }

    if (status.installPromptAvailable) {
      installedThisSession = false;
      setInstallKnown(false);
      installButton.hidden = false;
      return;
    }

    installButton.hidden = installedThisSession || installKnown;
  }

  function setupPwa() {
    if (!core || !core.modules) {
      installButton.hidden = false;
      return;
    }

    pwaApi = core.modules.get("pwa");
    if (!pwaApi) {
      installButton.hidden = false;
      return;
    }

    pwaApi.start({
      serviceWorkerUrl: "./sw.js",
      scope: "./"
    }).then(function (result) {
      if (!result.ok && result.error) {
        console.info("[Halloween Escape Map] PWA helper:", result.error);
      }
      updateInstallButton();
    });

    window.addEventListener("p8riot:pwa-install-available", updateInstallButton);
    window.addEventListener("p8riot:pwa-installed", function () {
      installedThisSession = true;
      setInstallKnown(true);
      updateInstallButton();
      announce("App installed.");
    });

    window.addEventListener("pageshow", updateInstallButton);
    window.addEventListener("focus", updateInstallButton);
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) {
        updateInstallButton();
      }
    });

    if (typeof window.matchMedia === "function") {
      var standaloneQuery = window.matchMedia("(display-mode: standalone)");
      if (standaloneQuery.addEventListener) {
        standaloneQuery.addEventListener("change", updateInstallButton);
      }
    }

    updateInstallButton();
  }

  installButton.addEventListener("click", function (event) {
    if (!pwaApi) {
      openInstallInstructions(installButton, event);
      return;
    }

    var status = pwaApi.status();
    if (status.installed) {
      updateInstallButton();
      return;
    }

    if (!status.installPromptAvailable) {
      openInstallInstructions(installButton, event);
      return;
    }

    pwaApi.promptInstall().then(function (result) {
      if (
        result.ok &&
        result.choice &&
        result.choice.outcome === "accepted"
      ) {
        installedThisSession = true;
        setInstallKnown(true);
        installButton.hidden = true;
        announce("Install accepted.");
      } else {
        updateInstallButton();
      }
    });
  });

  var resizeTimer = null;
  window.addEventListener("resize", function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () {
      if (!state.interacted) {
        resetView();
      } else {
        applyView();
      }
    }, 120);
  });

  renderSelectors();
  setupStorageAndTheme();
  setupDialog();
  renderMap();
  setupPwa();
})();
