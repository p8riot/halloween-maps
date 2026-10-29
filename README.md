# Halloween: The Game Companion App 1.2.5 | Item Map Icon Development Preview

**Development preview only. Not approved for public release.**

This complete, self-contained app is based on the exact verified 1.2.3 Escape Guide Preview. Unzip into its own folder and open `index.html`. Older ZIPs remain preserved. The app may also be hosted from a secure origin for PWA testing.

## Changes in 1.2.5

- Map item-source markers now display the original game icons for verified sedan keys, gas cans, repair kits, and bolt cutters.
- Mixed randomized sources show multiple small symbols so they are not presented as fixed single-item spawns. The unknown Cellar Key retains the original crate symbol.
- Changing item filters updates each source marker to show only enabled item categories; location text still lists all possible recorded items.
- Original marker sizes, positions, hit targets, colors, map data, storage keys and custom SVG assets remain unchanged.
- This is a **private development preview**; publisher permissions for extracted game art remain unverified.

## Changes in 1.2.4

- Four real game textures replace the previous custom map icons for cellar, gate, storm drain and civilian sedan. The distinct vehicle departure-route symbol remains custom.
- Five real game item icons are added to selected-location requirements when there is an exact item match. Randomized supply source markers stay generic to avoid mislabeling uncertain contents.
- The original custom SVGs remain in the package. No map records, coordinates, wiki, storage identifiers or Core files changed.
- All game icon assets originate from the user's FModel export ZIPs or the same connected game export folder. Raw .uasset Texture2D payloads were decoded directly into lossless PNG files.
- **Rights restriction:** FModel extraction proves asset provenance, not redistribution permission. This development preview is for personal evaluation only until rights to publish game artwork are verified.

## Prior work

## Changes in 1.2.3

- One civilian sedan checkbox now controls all sedan spawn markers. Previously saved map profiles are accepted under the existing `map-display-v2` key. If either historical sedan control was disabled, new combined car toggle starts disabled.
- A compact, individually organized **Quick Escape Notes** section summarizes storm cellars, gates, civilian sedans, Tower Farm drains, police escapes, and vehicle exit trigger areas.
- Storm drains on Tower Farm are described as following cellar-style clearing and unlocking, based on player feedback. Check the in-match HUD for the exact variant; this has not been separately verified against the new map gameplay blueprint.
- Repeated not-guaranteed location warnings have been removed from legends, tooltips and selection text. Two dedicated short disclaimers now appear at the bottom of **Escape Spawn Locations** and **Escape Items Locations** filter groups.
- The version/build info is now only at the bottom of the Settings page, and the outdated `1.1.2` version readout was corrected. Map footer attribution remains.
- Cosmetic labels for cars/item sources are simpler. Existing map artwork, 448 source records, marker IDs, theme settings, Wiki and Core unchanged.
- PWA cache identifier advanced to avoid mixing old and new app shell files.

## Source icons

Four supplied map research ZIPs were inspected. Each has map imagery, research data or overlays, **not a distinct set of in-game HUD escape icons**. The previous research ZIPs had no separate icons. New FModel exports supplied later do contain the original Texture2D art, used in this private development preview. The original SVGs remain for rollback; publisher/rights permission is still unverified.

## Checks and remaining gates

See `MAPS_1_2_3_QA.json` for exact checks and caveats. Chromium simulated UI checks passed at 320, 390, 768, and 1366px with lightweight placeholder bitmaps. Node syntax, cached asset paths, archive integrity and source preservation have been audited. Live-origin/installed-PWA and real-game map coordinates remain untested.

No destructive data migration: existing storage key `map-display-v2` retained. Revert by opening original v1.2.2 ZIP. User-controlled stored map visibility will remain available.
