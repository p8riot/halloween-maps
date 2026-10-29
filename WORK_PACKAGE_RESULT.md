# Work Package 1.2.3: Escape Guide and Marker Simplification

**Status:** Development preview, not final.
**Verified baseline:** `Halloween_The_Game_Companion_App_1.2.2_Maps_Interaction_Preview.zip` SHA-256 `f4ed409ec01c6c1dc421e8e398a2c3b2d01963c8f11381f04dbb33d19886674e`.

**Modified source:** `index.html`, `app.js`, `styles.css`, `data/maps.js`, `app-config.js`, `sw.js`.
**Preserved:** Five source maps and 448 mapped records, artwork bytes, map IDs and coordinates, Wiki, p8Core runtime, storage namespaces, themes, original app identity. Existing v2 map preferences load without destructive reset.

**Tests:** Simulated Chromium interactions across 320/390/768/1366px PASS; JS syntax PASS; precache path audit PASS; original art/wiki/core byte equality PASS; four user map-research ZIPs inspected, no standalone escape-icon assets. Archive verified independently after packaging. Detailed results `MAPS_1_2_3_QA.json`.

**Not tested:** Real game map/escape mechanics (including Tower Farm drain details), live-origin PWA offline/install, real-device screen readers or gameplay marker location accuracy. Simulated browser renders used small stub images and do not verify artwork scaling on all devices.

**Next safe work:** User-approved game-icon asset provenance and map location correctness, followed by deferred release-gate QA; Challenges then Wiki. Do not claim game-authentic HUD icons are present without source assets and rights review.
