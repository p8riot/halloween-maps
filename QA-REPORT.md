# Halloween: The Game Escape Map — QA Report

**Product:** Halloween: The Game Escape Map  
**Product version/build:** 0.1.0 Development Build 2  
**Core:** p8riot Core 0.2.0 Alpha 1  
**Release status:** Development; not Beta/RC/Stable.

## Baseline
Authoritative product baseline: exact user-supplied
`Halloween-Escape-Map-0.1.0-Development-Build-1.zip`.

This build patches that baseline. It does not replace the product with a Knowledge copy.
Core files remain unchanged from the Build 1 baseline.

## Requested changes
1. Fix the footer Theme selector so all Halloween theme names remain readable when the native select menu is opened.
2. Verify every possible escape marker on all four maps against the four newly supplied reference screenshots.

## Reference screenshot audit — PASS
The screenshots were treated as independent visual references only; they are not bundled into
the product and are not used as map artwork.

| Map | Storm Cellar | Escape Gate | Car | Total | Result |
| --- | ---: | ---: | ---: | ---: | --- |
| East Haddonfield | 5 | 1 | 4 | 10 | PASS |
| Haddonfield Heights | 8 | 3 | 4 | 15 | PASS |
| Haddonfield Town Center | 3 | 1 | 4 | 8 | PASS |
| Orange Grove Estates | 4 | 3 | 5 | 12 | PASS |

The screenshot category counts and relative marker layout agree with the existing
`data/maps.js` dataset derived from the saved interactive-map source. No escape coordinate or
count changes were required.

## Theme selector fix — PASS
- The footer select now uses an explicit high-contrast dark control surface and light text.
- `color-scheme: dark` is applied to the native select to request a matching browser/OS popup.
- Theme `<option>` elements also receive explicit dark backgrounds and light text as an
  additional compatibility safeguard.
- The fix does not alter any theme data, theme persistence behavior, or semantic escape colors.

## Regression / static checks — PASS
- All 27 baseline package files are preserved.
- The four HD map assets remain byte-for-byte unchanged and 4096 x 4096.
- `data/maps.js` remains unchanged from Development Build 1.
- Marker dataset remains 10 / 15 / 8 / 12 for the four maps.
- Storm Cellar remains red, Escape Gate green, and Car blue in every theme.
- Product JavaScript, service worker, Core, and module JavaScript pass syntax checks.
- `manifest.webmanifest` parses as valid JSON.
- No duplicate HTML IDs detected.
- Referenced local HTML assets exist.
- Service-worker precache entries resolve to files in the package.
- Service-worker cache identity advanced to `halloween-escape-map-v0.1.0-dev2`.
- Visible product build identity is Development Build 2.
- Visible attribution remains `p8riotCore`; only `p8riot` is linked to
  `https://linktr.ee/p8riot`.
- Bundled Core identity remains 0.2.0 Alpha 1; no Stable claim is made.

## WARNING
- Native `<select>` popup rendering is partially controlled by the browser/operating system.
  The explicit option colors plus `color-scheme: dark` address the observed light-popup /
  light-text failure, but exact native popup appearance can differ by browser/platform.
- An interactive Chromium re-run was attempted for this build, but local/localhost navigation
  is blocked by the execution environment. Current Build 2 interaction remains NOT TESTED here;
  Development Build 1's prior emulation results are historical evidence only, not a new PASS.
- The current escape pictograms remain local vector approximations of the supplied screenshot
  icon language; the screenshot itself is not used as a product asset.

## NOT TESTED
- Current-build interactive browser regression because local/localhost navigation is blocked in
  this execution environment.
- Native select popup appearance on every Windows/macOS/Linux browser theme.
- Native Web Storage persistence across a real navigable-origin reload.
- Actual service-worker registration/control on a deployed GitHub Pages origin.
- Offline reload using the installed service worker.
- Real install eligibility/native install prompt.
- Native install/uninstall redetection across browsers.
- GitHub Pages deployment.
- Android physical-device behavior / installed PWA.
- iPhone Safari / Add to Home Screen / installed behavior.
- iPad Safari portrait/landscape physical-device behavior.
- Physical safe-area/notch behavior.
- Physical on-screen keyboard behavior.
- Manual screen-reader validation.
- Cross-browser manual testing in Chrome, Edge, Firefox, Safari.

## Release note
Development Build 2 is a targeted UI/readability and source-verification update. It should remain
a Development build until real-origin and representative device/browser checks are completed.
p8riot Core itself remains Alpha 1 and must not be represented as Stable.
