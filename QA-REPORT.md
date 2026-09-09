# HTG Maps — QA Report

**Product:** HTG Maps  
**Product version:** 1.0.4  
**Internal Core compatibility baseline:** p8riot Core 0.2.0 Alpha 1

## Baseline
Authoritative product baseline: exact prior package `HTG-Maps-1.0.3.zip`.

Version 1.0.4 is a theme-label and source-cleanup update. Product behavior, map data,
storage semantics, public paths, and Core runtime are preserved unless explicitly listed.

## Theme names — PASS
Visible theme labels:
- Haddonfield Night
- Halloween Night
- The Shape
- Smith's Grove
- The Boogeyman
- Blackest Eyes

Internal theme IDs are unchanged, preserving existing locally saved theme selections.

## Source-cleanliness audit — PASS
Product source was checked for:
- obsolete Development Build/update-history comments;
- TODO/FIXME markers;
- unused named JavaScript functions;
- single-use declared JavaScript variables indicating obvious dead declarations;
- duplicate HTML IDs;
- stale 1.0.3 product identity in active source;
- invalid local file references;
- JavaScript syntax errors;
- manifest/service-worker path errors.

No safe dead JavaScript function/variable removal was identified. Working interaction code
was intentionally preserved rather than refactored solely to reduce line count.

Removed:
- obsolete product CSS update/build comments;
- obsolete service-worker version comment.

Normalized:
- trailing whitespace/newline formatting in product JS/data files.

## Regression preservation — PASS (static/byte comparison)
Unchanged byte-for-byte from the exact 1.0.3 baseline:
- `data/maps.js` content semantics;
- all four 4096×4096 HD map assets;
- app/escape icon assets;
- all bundled p8riotCore runtime/module files.

Existing product behavior retained:
- map switching;
- pan/zoom/pinch logic;
- escape markers and required items;
- address/street/grid overlays;
- per-layer opacity controls;
- local preference persistence;
- nearest-address/grid callouts;
- install/PWA mechanics.

## Static checks
- JavaScript syntax: **PASS**
- Manifest JSON: **PASS**
- Duplicate HTML IDs: **PASS**
- Local HTML assets: **PASS**
- Service-worker precache paths: **PASS**
- Theme ID continuity: **PASS**
- Product version/cache identity 1.0.4: **PASS**
- Package hash/byte verification: **PASS**

## WARNING
The theme names changed, but their cosmetic palettes/background placeholders did not.
This is intentional until final theme artwork is supplied.

## NOT TESTED
- 1.0.4 on the live GitHub Pages origin.
- Physical phone/tablet responsive behavior for this build.
- Service-worker update from 1.0.3 to 1.0.4 on the live origin.
- Offline reload after the 1.0.4 update.
- Installed-PWA update behavior.
- Manual screen-reader validation.
