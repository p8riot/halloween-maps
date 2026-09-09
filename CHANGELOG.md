# Changelog

This file records what was created or changed in each product build. It is separate from `QA-REPORT.md`, which records validation evidence, and `SOURCE-NOTES.md`, which records source/reference provenance.

## 1.0.17
- Clarified the header creator credit by adding `Interactive App` beside `Created by p8riot`, making the credit explicitly describe this interactive app rather than authorship of *Halloween: The Game*.
- Preserved the existing `p8riot` Linktree destination and left `Interactive App` as plain text.
- Advanced the service-worker cache identity to `halloween-escape-map-v1.0.17` so the updated cached HTML is not trapped behind the previous app shell.

## 1.0.16
- Recalibrated all 45 escape-marker coordinates against the four user-supplied reference screenshots and the bundled 4096×4096 map artwork.
- Corrected every Storm Cellar, Escape Gate, and Car marker center to the screenshot-derived reference position, including the large East Haddonfield and Haddonfield Heights offsets.
- Re-applied top-to-bottom numbering within each escape type after coordinate correction; Haddonfield Heights Storm Cellars 1 and 2 were renumbered to preserve the numbering rule.
- Preserved marker IDs, escape types, required-item data, addresses, streets, map artwork, storage semantics, and interaction behavior.
- Advanced the service-worker cache identity to `halloween-escape-map-v1.0.16`.

## 1.0.15
- Removed the redundant selected-address summary line that repeated the map name above the Address/Grid details.
- Removed the `Current map` kicker so the map toolbar shows only the active map name.
- Reduced map-toolbar vertical padding to make the map header more compact.
- Updated Player Tip copy to state that Michael Myers cannot see house addresses or street names on his in-game map.
- Advanced the service-worker cache identity to `halloween-escape-map-v1.0.15`.

## 1.0.14
- Cumulative deployment patch for sites still running HTG Maps 1.0.6. This package includes every product/runtime change from 1.0.7 through 1.0.13.
- Hardened direct house-address activation on the map by handling pointer activation on the address button itself while preserving keyboard click behavior.
- Prevented map-pan pointer handling from competing with address activation.
- Preserved explicit pointer interaction on address buttons while leaving the rest of the address overlay transparent to map gestures.
- Advanced the service-worker cache identity to `halloween-escape-map-v1.0.14`.

## 1.0.13
- Removed the word `Maps` from the visible header.
- Promoted `Halloween: The Game` to the primary header title and enlarged it on desktop while keeping tablet/mobile sizing compact.
- Added a small `Created by p8riot` creator credit beneath the title, with only `p8riot` linked to `https://linktr.ee/p8riot`.
- Removed the standalone footer and moved its theme selector, install control, product version, and p8riotCore attribution to the bottom of the information/legend panel.
- Preserved the existing theme selector and install-button IDs so behavior remains unchanged.
- Advanced the service-worker cache identity to `halloween-escape-map-v1.0.13`.

## 1.0.12
- Includes the previously undeployed 1.0.11 direct address-selection fix.
- Normal click/tap now selects an escape without leaving its map popup open.
- Escape popup pinning added: hold a touch/pen pointer for about 0.9 seconds, right-click on desktop, or press P while the marker has keyboard focus.
- Long-press pinning cancels if the pointer moves more than 10 CSS pixels, reducing accidental pins while navigating.
- Only one escape popup can be pinned at a time; normal location selection, address selection, clearing selection, or switching maps clears the pinned popup.
- Changed temporary popup focus behavior from `:focus` to `:focus-visible`.
- Added a 44 CSS-pixel Clear selection control to Selected Location.
- Rally-point selection now recenters the chosen point but only increases zoom when the current view is too far out; it never forces an already closer view to zoom out.
- Escape popups now consistently label the house callout as `Nearest address`.
- Expanded the coordinate grid from A–G / 1–8 to A–J / 1–10 for more precise player callouts and reduced grid-label size to limit clutter.
- Updated all grid references automatically through the existing coordinate-based grid calculation.
- Advanced the service-worker cache identity to `halloween-escape-map-v1.0.12`.

## 1.0.11
- Fixed map address selection by preventing the map pan gesture from capturing pointer-down events that start on interactive address labels.
- Address labels can now be clicked or tapped directly on the map, matching Rally point dropdown selection behavior.
- Advanced the service-worker cache identity to `halloween-escape-map-v1.0.11`.

## 1.0.10
- Made the currently selected map location substantially more prominent with a Halloween-orange selection halo.
- Escape markers keep their existing semantic red/green/blue type rings; the orange treatment is an outer selected-state highlight only.
- Selected house addresses now use a stronger orange border, background, and glow while hover/focus states remain distinct.
- Advanced the service-worker cache identity to `halloween-escape-map-v1.0.10`.

## 1.0.9
- Moved Selected Location to the top of the information panel, followed by the possible-spawn note and escape legend.
- Added a Rally point selector for every escape location and confirmed house address on the current map.
- Made house-address labels clickable/tappable and keyboard accessible.
- Selecting an escape or address on the map synchronizes the Rally point selector and Selected Location panel.
- Choosing a Rally point from the selector centers and zooms the map to that location.
- Address selections show the exact address and grid block; escape selections retain nearest-address, grid, and required-item details.
- Added selection highlighting for address labels.
- Advanced the service-worker cache identity to `halloween-escape-map-v1.0.9`.

## 1.0.8
- Reformatted escape-marker popups so address, grid, and item information appear on separate lines.
- Added edge-aware popup positioning near the top, left, and right sides of the map.
- Reduced popup width and padding on phones for better mobile readability.
- Advanced the service-worker cache identity to `halloween-escape-map-v1.0.8`.

## 1.0.7
- Renumbered every escape location within each escape type on each map from top to bottom; near-equal vertical positions are ordered left to right.
- Preserved all marker coordinates, types, item requirements, and internal location IDs.
- Added nearest confirmed address and grid block to the marker tooltip/popup so mobile users can see callout information immediately after selecting an escape.
- Added a versioned Michael Myers favicon URL to bypass stale browser favicon caches.
- Advanced the service-worker cache identity to `halloween-escape-map-v1.0.7`.

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
