# HTG Maps 1.0.20 — Structured Gold Standard Audit

## Stage 1 — Structured conversion
**PASS**

- Added a compact source map to `index.html`.
- Added PMS-style major-section banners to HTML, CSS, `app.js`, `wiki.js`, and `sw.js`.
- Standardized product source to four-space indentation.
- Kept `data/maps.js` and `data/wiki.js` sparse and one-field-per-line rather than padding records with null/default keys.
- Left canonical bundled Core source untouched because it is an external compatibility baseline, not product-owned code for this conversion.
- Preserved machine-facing IDs, storage namespace, file paths, map coordinates, theme IDs, and script dependency order.

## Stage 2 — Structured refinement
**PASS**

- Removed the stale global desktop scroll lock and retained one explicit view-specific desktop scroll contract.
- Removed a duplicate same-scope `.marker-layer` selector by merging its final z-index into the primary rule.
- Replaced two unnecessary `!important` margin overrides with more specific selectors.
- Kept the remaining `!important` declarations only where they serve accessibility hiding, responsive visibility, onboarding target emphasis, or reduced-motion enforcement.
- Removed stale `integration hotfix` process wording from product CSS.
- Removed the stale `p8riotcore-brand` presentation class and normalized visible attribution to `p8Core`.
- Confirmed no duplicate semicolons and no dense one-line CSS rule blocks.
- Confirmed JavaScript still parses after formatting and sectioning.

## Behavior preservation and repaired exceptions
The Structured pass was performed after functional repairs. Those repairs intentionally change broken behavior only:
- Wiki/Settings can scroll.
- primary view navigation and Wiki behavior now execute;
- missing `wiki.js` is restored;
- unsupported gas-overlay controls are removed;
- release/PWA version surfaces are synchronized.

No map coordinate, escape-type, address, street, grid, theme-ID, storage-namespace, or Core-runtime migration was introduced.
