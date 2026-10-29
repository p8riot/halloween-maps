# Item Source Marker Icon Update, 1.2.5

**Completed:** Authentic item icons are now rendered on map item-source markers, not only in selected details. Known one-type sources get one icon. Randomized multi-type sources show all filtered possible icons at smaller scale. The unknown Cellar Key type uses the pre-existing crate symbol.

**Preserved:** Source ZIP 1.2.4, all 448 records, map artwork, all five map definitions and coordinates, existing controls and map-specific preferences, p8Core modules and stored data. Source files from original 1.2.4 retained unchanged unless listed in the patch notes. Existing SVG icons stay in the app as fallbacks. The 44px target remains.

**Tests:** Chromium inline browser tests at widths 320, 390, 768, 1366; data URI substitutes used only inside the test page because navigation to local files was blocked. Real PNG icon bytes decoded, filters changed markers correctly, 54 source markers on East Haddonfield became visible when their existing item toggle was enabled, and there were no JS errors or horizontal overflow. Syntax and archive integrity verified. These are simulated browser checks, not gameplay or installed-PWA tests.

**Known limits:** The game-file tag `Cellar Key` lacks a verified matching texture. The Fuse item icon exists for details but there are no trusted Fuse item-source coordinates in the dataset. Game asset redistribution permissions still unverified; private preview only. Future improvements require in-game map validation, and a confirmed Cellar Key icon if available.
