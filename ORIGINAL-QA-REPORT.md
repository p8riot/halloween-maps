# HTG Maps — QA Report

**Product:** HTG Maps  
**Release:** 1.0.20  
**Release channel:** development  
**Task baseline:** exact uploaded `HTG-Maps-1.0.20.zip`  
**Resolved pre-fix internal version:** 1.0.19 from `app-config.js`  
**Core compatibility baseline:** p8Core 0.2.0 Alpha 1 runtime

## Scroll and view repair — PASS
- The obsolete generic desktop `body { overflow-y: hidden; }` lock was removed from the base desktop rule.
- Desktop Maps intentionally retains viewport locking, with the information panel scrolling locally.
- Desktop Wiki and Settings explicitly use normal document scrolling.
- Phone and tablet layouts retain normal document scrolling.
- A simulated Chromium test at a 1366×360 viewport verified that Wiki has overflow and `window.scrollY` advances after programmatic scrolling.

## Broken integration repair — PASS
- `wiki.js`, referenced by both `index.html` and the service-worker app shell, is present in the repaired package.
- Maps, Wiki, and Settings primary navigation switches views and updates active navigation state.
- Wiki entry count, search, category filtering, article rendering, and related-entry controls execute without page errors in the simulated browser test.
- Settings theme changes apply to the document.
- `Show map tips` returns to Maps and opens the existing onboarding tour.

## Orphaned gas-overlay UI — PASS
- Stale gas-can layer/toggle/opacity controls were removed from the HTML.
- This matches the current `app.js` and `data/maps.js`, which intentionally do not contain gas-marker overlay runtime/data after the earlier accuracy correction.
- Wiki text about gasoline as a game item remains intact; only the unsupported map-overlay UI was removed.

## Version and PWA package integrity — PASS (static)
- Product version is synchronized to 1.0.20 in `app-config.js`, visible UI, README, QA metadata, and release manifest.
- Service-worker cache identity is `halloween-escape-map-v1.0.20`.
- JavaScript syntax checks pass for every shipped `.js` file.
- `manifest.webmanifest` parses successfully.
- HTML local asset/script/style references resolve.
- Every service-worker app-shell file reference resolves.
- No duplicate HTML IDs were found.
- Pinch zoom remains permitted by the viewport metadata.

## Responsive and interaction regression — PASS (simulated Chromium)
A navigation-free inline Chromium fixture composed the shipped HTML, Core CSS/JS, product CSS/JS, and data in actual browser DOM/CSS/JavaScript at these CSS-pixel widths:

`320, 360, 375, 390, 430, 768, 1024, 1366, 1920`

Verified at those widths:
- no JavaScript page errors;
- no unintended page-level horizontal overflow;
- four map choices render;
- escape markers render;
- address overlay toggle and opacity controls work;
- map search returns results;
- marker selection updates Selected Location;
- theme selection updates the active theme;
- onboarding can be opened from Settings;
- Wiki navigation/search/category filtering work;
- desktop Maps uses panel scrolling while Wiki/Settings expose page scrolling.

**Evidence level:** SIMULATED. This exercises real Chromium layout and JavaScript, but not a navigable origin.

## Structured Gold Standard — PASS (source audit)
- Source map added near the top of `index.html`.
- Major HTML, CSS, app JS, Wiki JS, and service-worker regions have consistent banners.
- Product source uses four-space indentation.
- Large data records remain one field per line and sparse optional fields are preserved.
- Same-scope duplicate CSS selector audit passes.
- Obsolete duplicate desktop scroll-lock rules were consolidated.
- Two avoidable `!important` margin overrides were replaced with sufficient selector specificity.
- Remaining `!important` uses are restricted to accessibility hiding, responsive visibility, target highlighting, and reduced-motion enforcement.
- No duplicate semicolons, stale `integration hotfix` process text, dense one-line CSS blocks, or stale visible `p8riotCore` attribution class remain in product source.

## PWA/live-origin validation — NOT TESTED
The execution environment blocks both localhost and `file://` browser navigation. Therefore these claims are not promoted to live-origin PASS:
- actual service-worker registration/control;
- offline reload;
- browser install eligibility and install prompt;
- cache replacement on an already installed copy.

Static service-worker syntax and app-shell reference checks passed.

## Physical/manual accessibility — NOT TESTED
- Physical iOS/Android installed behavior: NOT TESTED.
- On-screen-keyboard behavior on physical devices: NOT TESTED.
- Manual screen-reader validation: NOT TESTED.
