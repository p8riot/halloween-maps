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
  var addressLayer = document.getElementById("addressLayer");
  var streetLayer = document.getElementById("streetLayer");
  var gridLayer = document.getElementById("gridLayer");
  var toggleEscapes = document.getElementById("toggleEscapes");
  var toggleAddresses = document.getElementById("toggleAddresses");
  var toggleStreets = document.getElementById("toggleStreets");
  var toggleGrid = document.getElementById("toggleGrid");
  var opacityEscapes = document.getElementById("opacityEscapes");
  var opacityAddresses = document.getElementById("opacityAddresses");
  var opacityStreets = document.getElementById("opacityStreets");
  var opacityGrid = document.getElementById("opacityGrid");
  var opacityEscapesValue = document.getElementById("opacityEscapesValue");
  var opacityAddressesValue = document.getElementById("opacityAddressesValue");
  var opacityStreetsValue = document.getElementById("opacityStreetsValue");
  var opacityGridValue = document.getElementById("opacityGridValue");
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
    selectedKind: null,
    selectedId: null,
    selectedAddressIndex: null,
    pinnedId: null,
    markerNodes: [],
    addressNodes: [],
    streetNodes: [],
    gridNodes: [],
    overlays: {
      escapes: true,
      addresses: true,
      streets: true,
      grid: false
    },
    overlayOpacity: {
      escapes: 1,
      addresses: 0.85,
      streets: 0.8,
      grid: 0.35
    },
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
      info.items.join("; ") +
      ". Press P to pin or unpin map details."
    );
  }


  function currentOverlays() {
    return currentMap().overlays || { addresses: [], streets: [], grid: null };
  }

  function renderReferenceOverlays() {
    var overlays = currentOverlays();
    addressLayer.textContent = "";
    streetLayer.textContent = "";
    gridLayer.textContent = "";
    state.addressNodes = [];
    state.streetNodes = [];
    state.gridNodes = [];

    (overlays.addresses || []).forEach(function (item, index) {
      var label = document.createElement("button");
      label.type = "button";
      label.className = "map-label address-label";
      label.textContent = item.label;
      label.setAttribute("aria-label", "Select address " + item.label);

      var pointerActivated = false;

      label.addEventListener("pointerdown", function (event) {
        if (event.button !== 0) {
          return;
        }
        event.stopPropagation();
      });

      label.addEventListener("pointerup", function (event) {
        if (event.button !== 0) {
          return;
        }
        event.stopPropagation();
        pointerActivated = true;
        selectAddress(index);
      });

      label.addEventListener("click", function (event) {
        event.stopPropagation();

        if (pointerActivated) {
          pointerActivated = false;
          return;
        }

        selectAddress(index);
      });

      addressLayer.appendChild(label);
      state.addressNodes.push({ element: label, item: item, index: index });
    });

    (overlays.streets || []).forEach(function (item) {
      var label = document.createElement("span");
      label.className = "map-label street-label";
      label.textContent = item.label;
      label.setAttribute("aria-label", "Street " + item.label);
      streetLayer.appendChild(label);
      state.streetNodes.push({ element: label, item: item });
    });

    if (overlays.grid) {
      var surface = document.createElement("div");
      surface.className = "grid-surface";
      gridLayer.appendChild(surface);
      state.gridSurface = surface;

      (overlays.grid.columns || []).forEach(function (value, index) {
        var node = document.createElement("span");
        node.className = "grid-label";
        node.textContent = value;
        gridLayer.appendChild(node);
        state.gridNodes.push({
          element: node,
          kind: "column",
          index: index,
          count: overlays.grid.columns.length
        });
      });

      (overlays.grid.rows || []).forEach(function (value, index) {
        var node = document.createElement("span");
        node.className = "grid-label";
        node.textContent = value;
        gridLayer.appendChild(node);
        state.gridNodes.push({
          element: node,
          kind: "row",
          index: index,
          count: overlays.grid.rows.length
        });
      });
    } else {
      state.gridSurface = null;
    }

    syncOverlayVisibility();
    updateOverlayPositions();
  }

  function overlayControlSet(name) {
    if (name === "escapes") {
      return { toggle: toggleEscapes, slider: opacityEscapes, output: opacityEscapesValue, layer: markerLayer, label: "Escape locations" };
    }
    if (name === "addresses") {
      return { toggle: toggleAddresses, slider: opacityAddresses, output: opacityAddressesValue, layer: addressLayer, label: "House addresses" };
    }
    if (name === "streets") {
      return { toggle: toggleStreets, slider: opacityStreets, output: opacityStreetsValue, layer: streetLayer, label: "Street names" };
    }
    return { toggle: toggleGrid, slider: opacityGrid, output: opacityGridValue, layer: gridLayer, label: "Map grid" };
  }

  function syncOverlayVisibility() {
    ["escapes", "addresses", "streets", "grid"].forEach(function (name) {
      var controls = overlayControlSet(name);
      var enabled = state.overlays[name] === true;
      var opacity = state.overlayOpacity[name];

      controls.layer.hidden = !enabled;
      controls.layer.style.opacity = String(opacity);
      controls.toggle.checked = enabled;
      controls.slider.disabled = !enabled;
      controls.slider.value = String(Math.round(opacity * 100));
      controls.output.value = Math.round(opacity * 100) + "%";
      controls.output.textContent = controls.output.value;
    });
  }

  function updateOverlayPositions() {
    var map = currentMap();

    state.addressNodes.forEach(function (entry) {
      entry.element.style.left = state.tx + entry.item.x * state.scale + "px";
      entry.element.style.top = state.ty + entry.item.y * state.scale + "px";
    });

    state.streetNodes.forEach(function (entry) {
      entry.element.style.left = state.tx + entry.item.x * state.scale + "px";
      entry.element.style.top = state.ty + entry.item.y * state.scale + "px";
      entry.element.style.transform =
        "translate(-50%, -50%) rotate(" + (entry.item.rotation || 0) + "deg)";
    });

    if (state.gridSurface) {
      var renderedWidth = map.width * state.scale;
      var renderedHeight = map.height * state.scale;
      var overlays = currentOverlays();
      var colCount = overlays.grid.columns.length;
      var rowCount = overlays.grid.rows.length;

      state.gridSurface.style.left = state.tx + "px";
      state.gridSurface.style.top = state.ty + "px";
      state.gridSurface.style.width = renderedWidth + "px";
      state.gridSurface.style.height = renderedHeight + "px";
      state.gridSurface.style.setProperty("--grid-col-size", renderedWidth / colCount + "px");
      state.gridSurface.style.setProperty("--grid-row-size", renderedHeight / rowCount + "px");

      state.gridNodes.forEach(function (entry) {
        var x;
        var y;
        if (entry.kind === "column") {
          x = state.tx + ((entry.index + 0.5) / entry.count) * renderedWidth;
          y = state.ty + Math.max(14, Math.min(24, renderedHeight * 0.025));
        } else {
          x = state.tx + Math.max(14, Math.min(24, renderedWidth * 0.025));
          y = state.ty + ((entry.index + 0.5) / entry.count) * renderedHeight;
        }
        entry.element.style.left = x + "px";
        entry.element.style.top = y + "px";
      });
    }
  }

  function persistOverlayState() {
    if (storageStore) {
      storageStore.set("map-overlays", {
        escapes: state.overlays.escapes,
        addresses: state.overlays.addresses,
        streets: state.overlays.streets,
        grid: state.overlays.grid,
        opacity: {
          escapes: state.overlayOpacity.escapes,
          addresses: state.overlayOpacity.addresses,
          streets: state.overlayOpacity.streets,
          grid: state.overlayOpacity.grid
        }
      });
    }
  }

  function setOverlay(name, enabled, announceChange) {
    state.overlays[name] = enabled === true;
    syncOverlayVisibility();
    persistOverlayState();
    if (announceChange) {
      announce(overlayControlSet(name).label + (enabled ? " shown." : " hidden."));
    }
  }

  function setOverlayOpacity(name, percent, announceChange) {
    var numeric = Number(percent);
    if (!Number.isFinite(numeric)) {
      return;
    }
    numeric = Math.max(10, Math.min(100, numeric));
    state.overlayOpacity[name] = numeric / 100;
    syncOverlayVisibility();
    persistOverlayState();
    if (announceChange) {
      announce(overlayControlSet(name).label + " opacity " + Math.round(numeric) + " percent.");
    }
  }

  function setupOverlayControls() {
    [
      ["escapes", toggleEscapes, opacityEscapes],
      ["addresses", toggleAddresses, opacityAddresses],
      ["streets", toggleStreets, opacityStreets],
      ["grid", toggleGrid, opacityGrid]
    ].forEach(function (entry) {
      var name = entry[0];
      var toggle = entry[1];
      var slider = entry[2];

      toggle.addEventListener("change", function () {
        setOverlay(name, toggle.checked, true);
      });

      slider.addEventListener("input", function () {
        setOverlayOpacity(name, slider.value, false);
      });

      slider.addEventListener("change", function () {
        setOverlayOpacity(name, slider.value, true);
      });
    });
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
      marker.setAttribute("aria-keyshortcuts", "P");
      marker.setAttribute("aria-expanded", state.pinnedId === location.id ? "true" : "false");

      marker.appendChild(makeIcon(location.type));

      var tooltip = document.createElement("span");
      tooltip.className = "marker-tooltip";

      var tooltipTitle = document.createElement("strong");
      tooltipTitle.textContent = info.label + " · Location " + location.number;

      var nearestAddress = nearestAddressFor(map, location);
      var gridReference = gridReferenceFor(map, location);

      tooltip.appendChild(tooltipTitle);

      if (nearestAddress) {
        var tooltipAddress = document.createElement("span");
        tooltipAddress.className = "marker-tooltip-line";
        tooltipAddress.textContent = "Nearest address: " + nearestAddress.label;
        tooltip.appendChild(tooltipAddress);
      }

      if (gridReference) {
        var tooltipGrid = document.createElement("span");
        tooltipGrid.className = "marker-tooltip-line";
        tooltipGrid.textContent = "Grid: " + gridReference;
        tooltip.appendChild(tooltipGrid);
      }

      var tooltipItems = document.createElement("span");
      tooltipItems.className = "marker-tooltip-line marker-tooltip-items";
      tooltipItems.textContent = "Items: " + info.items.join(" · ");
      tooltip.appendChild(tooltipItems);
      marker.appendChild(tooltip);

      var longPressTimer = null;
      var longPressStart = null;
      var longPressTriggered = false;

      function cancelLongPress() {
        if (longPressTimer !== null) {
          window.clearTimeout(longPressTimer);
          longPressTimer = null;
        }
        longPressStart = null;
      }

      function togglePinnedFromMarker() {
        var shouldPin = state.pinnedId !== location.id;
        state.pinnedId = shouldPin ? location.id : null;
        selectLocation(location.id, false, true);
        updateSelectionStyles();
        announce(
          info.label +
            " location " +
            location.number +
            (shouldPin ? " details pinned." : " details unpinned.")
        );
      }

      marker.addEventListener("click", function (event) {
        event.stopPropagation();

        if (longPressTriggered) {
          longPressTriggered = false;
          event.preventDefault();
          return;
        }

        state.pinnedId = null;
        selectLocation(location.id);
      });

      marker.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        event.stopPropagation();
        togglePinnedFromMarker();
      });

      marker.addEventListener("keydown", function (event) {
        if (event.key === "p" || event.key === "P") {
          event.preventDefault();
          event.stopPropagation();
          togglePinnedFromMarker();
        }
      });

      marker.addEventListener("pointerdown", function (event) {
        if (event.button !== 0 || event.pointerType === "mouse") {
          return;
        }

        cancelLongPress();
        longPressTriggered = false;
        longPressStart = { x: event.clientX, y: event.clientY };

        longPressTimer = window.setTimeout(function () {
          longPressTimer = null;
          longPressTriggered = true;
          togglePinnedFromMarker();
        }, 900);
      });

      marker.addEventListener("pointermove", function (event) {
        if (!longPressStart || longPressTimer === null) {
          return;
        }

        if (
          Math.abs(event.clientX - longPressStart.x) > 10 ||
          Math.abs(event.clientY - longPressStart.y) > 10
        ) {
          cancelLongPress();
        }
      });

      marker.addEventListener("pointerup", cancelLongPress);
      marker.addEventListener("pointercancel", cancelLongPress);
      marker.addEventListener("lostpointercapture", cancelLongPress);

      markerLayer.appendChild(marker);
      state.markerNodes.push({
        element: marker,
        location: location
      });
    });

    updateSelectionStyles();
    updateMarkerPositions();
  }

  function nearestAddressFor(map, location) {
    var overlays = map.overlays || {};
    var addresses = overlays.addresses || [];
    if (!addresses.length) {
      return null;
    }

    var nearest = null;
    var nearestDistance = Infinity;
    addresses.forEach(function (address) {
      var dx = location.x - address.x;
      var dy = location.y - address.y;
      var distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < nearestDistance) {
        nearest = address;
        nearestDistance = distance;
      }
    });
    return nearest;
  }

  function gridReferenceFor(map, location) {
    var overlays = map.overlays || {};
    var grid = overlays.grid;
    if (!grid || !grid.columns || !grid.columns.length || !grid.rows || !grid.rows.length) {
      return null;
    }

    var colIndex = Math.max(
      0,
      Math.min(grid.columns.length - 1, Math.floor((location.x / map.width) * grid.columns.length))
    );
    var rowIndex = Math.max(
      0,
      Math.min(grid.rows.length - 1, Math.floor((location.y / map.height) * grid.rows.length))
    );
    return grid.columns[colIndex] + grid.rows[rowIndex];
  }

  function rallyValue() {
    if (state.selectedKind === "escape" && state.selectedId) {
      return "escape:" + state.selectedId;
    }
    if (state.selectedKind === "address" && state.selectedAddressIndex !== null) {
      return "address:" + state.selectedAddressIndex;
    }
    return "";
  }

  function renderRallySelector() {
    var map = currentMap();
    var wrapper = document.createElement("div");
    wrapper.className = "rally-picker";

    var label = document.createElement("label");
    label.htmlFor = "rallyPointSelect";
    label.textContent = "Rally point";

    var select = document.createElement("select");
    select.id = "rallyPointSelect";
    select.className = "rally-select";
    select.setAttribute("aria-label", "Choose a rally point on " + map.name);

    var placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Choose a location";
    select.appendChild(placeholder);

    var escapeGroup = document.createElement("optgroup");
    escapeGroup.label = "Escape locations";
    ["cellar", "gate", "car"].forEach(function (type) {
      map.locations
        .filter(function (location) {
          return location.type === type;
        })
        .sort(function (a, b) {
          return a.number - b.number;
        })
        .forEach(function (location) {
          var option = document.createElement("option");
          option.value = "escape:" + location.id;
          option.textContent = escapeType(location.type).label + " · Location " + location.number;
          escapeGroup.appendChild(option);
        });
    });
    select.appendChild(escapeGroup);

    var addressGroup = document.createElement("optgroup");
    addressGroup.label = "Addresses";
    (map.overlays.addresses || []).forEach(function (address, index) {
      var option = document.createElement("option");
      option.value = "address:" + index;
      option.textContent = address.label;
      addressGroup.appendChild(option);
    });
    select.appendChild(addressGroup);

    select.value = rallyValue();
    select.addEventListener("change", function () {
      if (!select.value) {
        clearSelectedLocation();
        return;
      }

      var parts = select.value.split(":");
      if (parts[0] === "escape") {
        selectLocation(parts.slice(1).join(":"), true);
      } else if (parts[0] === "address") {
        selectAddress(Number(parts[1]), true);
      }
    });

    wrapper.appendChild(label);
    wrapper.appendChild(select);
    selectedLocation.appendChild(wrapper);
  }

  function updateSelectionStyles() {
    state.markerNodes.forEach(function (entry) {
      var selected =
        state.selectedKind === "escape" && entry.location.id === state.selectedId;
      var pinned = state.pinnedId === entry.location.id;

      entry.element.classList.toggle("is-selected", selected);
      entry.element.classList.toggle("is-pinned", pinned);
      entry.element.setAttribute("aria-expanded", pinned ? "true" : "false");
    });

    state.addressNodes.forEach(function (entry) {
      entry.element.classList.toggle(
        "is-selected",
        state.selectedKind === "address" && entry.index === state.selectedAddressIndex
      );
      entry.element.setAttribute(
        "aria-pressed",
        state.selectedKind === "address" && entry.index === state.selectedAddressIndex ? "true" : "false"
      );
    });
  }

  function clearSelectedLocation() {
    state.selectedKind = null;
    state.selectedId = null;
    state.selectedAddressIndex = null;
    state.pinnedId = null;
    renderSelectedLocation();
    announce("Selection cleared.");
  }

  function renderSelectedLocation() {
    var map = currentMap();
    var location = null;
    var address = null;

    if (state.selectedKind === "escape") {
      location = map.locations.find(function (candidate) {
        return candidate.id === state.selectedId;
      }) || null;
    } else if (state.selectedKind === "address") {
      address = (map.overlays.addresses || [])[state.selectedAddressIndex] || null;
    }

    updateSelectionStyles();

    selectedLocation.textContent = "";
    var heading = document.createElement("h3");
    heading.textContent = "Selected location";
    selectedLocation.appendChild(heading);
    renderRallySelector();

    if (location || address) {
      var clearButton = document.createElement("button");
      clearButton.type = "button";
      clearButton.className = "clear-selection-button";
      clearButton.textContent = "Clear selection";
      clearButton.addEventListener("click", clearSelectedLocation);
      selectedLocation.appendChild(clearButton);
    }

    if (!location && !address) {
      var empty = document.createElement("p");
      empty.className = "selected-empty";
      empty.textContent = "Tap a map location or choose a rally point.";
      selectedLocation.appendChild(empty);
      return;
    }

    if (location) {
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

      var nearestAddress = nearestAddressFor(map, location);
      var gridReference = gridReferenceFor(map, location);
      var callout = document.createElement("dl");
      callout.className = "selected-callout";

      if (nearestAddress) {
        var addressTerm = document.createElement("dt");
        addressTerm.textContent = "Nearest address";
        var addressValue = document.createElement("dd");
        addressValue.textContent = nearestAddress.label;
        callout.appendChild(addressTerm);
        callout.appendChild(addressValue);
      }

      if (gridReference) {
        var gridTerm = document.createElement("dt");
        gridTerm.textContent = "Grid";
        var gridValue = document.createElement("dd");
        gridValue.textContent = gridReference;
        callout.appendChild(gridTerm);
        callout.appendChild(gridValue);
      }

      selectedLocation.appendChild(callout);

      var needed = document.createElement("p");
      needed.className = "items-needed-label";
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
      return;
    }

    selectedLocation.style.removeProperty("--selected-color");

    var addressCallout = document.createElement("dl");
    addressCallout.className = "selected-callout";

    var exactTerm = document.createElement("dt");
    exactTerm.textContent = "Address";
    var exactValue = document.createElement("dd");
    exactValue.textContent = address.label;
    addressCallout.appendChild(exactTerm);
    addressCallout.appendChild(exactValue);

    var addressGrid = gridReferenceFor(map, address);
    if (addressGrid) {
      var addressGridTerm = document.createElement("dt");
      addressGridTerm.textContent = "Grid";
      var addressGridValue = document.createElement("dd");
      addressGridValue.textContent = addressGrid;
      addressCallout.appendChild(addressGridTerm);
      addressCallout.appendChild(addressGridValue);
    }

    selectedLocation.appendChild(addressCallout);
  }

  function focusPoint(point) {
    var rect = viewportRect();
    var minimumRallyScale = state.fitScale * 1.8;

    if (state.scale < minimumRallyScale) {
      state.scale = Math.min(state.maxScale, minimumRallyScale);
    }

    state.tx = rect.width / 2 - point.x * state.scale;
    state.ty = rect.height / 2 - point.y * state.scale;
    state.interacted = true;
    applyView();
  }

  function selectLocation(id, focus, preservePinned) {
    var map = currentMap();
    var location = map.locations.find(function (candidate) {
      return candidate.id === id;
    });
    if (!location) {
      return;
    }

    if (!preservePinned) {
      state.pinnedId = null;
    }

    state.selectedKind = "escape";
    state.selectedId = id;
    state.selectedAddressIndex = null;
    renderSelectedLocation();

    if (focus) {
      focusPoint(location);
    }

    announce(
      escapeType(location.type).label +
        " location " +
        location.number +
        " selected."
    );
  }

  function selectAddress(index, focus) {
    var map = currentMap();
    var address = (map.overlays.addresses || [])[index];
    if (!address) {
      return;
    }

    state.pinnedId = null;
    state.selectedKind = "address";
    state.selectedId = null;
    state.selectedAddressIndex = index;
    renderSelectedLocation();

    if (focus) {
      focusPoint(address);
    }

    announce("Address " + address.label + " selected.");
  }

  function selectMap(index) {
    if (index < 0 || index >= data.maps.length || index === state.mapIndex) {
      syncSelectorState();
      return;
    }

    state.mapIndex = index;
    state.selectedKind = null;
    state.selectedId = null;
    state.selectedAddressIndex = null;
    state.pinnedId = null;
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
    renderReferenceOverlays();
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
    updateOverlayPositions();
  }

  function updateMarkerPositions() {
    var rect = viewportRect();
    state.markerNodes.forEach(function (entry) {
      var x = state.tx + entry.location.x * state.scale;
      var y = state.ty + entry.location.y * state.scale;

      entry.element.style.left = x + "px";
      entry.element.style.top = y + "px";

      entry.element.classList.toggle("tooltip-below", y < 150);
      entry.element.classList.toggle("tooltip-left", x < 130);
      entry.element.classList.toggle("tooltip-right", x > rect.width - 130);
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
    if (
      event.button !== 0 ||
      event.target.closest(".map-marker, .address-label")
    ) {
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

      var overlayState = storageStore.get("map-overlays", null);
      if (overlayState && overlayState.value && typeof overlayState.value === "object") {
        ["escapes", "addresses", "streets", "grid"].forEach(function (key) {
          if (typeof overlayState.value[key] === "boolean") {
            state.overlays[key] = overlayState.value[key];
          }
        });

        if (overlayState.value.opacity && typeof overlayState.value.opacity === "object") {
          ["escapes", "addresses", "streets", "grid"].forEach(function (key) {
            var savedOpacity = Number(overlayState.value.opacity[key]);
            if (Number.isFinite(savedOpacity)) {
              state.overlayOpacity[key] = Math.max(0.1, Math.min(1, savedOpacity));
            }
          });
        }
      }
    }

    syncOverlayVisibility();
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
        console.info("[HTG Maps] PWA helper:", result.error);
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
  setupOverlayControls();
  setupDialog();
  renderMap();
  setupPwa();
})();
