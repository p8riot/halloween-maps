/*
Halloween Companion 1.2.4 Game Icon Preview
Structured source edition

Source map
  JS-01  Data, Core references, and DOM bindings
  JS-02  Live application state and shared helpers
  JS-03  Map selectors, legend, overlays, and markers
  JS-04  Selection, rally points, and map search
  JS-05  Viewport transform and direct map interaction
  JS-06  Persistence and themes
  JS-07  Onboarding
  JS-08  Dialog and PWA lifecycle
  JS-09  Resize handling and startup
*/

(function () {
    "use strict";

    // ============================================================================
    // [JS-01] DATA + CORE REFERENCES + DOM BINDINGS
    // ============================================================================
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

    var toggleEscapes = document.getElementById("toggleEscapes");
    var toggleAddresses = document.getElementById("toggleAddresses");
    var toggleStreets = document.getElementById("toggleStreets");

    var opacityEscapes = document.getElementById("opacityEscapes");
    var opacityAddresses = document.getElementById("opacityAddresses");
    var opacityStreets = document.getElementById("opacityStreets");

    var opacityEscapesValue = document.getElementById("opacityEscapesValue");
    var opacityAddressesValue = document.getElementById("opacityAddressesValue");
    var opacityStreetsValue = document.getElementById("opacityStreetsValue");

    var mapTitle = document.getElementById("currentMapTitle");
    var mapTabs = document.getElementById("mapTabs");
    var mapSelect = document.getElementById("mapSelect");
    var legendList = document.getElementById("legendList");
    var selectedLocation = document.getElementById("selectedLocation");
    var themeSelect = document.getElementById("themeSelect");
    var installButton = document.getElementById("installButton");
    var installDialog = document.getElementById("installDialog");
    var showTipsButton = document.getElementById("showTipsButton");
    var onboardingTour = document.getElementById("onboardingTour");
    var tourStep = document.getElementById("tourStep");
    var tourTitle = document.getElementById("tourTitle");
    var tourText = document.getElementById("tourText");
    var tourSkipButton = document.getElementById("tourSkipButton");
    var tourBackButton = document.getElementById("tourBackButton");
    var tourNextButton = document.getElementById("tourNextButton");
    var appStatus = document.getElementById("appStatus");
    var mapSearch = document.getElementById("mapSearch");
    var clearMapSearch = document.getElementById("clearMapSearch");
    var mapSearchResults = document.getElementById("mapSearchResults");




    // ============================================================================
    // [JS-02] LIVE APP STATE + SHARED HELPERS
    // ============================================================================
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

        overlays: {
            escapes: true,
            addresses: false,
            streets: false,
        },
        overlayOpacity: {
            escapes: 1,
            addresses: 0.5,
            streets: 0.5
        },
        activePointers: new Map(),
        drag: null,
        pinch: null,
        escapeFilters: {}
    };

    var storageStore = null;
    var mapPreferenceState = null;
    var prefsReady = false;
    var MAP_LAYER_DEFAULTS = {cellar: true, gate: true, car: true, drain: true, vehicleExit: true, items: false, searchable: false};
    var ITEM_TAG_LABELS = data.itemTypes;
    // Match only verified item names. Generic/randomized sources retain their generic marker.
    var ITEM_ICON_BY_LABEL = {
        "Sedan Key": "./assets/icons/game/item-sedan-key.png",
        "Gas Can": "./assets/icons/game/item-gas-can.png",
        "Repair Kit": "./assets/icons/game/item-repair-kit.png",
        "Bolt Cutters": "./assets/icons/game/item-bolt-cutters.png",
        "Fuse": "./assets/icons/game/item-fuse.png"
    };
    // Original game images are mapped to verified source tags, not inferred loot.
    // Cellar Key has no confirmed matching exported icon, so its map symbol stays generic.
    var ITEM_ICON_BY_TAG = {
        "ID.Item.SedanKey.Default": ITEM_ICON_BY_LABEL["Sedan Key"],
        "ID.Item.Gascan.Default": ITEM_ICON_BY_LABEL["Gas Can"],
        "ID.Item.RepairKit.Default": ITEM_ICON_BY_LABEL["Repair Kit"],
        "ID.Item.BoltCutters.Default": ITEM_ICON_BY_LABEL["Bolt Cutters"]
    };
    var ITEM_PURPOSE_TAGS = {
        car: ["ID.Item.SedanKey.Default", "ID.Item.Gascan.Default", "ID.Item.RepairKit.Default"],
        cellar: ["ID.Item.CellarKey.Default", "ID.Item.BoltCutters.Default"],
        gate: ["ID.Item.CellarKey.Default", "ID.Item.BoltCutters.Default"]
    };
    function defaultMapProfile() {
        return {style: "realistic", layers: Object.assign({}, MAP_LAYER_DEFAULTS),
            itemTags: Object.keys(ITEM_TAG_LABELS).reduce(function (acc, k) {acc[k] = true; return acc;}, {}),
            purposes: {car: true, cellar: true, gate: true}, searchableKinds: {furniture: true, vehicle: true}};
    }
    function cleanMapProfile(raw) {
        var out = defaultMapProfile();
        if (!raw || typeof raw !== "object") return out;
        if (raw.style === "realistic" || raw.style === "paper") out.style = raw.style;
        ["layers", "itemTags", "purposes", "searchableKinds"].forEach(function (section) {
            if (!raw[section] || typeof raw[section] !== "object") return;
            Object.keys(out[section]).forEach(function (key) {
                if (typeof raw[section][key] === "boolean") out[section][key] = raw[section][key];
            });
        });
        // In earlier versions car visibility required TWO controls. Keep cars hidden
        // if either of the old controls had been disabled in a saved profile.
        if (raw.layers && raw.layers.sedanSpawns === false) out.layers.car = false;
        return out;
    }
    function effectiveMapProfile() {
        if (!mapPreferenceState) return defaultMapProfile();
        return mapPreferenceState.perMap[currentMap().id] || mapPreferenceState.global;
    }
    function editingThisMap() {
        return !!(mapPreferenceState && mapPreferenceState.perMap[currentMap().id]);
    }
    function persistMapProfile() {
        if (!storageStore) return;
        var result = storageStore.set("map-display-v2", mapPreferenceState);
        var status = document.getElementById("mapPreferencesStatus");
        if (status) status.textContent = result && result.ok === true ? "Saved locally." : "Settings apply this session, but local saving is unavailable.";
    }
    function updateMapProfile(change) {
        if (!mapPreferenceState) return;
        var mapId = currentMap().id;
        var profile = editingThisMap() ? mapPreferenceState.perMap[mapId] : mapPreferenceState.global;
        change(profile);
        persistMapProfile();
        syncMapPreferenceControls();
        syncEscapeFilters();
        renderMapSearchResults();
    }
    function mapStyle() {return effectiveMapProfile().style;}
    function styleDelta(map, style) {return (map.pixelOffset && Number(map.pixelOffset[style])) || 0;}
    function locationPosition(point) {return {x: point.x + styleDelta(currentMap(), mapStyle()), y: point.y};}
    function switchMapStyle(style) {
        if (style !== "realistic" && style !== "paper" || style === mapStyle()) return;
        var before = styleDelta(currentMap(), mapStyle());
        updateMapProfile(function (p) { p.style = style; });
        var after = styleDelta(currentMap(), style);
        state.tx -= (after - before) * state.scale;
        mapImage.src = currentMap().styles[style];
        mapImage.alt = currentMap().name + " " + style + " map";
        syncOverlayVisibility();
        applyView();
        renderMapSearchResults();
        announce(style === "paper" ? "Paper artwork, including the printed grid." : "Realistic artwork, no grid.");
    }
    var dialogController = null;
    var pwaApi = null;
    var installedThisSession = false;
    var installKnown = false;
    var onboardingComplete = false;
    var onboardingStepIndex = 0;
    var onboardingTarget = null;
    var onboardingOpener = null;

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

    function itemNames(location) {
        return (location.itemTags || []).map(function (tag) {return ITEM_TAG_LABELS[tag] || tag;});
    }
    function markerItems(location) {
        return location.type === "item" ? itemNames(location) : escapeType(location.type).items;
    }
    function allowedItemTags(location) {
        var prefs = effectiveMapProfile();
        if (!prefs.layers.items) return [];
        var allowed = Object.keys(prefs.purposes).filter(function (key) {
            return prefs.purposes[key];
        }).reduce(function (out, key) {return out.concat(ITEM_PURPOSE_TAGS[key]);}, []);
        return (location.itemTags || []).filter(function (tag) {
            return prefs.itemTags[tag] === true && allowed.indexOf(tag) !== -1;
        });
    }
    function makeItemMarkerArt(location) {
        var art = document.createElement("span");
        art.className = "map-item-marker-art";
        art.setAttribute("aria-hidden", "true");
        updateItemMarkerArt(art, location);
        return art;
    }
    function updateItemMarkerArt(art, location) {
        var tags = allowedItemTags(location);
        art.dataset.count = String(tags.length);
        art.replaceChildren();
        // One marker represents one item *source*. Multiple icons mean possible
        // alternatives, not that every item spawns together or every match.
        tags.forEach(function (tag) {
            var icon = document.createElement("img");
            icon.src = ITEM_ICON_BY_TAG[tag] || escapeType("item").icon;
            icon.alt = "";
            icon.draggable = false;
            art.appendChild(icon);
        });
    }
    function markerSummary(location) {
        if (location.type === "searchable") return "Searchable " + (location.searchKind === "vehicle" ? "vehicle" : "furniture") + ": contents unknown. This does not confirm an escape item can spawn here. Exported position, not gameplay validated.";
        if (location.type === "item") return "Tagged escape-supply source: " + itemNames(location).join(", ") + ". Contents and indoor/outdoor placement are not verified.";
        if (location.type === "car") return "Civilian escape sedan parking spot.";
        if (location.type === "vehicleExit") return (location.alternateTriggerIds ? "Adjacent route triggers are grouped here. " : "") + "Vehicle departure area, not a parked sedan or police car.";
        if (location.type === "drain") return "Tower Farm drain escape; clear obstacles and unlock as you would a storm cellar. Check the in-game prompt.";
        return "See Quick Escape Notes for the required items and steps.";
    }
    function makeIcon(type, className) {
        var icon = document.createElement("img");
        icon.src = escapeType(type).icon;
        icon.alt = "";
        icon.className = className || "";
        return icon;
    }

    // ============================================================================
    // [JS-03] MAP SELECTORS + LEGEND + OVERLAYS + MARKERS
    // ============================================================================
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
            tab.addEventListener("keydown", function (event) {
                var nextIndex = index;
                if (event.key === "ArrowRight") nextIndex = (index + 1) % data.maps.length;
                else if (event.key === "ArrowLeft") nextIndex = (index - 1 + data.maps.length) % data.maps.length;
                else if (event.key === "Home") nextIndex = 0;
                else if (event.key === "End") nextIndex = data.maps.length - 1;
                else return;
                event.preventDefault();
                selectMap(nextIndex);
                mapTabs.children[nextIndex].focus();
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
        ["cellar", "gate", "car", "drain", "vehicleExit"].forEach(function (type) {
            var count = map.locations.filter(function (loc) { return loc.type === type && !loc.displayAliasOf; }).length;
            if (!count) return;
            var info = escapeType(type);
            var card = document.createElement("article");
            card.className = "legend-card";
            card.style.setProperty("--legend-color", info.color);
            var iconWrap = document.createElement("div");
            iconWrap.className = "legend-icon";
            iconWrap.appendChild(makeIcon(type));
            var copy = document.createElement("div");
            copy.className = "legend-copy";
            var title = document.createElement("h3"); title.textContent = info.label;
            var note = document.createElement("p");
            note.textContent = type === "drain" ? "Same approach as storm cellars" : type === "vehicleExit" ? "Departure route, not a parked car" : "";
            copy.appendChild(title);
            if (note.textContent) copy.appendChild(note);
            var badge = document.createElement("div");badge.className="legend-count";
            badge.textContent = String(count);
            card.appendChild(iconWrap);card.appendChild(copy);card.appendChild(badge);
            legendList.appendChild(card);
        });
    }

    function markerLabel(map, location) {
        return escapeType(location.type).label + " location " + location.number + " on " + map.name + ". " + (location.type === "item" ? "Possible item types: " + itemNames(location).join(", ") + ". " : "") + markerSummary(location) + " Press P to pin details.";
    }

    function currentOverlays() {
        return currentMap().overlays || { addresses: [], streets: [], grid: null };
    }

    function renderReferenceOverlays() {
        var overlays = currentOverlays();
        addressLayer.textContent = "";
        streetLayer.textContent = "";

        state.addressNodes = [];
        state.streetNodes = [];


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

        syncOverlayVisibility();
        updateOverlayPositions();
    }

    function overlayControlSet(name) {
        if (name === "escapes") return {toggle:toggleEscapes,slider:opacityEscapes,output:opacityEscapesValue,layer:markerLayer,label:"Escape locations"};
        if (name === "addresses") return {toggle:toggleAddresses,slider:opacityAddresses,output:opacityAddressesValue,layer:addressLayer,label:"Addresses"};
        if (name === "streets") return {toggle:toggleStreets,slider:opacityStreets,output:opacityStreetsValue,layer:streetLayer,label:"Street names"};
        return null;
    }

    function syncOverlayVisibility() {
        ["escapes", "addresses", "streets"].forEach(function (name) {
            var controls = overlayControlSet(name);
            var enabled = state.overlays[name] === true;
            var opacity = state.overlayOpacity[name];
            if (name !== "escapes") controls.layer.hidden = !enabled || mapStyle() === "paper";
            if (name === "escapes") {
                // Keep marker tooltips fully readable while fading only pin artwork.
                controls.layer.style.setProperty("--escape-marker-opacity", String(opacity));
            } else {
                controls.layer.style.opacity = String(opacity);
            }
            controls.toggle.checked = enabled;
            controls.slider.disabled = !enabled;
            controls.slider.value = String(Math.round(opacity * 100));
            controls.output.textContent = Math.round(opacity * 100) + "%";
            controls.output.value = controls.output.textContent;
        });
        if (prefsReady) syncEscapeFilters();
    }

    function updateOverlayPositions() {
        state.addressNodes.forEach(function (entry) {
            var p=locationPosition(entry.item);
            entry.element.style.left = state.tx + p.x * state.scale + "px";
            entry.element.style.top = state.ty + p.y * state.scale + "px";
        });
        state.streetNodes.forEach(function (entry) {
            var p=locationPosition(entry.item);
            entry.element.style.left = state.tx + p.x * state.scale + "px";
            entry.element.style.top = state.ty + p.y * state.scale + "px";
            entry.element.style.transform = "translate(-50%, -50%) rotate(" + (entry.item.rotation || 0) + "deg)";
        });
    }

    function persistOverlayState() {
        if (storageStore) {
            storageStore.set("map-overlays", {
                escapes: state.overlays.escapes,
                addresses: state.overlays.addresses,
                streets: state.overlays.streets,
                opacity: {
                    escapes: state.overlayOpacity.escapes,
                    addresses: state.overlayOpacity.addresses,
                    streets: state.overlayOpacity.streets
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
            ["streets", toggleStreets, opacityStreets]
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
            if (location.displayAliasOf) return;
            var info = escapeType(location.type);
            var marker = document.createElement("button");
            marker.type = "button";
            marker.className = "map-marker" + (location.type === "item" ? " map-marker--item" : location.type === "searchable" ? " map-marker--searchable" : "");
            marker.dataset.locationId = location.id;
            marker.dataset.type = location.type;
            marker.style.setProperty("--marker-color", info.color);
            marker.setAttribute("aria-label", markerLabel(map, location));
            marker.setAttribute("aria-keyshortcuts", "P");
            marker.setAttribute("aria-expanded", state.pinnedId === location.id ? "true" : "false");

            marker.appendChild(location.type === "item" ? makeItemMarkerArt(location) : makeIcon(location.type));

            var tooltip = document.createElement("span");
            tooltip.className = "marker-tooltip";

            var tooltipTitle = document.createElement("strong");
            tooltipTitle.textContent = info.label + " · " + location.number;

            var nearestAddress = location.type === "vehicleExit" ? null : nearestAddressFor(map, location);
            var gridReference = null;

            tooltip.appendChild(tooltipTitle);

            if (nearestAddress) {
                var tooltipAddress = document.createElement("span");
                tooltipAddress.className = "marker-tooltip-line";
                tooltipAddress.textContent = "Nearby building (approx.): " + nearestAddress.label;
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
            tooltipItems.textContent = location.type === "item" ? "Possible tagged items: " + itemNames(location).join(" · ") : location.type === "searchable" ? "Unknown loot, no guaranteed escape supplies" : "Requirements: " + info.items.join(" · ");
            tooltip.appendChild(tooltipItems);
            var note=document.createElement("span");note.className="marker-tooltip-line";note.textContent=markerSummary(location);
            tooltip.appendChild(note);
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
        return nearestDistance <= 280 ? nearest : null;
    }

    function gridReferenceFor() {
        // No generated grid and no artificial grid reference system.
        // Paper uses only its existing printed grid artwork.
        return null;
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
        ["cellar", "gate", "car", "drain", "vehicleExit"].forEach(function (type) {
            map.locations
                .filter(function (location) {
                    return location.type === type && !location.displayAliasOf;
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
                    " · Location " +
                        location.number +
                        " of " +
                        map.locations.filter(function (item) {
                            return item.type === location.type && !item.displayAliasOf;
                        }).length +
                        " on " +
                        map.name
                )
            );
            selectedLocation.appendChild(summary);

            var nearestAddress = location.type === "vehicleExit" ? null : nearestAddressFor(map, location);
            var gridReference = null;
            var callout = document.createElement("dl");
            callout.className = "selected-callout";

            if (nearestAddress) {
                var addressTerm = document.createElement("dt");
                addressTerm.textContent = "Nearby building (approximate)";
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
            needed.textContent = location.type === "searchable" ? "What is known:" : location.type === "item" ? "Possible items at this tagged source:" : "Items / requirements:";
            selectedLocation.appendChild(needed);

            var list = document.createElement("ul");
            list.className = "item-list";
            markerItems(location).forEach(function (item) {
                var li = document.createElement("li");
                var verifiedItemIcon = ITEM_ICON_BY_LABEL[item];
                if (verifiedItemIcon) {
                    var itemIcon = document.createElement("img");
                    itemIcon.src = verifiedItemIcon;
                    itemIcon.alt = "";
                    itemIcon.setAttribute("aria-hidden", "true");
                    itemIcon.className = "game-item-icon";
                    li.className = "with-game-item-icon";
                    li.appendChild(itemIcon);
                }
                var itemText = document.createElement("span");
                itemText.textContent = item;
                li.appendChild(itemText);
                list.appendChild(li);
            });
            selectedLocation.appendChild(list);
            var caution = document.createElement("p");
            caution.className = "source-caution";
            caution.textContent = markerSummary(location);
            selectedLocation.appendChild(caution);
            renderNearbyChoices(location);
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

    function renderNearbyChoices(location) {
        var p = locationPosition(location);
        var nearby = currentMap().locations.filter(function (other) {
            if (other.id === location.id || !markerIsVisible(other)) return false;
            var q = locationPosition(other);
            return Math.hypot(p.x-q.x, p.y-q.y)*state.scale < 38;
        }).slice(0,24);
        if (!nearby.length) return;
        var panel=document.createElement("div");panel.className="nearby-choices";
        var title=document.createElement("strong");title.textContent="Nearby / overlapping markers (" + (nearby.length+1) + ")";
        panel.appendChild(title);
        nearby.forEach(function (other) {
            var b=document.createElement("button"); b.type="button"; b.className="compact-button";
            b.textContent=escapeType(other.type).label + " · " + other.number;
            b.addEventListener("click",function(){selectLocation(other.id,true);});
            panel.appendChild(b);
        });
        selectedLocation.appendChild(panel);
    }

    function focusPoint(point) {
        var rect = viewportRect();
        var minimumRallyScale = state.fitScale * 1.8;

        if (state.scale < minimumRallyScale) {
            state.scale = Math.min(state.maxScale, minimumRallyScale);
        }

        var p = locationPosition(point);
        state.tx = rect.width / 2 - p.x * state.scale;
        state.ty = rect.height / 2 - p.y * state.scale;
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



    function markerIsVisible(location) {
        var prefs = effectiveMapProfile();
        if (location.type === "searchable") return prefs.layers.searchable === true && prefs.searchableKinds[location.searchKind] === true;
        if (location.type === "item") return allowedItemTags(location).length > 0;
        if (location.type === "car") return prefs.layers.car && state.overlays.escapes;
        return prefs.layers[location.type] === true && state.overlays.escapes;
    }
    function syncEscapeFilters() {
        state.markerNodes.forEach(function (entry) {
            var visible=markerIsVisible(entry.location);
            if (entry.location.type === "item") {
                var art = entry.element.querySelector(".map-item-marker-art");
                if (art) updateItemMarkerArt(art, entry.location);
            }
            entry.element.hidden=!visible;
            entry.element.style.opacity=(entry.location.type === "item" || entry.location.type === "searchable") ? "1" : String(state.overlayOpacity.escapes);
            entry.element.tabIndex=visible?0:-1;
        });
    }

    function mapSearchEntries() {
        var map = currentMap(), entries=[];
        map.locations.forEach(function (location) {
            if (location.displayAliasOf || !markerIsVisible(location)) return;
            var info=escapeType(location.type);
            var near=location.type === "vehicleExit" ? null : nearestAddressFor(map,location);
            entries.push({kind:"escape",label:info.label + " · " + location.number,
                meta: location.type === "item" ? itemNames(location).join(" / ") : markerSummary(location),
                search:[info.label,location.type,location.number,near&&near.label,markerItems(location).join(" ")].join(" "),
                point:location,id:location.id});
        });
        (map.overlays.addresses||[]).forEach(function (address,index) {
            entries.push({kind:"address",label:"Address "+address.label,meta:"Address",
                search:["address",address.label].join(" "),point:address,index:index});
        });
        (map.overlays.streets||[]).forEach(function (street) {
            entries.push({kind:"street",label:street.label,meta:"Street",search:"street "+street.label,point:street});
        });
        return entries;
    }

    function renderMapSearchResults() {
        if (!mapSearch || !mapSearchResults) return;
        var query = mapSearch.value.trim().toLowerCase();
        mapSearchResults.textContent = "";
        if (!query) return;

        var matches = mapSearchEntries().filter(function (entry) {
            return entry.search.toLowerCase().indexOf(query) >= 0 || entry.label.toLowerCase().indexOf(query) >= 0;
        }).slice(0, 12);

        if (!matches.length) {
            var empty = document.createElement("p");
            empty.className = "map-search-empty";
            empty.textContent = "No matches on this map.";
            mapSearchResults.appendChild(empty);
            return;
        }

        matches.forEach(function (entry) {
            var button = document.createElement("button");
            button.type = "button";
            button.className = "map-search-result";
            var title = document.createElement("strong");
            title.textContent = entry.label;
            var meta = document.createElement("span");
            meta.textContent = entry.meta;
            button.appendChild(title);
            button.appendChild(meta);
            button.addEventListener("click", function () {
                if (entry.kind === "escape") {
                    if (!state.overlays.escapes) setOverlay("escapes", true, false);
                    selectLocation(entry.id, true);
                } else if (entry.kind === "address") {
                    if (!state.overlays.addresses) setOverlay("addresses", true, false);
                    selectAddress(entry.index, true);
                } else {
                    if (entry.kind === "street" && !state.overlays.streets) setOverlay("streets", true, false);
                    focusPoint(entry.point);
                    announce(entry.label + " centered.");
                }
            });
            mapSearchResults.appendChild(button);
        });
    }

    function setupMapSearchAndFilters() {
        mapSearch.addEventListener("input",renderMapSearchResults);
        clearMapSearch.addEventListener("click",function () {
            mapSearch.value="";renderMapSearchResults();mapSearch.focus();
        });
    }

    function makeCheckbox(label, checked, onChange) {
        var wrap=document.createElement("label");wrap.className="custom-layer-row";
        var check=document.createElement("input");check.type="checkbox";check.checked=checked;
        check.addEventListener("change",function(){onChange(check.checked);});
        var text=document.createElement("span");text.textContent=label;
        wrap.appendChild(check);wrap.appendChild(text);
        return wrap;
    }
    function layerSection(title) {
        var s=document.createElement("fieldset");s.className="custom-layer-group";
        var legend=document.createElement("legend");legend.textContent=title;s.appendChild(legend);
        return s;
    }
    function syncMapPreferenceControls() {
        if (!mapPreferenceState) return;
        var profile=effectiveMapProfile();
        document.getElementById("customizeThisMap").checked=editingThisMap();
        Array.prototype.forEach.call(document.querySelectorAll("[data-map-style]"),function(button){
            var pressed=button.dataset.mapStyle===profile.style;
            button.setAttribute("aria-pressed",pressed?"true":"false");
            button.classList.toggle("is-current",pressed);
        });
        var root=document.getElementById("mapLayerControls");root.textContent="";
        var exitGroup=layerSection("Escape Spawn Locations");
        [["cellar","Storm Cellars"],["gate","Escape Gates"],["vehicleExit","Vehicle exit trigger areas"],
         ["drain","Sewer / Storm Drains"],["car","Civilian escape sedans"]].forEach(function(entry){
            exitGroup.appendChild(makeCheckbox(entry[1],profile.layers[entry[0]],function (value) {
                updateMapProfile(function(p){p.layers[entry[0]]=value;});
            }));
        });
        var spawnNote=document.createElement("p");spawnNote.className="spawn-disclaimer";
        spawnNote.textContent="All possible escape spawn locations are shown; active locations vary from match to match.";
        exitGroup.appendChild(spawnNote);
        root.appendChild(exitGroup);
        var itemGroup=layerSection("Escape Items Locations");
        itemGroup.appendChild(makeCheckbox("Show tagged escape-item sources",profile.layers.items,function(value){
            updateMapProfile(function(p){p.layers.items=value;});
        }));
        [["car","Car-related"],["cellar","Cellar-related"],["gate","Gate-related"]].forEach(function(entry){
            itemGroup.appendChild(makeCheckbox("Include " + entry[1] + " supplies",profile.purposes[entry[0]],function(value){
                updateMapProfile(function(p){p.purposes[entry[0]]=value;});
            }));
        });
        Object.keys(ITEM_TAG_LABELS).forEach(function(tag){
            itemGroup.appendChild(makeCheckbox(ITEM_TAG_LABELS[tag],profile.itemTags[tag],function(value){
                updateMapProfile(function(p){p.itemTags[tag]=value;});
            }));
        });
        var help=document.createElement("p");help.className="map-help-copy";
        help.textContent="Item sources may contain different supplies each match. Indoor/outdoor placement and container contents remain unverified; Fuse positions are not source-confirmed.";
        itemGroup.appendChild(help);
        var iconNote=document.createElement("p");iconNote.className="map-help-copy";
        iconNote.textContent="Game icons identify possible supplies. Grouped icons mark sources with more than one possible item, not guaranteed combined loot. The crate symbol is used where the exact game icon is unconfirmed.";
        itemGroup.appendChild(iconNote);
        var itemSpawnNote=document.createElement("p");itemSpawnNote.className="spawn-disclaimer";
        itemSpawnNote.textContent="This layer shows positive-weight, tagged direct spawners only, not every item location. Contents and activation vary by match.";
        itemGroup.appendChild(itemSpawnNote);
        root.appendChild(itemGroup);
        var searchableGroup=layerSection("Searchable Locations (loot unknown)");
        searchableGroup.appendChild(makeCheckbox("Show searchable objects",profile.layers.searchable,function(value){
            updateMapProfile(function(p){p.layers.searchable=value;});
        }));
        [["furniture","Furniture and containers"],["vehicle","Searchable vehicles"]].forEach(function(entry){
            searchableGroup.appendChild(makeCheckbox(entry[1],profile.searchableKinds[entry[0]],function(value){
                updateMapProfile(function(p){p.searchableKinds[entry[0]]=value;});
            }));
        });
        var searchCount=currentMap().locations.filter(function(loc){return loc.type==="searchable";}).length;
        var caution=document.createElement("p");caution.className="spawn-disclaimer";
        caution.textContent=searchCount+" source-identified searchable object locations. Exact loot, whether escape supplies can appear, and match activation are unknown. No item-specific icons are used.";
        searchableGroup.appendChild(caution);
        root.appendChild(searchableGroup);
    }
    function setupMapPreferences() {
        var saved=storageStore && storageStore.get("map-display-v2",null);
        mapPreferenceState={version:2,global:defaultMapProfile(),perMap:{}};
        if (saved && saved.value && typeof saved.value==="object" && saved.value.version===2) {
            mapPreferenceState.global=cleanMapProfile(saved.value.global);
            Object.keys(saved.value.perMap || {}).forEach(function(id){
                if (data.maps.some(function(m){return m.id===id;})) {
                    mapPreferenceState.perMap[id]=cleanMapProfile(saved.value.perMap[id]);
                }
            });
        }
        prefsReady=true;
        Array.prototype.forEach.call(document.querySelectorAll("[data-map-style]"),function(button){
            button.addEventListener("click",function(){switchMapStyle(button.dataset.mapStyle);});
        });
        document.getElementById("customizeThisMap").addEventListener("change",function(e){
            var id=currentMap().id;
            if (e.target.checked) mapPreferenceState.perMap[id]=cleanMapProfile(effectiveMapProfile());
            else delete mapPreferenceState.perMap[id];
            persistMapProfile();syncMapPreferenceControls();
            mapImage.src=currentMap().styles[mapStyle()];renderMap();
        });
        document.getElementById("applyAllMaps").addEventListener("click",function(){
            mapPreferenceState.global=cleanMapProfile(effectiveMapProfile());
            mapPreferenceState.perMap={};persistMapProfile();syncMapPreferenceControls();
            announce("Current map appearance preferences applied to all maps.");
        });
        document.getElementById("resetMapSettings").addEventListener("click",function(){
            mapPreferenceState={version:2,global:defaultMapProfile(),perMap:{}};
            state.overlays.escapes=true;state.overlays.addresses=false;state.overlays.streets=false;
            state.overlayOpacity.escapes=1;
            persistMapProfile();persistOverlayState();syncMapPreferenceControls();
            renderMap();announce("Map settings restored. Escape markers visible; optional supply and searchable layers hidden. Other app data preserved.");
        });
        syncMapPreferenceControls();
    }

    function renderMap() {
        var map = currentMap();
        mapTitle.textContent = map.name;
        mapImage.src = map.styles[mapStyle()];
        mapImage.alt = map.name + " " + mapStyle() + " map";
        syncSelectorState();
        syncMapPreferenceControls();
        renderLegend();
        renderReferenceOverlays();
        renderMarkers();
        syncEscapeFilters();
        renderMapSearchResults();
        renderSelectedLocation();

        window.requestAnimationFrame(function () {
            resetView();
        });
    }

    // ============================================================================
    // [JS-05] VIEWPORT TRANSFORM + DIRECT MAP INTERACTION
    // ============================================================================
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
            var pos = locationPosition(entry.location);
            var x = state.tx + pos.x * state.scale;
            var y = state.ty + pos.y * state.scale;
            var ratio=Math.max(1,state.scale/Math.max(0.0001,state.fitScale));
            var diameter=Math.min(50,34+8*Math.log2(ratio));
            if (entry.location.type === "item") diameter=Math.max(30,diameter-6);
            entry.element.style.setProperty("--marker-size",diameter+"px");
            entry.element.style.setProperty("--marker-glyph",Math.round(diameter*0.78)+"px");

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

    // ============================================================================
    // [JS-06] PERSISTENCE + THEMES
    // ============================================================================
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
                ["escapes", "addresses", "streets"].forEach(function (key) {
                    if (typeof overlayState.value[key] === "boolean") {
                        state.overlays[key] = overlayState.value[key];
                    }
                });

                if (overlayState.value.opacity && typeof overlayState.value.opacity === "object") {
                    ["escapes", "addresses", "streets"].forEach(function (key) {
                        var savedOpacity = Number(overlayState.value.opacity[key]);
                        if (Number.isFinite(savedOpacity)) {
                            state.overlayOpacity[key] = Math.max(0.1, Math.min(1, savedOpacity));
                        }
                    });
                }
            }

            var onboardingState = storageStore.get("onboarding-tour-v1-complete", false);
            onboardingComplete = onboardingState && onboardingState.value === true;
        }

        setupMapPreferences();
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


    // ============================================================================
    // [JS-07] ONBOARDING
    // ============================================================================
    var onboardingSteps = [
        {
            target: ".map-picker",
            title: "Choose a map",
            text: "Choose among five Haddonfield areas; the map icons show potential escape locations."
        },
        {
            target: "#mapViewport",
            title: "Explore the map",
            text: "Drag to move. Use the wheel, pinch, or the plus and minus controls to zoom. Tap an escape marker to see its details."
        },
        {
            target: ".layer-panel",
            title: "Customize the overlays",
            text: "Select Realistic or Paper. Customize escape types and optional item spawn markers, with automatic local saving."
        }
    ];

    function clearOnboardingTarget() {
        if (onboardingTarget) {
            onboardingTarget.classList.remove("tour-target-highlight");
            onboardingTarget = null;
        }
    }

    function positionOnboardingTour() {
        if (!onboardingTour || onboardingTour.hidden || !onboardingTarget) {
            return;
        }

        var margin = 12;
        var gap = 12;
        var targetRect = onboardingTarget.getBoundingClientRect();
        var tourRect = onboardingTour.getBoundingClientRect();
        var maxLeft = Math.max(margin, window.innerWidth - tourRect.width - margin);
        var maxTop = Math.max(margin, window.innerHeight - tourRect.height - margin);
        var left = Math.max(margin, Math.min(maxLeft, targetRect.left));
        var top;

        if (targetRect.bottom + gap + tourRect.height <= window.innerHeight - margin) {
            top = targetRect.bottom + gap;
        } else if (targetRect.top - gap - tourRect.height >= margin) {
            top = targetRect.top - gap - tourRect.height;
        } else {
            top = maxTop;
        }

        onboardingTour.style.left = Math.round(left) + "px";
        onboardingTour.style.top = Math.round(Math.max(margin, Math.min(maxTop, top))) + "px";
    }

    function ensureOnboardingTargetVisible(target) {
        var rect = target.getBoundingClientRect();
        var verticalMargin = 72;

        if (rect.bottom >= verticalMargin && rect.top <= window.innerHeight - verticalMargin) {
            return;
        }

        // Keep replay compatible with browsers that do not support the
        // scrollIntoView options object. A failed scroll must never prevent
        // the tip card itself from opening.
        try {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
            var absoluteTop = rect.top + scrollTop;
            var centeredTop = absoluteTop - Math.max(
                verticalMargin,
                (window.innerHeight - rect.height) / 2
            );
            window.scrollTo(0, Math.max(0, centeredTop));
        } catch (error) {
            try {
                target.scrollIntoView(true);
            } catch (fallbackError) {
                // Positioning still runs below; replay remains usable even if
                // programmatic scrolling is unavailable.
            }
        }
    }

    function renderOnboardingStep() {
        var step = onboardingSteps[onboardingStepIndex];
        var target = document.querySelector(step.target);
        if (!target) {
            finishOnboardingTour(true);
            return;
        }

        clearOnboardingTarget();
        onboardingTarget = target;
        onboardingTarget.classList.add("tour-target-highlight");

        // Unhide first so an unsupported scrolling API cannot leave replay
        // looking like the button did nothing.
        onboardingTour.hidden = false;
        ensureOnboardingTargetVisible(onboardingTarget);

        tourStep.textContent = "Tip " + (onboardingStepIndex + 1) + " of " + onboardingSteps.length;
        tourTitle.textContent = step.title;
        tourText.textContent = step.text;
        tourBackButton.hidden = onboardingStepIndex === 0;
        tourNextButton.textContent = onboardingStepIndex === onboardingSteps.length - 1 ? "Got it" : "Next";

        window.requestAnimationFrame(function () {
            positionOnboardingTour();
            tourNextButton.focus();
        });
        announce(step.title + ". " + step.text);
    }

    function finishOnboardingTour(markComplete) {
        if (!onboardingTour) {
            return;
        }

        onboardingTour.hidden = true;
        clearOnboardingTarget();
        onboardingTour.style.left = "";
        onboardingTour.style.top = "";
        window.removeEventListener("resize", positionOnboardingTour);
        window.removeEventListener("scroll", positionOnboardingTour, true);

        if (markComplete) {
            onboardingComplete = true;
            if (storageStore) {
                storageStore.set("onboarding-tour-v1-complete", true);
            }
        }

        if (onboardingOpener && typeof onboardingOpener.focus === "function" && onboardingOpener.isConnected) {
            onboardingOpener.focus();
        }
        onboardingOpener = null;
        announce("Tips closed. You can replay them from Settings.");
    }

    function startOnboardingTour(opener) {
        if (!onboardingTour || !tourNextButton) {
            return;
        }

        onboardingOpener = opener || (
            document.activeElement && document.activeElement !== document.body
                ? document.activeElement
                : null
        );
        onboardingStepIndex = 0;
        window.addEventListener("resize", positionOnboardingTour);
        window.addEventListener("scroll", positionOnboardingTour, true);
        renderOnboardingStep();
    }

    function setupOnboardingTour() {
        if (!onboardingTour || !showTipsButton) {
            return;
        }

        showTipsButton.addEventListener("click", function () {
            startOnboardingTour(showTipsButton);
        });

        tourSkipButton.addEventListener("click", function () {
            finishOnboardingTour(true);
        });

        tourBackButton.addEventListener("click", function () {
            if (onboardingStepIndex > 0) {
                onboardingStepIndex -= 1;
                renderOnboardingStep();
            }
        });

        tourNextButton.addEventListener("click", function () {
            if (onboardingStepIndex >= onboardingSteps.length - 1) {
                finishOnboardingTour(true);
                return;
            }
            onboardingStepIndex += 1;
            renderOnboardingStep();
        });

        onboardingTour.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                event.preventDefault();
                finishOnboardingTour(true);
            }
        });

        if (storageStore && !onboardingComplete) {
            window.setTimeout(function () {
                if (!onboardingComplete && onboardingTour.hidden) {
                    startOnboardingTour(null);
                }
            }, 450);
        }
    }

    // ============================================================================
    // [JS-08] DIALOG + PWA LIFECYCLE
    // ============================================================================
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

    // ============================================================================
    // [JS-09] RESIZE HANDLING + STARTUP
    // ============================================================================
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
    setupMapSearchAndFilters();
    setupDialog();
    renderMap();
    setupOnboardingTour();
    setupPwa();
})();
