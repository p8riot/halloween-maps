/* Expanded research-backed Wiki. Source confidence and patch limitations are disclosed per article. */
window.HTGWikiData = {
  "version": 3,
  "entries": [
    {
      "id": "item-spawns",
      "title": "Item Spawns",
      "category": "Items",
      "type": "Spawn information",
      "summary": "Tagged direct spawners and searchable objects are different types of location. Loot varies by match.",
      "details": [
        "Tagged escape-supply sources identify positive-weight item pools in exported game files. A marked location does not guarantee that item in a particular match.",
        "Searchable locations are shown in a separate optional map layer. Their exact loot pools and escape-item eligibility have not been verified.",
        "Searchable furniture and vehicles may contain useful items. A searchable-object icon does NOT mean the object contains an Escape Key, Fuse, or any specific supply.",
        "Use the Maps filters to distinguish source-confirmed tagged spawners from searchable objects. Spawn activity and loot can vary from match to match."
      ],
      "tags": [
        "spawn",
        "gas",
        "bolt cutters",
        "keys",
        "fuse"
      ],
      "related": [
        "gas-can-spawns",
        "bolt-cutters",
        "sedan-key",
        "fuse",
        "map-possible-locations",
        "items-possible-spawns"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "gas-can-spawns",
      "title": "Gas-Can Spawns",
      "category": "Maps",
      "type": "Spawn information",
      "summary": "The map shows positively tagged possible gas-can sources, not a fixed amount available per match.",
      "details": [
        "Gas-can markers show source-backed possible locations, not a guarantee of activation or exact quantity.",
        "A match may also contain searchable objects with unknown contents. The current source audit cannot establish their Gas Can eligibility."
      ],
      "tags": [
        "gas",
        "spawn",
        "overlay",
        "maps"
      ],
      "related": [
        "gasoline",
        "item-spawns"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "gate-1",
      "title": "Escape Gate 1",
      "category": "Escapes",
      "type": "Gate variant",
      "summary": "Escape Gate 1 requires a Fuse, cleared foliage, and either an Escape Key or Bolt Cutters.",
      "details": [
        "1× Fuse.",
        "Clear foliage.",
        "1× Escape Key OR 1× Bolt Cutters."
      ],
      "tags": [
        "gate",
        "fuse",
        "foliage",
        "escape key",
        "bolt cutters"
      ],
      "related": [
        "fuse",
        "escape-key",
        "bolt-cutters",
        "gate-2",
        "gate-3"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "gate-2",
      "title": "Escape Gate 2",
      "category": "Escapes",
      "type": "Gate variant",
      "summary": "Escape Gate 2 requires a Fuse, breaking the boards with weapons, and either an Escape Key or Bolt Cutters.",
      "details": [
        "1× Fuse.",
        "Break boards with weapons.",
        "1× Escape Key OR 1× Bolt Cutters."
      ],
      "tags": [
        "gate",
        "fuse",
        "boards",
        "weapon",
        "escape key",
        "bolt cutters"
      ],
      "related": [
        "fuse",
        "escape-key",
        "bolt-cutters",
        "gate-1",
        "gate-3"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "gate-3",
      "title": "Escape Gate 3",
      "category": "Escapes",
      "type": "Gate variant",
      "summary": "Escape Gate 3 requires a Fuse and either an Escape Key or Bolt Cutters.",
      "details": [
        "1× Fuse.",
        "1× Escape Key OR 1× Bolt Cutters."
      ],
      "tags": [
        "gate",
        "fuse",
        "escape key",
        "bolt cutters"
      ],
      "related": [
        "fuse",
        "escape-key",
        "bolt-cutters",
        "gate-1",
        "gate-2"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "cellar-1",
      "title": "Cellar Door 1",
      "category": "Escapes",
      "type": "Cellar variant",
      "summary": "Cellar Door 1 requires Bolt Cutters for the lock before the cellar door can be opened.",
      "details": [
        "Lock: Bolt Cutters.",
        "Open cellar door."
      ],
      "tags": [
        "cellar",
        "bolt cutters",
        "lock"
      ],
      "related": [
        "bolt-cutters",
        "cellar-2",
        "cellar-3"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "cellar-2",
      "title": "Cellar Door 2",
      "category": "Escapes",
      "type": "Cellar variant",
      "summary": "Cellar Door 2 has boards that require a sharp weapon and a lock that requires Bolt Cutters.",
      "details": [
        "Boards: weapon (sharp).",
        "Lock: Bolt Cutters.",
        "Open cellar door."
      ],
      "tags": [
        "cellar",
        "boards",
        "sharp weapon",
        "bolt cutters"
      ],
      "related": [
        "bolt-cutters",
        "cellar-1",
        "cellar-3"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "cellar-3",
      "title": "Cellar Door 3",
      "category": "Escapes",
      "type": "Cellar variant",
      "summary": "Cellar Door 3 requires Bolt Cutters for the lock and clearing the foliage before opening the cellar.",
      "details": [
        "Lock: Bolt Cutters.",
        "Clear foliage.",
        "Open cellar door."
      ],
      "tags": [
        "cellar",
        "foliage",
        "bolt cutters"
      ],
      "related": [
        "bolt-cutters",
        "cellar-1",
        "cellar-2"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "broken-sedan",
      "title": "Broken Sedan Escape",
      "category": "Escapes",
      "type": "Vehicle escape",
      "summary": "The Broken Sedan escape requires a Sedan key/key set, Gasoline, and a Repair Kit.",
      "details": [
        "1× Sedan key/key set.",
        "1× Gasoline.",
        "1× Repair Kit."
      ],
      "tags": [
        "sedan",
        "car",
        "keys",
        "gasoline",
        "repair kit"
      ],
      "related": [
        "sedan-key",
        "gasoline",
        "repair-kit"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "police-car",
      "title": "Police Car",
      "category": "Police",
      "type": "Vehicle",
      "summary": "A police car requires the specific Police Car Key matched to that vehicle, not any police key.",
      "details": [
        "Police cars enter through the police-response system; they are not treated as fixed match-start map markers.",
        "A Police Car Key only unlocks and starts its matching police car. A key for one police car cannot be used with an unrelated police car.",
        "The map excludes police car and police-key pins to avoid suggesting their locations are fixed before a match.",
        "Police-car keys are tied to the correct police vehicle; do not assume every key works with every police car."
      ],
      "tags": [
        "police",
        "car",
        "keys"
      ],
      "related": [
        "police-car-keys",
        "police-response"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "police-response",
      "title": "Police Arrival Trigger",
      "category": "Police",
      "type": "Mechanic",
      "summary": "Police can spawn after they have been called to investigate and officers then find a body or see Michael.",
      "details": [
        "Police spawn when officers find a body or see Michael.",
        "Police must already have been called to investigate."
      ],
      "tags": [
        "police",
        "body",
        "michael",
        "investigate"
      ],
      "related": [
        "police-car",
        "police-car-keys"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "map-target-markers",
      "title": "Map Target Markers",
      "category": "Maps",
      "type": "Map legend",
      "summary": "Resident and Special Target discoveries are gameplay-dependent; this companion map does not track them live.",
      "details": [
        "Resident and Special Target discovery changed with the October 27 update. Proximity, conversation and Michael’s Bloodthirst can affect discovery, depending on the role.",
        "The map does not show live target locations or automatically detect which characters are present in your match."
      ],
      "tags": [
        "special targets",
        "residents",
        "map markers"
      ],
      "related": [
        "gas-can-spawns"
      ],
      "evidenceStatus": "patch_1_2_0_summary"
    },
    {
      "id": "fuse",
      "title": "Fuse",
      "category": "Items",
      "type": "Escape item",
      "summary": "The Fuse is used for gate escapes.",
      "details": [
        "Used in the Escape Gate unlocking process.",
        "The current tagged direct-spawner dataset does not verify Fuse pickup coordinates.",
        "Fuses may also become available through mechanisms beyond the tagged direct-spawners, but their exact locations and activation rules are not verified in this build."
      ],
      "tags": [
        "fuse",
        "gate",
        "escape item"
      ],
      "related": [
        "gate-1",
        "gate-2",
        "gate-3",
        "item-spawns"
      ],
      "evidenceStatus": "item_use_known_spawn_sources_unknown"
    },
    {
      "id": "bolt-cutters",
      "title": "Bolt Cutters",
      "category": "Items",
      "type": "Escape item",
      "summary": "Bolt Cutters are used for cellar access and can also satisfy the lock requirement on several gate variants.",
      "details": [
        "Bolt Cutters can help open some storm cellars and gates when the match requires cutting a chain or matching lock.",
        "The game may offer other tools or interactions depending on the exit variant. Follow the on-screen prompt.",
        "Tagged possible Bolt Cutters source markers are optional on the maps. Their appearance is not guaranteed in a particular match.",
        "Specific container loot eligibility is not established by the exported source data."
      ],
      "tags": [
        "bolt cutters",
        "cellar",
        "gate",
        "tool"
      ],
      "related": [
        "cellar-1",
        "cellar-2",
        "cellar-3",
        "gate-1",
        "gate-2",
        "gate-3",
        "item-spawns"
      ],
      "evidenceStatus": "item_use_known_container_loot_unknown"
    },
    {
      "id": "escape-key",
      "title": "Escape / Padlock Key",
      "category": "Items",
      "type": "Escape item",
      "summary": "The Escape / Padlock Key is used for cellar and gate escape access.",
      "details": [
        "Used for cellar and gate escapes.",
        "On the listed gate variants, it can be used instead of Bolt Cutters."
      ],
      "tags": [
        "escape key",
        "padlock key",
        "gate",
        "cellar"
      ],
      "related": [
        "gate-1",
        "gate-2",
        "gate-3",
        "bolt-cutters"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "sedan-key",
      "title": "Sedan Key",
      "category": "Items",
      "type": "Escape item",
      "summary": "The Sedan Key is used for the main car escape.",
      "details": [
        "Used for the main car escape.",
        "Possible spawn locations include drawers, tops of tables or shelves, the ground, chests, and red toolboxes."
      ],
      "tags": [
        "sedan",
        "car",
        "keys",
        "escape"
      ],
      "related": [
        "broken-sedan",
        "gasoline",
        "repair-kit",
        "item-spawns"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "gasoline",
      "title": "Gasoline",
      "category": "Items",
      "type": "Escape item",
      "summary": "Gasoline is used for the main car escape.",
      "details": [
        "Used for the main car escape.",
        "Gas cans spawn in set places; roughly 3–4 usually appear per match."
      ],
      "tags": [
        "gasoline",
        "gas",
        "car",
        "escape"
      ],
      "related": [
        "broken-sedan",
        "gas-can-spawns",
        "sedan-key",
        "repair-kit"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "repair-kit",
      "title": "Repair Kit",
      "category": "Items",
      "type": "Tool",
      "summary": "The Repair Kit is used for the main car escape and other repair interactions.",
      "details": [
        "A Repair Kit is needed to repair a broken civilian escape sedan.",
        "Other repair interactions may also use repair resources, but check the in-game prompt.",
        "Tagged possible Repair Kit spawner locations are visible through an optional map filter. Spawn activity is randomized."
      ],
      "tags": [
        "repair kit",
        "car",
        "radio",
        "phone",
        "power box"
      ],
      "related": [
        "broken-sedan",
        "sedan-key",
        "gasoline"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "police-car-keys",
      "title": "Police Car Keys",
      "category": "Items",
      "type": "Key item",
      "summary": "Each Police Car Key is vehicle-specific. It will not operate every police car.",
      "details": [
        "Find the police key corresponding to the particular police car you wish to use.",
        "These keys do not represent match-start map pickups; their locations are not displayed on the interactive maps.",
        "The Sedan Key for the repairable civilian escape car is a different item and remains eligible for optional map candidate pins.",
        "Police-car keys are tied to the correct police vehicle; do not assume every key works with every police car."
      ],
      "tags": [
        "police",
        "car",
        "keys"
      ],
      "related": [
        "police-car",
        "police-response"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "flare-gun",
      "title": "Flare Gun",
      "category": "Items",
      "type": "Utility",
      "summary": "Firing the Flare Gun into the air grants 1 police tier instantly.",
      "details": [
        "Shoot into the air to gain 1 police tier instantly.",
        "Less useful in the mid-to-late game.",
        "Police Presence effects were adjusted in an October 2026 balance update. Older fixed-tier claims are not treated as current until verified."
      ],
      "tags": [
        "flare gun",
        "police",
        "tier"
      ],
      "related": [
        "police-response"
      ],
      "evidenceStatus": "balance_recheck_required"
    },
    {
      "id": "health-spray",
      "title": "Health Spray",
      "category": "Items",
      "type": "Healing",
      "summary": "Health Spray heals you.",
      "details": [
        "Heals you."
      ],
      "tags": [
        "health",
        "heal",
        "spray"
      ],
      "related": [
        "first-aid-kit"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "first-aid-kit",
      "title": "First Aid Kit",
      "category": "Items",
      "type": "Healing",
      "summary": "The First Aid Kit heals you and has 3 charges.",
      "details": [
        "Heals you.",
        "3 charges."
      ],
      "tags": [
        "health",
        "heal",
        "first aid",
        "charges"
      ],
      "related": [
        "health-spray"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "brass-lantern",
      "title": "Brass Lantern",
      "category": "Items",
      "type": "Utility",
      "summary": "The Brass Lantern is a light-based utility item that affects Myers while he is within its light.",
      "details": [
        "Affects Myers while he is within the light around the holder."
      ],
      "tags": [
        "lantern",
        "light",
        "myers"
      ],
      "related": [],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "pocket-butterfly-knife",
      "title": "Pocket / Butterfly Knife",
      "category": "Items",
      "type": "Defense",
      "summary": "The Pocket / Butterfly Knife counters Myers' grab.",
      "details": [
        "Counters Myers' grab."
      ],
      "tags": [
        "knife",
        "grab",
        "myers"
      ],
      "related": [
        "ice-pick",
        "ancient-amulet"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "ancient-amulet",
      "title": "Ancient Amulet",
      "category": "Items",
      "type": "Defense",
      "summary": "The Ancient Amulet is a defensive item that counters a Myers grab.",
      "details": [
        "Counters a Myers grab."
      ],
      "tags": [
        "amulet",
        "grab",
        "myers"
      ],
      "related": [
        "pocket-butterfly-knife",
        "ice-pick"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "ice-pick",
      "title": "Ice Pick",
      "category": "Items",
      "type": "Defense",
      "summary": "The Ice Pick counters Myers' grab.",
      "details": [
        "Counters Myers' grab."
      ],
      "tags": [
        "ice pick",
        "grab",
        "myers"
      ],
      "related": [
        "pocket-butterfly-knife",
        "ancient-amulet"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "fragile-hourglass",
      "title": "Fragile Hourglass",
      "category": "Items",
      "type": "Utility",
      "summary": "A utility item.",
      "details": [],
      "tags": [
        "hourglass",
        "utility"
      ],
      "related": [],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "road-flare",
      "title": "Road Flare",
      "category": "Items",
      "type": "Stun item",
      "summary": "The Road Flare stuns Myers.",
      "details": [
        "Stuns Myers."
      ],
      "tags": [
        "road flare",
        "stun",
        "myers"
      ],
      "related": [
        "firecrackers",
        "flashlight"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "firecrackers",
      "title": "Firecrackers",
      "category": "Items",
      "type": "Stun item",
      "summary": "Firecrackers stun Myers.",
      "details": [
        "Stuns Myers."
      ],
      "tags": [
        "firecrackers",
        "stun",
        "myers"
      ],
      "related": [
        "road-flare",
        "flashlight"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "flashlight",
      "title": "Flashlight",
      "category": "Items",
      "type": "Stun item",
      "summary": "The Flashlight stuns Myers.",
      "details": [
        "Stuns Myers."
      ],
      "tags": [
        "flashlight",
        "stun",
        "myers"
      ],
      "related": [
        "road-flare",
        "firecrackers"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "joint",
      "title": "Joint",
      "category": "Items",
      "type": "Consumable",
      "summary": "The Joint heightens your senses and highlights key items or residents.",
      "details": [
        "Heightens your senses.",
        "Highlights key items or residents."
      ],
      "tags": [
        "joint",
        "senses",
        "items",
        "residents"
      ],
      "related": [
        "beer",
        "soda",
        "map-target-markers"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "beer",
      "title": "Beer",
      "category": "Items",
      "type": "Consumable",
      "summary": "Beer completely gets rid of fear and calms you down.",
      "details": [
        "Completely gets rid of fear.",
        "Calms you down."
      ],
      "tags": [
        "beer",
        "fear",
        "calm"
      ],
      "related": [
        "joint",
        "soda"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "soda",
      "title": "Soda",
      "category": "Items",
      "type": "Consumable",
      "summary": "Soda replenishes stamina.",
      "details": [
        "Replenishes stamina."
      ],
      "tags": [
        "soda",
        "stamina"
      ],
      "related": [
        "joint",
        "beer"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "map-east-haddonfield",
      "title": "East Haddonfield",
      "category": "Maps",
      "type": "Map",
      "summary": "The current companion map records 11 possible escape-start sites, plus separately identified departure areas and item sources.",
      "details": [
        "Storm cellar sites: 6.",
        "Escape gates: 1.",
        "Possible parked civilian escape sedans: 4.",
        "Storm-drain escape entrances: 0.",
        "Vehicle departure trigger areas (not parked cars): 3.",
        "Tagged possible escape-supply source actors: 54.",
        "Searchable-object positions with unknown item contents: 107, hidden by default in a separate map layer.",
        "These positions are based on available FModel exports. Active exits and pickups vary by match, and room-level placement has not been gameplay-verified.",
        "Realistic maps have no generated grid. Paper maps keep only the grid baked into their artwork."
      ],
      "tags": [
        "East Haddonfield",
        "map",
        "escapes",
        "addresses",
        "streets",
        "grid"
      ],
      "related": [
        "gas-can-spawns"
      ],
      "evidenceStatus": "source_level_counts_not_live_game_certified"
    },
    {
      "id": "map-haddonfield-heights",
      "title": "Haddonfield Heights",
      "category": "Maps",
      "type": "Map",
      "summary": "The current companion map records 16 possible escape-start sites, plus separately identified departure areas and item sources.",
      "details": [
        "Storm cellar sites: 9.",
        "Escape gates: 3.",
        "Possible parked civilian escape sedans: 4.",
        "Storm-drain escape entrances: 0.",
        "Vehicle departure trigger areas (not parked cars): 6.",
        "Tagged possible escape-supply source actors: 23.",
        "Searchable-object positions with unknown item contents: 177, hidden by default in a separate map layer.",
        "These positions are based on available FModel exports. Active exits and pickups vary by match, and room-level placement has not been gameplay-verified.",
        "Realistic maps have no generated grid. Paper maps keep only the grid baked into their artwork."
      ],
      "tags": [
        "Haddonfield Heights",
        "map",
        "escapes",
        "addresses",
        "streets",
        "grid"
      ],
      "related": [
        "gas-can-spawns"
      ],
      "evidenceStatus": "source_level_counts_not_live_game_certified"
    },
    {
      "id": "map-haddonfield-town-center",
      "title": "Haddonfield Town Center",
      "category": "Maps",
      "type": "Map",
      "summary": "The current companion map records 9 possible escape-start sites, plus separately identified departure areas and item sources.",
      "details": [
        "Storm cellar sites: 3.",
        "Escape gates: 1.",
        "Possible parked civilian escape sedans: 5.",
        "Storm-drain escape entrances: 0.",
        "Vehicle departure trigger areas (not parked cars): 7.",
        "Tagged possible escape-supply source actors: 8.",
        "Searchable-object positions with unknown item contents: 95, hidden by default in a separate map layer.",
        "These positions are based on available FModel exports. Active exits and pickups vary by match, and room-level placement has not been gameplay-verified.",
        "Realistic maps have no generated grid. Paper maps keep only the grid baked into their artwork."
      ],
      "tags": [
        "Haddonfield Town Center",
        "map",
        "escapes",
        "addresses",
        "streets",
        "grid"
      ],
      "related": [
        "gas-can-spawns"
      ],
      "evidenceStatus": "source_level_counts_not_live_game_certified"
    },
    {
      "id": "map-orange-grove-estates",
      "title": "Orange Grove Estates",
      "category": "Maps",
      "type": "Map",
      "summary": "The current companion map records 13 possible escape-start sites, plus separately identified departure areas and item sources.",
      "details": [
        "Storm cellar sites: 4.",
        "Escape gates: 3.",
        "Possible parked civilian escape sedans: 6.",
        "Storm-drain escape entrances: 0.",
        "Vehicle departure trigger areas (not parked cars): 4.",
        "Tagged possible escape-supply source actors: 164.",
        "Searchable-object positions with unknown item contents: 11, hidden by default in a separate map layer.",
        "These positions are based on available FModel exports. Active exits and pickups vary by match, and room-level placement has not been gameplay-verified.",
        "Realistic maps have no generated grid. Paper maps keep only the grid baked into their artwork."
      ],
      "tags": [
        "Orange Grove Estates",
        "map",
        "escapes",
        "addresses",
        "streets",
        "grid"
      ],
      "related": [
        "gas-can-spawns"
      ],
      "evidenceStatus": "source_level_counts_not_live_game_certified"
    },
    {
      "id": "police-wagon",
      "title": "Police Wagon",
      "category": "Police",
      "type": "Escape method",
      "summary": "The police wagon is a police-response escape option, not a guaranteed match-start map location.",
      "details": [
        "Follow the match’s police-response mechanics to use a police wagon when it becomes available.",
        "Police wagons are not marked as fixed starting locations in the companion maps.",
        "Exact wagon requirements vary with gameplay and are not presented as a conventional item checklist."
      ],
      "tags": [
        "police",
        "wagon",
        "escape",
        "vehicle"
      ],
      "related": [
        "police-response",
        "police-car"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "tower-farm-sewer",
      "title": "Tower Farm Sewer / Storm Drain Escape",
      "category": "Escapes",
      "type": "New escape route",
      "summary": "Tower Farm has possible storm-drain escape locations; the exact required items remain unverified.",
      "details": [
        "The October 27 Tower Farm update introduced a sewer escape route.",
        "The game level exports contain nine placed storm-drain escape actors, which the companion map shows as possible locations.",
        "The item requirements are not specified in the supplied level actor exports and are not yet verified by an authoritative gameplay source.",
        "Do not assume the cellar escape requirements also apply to the sewer."
      ],
      "tags": [
        "tower farm",
        "storm drain",
        "sewer",
        "map",
        "escape"
      ],
      "related": [
        "item-spawns"
      ],
      "evidenceStatus": "legacy_guide_review_pending"
    },
    {
      "id": "map-tower-farm",
      "title": "Tower Farm",
      "category": "Maps",
      "type": "Map guide",
      "summary": "The current companion map records 22 possible escape-start sites, plus separately identified departure areas and item sources.",
      "details": [
        "Storm cellar sites: 7.",
        "Escape gates: 0.",
        "Possible parked civilian escape sedans: 6.",
        "Storm-drain escape entrances: 9.",
        "Vehicle departure trigger areas (not parked cars): 3.",
        "Tagged possible escape-supply source actors: 104.",
        "Searchable-object positions with unknown item contents: 131, hidden by default in a separate map layer.",
        "These positions are based on available FModel exports. Active exits and pickups vary by match, and room-level placement has not been gameplay-verified.",
        "Realistic maps have no generated grid. Paper maps keep only the grid baked into their artwork."
      ],
      "related": [
        "sewer-escape",
        "map-possible-locations",
        "scythe-weapon"
      ],
      "tags": [
        "tower farm",
        "map",
        "farm",
        "storm drain",
        "scythe"
      ],
      "sourceIds": [
        "official-120",
        "official-farm",
        "gamefiles"
      ],
      "evidenceStatus": "source_level_counts_not_live_game_certified"
    },
    {
      "id": "map-possible-locations",
      "title": "Possible Locations vs Active Match Escapes",
      "category": "Maps",
      "type": "Map-reading guide",
      "summary": "Markers show what can appear on a map, not a live reading of the current match.",
      "details": [
        "The companion app is a planning map. It shows source-backed possible escape sites regardless of which escapes the game activates in one match. It does not connect to the live match or predict current availability.",
        "Civilian escape-sedan markers refer to candidate vehicle starting positions. Separate vehicle escape trigger volumes in the level files are not automatically additional cars.",
        "Players can toggle each escape type and optional supply layers without changing the underlying source records."
      ],
      "related": [
        "map-tower-farm",
        "sewer-escape",
        "items-possible-spawns"
      ],
      "tags": [
        "maps",
        "candidate",
        "random",
        "escape",
        "car"
      ],
      "sourceIds": [
        "gamefiles",
        "map-design-cp08",
        "official-multiplayer"
      ],
      "evidenceStatus": "verified_for_draft"
    },
    {
      "id": "map-paper-vs-realistic",
      "title": "Realistic and Paper Map Views",
      "category": "Maps",
      "type": "Navigation",
      "summary": "Two artwork styles, one set of possible escape locations.",
      "details": [
        "Realistic view is intended to help identify roads, buildings and terrain from their overhead appearance. It has no artificial grid or coordinate labels.",
        "Paper view retains the street names, building numbers and grid already printed into its map image. The companion app must not draw a second grid over either view.",
        "Switching views should keep the selected location, zoom and filter state. Marker offsets must follow each texture's registration rather than assume artwork is pixel-identical."
      ],
      "related": [
        "map-possible-locations"
      ],
      "tags": [
        "paper",
        "realistic",
        "grid",
        "style",
        "map"
      ],
      "sourceIds": [
        "map-design-cp08"
      ],
      "evidenceStatus": "design_specification_not_implemented"
    },
    {
      "id": "items-possible-spawns",
      "title": "How Possible Item Spawns Work",
      "category": "Items",
      "type": "Loot guide",
      "summary": "A marked item location means an item may appear there, never that it is guaranteed.",
      "details": [
        "The supplied level files contain weighted candidate item lists for individual item-spawner actors. A single spawner may allow several different items, so the map should use one physical marker with a list of candidate contents.",
        "Other loot can come from searchable containers, interactions and systems that are not fully described by those weighted actor records. The app must not claim its displayed item candidates are an exhaustive list of every way to find a supply.",
        "Possible escape-item markers are optional and hidden by default. Players can filter by Sedan Key, Gas Can, Repair Kit, Cellar Key and Bolt Cutters. The drop percentages are not established."
      ],
      "related": [
        "item-spawns",
        "items-indoors-outdoors",
        "map-possible-locations"
      ],
      "tags": [
        "loot",
        "spawn",
        "random",
        "weights",
        "items"
      ],
      "sourceIds": [
        "gamefiles",
        "official-110",
        "official-multiplayer"
      ],
      "evidenceStatus": "verified_for_draft"
    },
    {
      "id": "items-indoors-outdoors",
      "title": "Indoor and Outdoor Spawn Labels",
      "category": "Items",
      "type": "Data-quality guide",
      "summary": "Indoor or outdoor labels remain unverified for most candidate item spawners.",
      "details": [
        "A two-dimensional overhead map may make a point appear to lie over a building or on open ground. That does not prove which floor or searchable object contains it.",
        "Our room outlines and available collision exports are incomplete, and several checks disagree with the artwork. The app should keep those candidates labeled Unverified rather than falsely sorting them into an Indoor or Outdoor filter.",
        "Ordinary item-spawner actors and searchable-container components are different source systems. That distinction alone does not prove whether an item is loose or inside a drawer."
      ],
      "related": [
        "items-possible-spawns"
      ],
      "tags": [
        "indoor",
        "outdoor",
        "container",
        "unverified"
      ],
      "sourceIds": [
        "gamefiles"
      ],
      "evidenceStatus": "research_limit_explicit"
    },
    {
      "id": "map-reference-discovery",
      "title": "Resident and Special Target Discovery",
      "category": "Maps",
      "type": "Patch-updated mechanics",
      "summary": "Resident and Special Target areas are no longer all visible at match start.",
      "details": [
        "Since Patch 1.2.0, Civilian map discoveries unfold as players approach Residents and interact with them. Convincing Residents expands discovery range and contributes toward revealing Special Targets.",
        "Michael reveals target areas gradually through Bloodthirst progression. The update defines distinct revelation milestones rather than showing all Resident and Special Target areas immediately.",
        "This guide describes the in-game map behavior. Companion app escape markers are separate, static reference locations and do not reveal the live positions of Residents."
      ],
      "related": [
        "resident-interactions",
        "michael-bloodthirst",
        "map-possible-locations"
      ],
      "tags": [
        "resident",
        "special target",
        "discovery",
        "patch 1.2.0"
      ],
      "sourceIds": [
        "official-120"
      ],
      "evidenceStatus": "verified_for_draft"
    },
    {
      "id": "sewer-escape",
      "title": "Sewer Escape / Storm Drain",
      "category": "Escapes",
      "type": "Tower Farm escape",
      "summary": "Tower Farm includes a new sewer escape; required tools or items are not yet verified.",
      "details": [
        "The official October 27 update confirms a new sewer escape in Tower Farm. The supplied level exports include nine storm-drain escape actor placements and their interaction components.",
        "The available actor instances do not state a required key, fuse, cutter or repair item. A property with a cellar-related name is not enough to infer shared escape requirements.",
        "Use the actual interaction prompt and inspect obstacles during a match. The companion guide should display Requirements unverified until a reliable gameplay or blueprint source establishes the recipe."
      ],
      "related": [
        "map-tower-farm",
        "map-possible-locations"
      ],
      "tags": [
        "sewer",
        "storm drain",
        "tower farm",
        "escape"
      ],
      "sourceIds": [
        "official-120",
        "gamefiles",
        "escape-guides-cp09"
      ],
      "evidenceStatus": "mechanic_requirements_unverified"
    },
    {
      "id": "police-wagon-guide",
      "title": "Police Wagon Escape",
      "category": "Police",
      "type": "Response-based escape",
      "summary": "The police wagon is a responding escape option, not a vehicle initially placed on the reference map.",
      "details": [
        "Police-response gameplay unfolds after contact with authorities and subsequent events in the match. The police wagon may become available during that progression, rather than existing as a fixed civilian escape sedan at match start.",
        "The Wiki may explain this method and its in-game interaction, but the map will not place Police Wagon spawn pins. We also avoid claiming fixed arrival times or an unsupported item requirement."
      ],
      "related": [
        "police-response",
        "police-car",
        "police-key-specificity"
      ],
      "tags": [
        "police",
        "wagon",
        "response",
        "escape"
      ],
      "sourceIds": [
        "legacy-app",
        "escape-guides-cp09",
        "official-multiplayer"
      ],
      "evidenceStatus": "written_guide_only"
    },
    {
      "id": "police-key-specificity",
      "title": "Matching Police Keys to Police Cars",
      "category": "Police",
      "type": "Key guidance",
      "summary": "Police-car keys must correspond to the specific police vehicle; they are not universal.",
      "details": [
        "When a police car becomes available during a match, identify the matching vehicle-specific key. Finding a different police-car key does not make it valid for every police car.",
        "Civilian Sedan Keys are separate items used for repairable civilian escape sedans. Police cars and their keys do not appear as starting-map pins in the companion app.",
        "This matching rule is user-confirmed gameplay knowledge; a future direct gameplay or blueprint test can establish the exact vehicle and key pairing labels."
      ],
      "related": [
        "police-car",
        "police-car-keys",
        "broken-sedan"
      ],
      "tags": [
        "police",
        "key",
        "matching",
        "car"
      ],
      "sourceIds": [
        "user-rule",
        "escape-guides-cp09"
      ],
      "evidenceStatus": "user_confirmed_gameplay"
    },
    {
      "id": "escape-noise",
      "title": "Noise from Escape Interactions",
      "category": "Escapes",
      "type": "Gameplay warning",
      "summary": "Working on an escape can expose your position through noise.",
      "details": [
        "The multiplayer overview warns that beginning escape sequences creates substantial noise. The October 27 patch also added noise pings from escape interactions.",
        "Treat escape preparation as a risk: check your surroundings and expect Michael to react to audible activity. The companion app shows possible sites, not whether an attempt is currently quiet or safe."
      ],
      "related": [
        "map-possible-locations",
        "sewer-escape"
      ],
      "tags": [
        "noise",
        "escape",
        "michael",
        "warning"
      ],
      "sourceIds": [
        "official-120",
        "official-multiplayer"
      ],
      "evidenceStatus": "verified_for_draft"
    },
    {
      "id": "multiplayer-roles",
      "title": "Multiplayer Roles and Objectives",
      "category": "Gameplay",
      "type": "Getting started",
      "summary": "A 1v4 match pits four Civilians against Michael Myers.",
      "details": [
        "Civilians search for supplies, contact and persuade Residents, and try to leave Haddonfield through whichever escape routes are available. They can assist one another while adapting to randomized objectives.",
        "Michael stalks, tracks and attacks residents and player Civilians. The killer also has Special Targets that offer added rewards when eliminated before a deadline.",
        "After dying, a Civilian may still support teammates through spectator systems and, under the game's rules, can return in a police-related role or as Dr. Loomis."
      ],
      "related": [
        "resident-interactions",
        "michael-killer-sense",
        "map-possible-locations"
      ],
      "tags": [
        "civilian",
        "michael",
        "1v4",
        "basics"
      ],
      "sourceIds": [
        "official-multiplayer"
      ],
      "evidenceStatus": "verified_for_draft"
    },
    {
      "id": "resident-interactions",
      "title": "Talking to Residents",
      "category": "Gameplay",
      "type": "Civilian objective",
      "summary": "Resident conversations help with police contact, followers, and escape information.",
      "details": [
        "Civilians can find and convince Residents to take the threat seriously. Successful conversations can enable more police calls, hiding commands or escorts, depending on the available interactions.",
        "Patch 1.2.0 increased the chance that Residents and Special Targets provide escape item or location information after successful conversations.",
        "A resident telling you about an item is not equivalent to a fixed starting-map item spawn. Use the in-game discovery to supplement, not replace, companion map candidate markers."
      ],
      "related": [
        "map-reference-discovery",
        "multiplayer-roles"
      ],
      "tags": [
        "residents",
        "conversation",
        "police",
        "escort"
      ],
      "sourceIds": [
        "official-multiplayer",
        "official-120"
      ],
      "evidenceStatus": "verified_for_draft"
    },
    {
      "id": "michael-killer-sense",
      "title": "Killer Sense and Stalking",
      "category": "Michael Myers",
      "type": "Core ability",
      "summary": "Killer Sense helps Michael locate and focus on victims.",
      "details": [
        "Michael starts with Killer Sense and Shape Jump as core traits. Killer Sense provides a first-person stalking perspective that strengthens awareness of nearby prey.",
        "Focusing on victims builds Stalk levels, which can improve tracking and enable further execution options. This is a general gameplay overview rather than a numerical ability reference."
      ],
      "related": [
        "michael-shape-jump",
        "michael-bloodthirst"
      ],
      "tags": [
        "michael",
        "killer sense",
        "stalk"
      ],
      "sourceIds": [
        "official-multiplayer",
        "official-progression"
      ],
      "evidenceStatus": "verified_for_draft"
    },
    {
      "id": "michael-shape-jump",
      "title": "Shape Jump and Darkness",
      "category": "Michael Myers",
      "type": "Core ability",
      "summary": "Shape Jump supports stealthy traversal, with entry and exit restrictions.",
      "details": [
        "Shape Jump lets Michael move swiftly through the environment and access Shape Dash. It is tied to cover, darkness and the target's line of sight.",
        "The official multiplayer overview states that Michael can enter or leave Shape Jump only under darkness or when he is outside a Resident's line of sight. Power and lighting changes can therefore influence pursuit routes.",
        "Movement and visibility values have been tuned in patches; do not assume old numeric values remain current."
      ],
      "related": [
        "michael-killer-sense",
        "michael-blackout"
      ],
      "tags": [
        "shape jump",
        "shape dash",
        "darkness",
        "michael"
      ],
      "sourceIds": [
        "official-multiplayer",
        "official-110"
      ],
      "evidenceStatus": "verified_for_draft"
    },
    {
      "id": "michael-blackout",
      "title": "Blackout and Escape Interactions",
      "category": "Michael Myers",
      "type": "Ability",
      "summary": "Blackout can interfere with escape routes and nearby doors.",
      "details": [
        "Blackout is one of Michael's selectable abilities. Patch 1.2.0 specifies that Blackout closes open Escapes in its radius and also locks or closes nearby doors.",
        "Civilian players should not assume a previously opened exit will stay open through Michael's ability use. This page describes the patch behavior without guessing exact radius or duration."
      ],
      "related": [
        "michael-shape-jump",
        "escape-noise"
      ],
      "tags": [
        "blackout",
        "michael",
        "doors",
        "escape"
      ],
      "sourceIds": [
        "official-progression",
        "official-120"
      ],
      "evidenceStatus": "verified_for_draft"
    },
    {
      "id": "michael-bloodthirst",
      "title": "Bloodthirst and Target Revelation",
      "category": "Michael Myers",
      "type": "Progression mechanic",
      "summary": "Michael reveals more Resident and Special Target areas as Bloodthirst rises.",
      "details": [
        "The October 27 update ties Michael's map information to Bloodthirst. At tier zero no target areas are revealed; later tiers progressively uncover Resident and Special Target areas.",
        "At the highest listed tier, the remaining Resident and Special Target areas appear, with beams for Special Targets. This is the in-game map system and should not be confused with the companion map's static possible escape locations.",
        "The exact damage and resistance effects of Bloodthirst can change by patch. This page focuses only on the developer-confirmed discovery effect."
      ],
      "related": [
        "map-reference-discovery",
        "michael-killer-sense"
      ],
      "tags": [
        "bloodthirst",
        "michael",
        "residents",
        "target"
      ],
      "sourceIds": [
        "official-120"
      ],
      "evidenceStatus": "verified_for_draft"
    },
    {
      "id": "civilian-attributes",
      "title": "Civilian Attributes",
      "category": "Civilians",
      "type": "Character guide",
      "summary": "Athleticism, Personality, Resourcefulness and Capability affect different tasks.",
      "details": [
        "Athleticism relates to movement on foot and bicycle. Personality affects how Civilians talk to and command Residents, how they alert police, and their resistance to Fear and Stalk.",
        "Resourcefulness contributes to repair skills, environmental awareness, and operating vehicles or firearms. Capability covers effectiveness with melee weapons and thrown objects.",
        "This overview is descriptive; character-specific numerical ranks should come from a verified in-game stats table before publication."
      ],
      "related": [
        "eugene-kelly",
        "michelle-blanton",
        "perk-decks"
      ],
      "tags": [
        "attributes",
        "athleticism",
        "personality",
        "resourcefulness",
        "capability"
      ],
      "sourceIds": [
        "official-progression"
      ],
      "evidenceStatus": "verified_for_draft"
    },
    {
      "id": "eugene-kelly",
      "title": "Eugene Kelly",
      "category": "Civilians",
      "type": "Character profile",
      "summary": "Eugene's Lurker trait rewards hiding in bushes.",
      "details": [
        "Eugene is a tabletop role-playing enthusiast and one of the two Civilian characters introduced in the October 27 update.",
        "His unique trait, Lurker, improves stamina regeneration and helps Stalk wear off faster while he remains hidden in stealth bushes.",
        "The developer lists Eugene as part of Civilian Pack 1. Availability may depend on owning that character pack."
      ],
      "related": [
        "civilian-attributes",
        "michelle-blanton"
      ],
      "tags": [
        "eugene",
        "lurker",
        "civilian",
        "stamina"
      ],
      "sourceIds": [
        "official-120",
        "official-civilians"
      ],
      "evidenceStatus": "verified_for_draft"
    },
    {
      "id": "michelle-blanton",
      "title": "Michelle Blanton",
      "category": "Civilians",
      "type": "Character profile",
      "summary": "Michelle's Therapeutic trait helps nearby wounded allies when she heals.",
      "details": [
        "Michelle is Haddonfield's aspiring artist and joined the Civilian roster alongside Eugene in the October 27 update.",
        "Her Therapeutic trait distributes additional healing to nearby wounded Civilians and Residents when she uses a healing item. Patch 1.2.0 describes that nearby benefit as 25% of the item's healing amount.",
        "The developer lists Michelle as part of Civilian Pack 1, so players may need that pack to select her."
      ],
      "related": [
        "eugene-kelly",
        "civilian-attributes",
        "health-spray"
      ],
      "tags": [
        "michelle",
        "therapeutic",
        "healing",
        "civilian"
      ],
      "sourceIds": [
        "official-120",
        "official-civilians"
      ],
      "evidenceStatus": "verified_for_draft"
    },
    {
      "id": "scythe-weapon",
      "title": "Scythe Starting Weapon",
      "category": "Weapons",
      "type": "Michael weapon",
      "summary": "The Scythe became available with the October 27 Tower Farm update.",
      "details": [
        "The October 27 update introduced the Scythe as a starting weapon for Michael Myers. It is associated with Tower Farm's seasonal content update.",
        "The developer lists two unlock paths: completing the Scythe Progressive Challenges or purchasing the new 1989 Michael Myers version.",
        "The Wiki should link to the separate Challenge tracker for current Scythe progression objectives instead of duplicating an unverified sequence here.",
        "The Scythe can be found on Tower Farm. It becomes a Starting Weapon after completing the Scythe Progressive Challenges, or through the Halloween 5 (1989) Michael skin unlock described in the October 27 patch.",
        "Exact damage, attack speed and individual challenge targets are not verified here."
      ],
      "related": [
        "map-tower-farm",
        "progressive-challenge-guide"
      ],
      "tags": [
        "scythe",
        "weapon",
        "michael",
        "tower farm"
      ],
      "sourceIds": [
        "official-120"
      ],
      "evidenceStatus": "verified_for_draft"
    },
    {
      "id": "michael-skins-2026",
      "title": "October 2026 Michael Myers Skins",
      "category": "Michael Myers",
      "type": "Cosmetic information",
      "summary": "The Tower Farm update introduced Halloween 5 and Halloween (2018) Michael appearances.",
      "details": [
        "The October 27 update added purchasable Michael Myers appearances inspired by Halloween 5: The Revenge of Michael Myers and Halloween (2018).",
        "These are cosmetic/character presentation options distinct from the map's escape information. Avoid assuming a different costume changes core mechanics without direct evidence.",
        "The Scythe starting weapon has an unlock route connected to purchasing the new 1989 version of Michael, as described in the same patch."
      ],
      "related": [
        "scythe-weapon"
      ],
      "tags": [
        "skins",
        "michael",
        "1989",
        "2018"
      ],
      "sourceIds": [
        "official-120"
      ],
      "evidenceStatus": "verified_for_draft"
    },
    {
      "id": "perk-decks",
      "title": "Perk Cards and Decks",
      "category": "Progression",
      "type": "Civilian customization",
      "summary": "Civilians can use Perk Points to acquire cards and assemble loadout decks.",
      "details": [
        "Matches award Perk Points, which can be spent on randomized Perk Card rolls. Greater spending can improve the odds of a higher-rarity card, while cards may also receive temporary level upgrades.",
        "Players organize their acquired cards into decks equipped on Civilian loadouts. Details such as exact card percentages are patch-sensitive and should be reviewed against current developer changes.",
        "The October 6 update also limited each deck to two copies of the same perk card."
      ],
      "related": [
        "civilian-attributes",
        "progression-tracks"
      ],
      "tags": [
        "perk",
        "deck",
        "perk points",
        "civilian"
      ],
      "sourceIds": [
        "official-progression",
        "official-110"
      ],
      "evidenceStatus": "verified_for_draft"
    },
    {
      "id": "progression-tracks",
      "title": "Progression Levels and Prestige",
      "category": "Progression",
      "type": "Progression overview",
      "summary": "Profile, Killer, Civilian and Weapon levels unlock rewards and prestige paths.",
      "details": [
        "The game tracks XP across four kinds of progress: overall Profile level, Michael's Killer level, individual Civilian character levels and Michael's weapon-specific levels.",
        "Progress can unlock cosmetics, starting items, abilities, challenge tiers and executions. Prestige is available after reaching maximum levels in the relevant progression tracks.",
        "For exact Prestige objectives and tier requirements, follow the Challenges section, which should keep sourced targets and unresolved values clearly separate."
      ],
      "related": [
        "perk-decks",
        "progressive-challenge-guide",
        "story-challenges-guide"
      ],
      "tags": [
        "profile",
        "killer",
        "civilian",
        "weapon",
        "prestige"
      ],
      "sourceIds": [
        "official-progression"
      ],
      "evidenceStatus": "verified_for_draft"
    },
    {
      "id": "story-challenges-guide",
      "title": "Story Mode Challenges",
      "category": "Challenges",
      "type": "Challenge category",
      "summary": "Optional objectives appear throughout the six-chapter Michael Myers story.",
      "details": [
        "The single-player campaign follows Michael across six chapters. Optional story objectives offer additional cosmetic rewards.",
        "The companion app's upcoming Challenges section should hold the searchable per-chapter objective list and manual completion tracker. The Wiki supplies explanations and links rather than a second progress record.",
        "Some candidate objective descriptions in the research dataset still disagree between sources; publishing should preserve the developer-first sourcing rule and flag uncertain entries."
      ],
      "related": [
        "progression-tracks",
        "progressive-challenge-guide"
      ],
      "tags": [
        "story",
        "challenge",
        "chapters",
        "singleplayer"
      ],
      "sourceIds": [
        "official-story",
        "official-progression"
      ],
      "evidenceStatus": "guide_verified_objectives_in_separate_research"
    },
    {
      "id": "progressive-challenge-guide",
      "title": "Progressive Challenges",
      "category": "Challenges",
      "type": "Challenge category",
      "summary": "Progressive objectives are sequential and linked to characters, Michael variants or weapons.",
      "details": [
        "Progressive Challenges advance through ordered objectives. They are associated with particular Civilian characters, Michael Myers variants, or weapons.",
        "The companion Challenge tracker is planned to preserve objective order, targets and rewards, with current developer patch notes overriding older third-party descriptions when the sources disagree.",
        "For the Scythe starting weapon, the developer confirms a Progressive Challenge unlock route, though that does not by itself confirm every Scythe challenge requirement."
      ],
      "related": [
        "scythe-weapon",
        "story-challenges-guide",
        "progression-tracks"
      ],
      "tags": [
        "progressive",
        "challenges",
        "sequence",
        "scythe"
      ],
      "sourceIds": [
        "official-progression",
        "official-120"
      ],
      "evidenceStatus": "guide_verified_objectives_in_separate_research"
    },
    {
      "id": "passive-challenge-guide",
      "title": "Passive Challenges",
      "category": "Challenges",
      "type": "Challenge category",
      "summary": "Passive objectives track activity without requiring a specific sequential chain.",
      "details": [
        "Passive Challenges cover recurring activities for Michael and Civilians and are automatically tracked in the game.",
        "The companion app's future Challenges section can organize these by role and milestones while allowing manual tracking of progress. This would not imply automatic synchronization with the game.",
        "Patch notes sometimes change tracking behavior or balance; the Challenges database must retain source date and confidence for each objective."
      ],
      "related": [
        "progressive-challenge-guide",
        "story-challenges-guide"
      ],
      "tags": [
        "passive",
        "challenges",
        "milestones"
      ],
      "sourceIds": [
        "official-progression",
        "official-110"
      ],
      "evidenceStatus": "verified_for_draft"
    },
    {
      "id": "prestige-challenge-guide",
      "title": "Prestige Challenge Research Status",
      "category": "Challenges",
      "type": "Challenge category",
      "summary": "Prestige goals exist, but not every precise later-tier objective has been source-verified.",
      "details": [
        "Prestige progression is tied to levels and rewards. The companion's current research contains many identified tier records, but not every tier or value is independently confirmed.",
        "Unresolved Prestige rows should remain visibly incomplete rather than being invented or silently copied between tiers.",
        "The Wiki should explain the feature; the dedicated Challenges section should handle verified target counts, rewards and manual completion."
      ],
      "related": [
        "progression-tracks",
        "progressive-challenge-guide"
      ],
      "tags": [
        "prestige",
        "tier",
        "challenge",
        "verification"
      ],
      "sourceIds": [
        "official-progression"
      ],
      "evidenceStatus": "known_incomplete_data"
    },
    {
      "id": "civilian-roster-2026",
      "title": "Playable Civilian Roster: October 2026",
      "category": "Civilians",
      "type": "Roster guide",
      "summary": "Fourteen playable Civilians are represented after the October 27 additions.",
      "details": [
        "IllFonic originally announced ten Standard Edition Civilians. Community launch records also list Richard Hawthorne and Alexis Purcell; the October 27 content update then added Eugene Kelly and Michelle Blanton. Together these establish the current fourteen-character roster.",
        "The original 12 character stat lines and three-trait labels below are community-sourced, not a developer-certified post-patch data table. Eugene and Michelle have developer-confirmed traits but no trustworthy four-stat values in the reviewed public announcement.",
        "All characters share the four stat categories: Capability, Athleticism, Personality, and Resourcefulness. Stat points should not be interpreted as linear percentage bonuses; the September 22 patch changed high- and low-stat scaling.",
        "Avoid inventing active unlock states, equip conditions, or exact percentages for traits. Current game menus can settle those questions during later PC validation."
      ],
      "related": [
        "eugene-kelly",
        "michelle-blanton"
      ],
      "tags": [
        "civilians",
        "playable civilian roster: october 2026"
      ],
      "sourceIds": [
        "official-film-characters",
        "official-patch120",
        "official-progression",
        "official-patch103",
        "community-roster"
      ],
      "evidenceStatus": "developer_roster_count_with_community_stat_values"
    },
    {
      "id": "civilian-eric-dunn",
      "title": "Eric Dunn",
      "category": "Civilians",
      "type": "Character guide",
      "summary": "A practical explorer who can spot route information while helping the group find its next objective.",
      "details": [
        "A practical explorer who can spot route information while helping the group find its next objective.",
        "Community-reported stats (out of 10): Capability 6, Athleticism 3, Personality 6, Resourcefulness 8.",
        "Reported signature traits: Hunter’s Sense, Fast Fingers, Brimstone Fuse.",
        "Consider him for supply searches and awareness rather than relying only on sprint speed.",
        "Availability: available initially, community-reported. Confirm the current character-select screen before publishing this as an unlock requirement."
      ],
      "related": [
        "civilian-roster-2026"
      ],
      "tags": [
        "civilians",
        "eric dunn"
      ],
      "sourceIds": [
        "official-progression",
        "community-roster",
        "secondary-character"
      ],
      "evidenceStatus": "community_trait_and_stats_unconfirmed_postpatch",
      "reportedStats": {
        "capability": 6,
        "athleticism": 3,
        "personality": 6,
        "resourcefulness": 8,
        "verification": "community only, not current game certified"
      }
    },
    {
      "id": "civilian-rachel-calahan",
      "title": "Rachel Calahan",
      "category": "Civilians",
      "type": "Character guide",
      "summary": "A cautious, occult-minded Civilian whose listed traits focus on resisting or detecting Michael.",
      "details": [
        "A cautious, occult-minded Civilian whose listed traits focus on resisting or detecting Michael.",
        "Community-reported stats (out of 10): Capability 7, Athleticism 5, Personality 2, Resourcefulness 8.",
        "Reported signature traits: Full Moon, Aura of Awareness, Sixth Sense.",
        "Use her awareness to help avoid a surprise encounter; her relatively low listed Personality suggests assigning dispatch-heavy tasks to someone else.",
        "Availability: available initially, community-reported. Confirm the current character-select screen before publishing this as an unlock requirement."
      ],
      "related": [
        "civilian-roster-2026"
      ],
      "tags": [
        "civilians",
        "rachel calahan"
      ],
      "sourceIds": [
        "official-heroes",
        "community-roster",
        "secondary-character"
      ],
      "evidenceStatus": "community_trait_and_stats_unconfirmed_postpatch",
      "reportedStats": {
        "capability": 7,
        "athleticism": 5,
        "personality": 2,
        "resourcefulness": 8,
        "verification": "community only, not current game certified"
      }
    },
    {
      "id": "civilian-tanya-harrison",
      "title": "Tanya Harrison",
      "category": "Civilians",
      "type": "Character guide",
      "summary": "A sociable support choice whose listed traits help with noisemakers, phones, and protecting followers.",
      "details": [
        "A sociable support choice whose listed traits help with noisemakers, phones, and protecting followers.",
        "Community-reported stats (out of 10): Capability 4, Athleticism 6, Personality 10, Resourcefulness 5.",
        "Reported signature traits: Hi-Fi, Survival Skills, Guardian Shadow.",
        "She is a natural candidate for Resident conversations, with a community-reported maximum Personality score.",
        "Availability: available initially, community-reported. Confirm the current character-select screen before publishing this as an unlock requirement."
      ],
      "related": [
        "civilian-roster-2026"
      ],
      "tags": [
        "civilians",
        "tanya harrison"
      ],
      "sourceIds": [
        "official-heroes",
        "community-roster",
        "secondary-character"
      ],
      "evidenceStatus": "community_trait_and_stats_unconfirmed_postpatch",
      "reportedStats": {
        "capability": 4,
        "athleticism": 6,
        "personality": 10,
        "resourcefulness": 5,
        "verification": "community only, not current game certified"
      }
    },
    {
      "id": "civilian-marcus-navarro",
      "title": "Marcus Navarro",
      "category": "Civilians",
      "type": "Character guide",
      "summary": "An independent repair-focused Civilian who is especially relevant to vehicles and objectives.",
      "details": [
        "An independent repair-focused Civilian who is especially relevant to vehicles and objectives.",
        "Community-reported stats (out of 10): Capability 7, Athleticism 5, Personality 4, Resourcefulness 10.",
        "Reported signature traits: Lone Wolf, Repair Expert, Trespasser.",
        "His reported Resourcefulness score is the roster’s highest among the pre-update twelve; do not treat this as proof every repair succeeds automatically.",
        "Availability: available initially, community-reported. Confirm the current character-select screen before publishing this as an unlock requirement."
      ],
      "related": [
        "civilian-roster-2026"
      ],
      "tags": [
        "civilians",
        "marcus navarro"
      ],
      "sourceIds": [
        "official-heroes",
        "community-roster",
        "secondary-character"
      ],
      "evidenceStatus": "community_trait_and_stats_unconfirmed_postpatch",
      "reportedStats": {
        "capability": 7,
        "athleticism": 5,
        "personality": 4,
        "resourcefulness": 10,
        "verification": "community only, not current game certified"
      }
    },
    {
      "id": "civilian-jennifer-aarons",
      "title": "Jennifer Aarons",
      "category": "Civilians",
      "type": "Character guide",
      "summary": "An agile, quiet-minded character with traits oriented toward evasion, reducing Stalk, and fighting back when frightened.",
      "details": [
        "An agile, quiet-minded character with traits oriented toward evasion, reducing Stalk, and fighting back when frightened.",
        "Community-reported stats (out of 10): Capability 5, Athleticism 9, Personality 6, Resourcefulness 7.",
        "Reported signature traits: Dreamer, Ghost, Survival Rage.",
        "She is a good reference point for movement-focused team composition, but raw stat differences do not equal speed percentages.",
        "Availability: level 5, community-reported. Confirm the current character-select screen before publishing this as an unlock requirement."
      ],
      "related": [
        "civilian-roster-2026"
      ],
      "tags": [
        "civilians",
        "jennifer aarons"
      ],
      "sourceIds": [
        "official-heroes",
        "community-roster",
        "secondary-character"
      ],
      "evidenceStatus": "community_trait_and_stats_unconfirmed_postpatch",
      "reportedStats": {
        "capability": 5,
        "athleticism": 9,
        "personality": 6,
        "resourcefulness": 7,
        "verification": "community only, not current game certified"
      }
    },
    {
      "id": "civilian-thomas-armitage",
      "title": "Thomas Armitage",
      "category": "Civilians",
      "type": "Character guide",
      "summary": "A football captain whose reported trait kit favors leadership, defensive doors, and group movement.",
      "details": [
        "A football captain whose reported trait kit favors leadership, defensive doors, and group movement.",
        "Community-reported stats (out of 10): Capability 7, Athleticism 8, Personality 10, Resourcefulness 2.",
        "Reported signature traits: Running Back, Inspiring, Barricade.",
        "His high reported Personality and Athleticism favor helping people move together; low Resourcefulness can make him less ideal for repair tasks.",
        "Availability: level 10, community-reported. Confirm the current character-select screen before publishing this as an unlock requirement."
      ],
      "related": [
        "civilian-roster-2026"
      ],
      "tags": [
        "civilians",
        "thomas armitage"
      ],
      "sourceIds": [
        "official-heroes",
        "community-roster",
        "secondary-character"
      ],
      "evidenceStatus": "community_trait_and_stats_unconfirmed_postpatch",
      "reportedStats": {
        "capability": 7,
        "athleticism": 8,
        "personality": 10,
        "resourcefulness": 2,
        "verification": "community only, not current game certified"
      }
    },
    {
      "id": "civilian-lynda-van-der-klok",
      "title": "Lynda van der Klok",
      "category": "Civilians",
      "type": "Character guide",
      "summary": "A film-inspired Civilian whose reported traits favor evasive, supportive interactions and disrupting danger.",
      "details": [
        "A film-inspired Civilian whose reported traits favor evasive, supportive interactions and disrupting danger.",
        "Community-reported stats (out of 10): Capability 4, Athleticism 8, Personality 7, Resourcefulness 5.",
        "Reported signature traits: Totally Amazing, Blinding Light, Fade to Black.",
        "Choose her as a mobile teammate and inspect the live trait descriptions for precise triggers; no unsupported bonus percentages are assigned here.",
        "Availability: level 25, community-reported. Confirm the current character-select screen before publishing this as an unlock requirement."
      ],
      "related": [
        "civilian-roster-2026"
      ],
      "tags": [
        "civilians",
        "lynda van der klok"
      ],
      "sourceIds": [
        "official-film-characters",
        "community-roster"
      ],
      "evidenceStatus": "community_trait_and_stats_unconfirmed_postpatch",
      "reportedStats": {
        "capability": 4,
        "athleticism": 8,
        "personality": 7,
        "resourcefulness": 5,
        "verification": "community only, not current game certified"
      }
    },
    {
      "id": "civilian-bob-simms",
      "title": "Bob Simms",
      "category": "Civilians",
      "type": "Character guide",
      "summary": "A hard-hitting, athletic character whose trait list includes the officially named Heavyweight passive.",
      "details": [
        "A hard-hitting, athletic character whose trait list includes the officially named Heavyweight passive.",
        "Community-reported stats (out of 10): Capability 9, Athleticism 8, Personality 4, Resourcefulness 3.",
        "Reported signature traits: Heavyweight, Lethal Pitch, Runner’s High.",
        "The September 22 balance patch reduced Heavyweight’s melee and Fear-resistance effects, so pre-patch numerical guides should not be copied into the Wiki.",
        "Availability: level 40, community-reported. Confirm the current character-select screen before publishing this as an unlock requirement."
      ],
      "related": [
        "civilian-roster-2026"
      ],
      "tags": [
        "civilians",
        "bob simms"
      ],
      "sourceIds": [
        "official-film-characters",
        "official-patch103",
        "community-roster"
      ],
      "evidenceStatus": "community_trait_and_stats_unconfirmed_postpatch",
      "reportedStats": {
        "capability": 9,
        "athleticism": 8,
        "personality": 4,
        "resourcefulness": 3,
        "verification": "community only, not current game certified"
      }
    },
    {
      "id": "civilian-annie-brackett",
      "title": "Annie Brackett",
      "category": "Civilians",
      "type": "Character guide",
      "summary": "A film-inspired survivor with a reported kit focused on getting away, making decisions, and persuading people.",
      "details": [
        "A film-inspired survivor with a reported kit focused on getting away, making decisions, and persuading people.",
        "Community-reported stats (out of 10): Capability 5, Athleticism 4, Personality 6, Resourcefulness 8.",
        "Reported signature traits: Speed Kills, Exit Strategy, Convincing Plea.",
        "Her listed Resourcefulness makes her worth considering for object interactions, though exact trait effects require a current in-game check.",
        "Availability: level 55, community-reported. Confirm the current character-select screen before publishing this as an unlock requirement."
      ],
      "related": [
        "civilian-roster-2026"
      ],
      "tags": [
        "civilians",
        "annie brackett"
      ],
      "sourceIds": [
        "official-film-characters",
        "community-roster"
      ],
      "evidenceStatus": "community_trait_and_stats_unconfirmed_postpatch",
      "reportedStats": {
        "capability": 5,
        "athleticism": 4,
        "personality": 6,
        "resourcefulness": 8,
        "verification": "community only, not current game certified"
      }
    },
    {
      "id": "civilian-laurie-strode",
      "title": "Laurie Strode",
      "category": "Civilians",
      "type": "Character guide",
      "summary": "A balanced film-inspired character whose reported traits support escape awareness and close calls with Michael.",
      "details": [
        "A balanced film-inspired character whose reported traits support escape awareness and close calls with Michael.",
        "Community-reported stats (out of 10): Capability 8, Athleticism 6, Personality 9, Resourcefulness 7.",
        "Reported signature traits: Spatial Awareness, Knockout, Revenge.",
        "Community sources disagree whether she starts unlocked or is tied to an edition; show availability as needing live confirmation rather than asserting either.",
        "Availability: availability disputed across launch guides. Confirm the current character-select screen before publishing this as an unlock requirement."
      ],
      "related": [
        "civilian-roster-2026"
      ],
      "tags": [
        "civilians",
        "laurie strode"
      ],
      "sourceIds": [
        "official-film-characters",
        "community-roster",
        "secondary-character"
      ],
      "evidenceStatus": "community_trait_and_stats_unconfirmed_postpatch",
      "reportedStats": {
        "capability": 8,
        "athleticism": 6,
        "personality": 9,
        "resourcefulness": 7,
        "verification": "community only, not current game certified"
      }
    },
    {
      "id": "civilian-richard-hawthorne",
      "title": "Richard Hawthorne",
      "category": "Civilians",
      "type": "Character guide",
      "summary": "A Digital Deluxe Civilian whose reported traits reward a risky party-oriented playstyle and awareness.",
      "details": [
        "A Digital Deluxe Civilian whose reported traits reward a risky party-oriented playstyle and awareness.",
        "Community-reported stats (out of 10): Capability 6, Athleticism 7, Personality 9, Resourcefulness 5.",
        "Reported signature traits: Affluent Partier, Witness State, Illusory.",
        "Older guides call Witness State “Hyper Focused” and Illusory “Chaotic.” Keep aliases in research, but the current names and numerical effects need verification against the installed build.",
        "Availability: Digital Deluxe, developer edition detail not independently checked. Confirm the current character-select screen before publishing this as an unlock requirement."
      ],
      "related": [
        "civilian-roster-2026"
      ],
      "tags": [
        "civilians",
        "richard hawthorne"
      ],
      "sourceIds": [
        "community-richard",
        "community-roster",
        "secondary-character"
      ],
      "evidenceStatus": "community_trait_and_stats_unconfirmed_postpatch",
      "reportedStats": {
        "capability": 6,
        "athleticism": 7,
        "personality": 9,
        "resourcefulness": 5,
        "verification": "community only, not current game certified"
      }
    },
    {
      "id": "civilian-alexis-purcell",
      "title": "Alexis Purcell",
      "category": "Civilians",
      "type": "Character guide",
      "summary": "A reported high-Personality specialist whose traits emphasize followers and successful communication.",
      "details": [
        "A reported high-Personality specialist whose traits emphasize followers and successful communication.",
        "Community-reported stats (out of 10): Capability 2, Athleticism 8, Personality 10, Resourcefulness 5.",
        "Reported signature traits: Popular, Panic Contagion, Smooth Talker.",
        "Older sources call the middle trait “Savior Stimulant.” Preserve the naming disagreement in the evidence notes; don’t assign a possibly outdated speed or skill-check percentage.",
        "Availability: Digital Deluxe, community-reported. Confirm the current character-select screen before publishing this as an unlock requirement."
      ],
      "related": [
        "civilian-roster-2026"
      ],
      "tags": [
        "civilians",
        "alexis purcell"
      ],
      "sourceIds": [
        "community-alexis",
        "community-roster",
        "secondary-character"
      ],
      "evidenceStatus": "community_trait_and_stats_unconfirmed_postpatch",
      "reportedStats": {
        "capability": 2,
        "athleticism": 8,
        "personality": 10,
        "resourcefulness": 5,
        "verification": "community only, not current game certified"
      }
    },
    {
      "id": "michael-weapons-overview",
      "title": "Michael Myers: Starting Weapons",
      "category": "Weapons",
      "type": "Weapon guide",
      "summary": "Choose a starting weapon before entering a match; the Scythe joined the known list on October 27.",
      "details": [
        "The pre-update reference set includes Kitchen Knife, Hatchet, Wood Axe, Pick-Axe, and Pitchfork. IllFonic added the Scythe in Patch 1.2.0, so these six have source support across launch and update materials.",
        "The Scythe can be obtained on Tower Farm during a match and unlocked as a starting weapon through its Progressive Challenges. Purchasing the Halloween 5 (1989) Michael skin also grants the starting-weapon unlock immediately.",
        "Do not publish exact damage numbers, attack reach, stamina costs or detailed unlock levels yet: third-party guides disagree and earlier balance patches changed weapon power and attack timing.",
        "A starting-weapon selection is distinct from loose world items. Weapon Level and challenges can unlock separate cosmetics and progression rewards."
      ],
      "related": [
        "scythe-weapon"
      ],
      "tags": [
        "weapons",
        "michael myers: starting weapons"
      ],
      "sourceIds": [
        "official-progression",
        "official-patch120",
        "official-patch103",
        "secondary-weapons"
      ],
      "evidenceStatus": "developer_for_scythe_community_for_legacy_list"
    },
    {
      "id": "weapon-kitchen-knife",
      "title": "Kitchen Knife",
      "category": "Weapons",
      "type": "Michael starting weapon",
      "summary": "Iconic close-range starting weapon; treat as the standard knife reference.",
      "details": [
        "Iconic close-range starting weapon; treat as the standard knife reference.",
        "Its ability to perform attacks and executions is supported by gameplay references. Keep precise animation timing and damage values out of the reference until validated.",
        "This page covers Michael’s selectable starting weapon, not a promise that the item spawns at particular map coordinates.",
        "Weapon-specific performance and unlock details must be checked against the current game rather than copied from launch-era guides."
      ],
      "related": [
        "michael-weapons-overview"
      ],
      "tags": [
        "weapons",
        "kitchen knife"
      ],
      "sourceIds": [
        "secondary-weapons",
        "official-progression"
      ],
      "evidenceStatus": "developer_classification_and_or_community_details"
    },
    {
      "id": "weapon-hatchet",
      "title": "Hatchet",
      "category": "Weapons",
      "type": "Michael starting weapon",
      "summary": "A compact bladed weapon with thrown-weapon interactions described in community guides.",
      "details": [
        "A compact bladed weapon with thrown-weapon interactions described in community guides.",
        "Community unlock reports conflict: one article lists it available initially, another says level 20. Do not choose a definite unlock requirement yet.",
        "This page covers Michael’s selectable starting weapon, not a promise that the item spawns at particular map coordinates.",
        "Weapon-specific performance and unlock details must be checked against the current game rather than copied from launch-era guides."
      ],
      "related": [
        "michael-weapons-overview"
      ],
      "tags": [
        "weapons",
        "hatchet"
      ],
      "sourceIds": [
        "secondary-weapons",
        "official-progression",
        "community-hatchet"
      ],
      "evidenceStatus": "developer_classification_and_or_community_details"
    },
    {
      "id": "weapon-wood-axe",
      "title": "Wood Axe",
      "category": "Weapons",
      "type": "Michael starting weapon",
      "summary": "A heavy axe whose combo speed and attack damage were reduced by the September 22 patch.",
      "details": [
        "A heavy axe whose combo speed and attack damage were reduced by the September 22 patch.",
        "Old damage charts and fast-combo recommendations are outdated; do not list pre-patch damage numbers as current.",
        "This page covers Michael’s selectable starting weapon, not a promise that the item spawns at particular map coordinates.",
        "Weapon-specific performance and unlock details must be checked against the current game rather than copied from launch-era guides."
      ],
      "related": [
        "michael-weapons-overview"
      ],
      "tags": [
        "weapons",
        "wood axe"
      ],
      "sourceIds": [
        "secondary-weapons",
        "official-progression",
        "official-patch103"
      ],
      "evidenceStatus": "developer_classification_and_or_community_details"
    },
    {
      "id": "weapon-pick-axe",
      "title": "Pick-Axe",
      "category": "Weapons",
      "type": "Michael starting weapon",
      "summary": "A heavy pick-style melee weapon whose combo speed and attack damage were reduced in Patch 1.0.3.",
      "details": [
        "A heavy pick-style melee weapon whose combo speed and attack damage were reduced in Patch 1.0.3.",
        "The ability to break certain obstacles is reported in secondary databases but not certified by the developer in the sources reviewed here.",
        "This page covers Michael’s selectable starting weapon, not a promise that the item spawns at particular map coordinates.",
        "Weapon-specific performance and unlock details must be checked against the current game rather than copied from launch-era guides."
      ],
      "related": [
        "michael-weapons-overview"
      ],
      "tags": [
        "weapons",
        "pick-axe"
      ],
      "sourceIds": [
        "secondary-weapons",
        "official-progression",
        "official-patch103"
      ],
      "evidenceStatus": "developer_classification_and_or_community_details"
    },
    {
      "id": "weapon-pitchfork",
      "title": "Pitchfork",
      "category": "Weapons",
      "type": "Michael starting weapon",
      "summary": "Long bladed farming weapon listed among Michael’s pre-update starting choices by multiple community guides.",
      "details": [
        "Long bladed farming weapon listed among Michael’s pre-update starting choices by multiple community guides.",
        "Some guides report a throwable interaction. Leave throw conditions and weapon-level unlocks as pending in-game verification.",
        "This page covers Michael’s selectable starting weapon, not a promise that the item spawns at particular map coordinates.",
        "Weapon-specific performance and unlock details must be checked against the current game rather than copied from launch-era guides."
      ],
      "related": [
        "michael-weapons-overview"
      ],
      "tags": [
        "weapons",
        "pitchfork"
      ],
      "sourceIds": [
        "secondary-weapons",
        "official-progression"
      ],
      "evidenceStatus": "developer_classification_and_or_community_details"
    },
    {
      "id": "michael-abilities-overview",
      "title": "Michael Myers: Traits and Ability Loadouts",
      "category": "Michael Myers",
      "type": "Loadout guide",
      "summary": "Killer Sense and Shape Jump are built in; three selectable abilities can further define the playstyle.",
      "details": [
        "IllFonic confirms that Killer Sense and Shape Jump are Michael’s two fixed traits and that his loadout also offers three ability choices. Developer examples include Reality Tear, Blackout, and Detection Pulse.",
        "Community sources name six selectable abilities: Detection Pulse, Reality Tear, Blackout, Evil Presence, Shape Mines, and Shadow Strike. Exact unlock levels and cooldown values are not consistently documented.",
        "The abilities can support different approaches such as locating people, changing movement, controlling power, or creating pressure. Avoid presenting any subjective ranking as developer fact.",
        "The September balance changes improved some post-downed protections; the October update changed how Resident and Special Target areas are revealed with Bloodthirst."
      ],
      "related": [
        "michael-killer-sense",
        "michael-shape-jump",
        "michael-blackout",
        "michael-bloodthirst"
      ],
      "tags": [
        "michael myers",
        "michael myers: traits and ability loadouts"
      ],
      "sourceIds": [
        "official-progression",
        "official-multiplayer",
        "official-patch103",
        "official-patch120",
        "secondary-weapons"
      ],
      "evidenceStatus": "official_core_and_community_full_list"
    },
    {
      "id": "ability-detection-pulse",
      "title": "Detection Pulse",
      "category": "Michael Myers",
      "type": "Selectable ability",
      "summary": "Reveals or marks nearby targets and occupied locations according to community gameplay references.",
      "details": [
        "Reveals or marks nearby targets and occupied locations according to community gameplay references.",
        "The developer’s launch fixes specifically increased its effectiveness at locating Residents inside hiding spots.",
        "This is a selectable Michael ability; Killer Sense and Shape Jump remain separate built-in traits."
      ],
      "related": [
        "michael-abilities-overview"
      ],
      "tags": [
        "michael myers",
        "detection pulse"
      ],
      "sourceIds": [
        "official-progression",
        "secondary-weapons",
        "official-multiplayer"
      ],
      "evidenceStatus": "mixed_developer_and_community"
    },
    {
      "id": "ability-reality-tear",
      "title": "Reality Tear",
      "category": "Michael Myers",
      "type": "Selectable ability",
      "summary": "Lets Michael enter or leave Shape Jump under normally restricted conditions according to community descriptions.",
      "details": [
        "Lets Michael enter or leave Shape Jump under normally restricted conditions according to community descriptions.",
        "Normal Shape Jump requires darkness or lack of a Resident’s line of sight; this special ability is described as overriding those limits. Do not promise unlimited uses or a fixed cooldown.",
        "This is a selectable Michael ability; Killer Sense and Shape Jump remain separate built-in traits."
      ],
      "related": [
        "michael-abilities-overview"
      ],
      "tags": [
        "michael myers",
        "reality tear"
      ],
      "sourceIds": [
        "official-progression",
        "official-multiplayer",
        "secondary-weapons"
      ],
      "evidenceStatus": "mixed_developer_and_community"
    },
    {
      "id": "ability-blackout",
      "title": "Blackout",
      "category": "Michael Myers",
      "type": "Selectable ability",
      "summary": "Temporarily disrupts nearby lighting or powered systems to give Michael more opportunities to move in darkness.",
      "details": [
        "Temporarily disrupts nearby lighting or powered systems to give Michael more opportunities to move in darkness.",
        "The core darkness/Shape Jump interaction is developer-confirmed; exact Blackout radius, duration and affected vehicle conditions require in-game validation.",
        "This is a selectable Michael ability; Killer Sense and Shape Jump remain separate built-in traits."
      ],
      "related": [
        "michael-abilities-overview"
      ],
      "tags": [
        "michael myers",
        "blackout"
      ],
      "sourceIds": [
        "official-progression",
        "official-multiplayer",
        "community-abilities"
      ],
      "evidenceStatus": "mixed_developer_and_community"
    },
    {
      "id": "ability-evil-presence",
      "title": "Evil Presence",
      "category": "Michael Myers",
      "type": "Selectable ability",
      "summary": "A close-range aura ability reported to pressure grouped Civilians and strengthen Michael temporarily.",
      "details": [
        "A close-range aura ability reported to pressure grouped Civilians and strengthen Michael temporarily.",
        "Multiple community sources describe an aura and stagger response, but specific numerical boosts and unlock levels are not developer-certified here.",
        "This is a selectable Michael ability; Killer Sense and Shape Jump remain separate built-in traits."
      ],
      "related": [
        "michael-abilities-overview"
      ],
      "tags": [
        "michael myers",
        "evil presence"
      ],
      "sourceIds": [
        "community-abilities",
        "secondary-weapons"
      ],
      "evidenceStatus": "mixed_developer_and_community"
    },
    {
      "id": "ability-shape-mines",
      "title": "Shape Mines",
      "category": "Michael Myers",
      "type": "Selectable ability",
      "summary": "A placed trap ability that can interfere with targets when triggered.",
      "details": [
        "A placed trap ability that can interfere with targets when triggered.",
        "Patch 1.0.3 explicitly mentions the Shape Mine placement animation. Exact trap cap, map persistence, and trigger values remain unverified.",
        "This is a selectable Michael ability; Killer Sense and Shape Jump remain separate built-in traits."
      ],
      "related": [
        "michael-abilities-overview"
      ],
      "tags": [
        "michael myers",
        "shape mines"
      ],
      "sourceIds": [
        "official-patch103",
        "community-abilities"
      ],
      "evidenceStatus": "mixed_developer_and_community"
    },
    {
      "id": "ability-shadow-strike",
      "title": "Shadow Strike",
      "category": "Michael Myers",
      "type": "Selectable ability",
      "summary": "A special attack ability reported by community sources to briefly hinder a target.",
      "details": [
        "A special attack ability reported by community sources to briefly hinder a target.",
        "Public guides disagree on some animation details; preserve a broad description and require a current in-game inspection before specifying projectile behavior or cooldown.",
        "This is a selectable Michael ability; Killer Sense and Shape Jump remain separate built-in traits."
      ],
      "related": [
        "michael-abilities-overview"
      ],
      "tags": [
        "michael myers",
        "shadow strike"
      ],
      "sourceIds": [
        "secondary-weapons",
        "community-abilities"
      ],
      "evidenceStatus": "mixed_developer_and_community"
    }
  ]
};
