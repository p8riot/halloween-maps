/*
HTG Maps product data
Structured source edition

Wiki entries and related-entry references.
Optional fields remain sparse. Coordinates and machine-facing IDs are data contracts.
*/

window.HTGWikiData = {
    "version": 1,
    "entries": [
        {
            "id": "item-spawns",
            "title": "Item Spawns",
            "category": "Items",
            "type": "Spawn information",
            "summary": "Gas cans use set possible spawn locations, while other escape items can appear in random locations.",
            "details": [
                "Gas cans spawn in set places; roughly 3–4 usually appear per match.",
                "Other escape items can have random spawn points.",
                "Bolt Cutters: large drawers, tops of tables or shelves, the ground, unlocked chests, and red toolboxes.",
                "Bolt Cutters are not found in small drawers and are usually not in kitchens.",
                "Car keys: drawers, tops of tables or shelves, the ground, chests, and red toolboxes.",
                "Fuses are very rare.",
                "Fuses may be found in lockboxes, random drawers, or received from an NPC after talking to them."
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
                "fuse"
            ]
        },
        {
            "id": "gas-can-spawns",
            "title": "Gas-Can Spawns",
            "category": "Maps",
            "type": "Spawn information",
            "summary": "Gas cans spawn in set places, and roughly 3–4 usually appear per match.",
            "details": [
                "Gas cans spawn in set places.",
                "Roughly 3–4 gas cans usually appear per match."
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
        },
        {
            "id": "police-car",
            "title": "Police Car",
            "category": "Police",
            "type": "Vehicle",
            "summary": "The Police Car is unlocked and started with Police Car Keys.",
            "details": [
                "Unlock & start: Police Car Keys."
            ],
            "tags": [
                "police",
                "car",
                "keys"
            ],
            "related": [
                "police-car-keys",
                "police-response"
            ]
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
            ]
        },
        {
            "id": "map-target-markers",
            "title": "Map Target Markers",
            "category": "Maps",
            "type": "Map legend",
            "summary": "Yellow circles identify Special Targets and blue circles identify Residents.",
            "details": [
                "Yellow circle: Special Targets.",
                "Blue circle: Residents."
            ],
            "tags": [
                "special targets",
                "residents",
                "map markers"
            ],
            "related": [
                "gas-can-spawns"
            ]
        },
        {
            "id": "fuse",
            "title": "Fuse",
            "category": "Items",
            "type": "Escape item",
            "summary": "The Fuse is used for gate escapes.",
            "details": [
                "Used for the gate escape.",
                "Fuses are very rare.",
                "They may be found in lockboxes, random drawers, or received from an NPC after talking to them."
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
            ]
        },
        {
            "id": "bolt-cutters",
            "title": "Bolt Cutters",
            "category": "Items",
            "type": "Escape item",
            "summary": "Bolt Cutters are used for cellar access and can also satisfy the lock requirement on several gate variants.",
            "details": [
                "Used for cellar escape access.",
                "Can be used instead of an Escape Key on the gate variants listed here.",
                "Possible spawn locations include large drawers, tops of tables or shelves, the ground, unlocked chests, and red toolboxes.",
                "They are not found in small drawers and are usually not in kitchens."
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
            ]
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
            ]
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
            ]
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
            ]
        },
        {
            "id": "repair-kit",
            "title": "Repair Kit",
            "category": "Items",
            "type": "Tool",
            "summary": "The Repair Kit is used for the main car escape and other repair interactions.",
            "details": [
                "Used for the main car escape.",
                "Also used for repairing the car, radios, phone, and power box."
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
            ]
        },
        {
            "id": "police-car-keys",
            "title": "Police Car Keys",
            "category": "Items",
            "type": "Key item",
            "summary": "Police Car Keys unlock and start the police car.",
            "details": [
                "Unlocks and starts the police car."
            ],
            "tags": [
                "police",
                "car",
                "keys"
            ],
            "related": [
                "police-car",
                "police-response"
            ]
        },
        {
            "id": "flare-gun",
            "title": "Flare Gun",
            "category": "Items",
            "type": "Utility",
            "summary": "Firing the Flare Gun into the air grants 1 police tier instantly.",
            "details": [
                "Shoot into the air to gain 1 police tier instantly.",
                "Less useful in the mid-to-late game."
            ],
            "tags": [
                "flare gun",
                "police",
                "tier"
            ],
            "related": [
                "police-response"
            ]
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
            ]
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
            ]
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
            "related": []
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
            ]
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
            ]
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
            ]
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
            "related": []
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
        },
        {
            "id": "map-east-haddonfield",
            "title": "East Haddonfield",
            "category": "Maps",
            "type": "Map",
            "summary": "10 possible escape locations are marked on East Haddonfield.",
            "details": [
                "Storm Cellars: 5.",
                "Escape Gates: 1.",
                "Cars: 4.",
                "The Maps view also provides house-address, street-name, and A–J / 1–10 grid overlays."
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
            ]
        },
        {
            "id": "map-haddonfield-heights",
            "title": "Haddonfield Heights",
            "category": "Maps",
            "type": "Map",
            "summary": "15 possible escape locations are marked on Haddonfield Heights.",
            "details": [
                "Storm Cellars: 8.",
                "Escape Gates: 3.",
                "Cars: 4.",
                "The Maps view also provides house-address, street-name, and A–J / 1–10 grid overlays."
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
            ]
        },
        {
            "id": "map-haddonfield-town-center",
            "title": "Haddonfield Town Center",
            "category": "Maps",
            "type": "Map",
            "summary": "8 possible escape locations are marked on Haddonfield Town Center.",
            "details": [
                "Storm Cellars: 3.",
                "Escape Gates: 1.",
                "Cars: 4.",
                "The Maps view also provides house-address, street-name, and A–J / 1–10 grid overlays."
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
            ]
        },
        {
            "id": "map-orange-grove-estates",
            "title": "Orange Grove Estates",
            "category": "Maps",
            "type": "Map",
            "summary": "12 possible escape locations are marked on Orange Grove Estates.",
            "details": [
                "Storm Cellars: 4.",
                "Escape Gates: 3.",
                "Cars: 5.",
                "The Maps view also provides house-address, street-name, and A–J / 1–10 grid overlays."
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
            ]
        }
    ]
};
