# HTG Maps — QA Report

**Product:** HTG Maps  
**Product version:** 1.0.17  
**Baseline:** exact user-supplied `HTG-Maps-1.0.16.zip`  
**Internal Core compatibility baseline:** p8riot Core 0.2.0 Alpha 1

## Requested header-credit change — PASS
- Header now reads `Created by p8riot · Interactive App`.
- Only `p8riot` remains linked.
- Link target remains exactly `https://linktr.ee/p8riot`.
- `Interactive App` is plain text.
- Header title remains `Halloween: The Game`.

## Preservation checks — PASS
- Escape map dataset and all marker coordinates are byte-for-byte unchanged from 1.0.16.
- Product storage namespace is unchanged: `halloween-escape-map`.
- Public entry path remains `index.html`.
- Core files and Core semantic/build identity are unchanged.
- Existing p8riotCore footer attribution structure is unchanged.
- Product version advanced to 1.0.17.
- Service-worker cache identity advanced to `halloween-escape-map-v1.0.17`.

## Static validation — PASS
- JavaScript syntax checks passed for all shipped `.js` files.
- Web manifest JSON parsed successfully.
- Local asset references from HTML, CSS, manifest, and service-worker app shell were checked.
- No duplicate HTML IDs were found.
- Release manifest was regenerated after the final file changes and verified against the package tree.

## Responsive/header layout — PASS in inline browser automation
The final product HTML and shipped Core/product CSS were composed into an inline browser fixture and exercised at 320, 360, 375, 390, 430, 768, 1024, 1366, and 1920 CSS-pixel widths in headless Chromium. At every tested width, the header credit stayed on one line and the document width matched the viewport width.

Normal localhost navigation was blocked by this sandbox before application code could run, so this is browser-layout evidence only. It is not a real-origin, installed-PWA, or physical-device PASS.

## PWA/offline
- Service-worker syntax/app-shell references: PASS.
- Cache identity bump for this cached HTML change: PASS.
- Actual service-worker registration/control: NOT TESTED.
- Offline reload: NOT TESTED.
- Installed PWA update behavior: NOT TESTED.

## Physical/manual validation
- Physical phone/tablet behavior: NOT TESTED.
- Manual screen-reader review: NOT TESTED.
