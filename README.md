# HTG Maps

Static-first interactive map PWA for Halloween: The Game.

## Current product identity
- Product: HTG Maps
- Product version: 1.0.4
- PWA cache: `halloween-escape-map-v1.0.4`

The browser tab, install/app name, and product identity are `HTG Maps`. The header keeps
`Halloween: The Game` and displays `Maps by p8riot`, with `p8riot` linked to the canonical Linktree.
The visible footer shows the product version and `p8riotCore` attribution without displaying Core version/build.
Core compatibility identity remains internal release metadata for QA and runtime checks.

## Version 1.0.4
- Renamed the six visible themes to Halloween-film-inspired names while preserving their internal theme IDs so saved user theme preferences continue to work.
- Theme names are now: **Haddonfield Night**, **Halloween Night**, **The Shape**, **Smith's Grove**, **The Boogeyman**, and **Blackest Eyes**.
- Removed obsolete build/update-history comments from product CSS and service-worker source.
- Normalized product source whitespace and re-audited `app.js` for unused named functions and single-use declared variables; no safe dead-code removals were identified, so working interaction logic was preserved rather than refactored unnecessarily.
- Preserved all map data, overlays, opacity settings, local preference persistence, themes, install behavior, selected-location callouts, and p8riotCore runtime files.
- Advanced the service-worker cache identity to `halloween-escape-map-v1.0.4`.

## Version 1.0.3
- Responsive priority is now explicitly mobile first, tablet second, then wide desktop.
- Phones and tablets use the compact native map selector instead of horizontal tabs.
- Phone/tablet layouts remain single-column so the interactive map stays first and the information/settings panel follows below.
- Tablet map height is expanded to use available touch-screen space; phone header/toolbar spacing is reduced to protect map area.
- Wide desktop retains the persistent side-panel/tabs layout.
- Existing local preferences, map/escape/address/street/grid data, themes, PWA mechanics, and storage namespace are unchanged.

## Version 1.0.2
- Renamed the product from the previous Escape Map identity to **HTG Maps**.
- Browser tab title is now exactly `HTG Maps`.
- PWA manifest `name` and `short_name` are now exactly `HTG Maps` for installed-app/home-screen presentation.
- Added `application-name` and `apple-mobile-web-app-title` metadata using `HTG Maps`.
- Header remains `Halloween: The Game` and now reads `Maps by p8riot`, with only `p8riot` linked to `https://linktr.ee/p8riot`.
- Removed the redundant header subtitle `Potential escape spawn locations and required items`; that information remains in the side panel.
- Footer product identity is now `HTG Maps 1.0.2`; the existing p8riotCore attribution remains without exposing Core version/build.
- Preserved the existing storage namespace so theme and overlay preferences survive the rename.
- Advanced the service-worker cache identity to `halloween-escape-map-v1.0.2`.
- Preserved map data, overlays, opacity persistence, selected-location callouts, themes, pan/zoom, install behavior, and HD assets.

## Version 1.0.1
- Removed the redundant `Always visible` kicker and `Escape legend` heading.
- Prioritized escape content at the top of the side panel.
- Moved `Player Tip — House Addresses` below escape/selected-location content.
- Moved `Map settings` below the Player Tip.
- Simplified the visible footer identity to `Halloween Escape Map 1.0.1`.
- Removed the visible p8riotCore version/build from the footer while preserving the canonical p8riotCore attribution link.
- Preserved all Build 4 map data, overlay opacity controls, saved overlay preferences, themes, selected-location address/grid callouts, PWA/install behavior, and map assets.
- Advanced the service-worker cache identity to `halloween-escape-map-v1.0.1`.

## Development Build 4
- Added an opacity slider for each map overlay: Escape Locations, House Addresses, Street Names, and Grid.
- Overlay visibility and opacity settings persist locally using the existing `halloween-escape-map` storage namespace.
- Preserved backward compatibility with the Development Build 3 `map-overlays` saved-state shape.
- Selected escape details now show the nearest confirmed house address when address data exists.
- Selected escape details now show the A–G / 1–8 grid cell calculated from the escape coordinate.
- Added `CHANGELOG.md` as the product's ongoing creation/update history.
- Preserved all four HD maps, address/street datasets, escape coordinates, themes, install behavior, and p8riotCore runtime files.

Default overlay presentation:
- Escape Locations: ON, 100%
- House Addresses: ON, 85%
- Street Names: ON, 80%
- A–G / 1–8 Grid: OFF, 35%

If a user changes any of these values, the saved value is restored on later browser or installed-PWA launches while the same site data remains available.

## Included maps
- East Haddonfield
- Haddonfield Heights
- Haddonfield Town Center
- Orange Grove Estates

Each map uses the supplied 4096×4096 HD source image. Screenshots supplied later are reference material for escape verification and map annotations only; they are not used as map artwork.

## Escape marker system
- Storm Cellar: red ring + escape-door pictogram
- Escape Gate: green ring + escape-door pictogram
- Car: blue ring + car pictogram

Escape colors are semantic and remain consistent across cosmetic themes.

## Selected-location callouts
Selecting an escape marker shows:
- escape type and possible-location number;
- nearest confirmed house address, when available;
- A–G / 1–8 grid cell, when grid data exists;
- required escape items.

`Nearest address` means the address-label coordinate with the shortest map-coordinate distance to the selected escape. It does not claim the escape is physically attached to that property.

## GitHub Pages deployment
This package uses relative URLs and can be deployed at a GitHub Pages project path.

1. Replace the published repository contents with this build while preserving paths/casing.
2. Keep `index.html` at the publishing root.
3. Allow GitHub Pages to finish deployment.
4. Reload/reopen the site so the 1.0.2 service worker can replace the prior cache.
5. Re-test install/update/offline behavior on the real HTTPS origin.

## PWA
`manifest.webmanifest` and `sw.js` are product-owned. Browser use does not require installation.

The footer Install option uses the bundled p8riot PWA Helper where supported and falls back to platform-specific instructions. Browsers do not expose one universal live uninstall event, so uninstall re-detection remains best-effort.

## Themes
Included color themes:
- Haddonfield Night
- Halloween Night
- The Shape
- Smith's Grove
- The Boogeyman
- Blackest Eyes

Theme choice is persisted locally. Theme background artwork remains reserved for a later product update.

## Adding future maps
Add a new HD local map image and one data object in `data/maps.js` with a unique ID, name, image dimensions, escape locations, and optional address/street/grid overlays. The UI is data-driven and does not assume exactly four maps.

## Runtime
Normal use requires no npm, Node.js, CDN, hosted font, bundler, compilation step, or development server.

See:
- `CHANGELOG.md` for creation/update history.
- `SOURCE-NOTES.md` for source/reference provenance.
- `QA-REPORT.md` for verified, warning, and not-tested status.
