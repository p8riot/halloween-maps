# Source Notes

The initial four-map dataset was extracted from the user-supplied saved page:
`All Map Escape Locations - Halloween_ The Game.html` and its companion asset ZIP.

The app does not reuse the source site's runtime, ads, tracking, page layout, or marker-dot implementation.

Map counts:
- East Haddonfield: 5 Storm Cellar, 1 Escape Gate, 4 Car
- Haddonfield Heights: 8 Storm Cellar, 3 Escape Gate, 4 Car
- Haddonfield Town Center: 3 Storm Cellar, 1 Escape Gate, 4 Car
- Orange Grove Estates: 4 Storm Cellar, 3 Escape Gate, 5 Car

Category-level requirements in the supplied data:
- Storm Cellar: Escape Key OR Bolt Cutters; Melee Weapon To Break Boards
- Escape Gate: Escape Key OR Bolt Cutters; Fuse
- Car: Sedan Key; Repair Kit; Fuel Can

Marker presentation follows the user's screenshot direction: red ring for Storm Cellar,
green ring for Escape Gate, blue ring for Car, with pictograms instead of plain dots.
The HD maps come only from the supplied map asset files, not from the screenshot.

## Reference screenshot verification — Development Build 2

The four user-supplied map screenshots were used only as independent visual references.
They are not bundled into the product and do not replace the supplied 4096 x 4096 HD map assets.

Visual marker audit against the screenshots:
- East Haddonfield: 5 Storm Cellar, 1 Escape Gate, 4 Car — 10 total — PASS
- Haddonfield Heights: 8 Storm Cellar, 3 Escape Gate, 4 Car — 15 total — PASS
- Haddonfield Town Center: 3 Storm Cellar, 1 Escape Gate, 4 Car — 8 total — PASS
- Orange Grove Estates: 4 Storm Cellar, 3 Escape Gate, 5 Car — 12 total — PASS

The category pattern and relative marker placement shown in each screenshot agree with the
existing `data/maps.js` dataset derived from the saved interactive-map source. No map-data
correction was required for this build.

