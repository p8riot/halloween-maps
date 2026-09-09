# Halloween: The Game Escape Map

Development Build 2 of a static-first interactive map PWA.

## Current product identity
- Product: Halloween: The Game Escape Map
- Product version: 0.1.0 Development Build 2
- Core: p8riot Core 0.2.0 Alpha 1 (pre-Stable)


## Development Build 2 changes
- Fixed the footer Theme selector so both the closed control and its opened native option list use high-contrast text/surfaces.
- Audited all four map datasets against the user-supplied reference screenshots as well as the saved interactive-map source.
- No escape coordinates or counts required correction: the Build 1 dataset already contains every reference escape marker shown in the screenshots.

Reference screenshot audit:
- East Haddonfield: 5 Storm Cellar, 1 Escape Gate, 4 Car — 10 total
- Haddonfield Heights: 8 Storm Cellar, 3 Escape Gate, 4 Car — 15 total
- Haddonfield Town Center: 3 Storm Cellar, 1 Escape Gate, 4 Car — 8 total
- Orange Grove Estates: 4 Storm Cellar, 3 Escape Gate, 5 Car — 12 total

## Included maps
- East Haddonfield
- Haddonfield Heights
- Haddonfield Town Center
- Orange Grove Estates

Each map uses the supplied 4096x4096 source image and the supplied escape coordinates.
The source map data provides category-level escape requirements; no per-marker item variation
was present in the supplied map widget data.

## Escape marker system
- Storm Cellar: red ring + door/escape pictogram
- Escape Gate: green ring + door/escape pictogram
- Car: blue ring + car pictogram

All possible escape markers are visible by default. Hover/focus shows the escape requirements.
Selecting a marker also places the requirements in the persistent details panel.

## GitHub Pages deployment
This package uses only relative URLs, so it can be deployed at a GitHub Pages project path.

1. Put the contents of this directory at the published repository path.
2. Enable GitHub Pages for the chosen branch/folder.
3. Open the HTTPS GitHub Pages URL.
4. Reload once after the first service-worker registration if testing offline control immediately.

Do not rename public files casually after release; update the service-worker precache list
and cache identity whenever cached assets change.

## PWA
`manifest.webmanifest` and `sw.js` are product-owned.
The current cache identity is `halloween-escape-map-v0.1.0-dev2`.

The footer Install button:
- invokes the browser install prompt when p8riot PWA Helper reports one;
- otherwise opens Android, iPhone/iPad, and desktop installation instructions;
- is hidden in standalone display mode;
- remembers a successful install in browsers where the install event is available;
- reappears when a future browser install prompt indicates the app is no longer installed.

Browsers do not expose one universal live uninstall event, so uninstall re-detection is
best-effort and re-evaluated when the site is revisited/focused and when install eligibility returns.

## Themes
The first build includes six Halloween-named color themes:
- Midnight Manor
- Jack-o'-Lantern Glow
- Witching Hour
- Graveyard Fog
- Zombie Night
- Blood Moon

Theme selection is persisted with p8riot Storage. Real theme background images are intentionally
not bundled yet; `assets/themes/` is reserved for the artwork to be supplied later.

Escape marker colors remain semantic and do not change with themes.

## Adding future maps
Add a new HD local map image and one object in `data/maps.js` with:
- unique `id`
- `name`
- image path
- width/height
- `locations` containing type/x/y/number

Map selectors and marker/legend rendering are data-driven and do not assume exactly four maps.

## Runtime
No npm, Node.js, CDN, hosted font, bundler, or development server is required at runtime.
