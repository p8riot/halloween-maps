## 1.2.3 additional QA note

This build's source and simulated browser checks are recorded in `MAPS_1_2_3_QA.json`. Older checks below apply to their historical builds, not to a fresh 1.2.3 installed-PWA run. A live origin and in-game marker verification remain required before final release.

# 1.2.1 Correction Preview QA

## Verified locally
- Previous automated suite: **34 / 34 PASS** using isolated Chromium DOM/script injection, including map switching, marker visibility, saved settings, source data counts, mobile selection and preference reset.
- Additional assertions: Five maps, **448 original source records** retained, **94** distinct default visible escape/sedan markers (one grouped overlapping Town Center pair), 353 optional item spawners preserved, no doubled source route icon, and 45 original marker IDs retained.
- All 69 address overlays and 22 street labels projected inside 4096px map bounds and visually screened against source Paper map artwork. Four Town Center labels adjusted; QA_LABEL_AUDIT has per-map proofs. These are NOT live-game placement certifications.
- Both Tower Farm maps decoded from supplied 4096px native Unreal textures: offset `0x79`; Realistic PF_DXT1, Paper PF_DXT5. Original bytes were extracted from the same RARs; additional archives were not needed.
- Footer/header personal links now `https://linktr.ee/MWHQ`.
- App map tabs moved directly after header; grid tip removed, no generated grid UI.
- Core runtime byte-for-byte matches original 1.1.2. ZIP integrity and manifest recorded during packaging.

## Not yet certified
- Real live-game locations vs projected position, including exterior trigger areas, especially Tower Farm and multi-trigger Town Center; PDF/asset rights; installed-PWA service worker update behavior on supported HTTPS origin.
- Actual indoor/outdoor and drawer/cabinet grouping for item spawner actors, resident-dependent item pools and sewer item requirements.
- 1.2.1 local browser test used script-injected JavaScript because file-navigation browser sandbox blocked file:// and HTTP origin. Actual image asset naturalWidth validated programmatically with Pillow and file checksums. No claim of in-browser fetched asset screenshot validation.

## 1.2.2 additional QA
- 59 pass, 0 fail: static source identity plus isolated Chromium behavior tests at four viewport widths, documented in `MAPS_1_2_2_QA.json`.
- Explicit real-artwork/Core/data-file SHA equality to 1.2.1 baseline. Browser UI tests used light map stubs; actual image artwork, in-browser network fetching, installed PWA, and live-game positions are **NOT TESTED** in 1.2.2.
- New map-tab navigation, meaningful escape slider, install name and link wording checked.
