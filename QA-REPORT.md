# HTG Maps — QA Report

**Product:** HTG Maps  
**Product version:** 1.0.16  
**Baseline:** exact user-supplied `HTG-Maps-1.0.15.zip`  
**Internal Core compatibility baseline:** p8riot Core 0.2.0 Alpha 1

## Escape-marker accuracy — PASS (reference-image alignment)
All four user-supplied reference screenshots were aligned to the bundled 4096×4096 map artwork using local image features and a robust similarity transform. Colored marker rings were then detected by center and matched one-to-one with the product's escape records by type.

- East Haddonfield: 125 inlier alignment matches from 143 accepted feature matches.
- Haddonfield Heights: 189 inlier alignment matches from 215 accepted feature matches.
- Haddonfield Town Center: 169 inlier alignment matches from 186 accepted feature matches.
- Orange Grove Estates: 542 inlier alignment matches from 567 accepted feature matches.

All 45 escape records received corrected screenshot-derived coordinates:
- East Haddonfield: 10
- Haddonfield Heights: 15
- Haddonfield Town Center: 8
- Orange Grove Estates: 12

Top-to-bottom numbering was revalidated after correction for every escape type on every map.

## Preservation checks — PASS
- Escape IDs preserved.
- Escape types preserved.
- Required-item data preserved.
- Address/street data preserved.
- Map images preserved byte-for-byte.
- Product storage namespace preserved.
- Core runtime/modules preserved.

## Static checks
- JavaScript syntax: PASS
- JSON/data parse: PASS
- Marker counts/types: PASS
- Top-to-bottom numbering: PASS
- Product version/cache identity 1.0.16: PASS
- Package integrity: PASS

## NOT TESTED
- Physical-device rendering.
- Live GitHub Pages origin.
- Installed PWA update behavior.
- Human visual inspection at every possible zoom level after deployment.
