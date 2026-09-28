# HTG Maps

HTG Maps is a static-first interactive companion for *Halloween: The Game*. It combines four interactive maps, escape-location references, searchable map information, configurable overlays, an in-app Wiki, themes, onboarding, and optional PWA installation.

## Release identity
- Product: HTG Maps
- Product version: **1.0.20**
- Release channel: development
- Core compatibility: p8Core 0.2.0 Alpha 1 runtime files, with legacy technical filenames and globals preserved for compatibility
- Service-worker cache: `halloween-escape-map-v1.0.20`
- Storage namespace: `halloween-escape-map`

The exact task input was `HTG-Maps-1.0.20.zip`, but its internal version sources had drifted. `app-config.js` still identified 1.0.19, while unfinished UI fragments displayed 1.1.0 and older release documents displayed 1.0.17. This repair treats the internal app configuration as the current-version source and produces the synchronized 1.0.20 patch.

## 1.0.20 repair
- Fixed the desktop scroll lock so Wiki and Settings use normal document scrolling while the Maps view keeps its intentional desktop map/panel layout.
- Restored the missing Maps/Wiki/Settings navigation behavior and Wiki controller required by the HTML.
- Restored the missing CSS for primary navigation, Wiki, Settings, and view-specific scrolling.
- Removed orphaned gas-can map controls from HTML because the current app logic and map data intentionally do not ship the unverified gas-marker overlay.
- Fixed the PWA app shell by restoring the referenced root `wiki.js` file and synchronizing the cache identity.
- Synchronized visible product version, app configuration, release documentation, and service-worker cache identity to 1.0.20.
- Updated visible framework attribution to `Built with p8Core`; legacy runtime identifiers remain unchanged.
- Ran the p8Core Structured Gold Standard refinement on product source without altering the bundled Core runtime files.

## Main features
- Four 4096×4096 maps: East Haddonfield, Haddonfield Heights, Haddonfield Town Center, and Orange Grove Estates.
- Pan, zoom, reset, keyboard navigation, touch/pinch handling, map tabs/selectors, and rally-point navigation.
- Escape markers for Storm Cellars, Escape Gates, and Cars, with selected-location details and item requirements.
- Optional escape, house-address, street-name, and A–J / 1–10 grid overlays with locally persisted visibility and opacity.
- Map search and escape-type filters.
- Searchable in-app Wiki with category filters and related-entry navigation.
- Multiple Halloween-inspired visual themes.
- Install guidance and product-owned service-worker/offline shell.

## Deployment
The product uses relative URLs and can be served as ordinary static files. For PWA behavior, deploy on a secure origin such as GitHub Pages or another HTTPS host. Keep `index.html` at the publishing root and preserve file paths and casing.

After replacing a prior build, reopen or reload the site so the new `halloween-escape-map-v1.0.20` cache can take control when supported.

## Validation
See `QA-REPORT.md` for exact PASS, WARNING, and NOT TESTED evidence. See `STRUCTURED-AUDIT.md` for the Structured Gold Standard pass and `SOURCE-NOTES.md` for data provenance.
