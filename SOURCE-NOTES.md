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



## Address, street, and grid references — Development Build 3

The user supplied in-game map screenshots for all four current maps specifically to extract
house addresses, street names, and grid references. These screenshots are reference material only.
They are not bundled into the product and do not replace the supplied 4096 x 4096 HD map assets.

Confirmed address sets:

- East Haddonfield: 832, 828, 812, 715, 628, 630, 731, 723, 725, 733, 729, 718
- Haddonfield Heights: 702, 705, 709, 713, 807, 805, 803, 801, 915, 808, 804, 800, 918, 922, 864, 850
- Haddonfield Town Center: 1086, 985, 978, 1007, 1005, 1003, 1001, 951, 901, 1008, 966, 962, 956, 954, 950, 902, 908
- Orange Grove Estates: 1514, 1518, 1510, 1482, 1486, 1484, 1522, 1554, 1542, 1532, 1521, 1520, 1495, 1497, 1549, 1535, 1525, 1513

Street names visible in the supplied screenshots:

- East Haddonfield: Wallard St., Virginia St., Copper Ln., Cade Ave., Davis Dr.
- Haddonfield Heights: Syracuse Ave., La Mirada Way, Lampkin Lane, Victoria Way,
  Edgemont St., McKinzie Lane
- Haddonfield Town Center: Flemming Ave., Peach St., Denny Ave., Eleanor Ave.
- Orange Grove Estates: Westridge Dr., Stephens Ave., Orange Grove Ave., Fletcher Way

The screenshots show an A–G / 1–8 reference grid. Development Build 3 renders this as a separate,
optional product overlay rather than baking it into the HD map images.

The user also supplied the gameplay note that Michael Myers cannot see house addresses on his
in-game map. The product presents that as a Player Tip for survivor proximity-chat coordination.


## Selected-location callouts and opacity controls — Development Build 4

Development Build 4 does not add or reinterpret map-source data.

- `Nearest address` is calculated from the selected escape coordinate and the confirmed address-label coordinates already stored for that map. The address with the shortest Euclidean distance in the 4096×4096 map coordinate space is shown.
- The A–G / 1–8 grid reference is calculated from the selected escape coordinate using equal-width/equal-height cells across the full map coordinate space, matching the existing grid overlay implementation.
- Overlay opacity values are presentation preferences only. They do not alter marker category colors, address/street text values, map coordinates, or game meaning.
- Overlay visibility and opacity are stored locally under the existing product storage namespace; clearing site/app data resets those preferences.

## Version 1.0.1 presentation update
The Version 1.0.1 update changes product UI hierarchy/version presentation only. It does not alter the source-derived map, escape, address, street, or item-requirement datasets.

## Product identity rename — Version 1.0.2

The user-facing product name changed to `HTG Maps`. Historical source/provenance sections retain
their original build terminology where needed for traceability. The rename does not alter map,
escape, address, street, grid, or item-requirement source data.
