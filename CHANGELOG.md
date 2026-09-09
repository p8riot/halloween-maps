# Changelog

This file records what was created or changed in each product build. It is separate from `QA-REPORT.md`, which records validation evidence, and `SOURCE-NOTES.md`, which records source/reference provenance.

## 1.0.4
- Renamed visible theme labels to Halloween-film-inspired names:
  - Haddonfield Night
  - Halloween Night
  - The Shape
  - Smith's Grove
  - The Boogeyman
  - Blackest Eyes
- Preserved the existing internal theme IDs so locally saved theme preferences are not reset.
- Removed obsolete build/update-history comments from product CSS and service-worker source.
- Normalized product source formatting without changing working runtime behavior.
- Audited `app.js` for unused named functions and declared variables; no safe dead code was identified for removal.
- Advanced the PWA cache identity to `halloween-escape-map-v1.0.4`.

## 1.0.3
- Reworked responsive priorities to **mobile first, tablet second, wide desktop third**.
- Kept the compact native map selector through phone and tablet widths (up to 1023 CSS px); horizontal map tabs are reserved for wider layouts.
- Kept phone/tablet content in a single-column task flow so the map remains the primary interaction and the escape/details/settings panel follows it.
- Removed the desktop fixed-height/locked-scroll behavior from phone/tablet widths so normal page scrolling is preserved.
- Increased useful map viewport height on tablets while keeping a compact phone header and toolbar.
- Tightened phone spacing, heading size, panel radius, and toolbar controls to preserve more screen area for the map.
- Preserved safe-area padding, pinch zoom, touch targets, overlay persistence, map data, PWA identity, and all existing product behavior.
- Advanced product version and service-worker cache identity to 1.0.3.

## 1.0.2
- Renamed the product to **HTG Maps**.
- Set the browser/document title to exactly `HTG Maps`.
- Set the PWA manifest `name` and `short_name` to exactly `HTG Maps` for installed-app and home-screen naming.
- Added `application-name` and `apple-mobile-web-app-title` metadata using `HTG Maps`.
- Kept the header eyebrow `Halloween: The Game` and replaced the old product heading with `Maps by p8riot`.
- Linked only the header `p8riot` name to `https://linktr.ee/p8riot`.
- Removed the header subtitle `Potential escape spawn locations and required items` because the side panel already communicates that information.
- Changed the visible footer product identity to `HTG Maps 1.0.2`.
- Preserved the existing `halloween-escape-map` storage namespace and PWA manifest `id`/scope so the rename does not deliberately reset saved preferences or app identity.
- Advanced the service-worker cache identity to `halloween-escape-map-v1.0.2`.
- Preserved all map datasets, overlays, opacity/persistence behavior, selected-location address/grid callouts, themes, pan/zoom, PWA mechanics, HD maps, and bundled p8riotCore runtime files.

## 1.0.1
- Promoted the product identity to semantic version `1.0.1`; current user-facing identity no longer uses a separate Development Build number.
- Removed the redundant `Always visible` kicker and `Escape legend` title from the side panel.
- Reordered the side panel so escape information and selected-location details are prioritized.
- Moved `Player Tip — House Addresses` below the escape content.
- Moved and renamed `Map layers` to `Map settings`, positioned below the Player Tip.
- Simplified the footer to show `Halloween Escape Map 1.0.1`.
- Kept the `p8riotCore` attribution brand/link but removed its visible Core version/build.
- Preserved overlay visibility/opacity persistence, nearest-address and grid callouts, map/escape/address/street datasets, themes, PWA/install behavior, and the four HD map assets.
- Advanced the product service-worker cache identity to `halloween-escape-map-v1.0.1`.

## 0.1.0 — Development Build 4
- Added independent 10–100% opacity sliders for Escape Locations, House Addresses, Street Names, and the A–G / 1–8 Grid.
- Set uncluttered defaults: escapes 100%, addresses 85%, streets 80%, grid 35%.
- Persisted both overlay visibility and opacity in local product storage so user choices restore on later visits and installed-PWA launches while site data remains available.
- Retained compatibility with Development Build 3 saved overlay visibility values.
- Added `Nearest address` to the Selected Location panel using the closest confirmed address coordinate on the active map.
- Added `Grid` to the Selected Location panel using the selected escape coordinate and the map's A–G / 1–8 reference grid.
- Added this `CHANGELOG.md` as the ongoing build-history record.
- Advanced the product service-worker cache identity to `halloween-escape-map-v0.1.0-dev4`.
- Preserved the HD map files, existing map/escape/address/street datasets, themes, PWA install presentation, storage namespace, public paths, and bundled p8riotCore 0.2.0 Alpha 1 files.

## 0.1.0 — Development Build 3
- Added independently toggleable House Addresses, Street Names, and A–G / 1–8 Grid overlays.
- Made Escape Locations independently toggleable.
- Added locally persisted overlay visibility.
- Added the Player Tip explaining the user-confirmed gameplay fact that Michael Myers cannot see house addresses on his in-game map, making survivor address callouts useful in proximity chat.
- Added confirmed address and street-reference data for all four current maps from user-supplied in-game map screenshots.
- Corrected Haddonfield Heights address 854 to 864.
- Confirmed Haddonfield Town Center 1005 and Orange Grove Estates 1521.
- Advanced the PWA cache identity to Development Build 3.
- Preserved all four 4096×4096 HD map images and escape-location datasets.

## 0.1.0 — Development Build 2
- Fixed Theme selector readability by explicitly using a high-contrast dark native-select presentation.
- Re-audited all four escape-location datasets against user-supplied reference screenshots.
- Confirmed existing escape counts and relative marker patterns; no escape-data correction was required.
- Preserved the HD map assets and existing interaction behavior.

## 0.1.0 — Development Build 1
- Created the initial static-first interactive map PWA for the four current maps.
- Added one-map-at-a-time selection, HD map rendering, pan/zoom/reset interaction, and touch/pinch support logic.
- Added semantic escape markers for Storm Cellar, Escape Gate, and Car with item requirements.
- Added a persistent legend/details panel and marker hover/focus information.
- Added six Halloween-named color themes with local theme persistence.
- Added a GitHub Pages-ready manifest, product service worker/offline shell, app icons, and install instructions for major mobile/desktop platforms.
- Bundled p8riot Core 0.2.0 Alpha 1 Storage, Dialog, and PWA Helper modules.
- Structured map data so additional maps can be added without rebuilding the map-selection UI.
