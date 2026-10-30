/* Source-backed maps. Searchable objects have unknown loot pools, not guaranteed escape supplies. */
window.HalloweenEscapeData = {
  "version": 3,
  "escapeTypes": {
    "cellar": {
      "label": "Storm Cellar",
      "color": "#ef3b46",
      "icon": "./assets/icons/game/game-cellar.png",
      "items": [
        "Escape Key or Bolt Cutters (as applicable)",
        "Some variants require clearing boards or foliage"
      ]
    },
    "gate": {
      "label": "Escape Gate",
      "color": "#31d873",
      "icon": "./assets/icons/game/game-gate.png",
      "items": [
        "Fuse",
        "Escape Key or Bolt Cutters (as applicable)",
        "Clear any blocking obstacles"
      ]
    },
    "car": {
      "label": "Civilian Escape Sedan",
      "color": "#4eb5ff",
      "icon": "./assets/icons/game/game-car.png",
      "items": [
        "Sedan Key",
        "Gas Can",
        "Repair Kit"
      ]
    },
    "drain": {
      "label": "Sewer / Storm Drain",
      "color": "#b58aff",
      "icon": "./assets/icons/game/game-storm-drain.png",
      "items": [
        "Escape Key or Bolt Cutters (depending on the lock)",
        "Clear boards or overgrowth if present",
        "Follow the current match's on-screen interaction prompt"
      ]
    },
    "vehicleExit": {
      "label": "Vehicle escape route / trigger",
      "color": "#28d6bf",
      "icon": "./assets/icons/vehicle-route.svg",
      "items": [
        "Exit trigger / departure area. Not a parked escape sedan."
      ]
    },
    "item": {
      "label": "Escape Supply Source",
      "color": "#f8b84d",
      "icon": "./assets/icons/supply.svg",
      "items": [
        "Randomized candidate: not guaranteed in any match"
      ]
    },
    "searchable": {
      "label": "Searchable Location",
      "color": "#b8bfd2",
      "icon": "./assets/icons/search-source.svg",
      "items": [
        "Searchable object; contents unknown",
        "This marker does not confirm an escape item can spawn here"
      ]
    }
  },
  "maps": [
    {
      "id": "east-haddonfield",
      "name": "East Haddonfield",
      "width": 4096,
      "height": 4096,
      "sourceZoom": -2.5,
      "image": "./assets/maps/east-haddonfield-realistic.webp",
      "styles": {
        "realistic": "./assets/maps/east-haddonfield-realistic.webp",
        "paper": "./assets/maps/east-haddonfield-paper.webp"
      },
      "pixelOffset": {
        "realistic": 0,
        "paper": {
          "x": -84.3,
          "y": -96.0
        }
      },
      "registration": {
        "actorToRealisticX": 175.94,
        "paperRelativeX": -84.3,
        "source": "CP07+CP08 feature registration; not live-game certified; v1.3.4 paper border cleanup",
        "paperRelativeY": -96.0
      },
      "overlays": {
        "addresses": [
          {
            "x": 1687.44,
            "y": 2780.4,
            "label": "832"
          },
          {
            "x": 1696.54,
            "y": 2378.0,
            "label": "828"
          },
          {
            "x": 1664.54,
            "y": 1315.6,
            "label": "812"
          },
          {
            "x": 2322.14,
            "y": 1410.5,
            "label": "715"
          },
          {
            "x": 2509.34,
            "y": 3282.2,
            "label": "628"
          },
          {
            "x": 2874.64,
            "y": 3187.3,
            "label": "630"
          },
          {
            "x": 2723.94,
            "y": 2577.0,
            "label": "731"
          },
          {
            "x": 2573.24,
            "y": 2115.8,
            "label": "723"
          },
          {
            "x": 2815.24,
            "y": 2120.3,
            "label": "725"
          },
          {
            "x": 2970.54,
            "y": 2572.4,
            "label": "733"
          },
          {
            "x": 3134.94,
            "y": 2152.0,
            "label": "729"
          },
          {
            "x": 2870.04,
            "y": 1270.4,
            "label": "718"
          }
        ],
        "streets": [
          {
            "x": 2048.14,
            "y": 2988.4,
            "label": "Wallard St.",
            "rotation": -90
          },
          {
            "x": 2048.14,
            "y": 1374.4,
            "label": "Virginia St.",
            "rotation": -90
          },
          {
            "x": 2550.44,
            "y": 2803.0,
            "label": "Copper Ln.",
            "rotation": 0
          },
          {
            "x": 2641.74,
            "y": 1862.6,
            "label": "Cade Ave.",
            "rotation": 0
          },
          {
            "x": 2550.44,
            "y": 931.3,
            "label": "Davis Dr.",
            "rotation": 0
          }
        ],
        "grid": null
      },
      "locations": [
        {
          "id": "east-haddonfield-cellar-5",
          "sourceId": "Map4:Map4_Gameplay.json:BP_CellarEscape_C_0:cellar_escape",
          "type": "cellar",
          "number": 3,
          "x": 2300.945,
          "y": 680.668,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "east-haddonfield-cellar-1",
          "sourceId": "Map4:Map4_Gameplay.json:BP_CellarEscape_C_1:cellar_escape",
          "type": "cellar",
          "number": 5,
          "x": 2858.61,
          "y": 1553.664,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "east-haddonfield-cellar-4",
          "sourceId": "Map4:Map4_Gameplay.json:BP_CellarEscape_C_2:cellar_escape",
          "type": "cellar",
          "number": 4,
          "x": 2677.89,
          "y": 2384.805,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "source-23f7f12c2065770bf2",
          "sourceId": "Map4:Map4_Gameplay.json:BP_CellarEscape_C_3:cellar_escape",
          "type": "cellar",
          "number": 6,
          "x": 2622.569,
          "y": 3272.596,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "east-haddonfield-cellar-2",
          "sourceId": "Map4:Map4_Gameplay.json:BP_CellarEscape_C_4:cellar_escape",
          "type": "cellar",
          "number": 1,
          "x": 1387.61,
          "y": 1875.922,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "east-haddonfield-cellar-3",
          "sourceId": "Map4:Map4_Gameplay.json:BP_CellarEscape_C_5:cellar_escape",
          "type": "cellar",
          "number": 2,
          "x": 1581.315,
          "y": 3316.79,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "east-haddonfield-gate-1",
          "sourceId": "Map4:Map4_Gameplay.json:BP_GateEscape_C_1:gate_escape",
          "type": "gate",
          "number": 1,
          "x": 2788.899,
          "y": 3565.277,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Escape Gate"
        },
        {
          "id": "source-a7a7611cc4f522fb06",
          "sourceId": "Map4:Map4_Gameplay.json:BP_VehicleEscapeVolume_C_3:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 1,
          "x": 3277.513,
          "y": 2862.857,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "source-0a81daa8f9eb8ef46a",
          "sourceId": "Map4:Map4_Gameplay.json:BP_VehicleEscapeVolume_C_4:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 2,
          "x": 2010.946,
          "y": 3544.598,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "source-072ec417cb12aeafd9",
          "sourceId": "Map4:Map4_Gameplay.json:BP_VehicleEscapeVolume_C_5:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 3,
          "x": 3190.455,
          "y": 906.496,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "east-haddonfield-car-1",
          "sourceId": "",
          "type": "car",
          "number": 1,
          "x": 1387.521,
          "y": 1423.009,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "east-haddonfield-car-3",
          "sourceId": "",
          "type": "car",
          "number": 4,
          "x": 2608.615,
          "y": 1174.427,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "east-haddonfield-car-4",
          "sourceId": "",
          "type": "car",
          "number": 3,
          "x": 2585.882,
          "y": 2239.931,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "east-haddonfield-car-2",
          "sourceId": "",
          "type": "car",
          "number": 2,
          "x": 2272.217,
          "y": 3160.688,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "source-2093d811b924ef298d",
          "sourceId": "Map4:Map4_Art_GrainMill.json:BP_ItemSpawner_C_0",
          "type": "item",
          "number": 1,
          "x": 1615.231,
          "y": 2785.103,
          "itemTags": [
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-515e7febd1cad86c61",
          "sourceId": "Map4:Map4_Art_GrainMill.json:BP_ItemSpawner_C_1",
          "type": "item",
          "number": 2,
          "x": 1508.011,
          "y": 2858.653,
          "itemTags": [
            "ID.Item.SedanKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-d233f12b20c529c6c7",
          "sourceId": "Map4:Map4_Art_North.json:BP_ItemSpawner_C_5",
          "type": "item",
          "number": 3,
          "x": 3086.739,
          "y": 3183.533,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-410621cc056d271ef9",
          "sourceId": "Map4:Map4_Art_North.json:BP_ItemSpawner_C_8",
          "type": "item",
          "number": 4,
          "x": 3068.717,
          "y": 3248.07,
          "itemTags": [
            "ID.Item.CellarKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-0b53d97ffeb56d6310",
          "sourceId": "Map4:Map4_Art_North.json:BP_ItemSpawner_C_9",
          "type": "item",
          "number": 5,
          "x": 3023.635,
          "y": 3246.42,
          "itemTags": [
            "ID.Item.CellarKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-ba197f4d3450cca1cf",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_0",
          "type": "item",
          "number": 6,
          "x": 2288.792,
          "y": 596.804,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-6522d563d287f3b7a8",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_109",
          "type": "item",
          "number": 7,
          "x": 2905.758,
          "y": 1731.762,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-944baa2b8b96968d6e",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_114",
          "type": "item",
          "number": 8,
          "x": 3226.06,
          "y": 2172.383,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-dfb193c93624e8c70c",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_119",
          "type": "item",
          "number": 9,
          "x": 3226.646,
          "y": 2585.715,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-d73e3f21685d67563d",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_12",
          "type": "item",
          "number": 10,
          "x": 3074.179,
          "y": 2789.919,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-5bdcc94159e1c3d232",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_16",
          "type": "item",
          "number": 11,
          "x": 1775.092,
          "y": 3398.85,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-c710242935c6860224",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_20",
          "type": "item",
          "number": 12,
          "x": 1626.893,
          "y": 2821.094,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-98246e874bfef5ce0a",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_21",
          "type": "item",
          "number": 13,
          "x": 1245.283,
          "y": 2942.357,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-03535b0ee6519bafb5",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_22",
          "type": "item",
          "number": 14,
          "x": 1612.532,
          "y": 2028.081,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-3da919f5dbe2f63c7c",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_23",
          "type": "item",
          "number": 15,
          "x": 1600.259,
          "y": 692.527,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-a4252a35f3a6a08df8",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_24",
          "type": "item",
          "number": 16,
          "x": 2117.625,
          "y": 729.335,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-882371504133ba2acc",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_25",
          "type": "item",
          "number": 17,
          "x": 2651.35,
          "y": 758.515,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-47c58f61eee77a6c78",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_26",
          "type": "item",
          "number": 18,
          "x": 2768.467,
          "y": 2056.309,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-c5d5cdaedd2eefa6e6",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_27",
          "type": "item",
          "number": 19,
          "x": 3052.008,
          "y": 3300.141,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-c156d5775d628e55d6",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_28",
          "type": "item",
          "number": 20,
          "x": 1400.893,
          "y": 3396.218,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-dd49ab40c2c3473acb",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_32",
          "type": "item",
          "number": 21,
          "x": 1522.985,
          "y": 2611.403,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-c8162bf9a77df125fa",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_33",
          "type": "item",
          "number": 22,
          "x": 3122.014,
          "y": 2192.959,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-784956822597cbd71d",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_4",
          "type": "item",
          "number": 23,
          "x": 2400.274,
          "y": 642.547,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-a3ca4038f5401a8c43",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_51",
          "type": "item",
          "number": 24,
          "x": 2709.765,
          "y": 1531.588,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-039f9cc4121e3ca0b6",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_55",
          "type": "item",
          "number": 25,
          "x": 3030.376,
          "y": 1172.743,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-ddcb86c0a0b935fcf2",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_58",
          "type": "item",
          "number": 26,
          "x": 1546.097,
          "y": 1806.859,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f6f8f13884db04491b",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_68",
          "type": "item",
          "number": 27,
          "x": 1914.042,
          "y": 1953.76,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-2d19d99ae797e712b9",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_72",
          "type": "item",
          "number": 28,
          "x": 1891.179,
          "y": 1940.458,
          "itemTags": [
            "ID.Item.SedanKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-ef61603afbbdc54bcb",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_75",
          "type": "item",
          "number": 29,
          "x": 1748.603,
          "y": 2055.693,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-22e42f64f45b0c429d",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_76",
          "type": "item",
          "number": 30,
          "x": 1761.102,
          "y": 2231.83,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-15b1143ae447df75de",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_83",
          "type": "item",
          "number": 31,
          "x": 1657.314,
          "y": 2425.98,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-e01e782c4813779ba1",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_85",
          "type": "item",
          "number": 32,
          "x": 1855.099,
          "y": 2388.513,
          "itemTags": [
            "ID.Item.SedanKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-c03e38e49ddf1eee52",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_86",
          "type": "item",
          "number": 33,
          "x": 1787.897,
          "y": 2401.564,
          "itemTags": [
            "ID.Item.SedanKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-6cb62264efe6b6cd4c",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_88",
          "type": "item",
          "number": 34,
          "x": 1429.948,
          "y": 2944.734,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-b71b5355f2cbb77e3c",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_97",
          "type": "item",
          "number": 35,
          "x": 1581.847,
          "y": 2776.73,
          "itemTags": [
            "ID.Item.SedanKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-86455edd0515d9bd9d",
          "sourceId": "Map4:Map4_Gameplay.json:BP_ItemSpawner_C_99",
          "type": "item",
          "number": 36,
          "x": 1666.604,
          "y": 2754.417,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-e5bfcfbb5887701e1d",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_ItemSpawner_C_1",
          "type": "item",
          "number": 37,
          "x": 1858.899,
          "y": 1225.791,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-1e785e60c354f12d21",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_ItemSpawner_C_10",
          "type": "item",
          "number": 38,
          "x": 2619.594,
          "y": 2449.38,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-26ea7aca98f45c7dce",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_ItemSpawner_C_11",
          "type": "item",
          "number": 39,
          "x": 1819.832,
          "y": 1317.86,
          "itemTags": [
            "ID.Item.SedanKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-695ecc563f68eec7c1",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_ItemSpawner_C_13",
          "type": "item",
          "number": 40,
          "x": 1802.059,
          "y": 1491.975,
          "itemTags": [
            "ID.Item.SedanKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-1ee15b0dc910b3f7cf",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_ItemSpawner_C_15",
          "type": "item",
          "number": 41,
          "x": 1847.384,
          "y": 1538.808,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-c49a6fa02dd270f190",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_ItemSpawner_C_16",
          "type": "item",
          "number": 42,
          "x": 2360.021,
          "y": 1181.907,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-b348fd19c007a13b0f",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_ItemSpawner_C_17",
          "type": "item",
          "number": 43,
          "x": 2379.17,
          "y": 1191.273,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f967301c47c2a30d7f",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_ItemSpawner_C_2",
          "type": "item",
          "number": 44,
          "x": 1784.005,
          "y": 2215.523,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-cb2d7d55d6d39cefdd",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_ItemSpawner_C_20",
          "type": "item",
          "number": 45,
          "x": 2394.721,
          "y": 1506.595,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-2a7b0f0b202573b8cb",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_ItemSpawner_C_21",
          "type": "item",
          "number": 46,
          "x": 2334.611,
          "y": 1528.331,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-2b2c7e112988c5613b",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_ItemSpawner_C_22",
          "type": "item",
          "number": 47,
          "x": 2329.891,
          "y": 1421.002,
          "itemTags": [
            "ID.Item.SedanKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-fa84bfff1e669c9b5c",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_ItemSpawner_C_24",
          "type": "item",
          "number": 48,
          "x": 2242.888,
          "y": 2114.703,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-5fd0d59b7caf142e6e",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_ItemSpawner_C_26",
          "type": "item",
          "number": 49,
          "x": 2235.046,
          "y": 1430.507,
          "itemTags": [
            "ID.Item.BoltCutters.Default",
            "ID.Item.RepairKit.Default",
            "ID.Item.SedanKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-a0d38eee3eacbbbcbc",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_ItemSpawner_C_27",
          "type": "item",
          "number": 50,
          "x": 2292.3,
          "y": 1365.119,
          "itemTags": [
            "ID.Item.BoltCutters.Default",
            "ID.Item.RepairKit.Default",
            "ID.Item.SedanKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-4845100673c9d08959",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_ItemSpawner_C_3",
          "type": "item",
          "number": 51,
          "x": 2905.12,
          "y": 3337.417,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-b3483204bde9a340fc",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_ItemSpawner_C_4",
          "type": "item",
          "number": 52,
          "x": 2459.842,
          "y": 1424.526,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-715e9cc94666c8191b",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_ItemSpawner_C_5",
          "type": "item",
          "number": 53,
          "x": 2284.971,
          "y": 1503.551,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-54ae11cb1423e3194b",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_ItemSpawner_C_9",
          "type": "item",
          "number": 54,
          "x": 1779.427,
          "y": 1327.022,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "searchable-5d0a52f386de70c79c",
          "sourceId": "Map4:Map4_Art_GrainMill.json:BP_Lootable_Search_CabinetSet_01b_C_0",
          "type": "searchable",
          "number": 1,
          "x": 1594.693,
          "y": 2775.799,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_01b_C",
          "sourceLevel": "Map4_Art_GrainMill.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-17283df49dcad72354",
          "sourceId": "Map4:Map4_Art_GrainMill.json:BP_Lootable_Search_Crate_01_C_0",
          "type": "searchable",
          "number": 2,
          "x": 2024.734,
          "y": 2442.706,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Art_GrainMill.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-42c0c3079384764c59",
          "sourceId": "Map4:Map4_Art_GrainMill.json:StaticMeshActor_1258",
          "type": "searchable",
          "number": 3,
          "x": 1660.282,
          "y": 2738.856,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinetStandingTV_02_C",
          "sourceLevel": "Map4_Art_GrainMill.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-79ba7a3ed631d96ec4",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_BenchCabinets_01_C_0",
          "type": "searchable",
          "number": 4,
          "x": 2561.951,
          "y": 3220.183,
          "searchKind": "furniture",
          "componentCount": 3,
          "actorType": "BP_Lootable_BenchCabinets_01_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-36348ce9077a662661",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_CabinentDrawer_04_C_0",
          "type": "searchable",
          "number": 5,
          "x": 2652.898,
          "y": 3339.573,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_CabinentDrawer_04_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-9ab1b48c4495be60a3",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_CabinentDrawer_04_C_1",
          "type": "searchable",
          "number": 6,
          "x": 2929.254,
          "y": 3325.824,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_CabinentDrawer_04_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-fa656cfdaf9219a59a",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_CabinentDrawer_04_C_2",
          "type": "searchable",
          "number": 7,
          "x": 2884.803,
          "y": 3325.824,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_CabinentDrawer_04_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-bd3430f75743ee1843",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_CabinentStanding_05_C_0",
          "type": "searchable",
          "number": 8,
          "x": 3105.749,
          "y": 3225.213,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinentStanding_05_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-1de5a715d05c5fa368",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_CabinentStanding_05_C_1",
          "type": "searchable",
          "number": 9,
          "x": 3091.207,
          "y": 3225.213,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinentStanding_05_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-61275a2f7e1d6bddac",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_CabinentStanding_05_C_2",
          "type": "searchable",
          "number": 10,
          "x": 2739.936,
          "y": 2545.942,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinentStanding_05_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-059fe48b84b8e29b77",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_CabinentStanding_05_C_3",
          "type": "searchable",
          "number": 11,
          "x": 2739.936,
          "y": 2531.531,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinentStanding_05_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f9714e8fa8a0b1559b",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_CabinetStanding_06c_C_0",
          "type": "searchable",
          "number": 12,
          "x": 3028.449,
          "y": 3215.301,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_CabinetStanding_06c_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b0d00f85075e88c0d1",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Desk_Office_NN_09b_C_0",
          "type": "searchable",
          "number": 13,
          "x": 2634.731,
          "y": 3295.708,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Desk_Office_NN_09b_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-716194ca222a36c82d",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Desk_Office_NN_09b_C_1",
          "type": "searchable",
          "number": 14,
          "x": 3050.373,
          "y": 3305.322,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Desk_Office_NN_09b_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ab7a08306d999779bf",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Desk_Office_NN_09b_C_2",
          "type": "searchable",
          "number": 15,
          "x": 2689.216,
          "y": 2587.093,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Desk_Office_NN_09b_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-4f6d1be47875208aed",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Dresser_Modern_02b_C_0",
          "type": "searchable",
          "number": 16,
          "x": 3115.099,
          "y": 3263.085,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Dresser_Modern_02b_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-9adb9c6d0749774a04",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Dresser_Modern_02b_C_1",
          "type": "searchable",
          "number": 17,
          "x": 3115.099,
          "y": 3274.811,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Dresser_Modern_02b_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-813e3ef43e3a0b2fe1",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_Cabinet_01a_C_0",
          "type": "searchable",
          "number": 18,
          "x": 2500.295,
          "y": 3356.527,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_Cabinet_01a_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-9334934d81f71f7dfd",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_Cabinet_01a_C_1",
          "type": "searchable",
          "number": 19,
          "x": 2996.662,
          "y": 3287.488,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_Cabinet_01a_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-cf5de81fb9988b97dd",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_Cabinet_NN_02a_C_0",
          "type": "searchable",
          "number": 20,
          "x": 2725.373,
          "y": 2420.183,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Cabinet_NN_02a_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-29b7421627441e6f87",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_CabinetSet_01b_C_0",
          "type": "searchable",
          "number": 21,
          "x": 3016.764,
          "y": 3162.149,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_01b_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-33d0cb16f44f813e95",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_CabinetSet_02j_C_0",
          "type": "searchable",
          "number": 22,
          "x": 2833.617,
          "y": 2482.415,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-aaaed24b89d4edd044",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_CabinetSet_02j_C_1",
          "type": "searchable",
          "number": 23,
          "x": 2821.121,
          "y": 2429.653,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-9b2afc83e3c18432bd",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_CabinetSet_NN_02c_C_0",
          "type": "searchable",
          "number": 24,
          "x": 2562.032,
          "y": 3399.364,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02c_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-8a09c3b69ba39d4c08",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_CabinetSet_NN_02c_C_1",
          "type": "searchable",
          "number": 25,
          "x": 2562.032,
          "y": 3377.148,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02c_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-9c16bd171cd5610249",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_CabinetSet_NN_02d_C_0",
          "type": "searchable",
          "number": 26,
          "x": 2993.223,
          "y": 3292.18,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02d_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-94b637c739c6ca2691",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_CabinetSet_NN_02d_C_1",
          "type": "searchable",
          "number": 27,
          "x": 2993.223,
          "y": 3316.635,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02d_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c6da97d86391a388c0",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_CabinetSet_NN_02d_C_2",
          "type": "searchable",
          "number": 28,
          "x": 2808.625,
          "y": 2429.653,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02d_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e7a0c6d24cc5b12ee8",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_Crate_01_C_0",
          "type": "searchable",
          "number": 29,
          "x": 3029.422,
          "y": 3234.609,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c524c4d59bc40c7581",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_Crate_01_C_1",
          "type": "searchable",
          "number": 30,
          "x": 2950.716,
          "y": 3242.941,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d44295e43bc4f2995e",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_Dresser_NN_09a_C_0",
          "type": "searchable",
          "number": 31,
          "x": 2714.108,
          "y": 2558.067,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_Dresser_NN_09a_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f2af47fb3f95d3ee1d",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_Dresser_NN_11a_C_0",
          "type": "searchable",
          "number": 32,
          "x": 2670.61,
          "y": 3421.675,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ca6af1f5083f308b07",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_Dresser_NN_11a_C_1",
          "type": "searchable",
          "number": 33,
          "x": 2882.033,
          "y": 3260.486,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f3acc252b8e84ff4ce",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_Dresser_NN_11a_C_2",
          "type": "searchable",
          "number": 34,
          "x": 2688.288,
          "y": 2498.95,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-05becb3b3d46313864",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_Shelf_Large_NN_02a_C_0",
          "type": "searchable",
          "number": 35,
          "x": 2989.127,
          "y": 3348.823,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Shelf_Large_NN_02a_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-a4fc598c49c57b44ac",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_Sink_NN_02a_C_0",
          "type": "searchable",
          "number": 36,
          "x": 3041.889,
          "y": 3315.45,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Sink_NN_02a_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-96dc12b7605e3bdf3c",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_Vanity_NN_01a_C_0",
          "type": "searchable",
          "number": 37,
          "x": 2639.925,
          "y": 3364.791,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Vanity_NN_01a_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-8bd03f624daed08ecb",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Search_Vanity_NN_01a_C_1",
          "type": "searchable",
          "number": 38,
          "x": 2750.69,
          "y": 2355.95,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Vanity_NN_01a_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b3037560c6dd3a63b1",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_ShelfStanding_02_C_0",
          "type": "searchable",
          "number": 39,
          "x": 2544.766,
          "y": 3284.953,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_ShelfStanding_02_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-0afefd70e6dfd5ccef",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_ShelfStanding_02_C_1",
          "type": "searchable",
          "number": 40,
          "x": 3065.221,
          "y": 3258.128,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_ShelfStanding_02_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5a362613e619cfb010",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Table_Bedside_01_C_0",
          "type": "searchable",
          "number": 41,
          "x": 3111.49,
          "y": 3308.99,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Table_Bedside_01_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-57ab7c0babd3b2758d",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Table_Bedside_02_C_0",
          "type": "searchable",
          "number": 42,
          "x": 2610.151,
          "y": 3253.375,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Bedside_02_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-189a3ea7f86229573e",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Table_Bedside_02_C_1",
          "type": "searchable",
          "number": 43,
          "x": 2673.755,
          "y": 3312.05,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Bedside_02_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-488f3ad2d80ff89f60",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Table_Decor_01a_C_0",
          "type": "searchable",
          "number": 44,
          "x": 2594.106,
          "y": 3340.492,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Decor_01a_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ac4c4b46cbdca9e853",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Table_Decor_01a_C_1",
          "type": "searchable",
          "number": 45,
          "x": 2971.804,
          "y": 3227.736,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Decor_01a_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-521c151eadd87221b6",
          "sourceId": "Map4:Map4_Art_North.json:BP_Lootable_Table_Set_04a_C_0",
          "type": "searchable",
          "number": 46,
          "x": 2628.123,
          "y": 3422.829,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "Map4_Art_North.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-67a6ac594bf4bf7f71",
          "sourceId": "Map4:Map4_Art_South.json:BP_VanUtility_01_STATIC_C_1",
          "type": "searchable",
          "number": 47,
          "x": 2693.381,
          "y": 1647.664,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanUtility_01_Gameplay_C",
          "sourceLevel": "Map4_Art_South.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-a5a7b770fcfc508e88",
          "sourceId": "Map4:Map4_Art_South.json:StaticMeshActor_1260",
          "type": "searchable",
          "number": 48,
          "x": 1831.911,
          "y": 1297.529,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_GunCabinet_C",
          "sourceLevel": "Map4_Art_South.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f990653c4c4e06c06a",
          "sourceId": "Map4:Map4_Art_South.json:StaticMeshActor_2165",
          "type": "searchable",
          "number": 49,
          "x": 1849.803,
          "y": 1324.638,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Desk_NN_02a_C",
          "sourceLevel": "Map4_Art_South.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-6e26cfc58a8ece72e6",
          "sourceId": "Map4:Map4_Art_South.json:StaticMeshActor_2166",
          "type": "searchable",
          "number": 50,
          "x": 1854.598,
          "y": 1291.049,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "Map4_Art_South.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-54258f4661301c127e",
          "sourceId": "Map4:Map4_Art_South.json:StaticMeshActor_2167",
          "type": "searchable",
          "number": 51,
          "x": 1872.129,
          "y": 1286.669,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Cabinet_NN_17a_C",
          "sourceLevel": "Map4_Art_South.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e89222bdb52b3087ed",
          "sourceId": "Map4:Map4_Art_South.json:StaticMeshActor_2701",
          "type": "searchable",
          "number": 52,
          "x": 2444.642,
          "y": 1379.696,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_FilingCabinet_02_C",
          "sourceLevel": "Map4_Art_South.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-41f6fafd1c82f11876",
          "sourceId": "Map4:Map4_Art_South.json:StaticMeshActor_2702",
          "type": "searchable",
          "number": 53,
          "x": 2461.513,
          "y": 1301.556,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Decor_01a_C",
          "sourceLevel": "Map4_Art_South.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-44b6003bcd45b68299",
          "sourceId": "Map4:Map4_Art_South.json:StaticMeshActor_705",
          "type": "searchable",
          "number": 54,
          "x": 1816.701,
          "y": 1561.007,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_DresserVanity_01_C",
          "sourceLevel": "Map4_Art_South.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-075bd91a39dd423a5a",
          "sourceId": "Map4:Map4_Buildings.json:BP_Lootable_Table_Bedside_02_C_0",
          "type": "searchable",
          "number": 55,
          "x": 2610.151,
          "y": 3250.598,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Bedside_02_C",
          "sourceLevel": "Map4_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-2feca11b5448e6a325",
          "sourceId": "Map4:Map4_Gameplay.json:BP_BusSchool_01_C_0",
          "type": "searchable",
          "number": 56,
          "x": 2783.632,
          "y": 1343.31,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_BusSchool_01_Gameplay_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ae008d1650ab9d2fdd",
          "sourceId": "Map4:Map4_Gameplay.json:BP_CoupeOld_02_C_0",
          "type": "searchable",
          "number": 57,
          "x": 2282.313,
          "y": 2503.371,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeOld_02_Gameplay_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-083cf2f01f23e4c8e7",
          "sourceId": "Map4:Map4_Gameplay.json:BP_CoupeOld_02_C_1",
          "type": "searchable",
          "number": 58,
          "x": 2547.703,
          "y": 1804.238,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeHatchback_01_Gameplay_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e2c7812f8fa0104e22",
          "sourceId": "Map4:Map4_Gameplay.json:BP_CoupeOld_02_C_2",
          "type": "searchable",
          "number": 59,
          "x": 2715.517,
          "y": 1906.327,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeOld_02_Gameplay_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-07724ed52423cb592c",
          "sourceId": "Map4:Map4_Gameplay.json:BP_CoupeSoftTop_01_C_0",
          "type": "searchable",
          "number": 60,
          "x": 2373.93,
          "y": 3316.6,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeSoftTop_01_Gameplay_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-fe7d7dd97f119165ed",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_Search_Crate_01_C_0",
          "type": "searchable",
          "number": 61,
          "x": 2713.044,
          "y": 3552.096,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-da4fe364c091f5cd4d",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_Search_Crate_01_C_1",
          "type": "searchable",
          "number": 62,
          "x": 2916.158,
          "y": 1348.376,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5283a23597c3c63f98",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_Search_Crate_01_C_10",
          "type": "searchable",
          "number": 63,
          "x": 2734.511,
          "y": 2600.146,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-3150adee937df7c7bf",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_Search_Crate_01_C_11",
          "type": "searchable",
          "number": 64,
          "x": 2775.008,
          "y": 3365.378,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b128703bec6c6b56b8",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_Search_Crate_01_C_12",
          "type": "searchable",
          "number": 65,
          "x": 1501.875,
          "y": 2956.152,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-06ab52ac622ada305f",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_Search_Crate_01_C_13",
          "type": "searchable",
          "number": 66,
          "x": 3117.805,
          "y": 2227.293,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b41bfd0919685e7df1",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_Search_Crate_01_C_15",
          "type": "searchable",
          "number": 67,
          "x": 2551.741,
          "y": 2310.435,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-0470ee4b46f7e5458b",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_Search_Crate_01_C_2",
          "type": "searchable",
          "number": 68,
          "x": 2861.535,
          "y": 1144.519,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-56f958eff3fa4bb85d",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_Search_Crate_01_C_3",
          "type": "searchable",
          "number": 69,
          "x": 1413.249,
          "y": 973.69,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-287aee3cf397ee1206",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_Search_Crate_01_C_4",
          "type": "searchable",
          "number": 70,
          "x": 1341.581,
          "y": 1381.171,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f8ba4b8488eb40338d",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_Search_Crate_01_C_5",
          "type": "searchable",
          "number": 71,
          "x": 1417.242,
          "y": 1782.458,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-765f3993dc3998b0dc",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_Search_Crate_01_C_6",
          "type": "searchable",
          "number": 72,
          "x": 1882.293,
          "y": 1943.283,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-03e1d8de8dd73b3494",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_Search_Crate_01_C_7",
          "type": "searchable",
          "number": 73,
          "x": 1738.996,
          "y": 2338.706,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-419eb2a35fa55a9280",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_Search_Crate_01_C_8",
          "type": "searchable",
          "number": 74,
          "x": 1497.978,
          "y": 2807.944,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-9c3a3897a28ba3350d",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_Search_Crate_01_C_9",
          "type": "searchable",
          "number": 75,
          "x": 2785.748,
          "y": 2012.97,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b220ffdbf471cbb216",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_Table_Set_04a_C_0",
          "type": "searchable",
          "number": 76,
          "x": 1908.91,
          "y": 1939.257,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-86583a42f9235b4cef",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_ToolCart_01b_C_0",
          "type": "searchable",
          "number": 77,
          "x": 2631.676,
          "y": 2475.762,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-865bacf612516d61da",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_ToolCart_01b_C_1",
          "type": "searchable",
          "number": 78,
          "x": 1426.894,
          "y": 2945.094,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-9e6c3d7f3eea67a98b",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_ToolCart_01b_C_2",
          "type": "searchable",
          "number": 79,
          "x": 1674.844,
          "y": 2185.966,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e028542441a4f5b3ae",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_ToolCart_01b_C_3",
          "type": "searchable",
          "number": 80,
          "x": 3224.901,
          "y": 2584.636,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-7b99c1e21e59ccb677",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_ToolCart_01b_C_4",
          "type": "searchable",
          "number": 81,
          "x": 1778.805,
          "y": 3398.976,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-11ea6187a0d4ba0c55",
          "sourceId": "Map4:Map4_Gameplay.json:BP_Lootable_ToolCart_01b_C_6",
          "type": "searchable",
          "number": 82,
          "x": 2347.77,
          "y": 1488.555,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-a9adb734c48fa44c81",
          "sourceId": "Map4:Map4_Gameplay.json:BP_VanUtility_01_C_1",
          "type": "searchable",
          "number": 83,
          "x": 2957.21,
          "y": 2170.008,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanUtility_01_Gameplay_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-4465b9c93d30cf1817",
          "sourceId": "Map4:Map4_Gameplay.json:StaticMeshActor_83",
          "type": "searchable",
          "number": 84,
          "x": 1847.251,
          "y": 1986.791,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-53dff872db26ff417f",
          "sourceId": "Map4:Map4_Gameplay.json:StaticMeshActor_84",
          "type": "searchable",
          "number": 85,
          "x": 1750.517,
          "y": 2052.735,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d9d8026471bf70cf02",
          "sourceId": "Map4:Map4_Gameplay.json:StaticMeshActor_87",
          "type": "searchable",
          "number": 86,
          "x": 2973.816,
          "y": 1810.609,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeOld_02_Gameplay_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-900f4cc96efe5bcfb4",
          "sourceId": "Map4:Map4_Gameplay.json:StaticMeshActor_91",
          "type": "searchable",
          "number": 87,
          "x": 2494.314,
          "y": 1340.656,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_ShelfStanding_02_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d244de7c3ec2ee0e8d",
          "sourceId": "Map4:Map4_Gameplay.json:StaticMeshActor_92",
          "type": "searchable",
          "number": 88,
          "x": 2452.415,
          "y": 1334.66,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Desk_02_C",
          "sourceLevel": "Map4_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-9222bc0883f957c4b9",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_Lootable_LunchBox_C_1",
          "type": "searchable",
          "number": 89,
          "x": 3231.276,
          "y": 2229.435,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_LunchBox_C",
          "sourceLevel": "Map4_Gameplay_MP.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-a47981b82df68c568a",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_Lootable_Search_Crate_01_C_1",
          "type": "searchable",
          "number": 90,
          "x": 2458.584,
          "y": 737.024,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay_MP.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-85486f67ed9311485a",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_Lootable_Search_Crate_01_C_10",
          "type": "searchable",
          "number": 91,
          "x": 1368.663,
          "y": 1165.86,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay_MP.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-7d745561922eec5274",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_Lootable_Search_Crate_01_C_12",
          "type": "searchable",
          "number": 92,
          "x": 1782.883,
          "y": 1924.611,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay_MP.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-9c4217e2a83f2e6ae4",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_Lootable_Search_Crate_01_C_14",
          "type": "searchable",
          "number": 93,
          "x": 1810.922,
          "y": 1916.002,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay_MP.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-1b5acde9ae814a0eea",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_Lootable_Search_Crate_01_C_3",
          "type": "searchable",
          "number": 94,
          "x": 2979.476,
          "y": 1359.038,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay_MP.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5e050d98f8c8f6e7f4",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_Lootable_Search_Crate_01_C_4",
          "type": "searchable",
          "number": 95,
          "x": 2966.702,
          "y": 1359.038,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay_MP.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-04bef589a97e1b5d87",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_Lootable_Search_Crate_01_C_6",
          "type": "searchable",
          "number": 96,
          "x": 2814.179,
          "y": 2214.162,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay_MP.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e5c605f8b8149af00f",
          "sourceId": "Map4:Map4_Gameplay_MP.json:BP_Lootable_Search_Crate_01_C_8",
          "type": "searchable",
          "number": 97,
          "x": 3250.086,
          "y": 2616.467,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map4_Gameplay_MP.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b6cb357210c5a24bd3",
          "sourceId": "Map4:Map4_Roads.json:BP_CoupeHatchback_01_Gameplay_C_0",
          "type": "searchable",
          "number": 98,
          "x": 3184.074,
          "y": 3092.941,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeHatchback_01_Gameplay_C",
          "sourceLevel": "Map4_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-6197aad4e3cc0eaf42",
          "sourceId": "Map4:Map4_Roads.json:BP_CoupeOld_02_C_2",
          "type": "searchable",
          "number": 99,
          "x": 2844.112,
          "y": 2917.784,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeOld_02_Gameplay_C",
          "sourceLevel": "Map4_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-73e1158527355a05fe",
          "sourceId": "Map4:Map4_Roads.json:BP_CoupeOld_02_C_7",
          "type": "searchable",
          "number": 100,
          "x": 1282.39,
          "y": 2633.227,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeOld_02_Gameplay_C",
          "sourceLevel": "Map4_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-62d3e9be04db647e90",
          "sourceId": "Map4:Map4_Roads.json:BP_CoupeOld_02_C_8",
          "type": "searchable",
          "number": 101,
          "x": 1354.264,
          "y": 2025.001,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeOld_02_Gameplay_C",
          "sourceLevel": "Map4_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-8c4c456eabea4bc1e0",
          "sourceId": "Map4:Map4_Roads.json:BP_VanClassic_01_Gameplay_C_0",
          "type": "searchable",
          "number": 102,
          "x": 2948.861,
          "y": 2927.421,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanClassic_01_Gameplay_C",
          "sourceLevel": "Map4_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-cf75365803bb0ffa1a",
          "sourceId": "Map4:Map4_Roads.json:BP_VanUtility_01_C_2",
          "type": "searchable",
          "number": 103,
          "x": 2617.71,
          "y": 1045.344,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanUtility_01_Gameplay_C",
          "sourceLevel": "Map4_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-06264f400f8124275e",
          "sourceId": "Map4:Map4_Roads.json:BP_VanUtility_01_Gameplay_C_1",
          "type": "searchable",
          "number": 104,
          "x": 1537.158,
          "y": 1380.321,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanUtility_01_Gameplay_C",
          "sourceLevel": "Map4_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-a3a56df1e04731bc01",
          "sourceId": "Map4:Map4_Roads.json:BP_WagonClassic_01_Gameplay_C_1",
          "type": "searchable",
          "number": 105,
          "x": 2274.516,
          "y": 2927.934,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_WagonClassic_01_Gameplay_C",
          "sourceLevel": "Map4_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5a64f0d726286a06e2",
          "sourceId": "Map4:Map4_Roads.json:StaticMeshActor_51",
          "type": "searchable",
          "number": 106,
          "x": 1957.453,
          "y": 3163.01,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeOld_02_Gameplay_C",
          "sourceLevel": "Map4_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d51f4d6002779e0040",
          "sourceId": "Map4:Map4_Roads.json:StaticMeshActor_52",
          "type": "searchable",
          "number": 107,
          "x": 1373.966,
          "y": 3330.702,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeOld_02_Gameplay_C",
          "sourceLevel": "Map4_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        }
      ]
    },
    {
      "id": "haddonfield-heights",
      "name": "Haddonfield Heights",
      "width": 4096,
      "height": 4096,
      "sourceZoom": -2.5,
      "image": "./assets/maps/haddonfield-heights-realistic.webp",
      "styles": {
        "realistic": "./assets/maps/haddonfield-heights-realistic.webp",
        "paper": "./assets/maps/haddonfield-heights-paper.webp"
      },
      "pixelOffset": {
        "realistic": 0,
        "paper": {
          "x": -88.4,
          "y": -70.217
        }
      },
      "registration": {
        "actorToRealisticX": 183.85,
        "paperRelativeX": -88.4,
        "source": "CP07+CP08 feature registration; not live-game certified; v1.3.4 paper border cleanup",
        "paperRelativeY": -70.217
      },
      "overlays": {
        "addresses": [
          {
            "x": 1357.45,
            "y": 3108.0,
            "label": "702"
          },
          {
            "x": 1688.75,
            "y": 3108.0,
            "label": "705"
          },
          {
            "x": 2001.75,
            "y": 3135.8,
            "label": "709"
          },
          {
            "x": 2264.05,
            "y": 3131.1,
            "label": "713"
          },
          {
            "x": 1348.25,
            "y": 2379.7,
            "label": "807"
          },
          {
            "x": 1242.35,
            "y": 2045.7,
            "label": "805"
          },
          {
            "x": 1343.65,
            "y": 1785.9,
            "label": "803"
          },
          {
            "x": 1421.85,
            "y": 1391.6,
            "label": "801"
          },
          {
            "x": 1458.65,
            "y": 593.8,
            "label": "915"
          },
          {
            "x": 2204.25,
            "y": 2444.6,
            "label": "808"
          },
          {
            "x": 2181.25,
            "y": 1929.7,
            "label": "804"
          },
          {
            "x": 2167.45,
            "y": 1382.3,
            "label": "800"
          },
          {
            "x": 2185.85,
            "y": 765.4,
            "label": "918"
          },
          {
            "x": 2761.15,
            "y": 570.6,
            "label": "922"
          },
          {
            "x": 3097.05,
            "y": 1758.1,
            "label": "864"
          },
          {
            "x": 3120.05,
            "y": 1066.9,
            "label": "850"
          }
        ],
        "streets": [
          {
            "x": 1127.35,
            "y": 3145.1,
            "label": "Syracuse Ave.",
            "rotation": -90
          },
          {
            "x": 920.25,
            "y": 2078.2,
            "label": "La Mirada Way",
            "rotation": -90
          },
          {
            "x": 1863.65,
            "y": 2774.0,
            "label": "Lampkin Lane",
            "rotation": 0
          },
          {
            "x": 1886.65,
            "y": 1498.3,
            "label": "Victoria Way",
            "rotation": -90
          },
          {
            "x": 2577.05,
            "y": 3075.5,
            "label": "Edgemont St.",
            "rotation": -90
          },
          {
            "x": 1334.45,
            "y": 1090.1,
            "label": "Edgemont St.",
            "rotation": 0
          },
          {
            "x": 3037.25,
            "y": 2078.2,
            "label": "McKinzie Lane",
            "rotation": 0
          }
        ],
        "grid": null
      },
      "locations": [
        {
          "id": "haddonfield-heights-cellar-8",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_CellarEscape_C_0:cellar_escape",
          "type": "cellar",
          "number": 1,
          "x": 1353.866,
          "y": 1912.838,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "haddonfield-heights-cellar-6",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_CellarEscape_C_11:cellar_escape",
          "type": "cellar",
          "number": 4,
          "x": 1678.979,
          "y": 3179.14,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "source-3b65e47f8ece91bba9",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_CellarEscape_C_13:cellar_escape",
          "type": "cellar",
          "number": 9,
          "x": 1216.931,
          "y": 2163.019,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "haddonfield-heights-cellar-2",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_CellarEscape_C_15:cellar_escape",
          "type": "cellar",
          "number": 3,
          "x": 1472.391,
          "y": 599.83,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "haddonfield-heights-cellar-4",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_CellarEscape_C_2:cellar_escape",
          "type": "cellar",
          "number": 7,
          "x": 3259.888,
          "y": 1725.482,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "haddonfield-heights-cellar-5",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_CellarEscape_C_4:cellar_escape",
          "type": "cellar",
          "number": 8,
          "x": 3426.148,
          "y": 3049.745,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "haddonfield-heights-cellar-3",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_CellarEscape_C_5:cellar_escape",
          "type": "cellar",
          "number": 6,
          "x": 2535.741,
          "y": 781.46,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "haddonfield-heights-cellar-1",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_CellarEscape_C_7:cellar_escape",
          "type": "cellar",
          "number": 5,
          "x": 2507.2,
          "y": 2160.054,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "haddonfield-heights-cellar-7",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_CellarEscape_C_9:cellar_escape",
          "type": "cellar",
          "number": 2,
          "x": 1328.405,
          "y": 2466.364,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "haddonfield-heights-gate-1",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_GateEscape_C_1:gate_escape",
          "type": "gate",
          "number": 2,
          "x": 1211.248,
          "y": 328.038,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Escape Gate"
        },
        {
          "id": "haddonfield-heights-gate-3",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_GateEscape_C_11:gate_escape",
          "type": "gate",
          "number": 1,
          "x": 703.273,
          "y": 2018.308,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Escape Gate"
        },
        {
          "id": "haddonfield-heights-gate-2",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_GateEscape_C_2:gate_escape",
          "type": "gate",
          "number": 3,
          "x": 3475.675,
          "y": 1442.186,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Escape Gate"
        },
        {
          "id": "source-9c35ad856974c084a7",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_OutOfBoundsVolume_C_1:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 1,
          "x": 742.312,
          "y": 2861.834,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "source-976dae3091d1566096",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_OutOfBoundsVolume_C_2:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 2,
          "x": 1005.1,
          "y": 988.788,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "source-1f4ed3a653eff845c8",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_OutOfBoundsVolume_C_20:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 3,
          "x": 1096.464,
          "y": 3634.529,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "source-b09391006f03acf9da",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_OutOfBoundsVolume_C_5:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 4,
          "x": 2795.408,
          "y": 3698.548,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "source-04bc2345664e5609e2",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_OutOfBoundsVolume_C_6:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 5,
          "x": 1917.406,
          "y": 242.004,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "source-2deef666d31ed405f8",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_OutOfBoundsVolume_C_8:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 6,
          "x": 3550.784,
          "y": 2283.081,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "haddonfield-heights-car-4",
          "sourceId": "",
          "type": "car",
          "number": 2,
          "x": 2118.808,
          "y": 2283.744,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "haddonfield-heights-car-1",
          "sourceId": "",
          "type": "car",
          "number": 3,
          "x": 2600.193,
          "y": 1772.621,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "haddonfield-heights-car-3",
          "sourceId": "",
          "type": "car",
          "number": 4,
          "x": 3598.981,
          "y": 2916.225,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "haddonfield-heights-car-2",
          "sourceId": "",
          "type": "car",
          "number": 1,
          "x": 1108.394,
          "y": 1605.532,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "source-113137d1de743e6464",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_ItemSpawner_C_20",
          "type": "item",
          "number": 1,
          "x": 1471.707,
          "y": 483.862,
          "itemTags": [
            "ID.Item.CellarKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-1e1abf9fc841453736",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_ItemSpawner_C_22",
          "type": "item",
          "number": 2,
          "x": 1497.157,
          "y": 533.038,
          "itemTags": [
            "ID.Item.CellarKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-d14845691b4ba267e6",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_ItemSpawner_C_24",
          "type": "item",
          "number": 3,
          "x": 1529.627,
          "y": 708.125,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-e0afee4c08beb4c69f",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_ItemSpawner_C_4",
          "type": "item",
          "number": 4,
          "x": 2276.669,
          "y": 1391.693,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-a29bfb70cde96bbfba",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_ItemSpawner_C_7",
          "type": "item",
          "number": 5,
          "x": 2359.806,
          "y": 1414.909,
          "itemTags": [
            "ID.Item.CellarKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-546cb43399fe2982a0",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_ItemSpawner_C_8",
          "type": "item",
          "number": 6,
          "x": 2357.68,
          "y": 1472.984,
          "itemTags": [
            "ID.Item.CellarKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-3b7af8a19fee54f521",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_ItemSpawner_C_0",
          "type": "item",
          "number": 7,
          "x": 3172.499,
          "y": 896.47,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-84187161e8ad5e002e",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_ItemSpawner_C_1",
          "type": "item",
          "number": 8,
          "x": 1010.92,
          "y": 2060.342,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-0ea9fc2d250d82c56f",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_ItemSpawner_C_19",
          "type": "item",
          "number": 9,
          "x": 2663.369,
          "y": 1564.763,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-0786262ac5ea6ade14",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_ItemSpawner_C_20",
          "type": "item",
          "number": 10,
          "x": 3070.419,
          "y": 2880.146,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-cc38fc4e60eb0df284",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_ItemSpawner_C_21",
          "type": "item",
          "number": 11,
          "x": 3318.966,
          "y": 1397.369,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-c7cef3c48fe68a5a83",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_ItemSpawner_C_3",
          "type": "item",
          "number": 12,
          "x": 2575.986,
          "y": 566.822,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-810fde11672a04e993",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_ItemSpawner_C_30",
          "type": "item",
          "number": 13,
          "x": 2459.532,
          "y": 3145.791,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-0de956ece3618a4717",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_ItemSpawner_C_35",
          "type": "item",
          "number": 14,
          "x": 2939.16,
          "y": 806.4,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f89083e48b0f52c78f",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_ItemSpawner_C_4",
          "type": "item",
          "number": 15,
          "x": 1290.649,
          "y": 1790.205,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-24ab77cbbe9b3c9f70",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_ItemSpawner_C_43",
          "type": "item",
          "number": 16,
          "x": 3463.456,
          "y": 2933.596,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-2b3788d7b52845b2a6",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_ItemSpawner_C_45",
          "type": "item",
          "number": 17,
          "x": 3293.495,
          "y": 2927.47,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-af03dd8097c2e77777",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_ItemSpawner_C_46",
          "type": "item",
          "number": 18,
          "x": 3461.379,
          "y": 3008.645,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-5826f36cb45d0965df",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_ItemSpawner_C_5",
          "type": "item",
          "number": 19,
          "x": 3237.785,
          "y": 1049.757,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-8f0a71c8f09a9b5d9a",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_ItemSpawner_C_6",
          "type": "item",
          "number": 20,
          "x": 3220.793,
          "y": 2684.579,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-497d0ab647b3d22e01",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_ItemSpawner_C_7",
          "type": "item",
          "number": 21,
          "x": 3459.577,
          "y": 2995.804,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-a2023aa3617eb511df",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_ItemSpawner_C_8",
          "type": "item",
          "number": 22,
          "x": 2419.479,
          "y": 3665.652,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-12ff3dd73cf09882c2",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_ItemSpawner_C_9",
          "type": "item",
          "number": 23,
          "x": 2704.589,
          "y": 1555.049,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "searchable-021eee862c6be714cf",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_BenchCabinets_01_C_0",
          "type": "searchable",
          "number": 1,
          "x": 2210.207,
          "y": 2469.942,
          "searchKind": "furniture",
          "componentCount": 3,
          "actorType": "BP_Lootable_BenchCabinets_01_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-2a12e9f9fa7bb36b97",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_CabinentDrawer_04_C_0",
          "type": "searchable",
          "number": 2,
          "x": 2459.97,
          "y": 1594.567,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_CabinentDrawer_04_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-095bc080b3953808f4",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_CabinentDrawer_04_C_1",
          "type": "searchable",
          "number": 3,
          "x": 2459.97,
          "y": 1651.829,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_CabinentDrawer_04_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-1b27ec65f42440d365",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_CabinentDrawer_04_C_2",
          "type": "searchable",
          "number": 4,
          "x": 2364.007,
          "y": 2352.784,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_CabinentDrawer_04_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-49a9934215343411f4",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_CabinentDrawer_04_C_3",
          "type": "searchable",
          "number": 5,
          "x": 1635.694,
          "y": 2487.471,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_CabinentDrawer_04_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-760b9e87029985b8d6",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_CabinentDrawer_04_C_4",
          "type": "searchable",
          "number": 6,
          "x": 1575.059,
          "y": 2487.471,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_CabinentDrawer_04_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-39bc1306a98147acc5",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_CabinentDrawer_04_C_5",
          "type": "searchable",
          "number": 7,
          "x": 1325.788,
          "y": 2285.432,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_CabinentDrawer_04_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-8c6c7d4ee82ef7958f",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_CabinentStanding_05_C_0",
          "type": "searchable",
          "number": 8,
          "x": 1557.616,
          "y": 1458.285,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinentStanding_05_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-a3209b35148fe874f7",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_CabinentStanding_05_C_1",
          "type": "searchable",
          "number": 9,
          "x": 1539.052,
          "y": 1458.285,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinentStanding_05_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-10f75d6cd8d30209dc",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_CabinentStanding_05_C_2",
          "type": "searchable",
          "number": 10,
          "x": 2330.362,
          "y": 1367.204,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinentStanding_05_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-1107734a665c0baaa5",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_CabinentStanding_05_C_3",
          "type": "searchable",
          "number": 11,
          "x": 2330.362,
          "y": 1385.937,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinentStanding_05_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-50024ae10bf69168ae",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_CabinentStanding_05_C_4",
          "type": "searchable",
          "number": 12,
          "x": 1441.856,
          "y": 2161.9,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinentStanding_05_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b304e16ab8241ff59f",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_CabinentStanding_05_C_5",
          "type": "searchable",
          "number": 13,
          "x": 1441.856,
          "y": 2144.014,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinentStanding_05_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-cc3d6415414edc70b0",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_CabinentStanding_05_C_6",
          "type": "searchable",
          "number": 14,
          "x": 2423.004,
          "y": 3271.662,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Cabinet_NN_17a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-81dae57e593a0b742a",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_CabinentStanding_05_C_7",
          "type": "searchable",
          "number": 15,
          "x": 2423.004,
          "y": 3291.389,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Cabinet_NN_17a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-20bdac999927225cf7",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_CabinetStanding_06c_C_0",
          "type": "searchable",
          "number": 16,
          "x": 2317.593,
          "y": 1466.782,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_CabinetStanding_06c_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-25e6021bb162d4d073",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_CabinetStanding_06c_C_1",
          "type": "searchable",
          "number": 17,
          "x": 2419.013,
          "y": 3203.789,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_CabinetStanding_06c_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e7b4b1942cbe2f3d1b",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_CabinetStandingTV_02_C_0",
          "type": "searchable",
          "number": 18,
          "x": 1600.458,
          "y": 2420.575,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinetStandingTV_02_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b5ab3cf42214a27620",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Desk_Office_NN_09b_C_0",
          "type": "searchable",
          "number": 19,
          "x": 1610.627,
          "y": 1523.623,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Desk_Office_NN_09b_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-675fe62c5d68e08e58",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Desk_Office_NN_09b_C_1",
          "type": "searchable",
          "number": 20,
          "x": 2433.559,
          "y": 1438.54,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Desk_Office_NN_09b_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-675268ef251c652fec",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Desk_Office_NN_09b_C_2",
          "type": "searchable",
          "number": 21,
          "x": 2307.5,
          "y": 2376.187,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Desk_Office_NN_09b_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-1fe656a098a927e180",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Dresser_Modern_02b_C_0",
          "type": "searchable",
          "number": 22,
          "x": 2379.149,
          "y": 1355.159,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Dresser_Modern_02b_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e5979a6640feabba97",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Dresser_Modern_02b_C_1",
          "type": "searchable",
          "number": 23,
          "x": 2394.254,
          "y": 1355.159,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Dresser_Modern_02b_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-735dd9880f4ffe8a2b",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_DresserVanity_01_C_0",
          "type": "searchable",
          "number": 24,
          "x": 2478.464,
          "y": 3449.023,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_DresserVanity_01_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d67a80a7ee74a02330",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_LaundryBasket_01_C_0",
          "type": "searchable",
          "number": 25,
          "x": 1549.227,
          "y": 502.566,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_LaundryBasket_01_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-6be89d03c0055e0131",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_LaundryBasket_02_C_0",
          "type": "searchable",
          "number": 26,
          "x": 1299.425,
          "y": 2237.668,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_LaundryBasket_02_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-a473b678e9369d4788",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Cabinet_01a_C_0",
          "type": "searchable",
          "number": 27,
          "x": 2410.585,
          "y": 1507.73,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_Cabinet_01a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-fcf1604f60ad1f06ec",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Cabinet_01a_C_1",
          "type": "searchable",
          "number": 28,
          "x": 2385.847,
          "y": 2549.369,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_Cabinet_01a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-79d2bfc9daa7d9d403",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Cabinet_01a_C_2",
          "type": "searchable",
          "number": 29,
          "x": 1289.264,
          "y": 2261.364,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_Cabinet_01a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-239b1ec41b9912412a",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Cabinet_NN_02a_C_0",
          "type": "searchable",
          "number": 30,
          "x": 1395.612,
          "y": 1477.046,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Cabinet_NN_02a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5c075f316390abdfc2",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_CabinetSet_01b_C_0",
          "type": "searchable",
          "number": 31,
          "x": 2249.122,
          "y": 1481.835,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_01b_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-6a9ff8bd22fb1512ce",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_CabinetSet_02j_C_0",
          "type": "searchable",
          "number": 32,
          "x": 1475.78,
          "y": 1337.604,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-3efad34775bf03e81c",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_CabinetSet_02j_C_1",
          "type": "searchable",
          "number": 33,
          "x": 1407.812,
          "y": 1353.702,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e8f536d9819545db1a",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_CabinetSet_02j_C_2",
          "type": "searchable",
          "number": 34,
          "x": 1408.178,
          "y": 2449.372,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-94b70f4a9536504995",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_CabinetSet_02j_C_3",
          "type": "searchable",
          "number": 35,
          "x": 1450.111,
          "y": 2093.696,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5048ebc477f12f3905",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_CabinetSet_02j_C_4",
          "type": "searchable",
          "number": 36,
          "x": 2302.323,
          "y": 3358.899,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b6ea395eec20eb2d0b",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_CabinetSet_02j_C_5",
          "type": "searchable",
          "number": 37,
          "x": 2318.421,
          "y": 3426.868,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ce1abe170ed39f278b",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_CabinetSet_02j_C_6",
          "type": "searchable",
          "number": 38,
          "x": 1423.311,
          "y": 656.558,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-7a0a2c5c248fa0fa07",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_CabinetSet_NN_02c_C_0",
          "type": "searchable",
          "number": 39,
          "x": 2441.03,
          "y": 2469.838,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02c_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c1fd054296b57eea34",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_CabinetSet_NN_02c_C_1",
          "type": "searchable",
          "number": 40,
          "x": 2412.412,
          "y": 2469.838,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02c_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-8bf689c9067bf5fa67",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_CabinetSet_NN_02d_C_0",
          "type": "searchable",
          "number": 41,
          "x": 1407.812,
          "y": 1369.8,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02d_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-2101042180e89a335f",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_CabinetSet_NN_02d_C_1",
          "type": "searchable",
          "number": 42,
          "x": 2416.629,
          "y": 1512.161,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02d_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ed238774d0e7d09579",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_CabinetSet_NN_02d_C_2",
          "type": "searchable",
          "number": 43,
          "x": 2448.133,
          "y": 1512.161,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02d_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5af1c6efb88ee82013",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_CabinetSet_NN_02d_C_3",
          "type": "searchable",
          "number": 44,
          "x": 1406.39,
          "y": 2467.259,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02d_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-182bb71a4f05bc2c1c",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_CabinetSet_NN_02d_C_4",
          "type": "searchable",
          "number": 45,
          "x": 1349.153,
          "y": 2452.946,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02d_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c3b515b78d0f7a13ec",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_CabinetSet_NN_02d_C_5",
          "type": "searchable",
          "number": 46,
          "x": 2334.518,
          "y": 3426.868,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02d_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b15752d215803c1fc5",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_CabinetSet_NN_02d_C_6",
          "type": "searchable",
          "number": 47,
          "x": 1423.311,
          "y": 687.859,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02d_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b20aa183b38847c63f",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Crate_01_C_0",
          "type": "searchable",
          "number": 48,
          "x": 2342.466,
          "y": 1465.529,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b587d6ad41a0d356cd",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Crate_01_C_1",
          "type": "searchable",
          "number": 49,
          "x": 2353.199,
          "y": 1566.918,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ce30656b60647e0778",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Desk_NN_02a_C_0",
          "type": "searchable",
          "number": 50,
          "x": 1323.429,
          "y": 2586.068,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Desk_NN_02a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f64233fb009bc6e325",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Desk_NN_02a_C_1",
          "type": "searchable",
          "number": 51,
          "x": 1233.725,
          "y": 2263.014,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Desk_NN_02a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-6542960f166211e3f5",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Desk_NN_02a_C_2",
          "type": "searchable",
          "number": 52,
          "x": 2488.538,
          "y": 3323.996,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Desk_NN_02a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-61aa0802a74cb5a332",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Dresser_NN_09a_C_0",
          "type": "searchable",
          "number": 53,
          "x": 1573.236,
          "y": 1491.557,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_Dresser_NN_09a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-05baa73c263232e722",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Dresser_NN_09a_C_1",
          "type": "searchable",
          "number": 54,
          "x": 1548.408,
          "y": 477.926,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_Dresser_NN_09a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-3235b9b77457ccff75",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Dresser_NN_11a_C_0",
          "type": "searchable",
          "number": 55,
          "x": 1497.081,
          "y": 1524.818,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c9b2107b710c8a811b",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Dresser_NN_11a_C_1",
          "type": "searchable",
          "number": 56,
          "x": 2375.801,
          "y": 1655.397,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-542d0be54cdb2c50a7",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Dresser_NN_11a_C_2",
          "type": "searchable",
          "number": 57,
          "x": 2469.772,
          "y": 2329.966,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-645fbbd98bc0286be1",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Dresser_NN_11a_C_3",
          "type": "searchable",
          "number": 58,
          "x": 1439.72,
          "y": 2602.653,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-a4a7dda4593e8c4c14",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Dresser_NN_11a_C_4",
          "type": "searchable",
          "number": 59,
          "x": 1373.51,
          "y": 2261.466,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-70cf32644394ca5db7",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Dresser_NN_11a_C_5",
          "type": "searchable",
          "number": 60,
          "x": 2479.676,
          "y": 3529.499,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-3c8570dd6e73200c27",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Dresser_NN_11a_C_6",
          "type": "searchable",
          "number": 61,
          "x": 1511.025,
          "y": 426.941,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-af39da75e128299ae5",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Shelf_Large_NN_02a_C_0",
          "type": "searchable",
          "number": 62,
          "x": 2489.598,
          "y": 1517.438,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Shelf_Large_NN_02a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-bbd9c403b6569b80d6",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Shelf_Large_NN_02a_C_1",
          "type": "searchable",
          "number": 63,
          "x": 1464.888,
          "y": 2531.672,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Shelf_Large_NN_02a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-4498b21d5325f4c9a6",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Sink_NN_02a_C_0",
          "type": "searchable",
          "number": 64,
          "x": 2446.605,
          "y": 1449.47,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Sink_NN_02a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c7bada93d8f7f2db3c",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Sink_NN_02a_C_1",
          "type": "searchable",
          "number": 65,
          "x": 1474.358,
          "y": 2566.069,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Sink_NN_02a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e0d9381070c44d7fd9",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Sink_NN_02a_C_2",
          "type": "searchable",
          "number": 66,
          "x": 1295.167,
          "y": 2077.063,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Sink_NN_02a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-730a2916588732b5a9",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Sink_NN_02a_C_3",
          "type": "searchable",
          "number": 67,
          "x": 1647.468,
          "y": 582.961,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Sink_NN_02a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-82c7b6d68a2ea71e91",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Sink_NN_02a_C_4",
          "type": "searchable",
          "number": 68,
          "x": 1477.073,
          "y": 691.857,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Sink_NN_02a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5cc34b3110476d2f24",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Sink_NN_05a_C_0",
          "type": "searchable",
          "number": 69,
          "x": 1419.159,
          "y": 2241.082,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Sink_NN_05a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-4451ad164e8a6df15f",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Vanity_NN_01a_C_0",
          "type": "searchable",
          "number": 70,
          "x": 1312.867,
          "y": 1444.432,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Vanity_NN_01a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-3e127c53caa90e8304",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Vanity_NN_01a_C_1",
          "type": "searchable",
          "number": 71,
          "x": 2396.493,
          "y": 2369.495,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Vanity_NN_01a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b2d805ed50df24d9ff",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Search_Vanity_NN_01a_C_2",
          "type": "searchable",
          "number": 72,
          "x": 1644.331,
          "y": 699.673,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Vanity_NN_01a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-4be8beaeb128b82d98",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_ShelfStanding_02_C_0",
          "type": "searchable",
          "number": 73,
          "x": 2372.763,
          "y": 1419.413,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_ShelfStanding_02_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-459209f42a1bfe8609",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_ShelfStanding_02_C_1",
          "type": "searchable",
          "number": 74,
          "x": 2293.645,
          "y": 2492.081,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_ShelfStanding_02_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-946f42ea0e79dd0e00",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Table_Bedside_01_C_0",
          "type": "searchable",
          "number": 75,
          "x": 2438.285,
          "y": 1359.809,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Table_Bedside_01_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-101b1d1a07cc51f10b",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Table_Bedside_02_C_0",
          "type": "searchable",
          "number": 76,
          "x": 2252.966,
          "y": 2407.851,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Bedside_02_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-123800d4b982c46e52",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Table_Bedside_02_C_1",
          "type": "searchable",
          "number": 77,
          "x": 2328.551,
          "y": 2325.915,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Bedside_02_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-bf05c6403e93e06e3a",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Table_Decor_01a_C_0",
          "type": "searchable",
          "number": 78,
          "x": 2333.612,
          "y": 1539.753,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Decor_01a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-0623c7cefe833816de",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Table_Decor_01a_C_1",
          "type": "searchable",
          "number": 79,
          "x": 2365.191,
          "y": 2428.521,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Decor_01a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-3a212afd949f57b318",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Table_Decor_01a_C_2",
          "type": "searchable",
          "number": 80,
          "x": 1499.147,
          "y": 2212.641,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Decor_01a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-944efdc77220f6119a",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Table_Set_04a_C_0",
          "type": "searchable",
          "number": 81,
          "x": 2471.258,
          "y": 2384.699,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-bb146014c342ff2224",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Table_Set_04a_C_1",
          "type": "searchable",
          "number": 82,
          "x": 1357.42,
          "y": 2545.844,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d7b91c44bfd4ccdc7c",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Table_Set_04a_C_2",
          "type": "searchable",
          "number": 83,
          "x": 1406.973,
          "y": 2545.844,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-4a405467c58709cd20",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Table_Set_04a_C_3",
          "type": "searchable",
          "number": 84,
          "x": 1233.17,
          "y": 2183.621,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-08d9451a28fb9edf59",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Table_Set_04a_C_4",
          "type": "searchable",
          "number": 85,
          "x": 1281.242,
          "y": 2185.041,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-2e48008e657d087ca6",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Table_Set_04a_C_5",
          "type": "searchable",
          "number": 86,
          "x": 1568.978,
          "y": 2166.766,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e9be78ff3d5b16f9c6",
          "sourceId": "WaterTower:WaterTower_Art.json:BP_Lootable_Table_Set_04a_C_6",
          "type": "searchable",
          "number": 87,
          "x": 2419.428,
          "y": 3528.183,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d585331a262e3f0bdb",
          "sourceId": "WaterTower:WaterTower_Art.json:StaticMeshActor_4122",
          "type": "searchable",
          "number": 88,
          "x": 1543.203,
          "y": 529.704,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Cabinet_NN_17a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-0c44f63a17af56ae1c",
          "sourceId": "WaterTower:WaterTower_Art.json:StaticMeshActor_4123",
          "type": "searchable",
          "number": 89,
          "x": 1562.878,
          "y": 529.704,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Cabinet_NN_17a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-3d191ee0fe25e06b9a",
          "sourceId": "WaterTower:WaterTower_Art.json:StaticMeshActor_4124",
          "type": "searchable",
          "number": 90,
          "x": 1477.147,
          "y": 711.465,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinentStanding_05_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-23430e866c654f7d54",
          "sourceId": "WaterTower:WaterTower_Art.json:StaticMeshActor_4125",
          "type": "searchable",
          "number": 91,
          "x": 1477.147,
          "y": 730.243,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinentStanding_05_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c2c49a5c21307e81ce",
          "sourceId": "WaterTower:WaterTower_Art.json:StaticMeshActor_4126",
          "type": "searchable",
          "number": 92,
          "x": 1588.615,
          "y": 587.375,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_Cabinet_01a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b23debb0c63f04b6ab",
          "sourceId": "WaterTower:WaterTower_Art.json:StaticMeshActor_4127",
          "type": "searchable",
          "number": 93,
          "x": 1622.801,
          "y": 662.114,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Decor_01a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d13917e197174f4a9f",
          "sourceId": "WaterTower:WaterTower_Art.json:StaticMeshActor_4128",
          "type": "searchable",
          "number": 94,
          "x": 1607.536,
          "y": 585.718,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_ShelfStanding_02_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f5386eeac97cf17fdb",
          "sourceId": "WaterTower:WaterTower_Art.json:StaticMeshActor_4129",
          "type": "searchable",
          "number": 95,
          "x": 1652.197,
          "y": 626.311,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Desk_NN_02a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-cbc28b2290c229de2a",
          "sourceId": "WaterTower:WaterTower_Art.json:StaticMeshActor_4211",
          "type": "searchable",
          "number": 96,
          "x": 1625.435,
          "y": 585.718,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_ShelfStanding_02_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-79073fe6141dadb595",
          "sourceId": "WaterTower:WaterTower_Art.json:StaticMeshActor_683",
          "type": "searchable",
          "number": 97,
          "x": 2460.069,
          "y": 703.573,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Dresser_Modern_02a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-392e3b07611d01881d",
          "sourceId": "WaterTower:WaterTower_Art.json:StaticMeshActor_684",
          "type": "searchable",
          "number": 98,
          "x": 2427.976,
          "y": 644.307,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Dresser_Modern_02b_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-3678392f871b99900c",
          "sourceId": "WaterTower:WaterTower_Art.json:StaticMeshActor_685",
          "type": "searchable",
          "number": 99,
          "x": 2507.929,
          "y": 703.573,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Dresser_Modern_02a_C",
          "sourceLevel": "WaterTower_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-aa853079bd60120b37",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Desk_Office_NN_09b_C_3",
          "type": "searchable",
          "number": 100,
          "x": 2540.912,
          "y": 656.785,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Desk_Office_NN_09b_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-207061c7a863f41f23",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Cabinet_NN_02a_C_2",
          "type": "searchable",
          "number": 101,
          "x": 2397.78,
          "y": 717.292,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Cabinet_NN_02a_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-0d0f18918add287fe7",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_CabinetSet_02j_C_3",
          "type": "searchable",
          "number": 102,
          "x": 2516.066,
          "y": 799.444,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-abc9d19fafee5ce036",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_CabinetSet_02j_C_4",
          "type": "searchable",
          "number": 103,
          "x": 2457.041,
          "y": 799.346,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-70ec91bbe971420ede",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_CabinetSet_NN_02d_C_2",
          "type": "searchable",
          "number": 104,
          "x": 2458.829,
          "y": 781.46,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02d_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-cfc2de42203e7e4bc1",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_CabinetSet_NN_02d_C_3",
          "type": "searchable",
          "number": 105,
          "x": 2516.066,
          "y": 795.772,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02d_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-80f2d9c07d0ef4b5d1",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_0",
          "type": "searchable",
          "number": 106,
          "x": 2282.88,
          "y": 2466.641,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-12b3cdc8be4fd7f797",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_1",
          "type": "searchable",
          "number": 107,
          "x": 1420.225,
          "y": 2481.99,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-cdaa99275b96e8dd1b",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_12",
          "type": "searchable",
          "number": 108,
          "x": 2622.048,
          "y": 1555.273,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-cf38c0b148708ca697",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_13",
          "type": "searchable",
          "number": 109,
          "x": 2489.315,
          "y": 1664.198,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c823755b41837a7b49",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_14",
          "type": "searchable",
          "number": 110,
          "x": 3169.872,
          "y": 1993.62,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-9a8d95528cc2631c40",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_16",
          "type": "searchable",
          "number": 111,
          "x": 2145.683,
          "y": 3281.658,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-01e7d2f51b7df2d35c",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_17",
          "type": "searchable",
          "number": 112,
          "x": 1626.482,
          "y": 1941.893,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-64f2a4685b07fd85fb",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_18",
          "type": "searchable",
          "number": 113,
          "x": 2081.728,
          "y": 3370.582,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d80d110711f9ab40fd",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_19",
          "type": "searchable",
          "number": 114,
          "x": 3309.702,
          "y": 1161.129,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-de2f5c4ad699d5d2b8",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_20",
          "type": "searchable",
          "number": 115,
          "x": 1810.112,
          "y": 3393.083,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-3e80324bcc715d1eb4",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_21",
          "type": "searchable",
          "number": 116,
          "x": 2544.909,
          "y": 569.151,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ea9025b70382f06051",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_22",
          "type": "searchable",
          "number": 117,
          "x": 1549.294,
          "y": 3111.32,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c793207e4e1ecf0152",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_24",
          "type": "searchable",
          "number": 118,
          "x": 1104.824,
          "y": 2120.261,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ccaf07242f362e13f7",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_25",
          "type": "searchable",
          "number": 119,
          "x": 1325.603,
          "y": 403.917,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e0c987a1590b1a8317",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_26",
          "type": "searchable",
          "number": 120,
          "x": 3075.577,
          "y": 737.142,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-3ef597b008af529fa0",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_28",
          "type": "searchable",
          "number": 121,
          "x": 2778.006,
          "y": 641.602,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b0d8ad45ab16f82455",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_3",
          "type": "searchable",
          "number": 122,
          "x": 965.667,
          "y": 2493.552,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-72bb98aefb95381fb5",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_32",
          "type": "searchable",
          "number": 123,
          "x": 2212.009,
          "y": 2051.146,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e05425103b118efa13",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_33",
          "type": "searchable",
          "number": 124,
          "x": 3152.321,
          "y": 1800.538,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-58397a14d679b454c9",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_34",
          "type": "searchable",
          "number": 125,
          "x": 2413.403,
          "y": 2643.836,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5b3af9dff716f561a7",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_36",
          "type": "searchable",
          "number": 126,
          "x": 3317.088,
          "y": 2003.686,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-0476f38eedb2b9587e",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_37",
          "type": "searchable",
          "number": 127,
          "x": 2622.731,
          "y": 1394.641,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d0579c99775e08f5b3",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_38",
          "type": "searchable",
          "number": 128,
          "x": 2753.626,
          "y": 2072.354,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-fdca3f3980f1606a0c",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_4",
          "type": "searchable",
          "number": 129,
          "x": 2034.92,
          "y": 3208.653,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-bbdab499e538395a57",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_40",
          "type": "searchable",
          "number": 130,
          "x": 2280.862,
          "y": 2253.593,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5280591ecd0ceb82d5",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_52",
          "type": "searchable",
          "number": 131,
          "x": 3118.775,
          "y": 927.466,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-6f9f299a7535a703d1",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_6",
          "type": "searchable",
          "number": 132,
          "x": 2025.977,
          "y": 3239.954,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-a5097d641fb6c98e67",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_7",
          "type": "searchable",
          "number": 133,
          "x": 3162.449,
          "y": 1402.001,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-4848fc55fd39fa3a93",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_71",
          "type": "searchable",
          "number": 134,
          "x": 2685.984,
          "y": 3164.909,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5d64091f947d0f60b2",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_77",
          "type": "searchable",
          "number": 135,
          "x": 2211.996,
          "y": 1943.185,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-3ac29f1cfb03911d51",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_8",
          "type": "searchable",
          "number": 136,
          "x": 2719.012,
          "y": 1558.542,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-6c7e89494dac31c36d",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Crate_01_C_9",
          "type": "searchable",
          "number": 137,
          "x": 3176.747,
          "y": 2795.711,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f62fd5c8095693c146",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Search_Dresser_NN_09a_C_2",
          "type": "searchable",
          "number": 138,
          "x": 2259.216,
          "y": 761.785,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_Dresser_NN_09a_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-45837650ff209500ee",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Table_Bedside_01_C_2",
          "type": "searchable",
          "number": 139,
          "x": 2282.001,
          "y": 826.729,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Table_Bedside_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-8215524881f3432bcd",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Table_Bedside_01_C_3",
          "type": "searchable",
          "number": 140,
          "x": 2235.728,
          "y": 826.729,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Table_Bedside_01_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-7ed814f797e1da1a77",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_Table_Decor_01a_C_3",
          "type": "searchable",
          "number": 141,
          "x": 2269.315,
          "y": 748.337,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Decor_01a_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f8ce6f16076c5cce6d",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_ToolCart_01b_C_0",
          "type": "searchable",
          "number": 142,
          "x": 1082.489,
          "y": 2055.107,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b44ec8df21dc64fc04",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_ToolCart_01b_C_2",
          "type": "searchable",
          "number": 143,
          "x": 1518.895,
          "y": 426.413,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-abd30ca79ebae4ff41",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_ToolCart_01b_C_4",
          "type": "searchable",
          "number": 144,
          "x": 1397.983,
          "y": 1370.997,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f5986352fed1783e94",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_Lootable_ToolCart_01b_C_8",
          "type": "searchable",
          "number": 145,
          "x": 2730.703,
          "y": 1623.912,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-2c270352cd7ab95c13",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_WagonOld_02_C_1",
          "type": "searchable",
          "number": 146,
          "x": 2959.108,
          "y": 1270.12,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_WagonClassic_01_Gameplay_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-9b3ca56a9d51a1429d",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_WagonOld_02_C_2",
          "type": "searchable",
          "number": 147,
          "x": 3428.134,
          "y": 1747.329,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanClassic_01_Gameplay_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e3db81abf52981b19d",
          "sourceId": "WaterTower:WaterTower_Gameplay.json:BP_WagonOld_02_C_3",
          "type": "searchable",
          "number": 148,
          "x": 2378.069,
          "y": 1756.191,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeHatchback_01_Gameplay_C",
          "sourceLevel": "WaterTower_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-8f8cfaa57f52633d4a",
          "sourceId": "WaterTower:WaterTower_Gameplay_MP.json:BP_Lootable_GunCabinet_C_0",
          "type": "searchable",
          "number": 149,
          "x": 2227.2,
          "y": 761.248,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_GunCabinet_C",
          "sourceLevel": "WaterTower_Gameplay_MP.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-629666157b394acf57",
          "sourceId": "WaterTower:WaterTower_PowerGrid.json:BP_InterstPoint_Fridge_C_9",
          "type": "searchable",
          "number": 150,
          "x": 2508.911,
          "y": 759.258,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_InterstPoint_Fridge_C",
          "sourceLevel": "WaterTower_PowerGrid.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-22372cbffd13b1fd92",
          "sourceId": "WaterTower:WaterTower_PowerGrid.json:BP_InterstPoint_Fridge_SideBySide_C_2",
          "type": "searchable",
          "number": 151,
          "x": 2334.572,
          "y": 3426.872,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_InterstPoint_Fridge_SideBySide_C",
          "sourceLevel": "WaterTower_PowerGrid.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-a63090df982d91fc5c",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_CoupeHatchback_01_C_1",
          "type": "searchable",
          "number": 152,
          "x": 2587.96,
          "y": 1020.79,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeHatchback_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-0318c9228ccc19cd4a",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_CoupeHatchback_01_C_11",
          "type": "searchable",
          "number": 153,
          "x": 1989.34,
          "y": 1391.9,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeHatchback_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b7a4c5b41cedb2cbb6",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_CoupeHatchback_01_C_13",
          "type": "searchable",
          "number": 154,
          "x": 3149.21,
          "y": 2333.46,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeHatchback_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-1cff5cfc6e601404b8",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_CoupeHatchback_01_C_14",
          "type": "searchable",
          "number": 155,
          "x": 1661.44,
          "y": 2773.63,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeHatchback_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-9d4797f9a58a0ee48d",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_CoupeHatchback_01_C_3",
          "type": "searchable",
          "number": 156,
          "x": 1612.8,
          "y": 1153.68,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeHatchback_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5f6e01e0fa4114b716",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_CoupeHatchback_01_C_7",
          "type": "searchable",
          "number": 157,
          "x": 1716.59,
          "y": 487.36,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeSoftTop_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-676d6cc23e3ced35b1",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_CoupeHatchback_01_C_9",
          "type": "searchable",
          "number": 158,
          "x": 1279.08,
          "y": 1353.92,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeHatchback_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d3e39c01e8308b7ece",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_CoupeOld_02_C_1",
          "type": "searchable",
          "number": 159,
          "x": 2799.74,
          "y": 1063.42,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeOld_02_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e16eeec1ef6f6a696c",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_CoupeOld_03_C_1",
          "type": "searchable",
          "number": 160,
          "x": 1067.38,
          "y": 3289.74,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeOld_03_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-870a1271bc8eb6ed2e",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_CoupeOld_03_C_3",
          "type": "searchable",
          "number": 161,
          "x": 2225.7,
          "y": 2902.44,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeOld_03_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f1b5f1ad0bc5a198fd",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_CoupeSoftTop_01_C_1",
          "type": "searchable",
          "number": 162,
          "x": 2209.31,
          "y": 1151.12,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeSoftTop_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e4e9083d086865722f",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_CoupeSoftTop_01_C_2",
          "type": "searchable",
          "number": 163,
          "x": 1402.99,
          "y": 2904.8,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeSoftTop_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-a22e08944a14e99593",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_CoupeSoftTop_01_C_3",
          "type": "searchable",
          "number": 164,
          "x": 1987.8,
          "y": 1564.05,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeSoftTop_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-0ee9d52e7faf825159",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_CoupeSoftTop_01_C_4",
          "type": "searchable",
          "number": 165,
          "x": 1987.87,
          "y": 2385.52,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeSoftTop_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f1b5dd628187832174",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_VanClassic_01_C_0",
          "type": "searchable",
          "number": 166,
          "x": 787.66,
          "y": 2142.66,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanClassic_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-2702ac9a3b45e98813",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_VanClassic_01_C_1",
          "type": "searchable",
          "number": 167,
          "x": 1351.01,
          "y": 1622.23,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanClassic_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-7308f8c0bfa471d5cf",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_VanClassic_01_C_3",
          "type": "searchable",
          "number": 168,
          "x": 2544.55,
          "y": 1151.85,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanClassic_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-93adf04bf41bb66cd9",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_VanClassic_01_C_4",
          "type": "searchable",
          "number": 169,
          "x": 2431.53,
          "y": 2274.25,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanClassic_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5b819defc74d33901d",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_VanClassic_01_C_5",
          "type": "searchable",
          "number": 170,
          "x": 3328.23,
          "y": 2332.54,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanClassic_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-95ef38c6d4bf88c7c8",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_VanClassic_01_C_6",
          "type": "searchable",
          "number": 171,
          "x": 1858.75,
          "y": 1951.23,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanClassic_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5e262c14ddbf4af14f",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_VanClassic_01_C_8",
          "type": "searchable",
          "number": 172,
          "x": 2362.44,
          "y": 2771.44,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanClassic_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f6273bacb38f158e67",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_VanUtility_01_C_2",
          "type": "searchable",
          "number": 173,
          "x": 2809.39,
          "y": 2884.91,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanUtility_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-cae21cb50eb7e05c90",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_VanUtility_01_C_5",
          "type": "searchable",
          "number": 174,
          "x": 2991.38,
          "y": 1548.58,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanUtility_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-333aa155cb8a61c529",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_WagonClassic_01_C_0",
          "type": "searchable",
          "number": 175,
          "x": 1988.89,
          "y": 658.79,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_WagonClassic_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f3f85375b94ccf0b93",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_WagonClassic_01_C_1",
          "type": "searchable",
          "number": 176,
          "x": 1593.11,
          "y": 2905.47,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_WagonClassic_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f66635ff042065a091",
          "sourceId": "WaterTower:WaterTower_Roads.json:BP_WagonClassic_01_C_4",
          "type": "searchable",
          "number": 177,
          "x": 2804.04,
          "y": 2757.02,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_WagonClassic_01_Gameplay_C",
          "sourceLevel": "WaterTower_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        }
      ]
    },
    {
      "id": "haddonfield-town-center",
      "name": "Haddonfield Town Center",
      "width": 4096,
      "height": 4096,
      "sourceZoom": -2.5,
      "image": "./assets/maps/haddonfield-town-center-realistic.webp",
      "styles": {
        "realistic": "./assets/maps/haddonfield-town-center-realistic.webp",
        "paper": "./assets/maps/haddonfield-town-center-paper.webp"
      },
      "pixelOffset": {
        "realistic": 0,
        "paper": {
          "x": -84.1,
          "y": -70.217
        }
      },
      "registration": {
        "actorToRealisticX": 175.79,
        "paperRelativeX": -84.1,
        "source": "CP07+CP08 feature registration; not live-game certified; v1.3.4 paper border cleanup",
        "paperRelativeY": -70.217
      },
      "overlays": {
        "addresses": [
          {
            "x": 1394.89,
            "y": 2786.4,
            "label": "1086"
          },
          {
            "x": 1237.89,
            "y": 2238.4,
            "label": "985"
          },
          {
            "x": 1630.39,
            "y": 2219.8,
            "label": "978"
          },
          {
            "x": 2064.49,
            "y": 1575.2,
            "label": "951"
          },
          {
            "x": 1985.99,
            "y": 979.9,
            "label": "901"
          },
          {
            "x": 2069.09,
            "y": 3037.2,
            "label": "1007"
          },
          {
            "x": 2069.09,
            "y": 2958.2,
            "label": "1005"
          },
          {
            "x": 2069.09,
            "y": 2860.7,
            "label": "1003"
          },
          {
            "x": 2069.09,
            "y": 2749.2,
            "label": "1001"
          },
          {
            "x": 2660.19,
            "y": 3120.8,
            "label": "1008"
          },
          {
            "x": 2623.19,
            "y": 2289.5,
            "label": "966"
          },
          {
            "x": 2623.19,
            "y": 2131.6,
            "label": "962"
          },
          {
            "x": 2623.19,
            "y": 1938.6,
            "label": "956"
          },
          {
            "x": 2623.19,
            "y": 1859.2,
            "label": "954"
          },
          {
            "x": 2623.19,
            "y": 1721.1,
            "label": "950"
          },
          {
            "x": 2955.69,
            "y": 2122.3,
            "label": "902"
          },
          {
            "x": 3223.59,
            "y": 2122.3,
            "label": "908"
          }
        ],
        "streets": [
          {
            "x": 1090.09,
            "y": 2888.6,
            "label": "Flemming Ave.",
            "rotation": -90
          },
          {
            "x": 2420.09,
            "y": 1518.6,
            "label": "Peach St.",
            "rotation": -90
          },
          {
            "x": 1791.99,
            "y": 789.5,
            "label": "Denny Ave.",
            "rotation": 0
          },
          {
            "x": 2946.49,
            "y": 2554.2,
            "label": "Eleanor Ave.",
            "rotation": 0
          }
        ],
        "grid": null
      },
      "locations": [
        {
          "id": "haddonfield-town-center-cellar-1",
          "sourceId": "Map3:Map3_Gameplay.json:BP_CellarEscape_C_0:cellar_escape",
          "type": "cellar",
          "number": 1,
          "x": 1937.095,
          "y": 3155.902,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "haddonfield-town-center-cellar-2",
          "sourceId": "Map3:Map3_Gameplay.json:BP_CellarEscape_C_2:cellar_escape",
          "type": "cellar",
          "number": 2,
          "x": 2101.761,
          "y": 1843.695,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "haddonfield-town-center-gate-1",
          "sourceId": "Map3:Map3_Gameplay.json:BP_GateEscape_C_1:gate_escape",
          "type": "gate",
          "number": 1,
          "x": 3737.683,
          "y": 675.179,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Escape Gate"
        },
        {
          "id": "source-fcf65b5145685c85e0",
          "sourceId": "Map3:Map3_Gameplay.json:BP_OutOfBoundsVolume_C_11:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 1,
          "x": 1387.438,
          "y": 681.04,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "source-24c950e8b6b3a14cf2",
          "sourceId": "Map3:Map3_Gameplay.json:BP_OutOfBoundsVolume_C_14:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 2,
          "x": 3726.344,
          "y": 2588.069,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "source-5800c67f51f71a3592",
          "sourceId": "Map3:Map3_Gameplay.json:BP_OutOfBoundsVolume_C_15:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 3,
          "x": 2400.703,
          "y": 3676.821,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)",
          "alternateTriggerIds": [
            "source-ae7d26b5d3a30d1488"
          ],
          "visualGrouping": "Two nearby source volumes share a display marker. Their distinct source identities are preserved; physical game overlap is unverified."
        },
        {
          "id": "source-3cfc0bbf444b4ad30e",
          "sourceId": "Map3:Map3_Gameplay.json:BP_OutOfBoundsVolume_C_18:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 4,
          "x": 3695.093,
          "y": 1358.35,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "source-ae7d26b5d3a30d1488",
          "sourceId": "Map3:Map3_Gameplay.json:BP_OutOfBoundsVolume_C_3:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 5,
          "x": 2385.508,
          "y": 3690.364,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)",
          "displayAliasOf": "source-5800c67f51f71a3592"
        },
        {
          "id": "source-54ae5dcc0b4eda7d07",
          "sourceId": "Map3:Map3_Gameplay.json:BP_OutOfBoundsVolume_C_35:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 6,
          "x": 2420.822,
          "y": 441.265,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "source-2b72ba2583b17c1b79",
          "sourceId": "Map3:Map3_Gameplay.json:BP_OutOfBoundsVolume_C_39:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 7,
          "x": 702.68,
          "y": 2577.012,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "source-99bb5239513e0bb788",
          "sourceId": "Map3:Map3_Gameplay.json:BP_OutOfBoundsVolume_C_42:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 8,
          "x": 1014.174,
          "y": 3321.724,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "haddonfield-town-center-cellar-3",
          "sourceId": "Map3:Map3_Gameplay_MP.json:BP_CellarEscape_C_1:cellar_escape",
          "type": "cellar",
          "number": 3,
          "x": 3162.922,
          "y": 1628.16,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "haddonfield-town-center-car-4",
          "sourceId": "",
          "type": "car",
          "number": 4,
          "x": 3470.684,
          "y": 1894.07,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "haddonfield-town-center-car-1",
          "sourceId": "",
          "type": "car",
          "number": 3,
          "x": 2898.562,
          "y": 1325.36,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "haddonfield-town-center-car-2",
          "sourceId": "",
          "type": "car",
          "number": 2,
          "x": 1830.514,
          "y": 1299.329,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "source-37b0577370d2d48a89",
          "sourceId": "",
          "type": "car",
          "number": 5,
          "x": 1065.677,
          "y": 2296.903,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "haddonfield-town-center-car-3",
          "sourceId": "",
          "type": "car",
          "number": 1,
          "x": 1749.15,
          "y": 2794.199,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "source-8987b3c1c27f9860ea",
          "sourceId": "Map3:Map3_Gameplay.json:BP_ItemSpawner_C_10",
          "type": "item",
          "number": 1,
          "x": 1717.265,
          "y": 1166.865,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-d6d18610bdc7c152f4",
          "sourceId": "Map3:Map3_Gameplay.json:BP_ItemSpawner_C_24",
          "type": "item",
          "number": 2,
          "x": 2015.051,
          "y": 1526.586,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-016c54b2427e422711",
          "sourceId": "Map3:Map3_Gameplay.json:BP_ItemSpawner_C_25",
          "type": "item",
          "number": 3,
          "x": 2008.445,
          "y": 1662.844,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-ce51473ba9c8240f73",
          "sourceId": "Map3:Map3_Gameplay.json:BP_ItemSpawner_C_4",
          "type": "item",
          "number": 4,
          "x": 1988.625,
          "y": 3090.663,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-eea9e76bc8c2b8a32b",
          "sourceId": "Map3:Map3_Gameplay.json:BP_ItemSpawner_C_5",
          "type": "item",
          "number": 5,
          "x": 1479.929,
          "y": 2098.044,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-fbd0bf15a9baa2d91c",
          "sourceId": "Map3:Map3_Gameplay.json:BP_ItemSpawner_C_6",
          "type": "item",
          "number": 6,
          "x": 2802.045,
          "y": 3051.85,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-ccf0a3852675ed0423",
          "sourceId": "Map3:Map3_Gameplay.json:BP_ItemSpawner_C_7",
          "type": "item",
          "number": 7,
          "x": 2712.032,
          "y": 2139.334,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-548440645fa3bcf34f",
          "sourceId": "Map3:Map3_Gameplay.json:BP_ItemSpawner_C_9",
          "type": "item",
          "number": 8,
          "x": 3033.271,
          "y": 587.644,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "searchable-1b6132ade4a3d8a11a",
          "sourceId": "Map3:Map3_Gameplay.json:BP_CoupeHatchback_01_C_0",
          "type": "searchable",
          "number": 1,
          "x": 2941.824,
          "y": 2521.275,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeHatchback_01_Gameplay_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5655862555a8e755ac",
          "sourceId": "Map3:Map3_Gameplay.json:BP_CoupeHatchback_01_C_1",
          "type": "searchable",
          "number": 2,
          "x": 1890.929,
          "y": 2275.578,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeHatchback_01_Gameplay_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5f034b248a419b0a62",
          "sourceId": "Map3:Map3_Gameplay.json:BP_CoupeOld_03_C_0",
          "type": "searchable",
          "number": 3,
          "x": 1762.679,
          "y": 2997.843,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeOld_03_Gameplay_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-540146a7f012c063eb",
          "sourceId": "Map3:Map3_Gameplay.json:BP_CoupeOld_03_C_1",
          "type": "searchable",
          "number": 4,
          "x": 1749.49,
          "y": 2258.673,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeOld_03_Gameplay_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-1094d9f7a77f57e897",
          "sourceId": "Map3:Map3_Gameplay.json:BP_CoupeOld_03_C_3",
          "type": "searchable",
          "number": 5,
          "x": 2340.076,
          "y": 1415.432,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeOld_03_Gameplay_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c47f37072bf96b44c8",
          "sourceId": "Map3:Map3_Gameplay.json:BP_CoupeOld_03_C_4",
          "type": "searchable",
          "number": 6,
          "x": 1782.262,
          "y": 3404.917,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeOld_03_Gameplay_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b92262c665b4f6500a",
          "sourceId": "Map3:Map3_Gameplay.json:BP_CoupeSoftTop_01_C_0",
          "type": "searchable",
          "number": 7,
          "x": 2344.878,
          "y": 2929.466,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeSoftTop_01_Gameplay_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c55134d5b0cb5dbc8b",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_FilingCabinet_03_C_0",
          "type": "searchable",
          "number": 8,
          "x": 2576.6,
          "y": 2224.392,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_FilingCabinet_03_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d7f54b4030b366ff98",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Crate_01_C_0",
          "type": "searchable",
          "number": 9,
          "x": 2958.122,
          "y": 2212.501,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-7791cea903ba276d7d",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Crate_01_C_1",
          "type": "searchable",
          "number": 10,
          "x": 3209.108,
          "y": 2284.404,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d922305ab1b3d4881c",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Crate_01_C_10",
          "type": "searchable",
          "number": 11,
          "x": 1479.436,
          "y": 1483.69,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-df743ec1e55a84639e",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Crate_01_C_11",
          "type": "searchable",
          "number": 12,
          "x": 2099.128,
          "y": 1473.276,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d1986be85bda8b8c47",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Crate_01_C_12",
          "type": "searchable",
          "number": 13,
          "x": 1616.857,
          "y": 952.688,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-0f7d5899651020751c",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Crate_01_C_13",
          "type": "searchable",
          "number": 14,
          "x": 1917.069,
          "y": 1061.694,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-121cd45089d64a068c",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Crate_01_C_14",
          "type": "searchable",
          "number": 15,
          "x": 2973.093,
          "y": 1054.873,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-8e41bf9aac9642e2cd",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Crate_01_C_15",
          "type": "searchable",
          "number": 16,
          "x": 3667.112,
          "y": 962.668,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c8e8203b620a07f3ae",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Crate_01_C_16",
          "type": "searchable",
          "number": 17,
          "x": 3237.42,
          "y": 566.541,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e741bd7f383cc51184",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Crate_01_C_17",
          "type": "searchable",
          "number": 18,
          "x": 2770.509,
          "y": 1806.241,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-3ce790e930155cc270",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Crate_01_C_18",
          "type": "searchable",
          "number": 19,
          "x": 2880.582,
          "y": 3095.938,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-84b1cd861d307bf590",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Crate_01_C_19",
          "type": "searchable",
          "number": 20,
          "x": 2893.554,
          "y": 848.967,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-0c3308e01ef10c3c15",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Crate_01_C_2",
          "type": "searchable",
          "number": 21,
          "x": 1289.665,
          "y": 1889.944,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b4d570ef7f9c922890",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Crate_01_C_4",
          "type": "searchable",
          "number": 22,
          "x": 3308.473,
          "y": 1746.667,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-82341cdf07ac7f3269",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Crate_01_C_5",
          "type": "searchable",
          "number": 23,
          "x": 1560.032,
          "y": 2164.108,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-05f2faeebdbd84d837",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Crate_01_C_6",
          "type": "searchable",
          "number": 24,
          "x": 2623.671,
          "y": 2196.315,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-a5f0de9e9d7689820b",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Crate_01_C_7",
          "type": "searchable",
          "number": 25,
          "x": 1252.781,
          "y": 2236.971,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-98e6d5e675a7b8b2e3",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Crate_01_C_8",
          "type": "searchable",
          "number": 26,
          "x": 2124.882,
          "y": 3448.35,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-fce2255dd9370e2876",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Crate_01_C_9",
          "type": "searchable",
          "number": 27,
          "x": 1406.266,
          "y": 2846.882,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ede6e379e3a3bc32ff",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Desk_NN_02a_C_0",
          "type": "searchable",
          "number": 28,
          "x": 2938.035,
          "y": 2041.639,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Desk_NN_02a_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d4efc8529cae305f16",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Dresser_NN_11a_C_0",
          "type": "searchable",
          "number": 29,
          "x": 2961.869,
          "y": 2141.453,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c6734a7fb5f6ed728f",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Sink_NN_02a_C_0",
          "type": "searchable",
          "number": 30,
          "x": 3109.74,
          "y": 2098.374,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Sink_NN_02a_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-6c6344b0b2c07d2d1e",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Search_Sink_NN_05a_C_0",
          "type": "searchable",
          "number": 31,
          "x": 2962.939,
          "y": 2105.431,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Sink_NN_05a_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c123ba8de1acd4c334",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Table_Decor_01a_C_0",
          "type": "searchable",
          "number": 32,
          "x": 2984.548,
          "y": 2286.727,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Decor_01a_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-58d0c8cc0925d6d212",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Table_Set_04a_C_0",
          "type": "searchable",
          "number": 33,
          "x": 3010.034,
          "y": 2085.517,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b413f0d6710aaa9aa8",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Table_Set_04a_C_2",
          "type": "searchable",
          "number": 34,
          "x": 3010.034,
          "y": 2040.923,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-007d421c7cae506c53",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_Table_Set_04a_C_3",
          "type": "searchable",
          "number": 35,
          "x": 2609.632,
          "y": 2130.25,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e4f4016d408d47a59c",
          "sourceId": "Map3:Map3_Gameplay.json:BP_Lootable_ToolCart_01b_C_1",
          "type": "searchable",
          "number": 36,
          "x": 3241.539,
          "y": 1814.297,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c86e89514ab8c485d5",
          "sourceId": "Map3:Map3_Gameplay.json:BP_VanUtility_01_C_0",
          "type": "searchable",
          "number": 37,
          "x": 1742.953,
          "y": 2125.819,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanUtility_01_Gameplay_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-67281b25f435ab7797",
          "sourceId": "Map3:Map3_Gameplay.json:BP_WagonClassic_01_C_1",
          "type": "searchable",
          "number": 38,
          "x": 1681.738,
          "y": 3409.481,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_WagonClassic_01_Gameplay_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-6cf9d5384129200216",
          "sourceId": "Map3:Map3_Gameplay.json:BP_WagonOld_02_C_0",
          "type": "searchable",
          "number": 39,
          "x": 1201.661,
          "y": 2809.534,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_WagonOld_02_Gameplay_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c6c3c021fb7b0b3613",
          "sourceId": "Map3:Map3_Gameplay.json:BP_WagonOld_02_C_1",
          "type": "searchable",
          "number": 40,
          "x": 1886.322,
          "y": 2181.626,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_WagonOld_02_Gameplay_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-8900d198c30ded64cc",
          "sourceId": "Map3:Map3_Gameplay.json:StaticMeshActor_11",
          "type": "searchable",
          "number": 41,
          "x": 1484.787,
          "y": 3240.385,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_MailTruck_01_Gameplay1_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-293dd064123fdf93c5",
          "sourceId": "Map3:Map3_Gameplay.json:StaticMeshActor_12",
          "type": "searchable",
          "number": 42,
          "x": 1442.554,
          "y": 3406.947,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_MailTruck_01_Gameplay1_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b694f8e5b6cb317256",
          "sourceId": "Map3:Map3_Gameplay.json:StaticMeshActor_13",
          "type": "searchable",
          "number": 43,
          "x": 1376.25,
          "y": 3402.448,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_MailTruck_01_Gameplay1_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-a912b4207db486d712",
          "sourceId": "Map3:Map3_Gameplay.json:StaticMeshActor_14",
          "type": "searchable",
          "number": 44,
          "x": 1264.537,
          "y": 3406.947,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_MailTruck_01_Gameplay1_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-7aa34e9af9e257d2df",
          "sourceId": "Map3:Map3_Gameplay.json:StaticMeshActor_15",
          "type": "searchable",
          "number": 45,
          "x": 1343.381,
          "y": 1866.851,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeOld_02_Gameplay_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c467aec5a7a78a039e",
          "sourceId": "Map3:Map3_Gameplay.json:StaticMeshActor_16",
          "type": "searchable",
          "number": 46,
          "x": 1384.487,
          "y": 1760.645,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeSoftTop_01_Gameplay_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-546b895852fa52fa0b",
          "sourceId": "Map3:Map3_Gameplay.json:StaticMeshActor_17",
          "type": "searchable",
          "number": 47,
          "x": 1294.372,
          "y": 1706.06,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_WagonClassic_01_Gameplay_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-7716d4db3295154b2e",
          "sourceId": "Map3:Map3_Gameplay.json:StaticMeshActor_18",
          "type": "searchable",
          "number": 48,
          "x": 1232.582,
          "y": 1711.383,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanClassic_01_Gameplay_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d24790f3e6214af89c",
          "sourceId": "Map3:Map3_Gameplay.json:StaticMeshActor_3",
          "type": "searchable",
          "number": 49,
          "x": 2916.997,
          "y": 2645.867,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanUtility_01_Gameplay_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-3944b97aaaedc6d2a0",
          "sourceId": "Map3:Map3_Gameplay.json:StaticMeshActor_5",
          "type": "searchable",
          "number": 50,
          "x": 2464.274,
          "y": 2061.14,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeOld_02_Gameplay_C",
          "sourceLevel": "Map3_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-21edbc948358ca28a8",
          "sourceId": "Map3:Map3_PowerGrid.json:BP_InterstPoint_Fridge_SideBySide_C_2",
          "type": "searchable",
          "number": 51,
          "x": 1972.852,
          "y": 957.771,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_InterstPoint_Fridge_SideBySide_C",
          "sourceLevel": "Map3_PowerGrid.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-aa152c91fe16793d75",
          "sourceId": "Map3:Map3_Art_MusicStore.json:BP_Lootable_Breadbox_02_C_0",
          "type": "searchable",
          "number": 52,
          "x": 2104.06,
          "y": 3072.59,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Breadbox_02_C",
          "sourceLevel": "Map3_Art_MusicStore.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-66c91cdd0f63d3b87d",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_CabinentStanding_05_C_0",
          "type": "searchable",
          "number": 53,
          "x": 2116.25,
          "y": 1039.31,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Cabinet_NN_17a_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e0be2978b72b946ffe",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_CabinentStanding_05_C_1",
          "type": "searchable",
          "number": 54,
          "x": 2098.03,
          "y": 1039.31,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Cabinet_NN_17a_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-703bb1bbfa68cfe8c6",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_CabinetStanding_06c_C_0",
          "type": "searchable",
          "number": 55,
          "x": 2178.92,
          "y": 1035.63,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_CabinetStanding_06c_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-581aeb431b12c34554",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Desk_03_C_0",
          "type": "searchable",
          "number": 56,
          "x": 1956.03,
          "y": 3089.84,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Desk_03_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-dee56a4771a1c618f7",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Desk_Office_NN_09b_C_0",
          "type": "searchable",
          "number": 57,
          "x": 3218.25,
          "y": 2044.37,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Desk_Office_NN_09b_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-90ca828cf2ce52527f",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_DresserVanity_01_C_0",
          "type": "searchable",
          "number": 58,
          "x": 1952.17,
          "y": 1089.55,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_DresserVanity_01_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-184b5e987ea2f85655",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Dresser_Modern_02a_C_0",
          "type": "searchable",
          "number": 59,
          "x": 3261.94,
          "y": 2119.2,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Dresser_Modern_02a_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-0a44ef1b39d3500edc",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Dresser_Modern_02a_C_1",
          "type": "searchable",
          "number": 60,
          "x": 3261.94,
          "y": 2075.0,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Dresser_Modern_02a_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-faa8a4d42fd807beb9",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Dresser_Modern_02b_C_0",
          "type": "searchable",
          "number": 61,
          "x": 3207.22,
          "y": 2134.81,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Dresser_Modern_02b_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c74f2e1acecb278774",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_FilingCabinet_01_C_0",
          "type": "searchable",
          "number": 62,
          "x": 1978.23,
          "y": 3093.14,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_FilingCabinet_01_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-6c729c7dffa5c66c1b",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_FilingCabinet_01_C_1",
          "type": "searchable",
          "number": 63,
          "x": 1992.75,
          "y": 3093.14,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_FilingCabinet_01_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-2636fe8f68d2ae982e",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Search_CabinetSet_01b_C_0",
          "type": "searchable",
          "number": 64,
          "x": 3035.2,
          "y": 2237.27,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_01b_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-7c84abcc667d6f887f",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Search_CabinetSet_02j_C_0",
          "type": "searchable",
          "number": 65,
          "x": 2035.7,
          "y": 927.88,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ef467396cafb8fe3f2",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Search_CabinetSet_02j_C_1",
          "type": "searchable",
          "number": 66,
          "x": 1972.94,
          "y": 942.74,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-afc7ac557388961b2e",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Search_CabinetSet_02j_C_2",
          "type": "searchable",
          "number": 67,
          "x": 1688.86,
          "y": 3013.86,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d5b2ecbf64b5a34fb7",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Search_CabinetSet_02j_C_3",
          "type": "searchable",
          "number": 68,
          "x": 1688.86,
          "y": 3028.73,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-71225b9197c016619f",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Search_CabinetSet_02j_C_4",
          "type": "searchable",
          "number": 69,
          "x": 3350.47,
          "y": 2067.49,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ae5af8b3850f50bf15",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Search_CabinetSet_02j_C_5",
          "type": "searchable",
          "number": 70,
          "x": 3350.38,
          "y": 2121.99,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5637c3676c9c0e449b",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Search_CabinetSet_NN_02d_C_0",
          "type": "searchable",
          "number": 71,
          "x": 1972.94,
          "y": 957.61,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02d_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-9a624f91ea4144cb38",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Search_CabinetSet_NN_02d_C_1",
          "type": "searchable",
          "number": 72,
          "x": 3347.08,
          "y": 2067.49,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02d_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-fd279c976b6a8af809",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Search_CabinetSet_NN_02d_C_2",
          "type": "searchable",
          "number": 73,
          "x": 3333.86,
          "y": 2120.34,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02d_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5c569b38939db7b463",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Search_Cabinet_NN_02a_C_0",
          "type": "searchable",
          "number": 74,
          "x": 3274.61,
          "y": 2176.71,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Cabinet_NN_02a_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-13efc38bb4acd51994",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Search_Desk_NN_02a_C_0",
          "type": "searchable",
          "number": 75,
          "x": 2067.93,
          "y": 1099.82,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Desk_NN_02a_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-fc82c9538b48caf4a1",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Search_Dresser_NN_09a_C_0",
          "type": "searchable",
          "number": 76,
          "x": 3315.7,
          "y": 2304.66,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_Dresser_NN_09a_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d231aaf953240583b2",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Search_Dresser_NN_11a_C_0",
          "type": "searchable",
          "number": 77,
          "x": 1878.17,
          "y": 1091.64,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-278718ecd8deaec96e",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Table_Bedside_01_C_0",
          "type": "searchable",
          "number": 78,
          "x": 3375.67,
          "y": 2283.62,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Table_Bedside_01_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ce43d65176d7161d8e",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Table_Bedside_01_C_1",
          "type": "searchable",
          "number": 79,
          "x": 3375.67,
          "y": 2326.35,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Table_Bedside_01_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-1938d580a52ca959aa",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Table_Decor_01a_C_0",
          "type": "searchable",
          "number": 80,
          "x": 3303.28,
          "y": 2295.34,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Decor_01a_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-485c0ab0526268efdd",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Table_Set_04a_C_0",
          "type": "searchable",
          "number": 81,
          "x": 3027.07,
          "y": 2351.79,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-558ba3beb3fb31caab",
          "sourceId": "Map3:Map3_Buildings.json:BP_Lootable_Table_Set_04a_C_1",
          "type": "searchable",
          "number": 82,
          "x": 1879.38,
          "y": 1036.01,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-22957173e3756e9dd2",
          "sourceId": "Map3:Map3_Buildings.json:StaticMeshActor_10214",
          "type": "searchable",
          "number": 83,
          "x": 1640.38,
          "y": 2903.27,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Desk_02_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b5079dca2d0e54df6e",
          "sourceId": "Map3:Map3_Buildings.json:StaticMeshActor_9209",
          "type": "searchable",
          "number": 84,
          "x": 2917.0,
          "y": 2187.76,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_CabinentDrawer_04_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-7822445d24152d03f5",
          "sourceId": "Map3:Map3_Buildings.json:StaticMeshActor_9211",
          "type": "searchable",
          "number": 85,
          "x": 3047.92,
          "y": 2233.83,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinentStanding_05_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5c1ecc488c75842519",
          "sourceId": "Map3:Map3_Buildings.json:StaticMeshActor_9212",
          "type": "searchable",
          "number": 86,
          "x": 3030.72,
          "y": 2233.83,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinentStanding_05_C",
          "sourceLevel": "Map3_Buildings.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b22eda2ff9d0e9aedd",
          "sourceId": "Map3:Map3_Roads.json:BP_BusSchool_01_C_1",
          "type": "searchable",
          "number": 87,
          "x": 1245.05,
          "y": 1915.21,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_BusSchool_01_Gameplay_C",
          "sourceLevel": "Map3_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-0e8cc0471856384f2c",
          "sourceId": "Map3:Map3_Roads.json:BP_CoupeHatchback_01_C_3",
          "type": "searchable",
          "number": 88,
          "x": 3007.84,
          "y": 639.24,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeHatchback_01_Gameplay_C",
          "sourceLevel": "Map3_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c62d7bd301dbec5a9b",
          "sourceId": "Map3:Map3_Roads.json:BP_CoupeHatchback_01_C_5",
          "type": "searchable",
          "number": 89,
          "x": 1249.66,
          "y": 1876.54,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeHatchback_01_Gameplay_C",
          "sourceLevel": "Map3_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-6bfe2c2065a4167d0d",
          "sourceId": "Map3:Map3_Roads.json:BP_CoupeSoftTop_01_C_1",
          "type": "searchable",
          "number": 90,
          "x": 1878.08,
          "y": 853.07,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeSoftTop_01_Gameplay_C",
          "sourceLevel": "Map3_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-0a02fea5d13361a9d3",
          "sourceId": "Map3:Map3_Roads.json:BP_VanClassic_01_C_1",
          "type": "searchable",
          "number": 91,
          "x": 2340.9,
          "y": 3299.11,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanClassic_01_Gameplay_C",
          "sourceLevel": "Map3_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-055eda15e7496e746b",
          "sourceId": "Map3:Map3_Roads.json:BP_VanUtility_01_C_2",
          "type": "searchable",
          "number": 92,
          "x": 1367.49,
          "y": 3162.61,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanUtility_01_Gameplay_C",
          "sourceLevel": "Map3_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-603c6c2afc59cdc540",
          "sourceId": "Map3:Map3_Roads.json:BP_WagonOld_02_C_3",
          "type": "searchable",
          "number": 93,
          "x": 1917.54,
          "y": 2916.38,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_WagonOld_02_Gameplay_C",
          "sourceLevel": "Map3_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f20833426c375dcaf6",
          "sourceId": "Map3:Map3_Roads.json:StaticMeshActor_1235",
          "type": "searchable",
          "number": 94,
          "x": 1602.69,
          "y": 901.55,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanClassic_01_Gameplay_C",
          "sourceLevel": "Map3_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-eb698e1b01a7e4c72c",
          "sourceId": "Map3:Map3_Roads.json:StaticMeshActor_72",
          "type": "searchable",
          "number": 95,
          "x": 2338.77,
          "y": 938.62,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanClassic_01_Gameplay_C",
          "sourceLevel": "Map3_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        }
      ]
    },
    {
      "id": "orange-grove-estates",
      "name": "Orange Grove Estates",
      "width": 4096,
      "height": 4096,
      "sourceZoom": -2.5,
      "image": "./assets/maps/orange-grove-estates-realistic.webp",
      "styles": {
        "realistic": "./assets/maps/orange-grove-estates-realistic.webp",
        "paper": "./assets/maps/orange-grove-estates-paper.webp"
      },
      "pixelOffset": {
        "realistic": 0,
        "paper": {
          "x": -84.3,
          "y": -70.217
        }
      },
      "registration": {
        "actorToRealisticX": 175.9,
        "paperRelativeX": -84.3,
        "source": "CP07+CP08 feature registration; not live-game certified; v1.3.4 paper border cleanup",
        "paperRelativeY": -70.217
      },
      "overlays": {
        "addresses": [
          {
            "x": 1119.1,
            "y": 2417.1,
            "label": "1514"
          },
          {
            "x": 1590.6,
            "y": 2786.2,
            "label": "1518"
          },
          {
            "x": 997.8,
            "y": 1660.9,
            "label": "1510"
          },
          {
            "x": 970.8,
            "y": 945.2,
            "label": "1482"
          },
          {
            "x": 1720.9,
            "y": 1017.2,
            "label": "1486"
          },
          {
            "x": 1658.0,
            "y": 670.7,
            "label": "1484"
          },
          {
            "x": 2363.1,
            "y": 3281.3,
            "label": "1522"
          },
          {
            "x": 2682.0,
            "y": 2484.6,
            "label": "1554"
          },
          {
            "x": 2542.8,
            "y": 2205.5,
            "label": "1542"
          },
          {
            "x": 2673.0,
            "y": 1868.0,
            "label": "1532"
          },
          {
            "x": 2363.1,
            "y": 1363.8,
            "label": "1521"
          },
          {
            "x": 2758.4,
            "y": 1390.8,
            "label": "1520"
          },
          {
            "x": 2502.4,
            "y": 621.2,
            "label": "1495"
          },
          {
            "x": 3018.8,
            "y": 589.6,
            "label": "1497"
          },
          {
            "x": 3423.1,
            "y": 2579.1,
            "label": "1549"
          },
          {
            "x": 3391.6,
            "y": 2286.6,
            "label": "1535"
          },
          {
            "x": 3391.6,
            "y": 1899.5,
            "label": "1525"
          },
          {
            "x": 3387.1,
            "y": 1309.8,
            "label": "1513"
          }
        ],
        "streets": [
          {
            "x": 1424.5,
            "y": 1710.4,
            "label": "Westridge Dr.",
            "rotation": -90
          },
          {
            "x": 2179.0,
            "y": 1215.3,
            "label": "Stephens Ave.",
            "rotation": -90
          },
          {
            "x": 3126.6,
            "y": 1890.5,
            "label": "Orange Grove Ave.",
            "rotation": -90
          },
          {
            "x": 2780.8,
            "y": 1012.7,
            "label": "Fletcher Way",
            "rotation": 0
          }
        ],
        "grid": null
      },
      "locations": [
        {
          "id": "orange-grove-estates-cellar-2",
          "sourceId": "Map2:Map2_Gameplay.json:BP_CellarEscape_C_4:cellar_escape",
          "type": "cellar",
          "number": 1,
          "x": 888.792,
          "y": 1630.74,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "orange-grove-estates-cellar-1",
          "sourceId": "Map2:Map2_Gameplay.json:BP_CellarEscape_C_5:cellar_escape",
          "type": "cellar",
          "number": 4,
          "x": 3663.735,
          "y": 2653.226,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "orange-grove-estates-cellar-3",
          "sourceId": "Map2:Map2_Gameplay.json:BP_CellarEscape_C_6:cellar_escape",
          "type": "cellar",
          "number": 3,
          "x": 3526.868,
          "y": 1420.999,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "orange-grove-estates-cellar-4",
          "sourceId": "Map2:Map2_Gameplay.json:BP_CellarEscape_C_7:cellar_escape",
          "type": "cellar",
          "number": 2,
          "x": 2598.324,
          "y": 531.698,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "orange-grove-estates-gate-1",
          "sourceId": "Map2:Map2_Gameplay.json:BP_GateEscape_C_3:gate_escape",
          "type": "gate",
          "number": 3,
          "x": 3856.863,
          "y": 2573.927,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Escape Gate"
        },
        {
          "id": "orange-grove-estates-gate-3",
          "sourceId": "Map2:Map2_Gameplay.json:BP_GateEscape_C_4:gate_escape",
          "type": "gate",
          "number": 2,
          "x": 735.582,
          "y": 729.463,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Escape Gate"
        },
        {
          "id": "orange-grove-estates-gate-2",
          "sourceId": "Map2:Map2_Gameplay.json:BP_GateEscape_C_5:gate_escape",
          "type": "gate",
          "number": 1,
          "x": 628.492,
          "y": 1960.608,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Escape Gate"
        },
        {
          "id": "source-f5dab1fd1074d769a1",
          "sourceId": "Map2:Map2_Gameplay.json:BP_VehicleEscapeVolume_C_1:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 1,
          "x": 1362.187,
          "y": 404.415,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "source-cc81779a9b633a27a6",
          "sourceId": "Map2:Map2_Gameplay.json:BP_VehicleEscapeVolume_C_2:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 2,
          "x": 2169.036,
          "y": 410.668,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "source-7f2e9b9adbab7531ba",
          "sourceId": "Map2:Map2_Gameplay.json:BP_VehicleEscapeVolume_C_3:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 3,
          "x": 3807.426,
          "y": 964.905,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "source-17561f13cb23eccfff",
          "sourceId": "Map2:Map2_Gameplay.json:BP_VehicleEscapeVolume_C_4:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 4,
          "x": 3191.302,
          "y": 3228.081,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "orange-grove-estates-car-4",
          "sourceId": "",
          "type": "car",
          "number": 4,
          "x": 2830.195,
          "y": 2503.094,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "orange-grove-estates-car-2",
          "sourceId": "",
          "type": "car",
          "number": 3,
          "x": 2072.748,
          "y": 1820.688,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "orange-grove-estates-car-1",
          "sourceId": "",
          "type": "car",
          "number": 2,
          "x": 1572.208,
          "y": 2578.822,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "source-76e2c1c83a37a21d59",
          "sourceId": "",
          "type": "car",
          "number": 6,
          "x": 2652.595,
          "y": 907.554,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "orange-grove-estates-car-3",
          "sourceId": "",
          "type": "car",
          "number": 1,
          "x": 1298.665,
          "y": 1933.788,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "orange-grove-estates-car-5",
          "sourceId": "",
          "type": "car",
          "number": 5,
          "x": 3380.794,
          "y": 1804.272,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "source-88d31baed4dda0f679",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_0",
          "type": "item",
          "number": 1,
          "x": 865.887,
          "y": 925.244,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-86018ee68b624297d9",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_1",
          "type": "item",
          "number": 2,
          "x": 2174.654,
          "y": 2106.782,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-ea68a71a75d80a6017",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_100",
          "type": "item",
          "number": 3,
          "x": 1140.961,
          "y": 1759.873,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-8cb9dc1306162fcef3",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_101",
          "type": "item",
          "number": 4,
          "x": 1049.183,
          "y": 1097.147,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-c729971560700f26f3",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_102",
          "type": "item",
          "number": 5,
          "x": 1797.572,
          "y": 1255.377,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-9d793ae325a832a9db",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_103",
          "type": "item",
          "number": 6,
          "x": 2317.405,
          "y": 1313.857,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-3dd539d6673d408b02",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_104",
          "type": "item",
          "number": 7,
          "x": 2345.529,
          "y": 1881.815,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-b5a5b81513395d448f",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_105",
          "type": "item",
          "number": 8,
          "x": 1736.363,
          "y": 1856.689,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f6928790f21786df18",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_108",
          "type": "item",
          "number": 9,
          "x": 1818.794,
          "y": 1033.196,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-fdbd6600834dfbb7ca",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_109",
          "type": "item",
          "number": 10,
          "x": 1695.157,
          "y": 1138.243,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-11259d25d823a08679",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_110",
          "type": "item",
          "number": 11,
          "x": 1688.02,
          "y": 1177.034,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-732d80eb16e269bd9b",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_112",
          "type": "item",
          "number": 12,
          "x": 2484.977,
          "y": 1364.199,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-ec4ecc1970d2585c8a",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_113",
          "type": "item",
          "number": 13,
          "x": 2334.429,
          "y": 1273.981,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-6f0053bd6ab7625fcc",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_114",
          "type": "item",
          "number": 14,
          "x": 2806.095,
          "y": 1303.216,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-fa6d5b291593460c97",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_115",
          "type": "item",
          "number": 15,
          "x": 2804.221,
          "y": 1436.545,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f1a2e479231813dd18",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_117",
          "type": "item",
          "number": 16,
          "x": 2862.688,
          "y": 1913.535,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-83844c68ce80896e3a",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_118",
          "type": "item",
          "number": 17,
          "x": 2783.999,
          "y": 1968.645,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-0ca382c1798a66a4b2",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_119",
          "type": "item",
          "number": 18,
          "x": 2817.395,
          "y": 1851.006,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-fb74abd96d10a0aa84",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_12",
          "type": "item",
          "number": 19,
          "x": 871.046,
          "y": 1134.087,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-fadc4c5196f57baee5",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_120",
          "type": "item",
          "number": 20,
          "x": 2742.769,
          "y": 2269.231,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-787af102e7360b3c27",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_121",
          "type": "item",
          "number": 21,
          "x": 2545.508,
          "y": 2266.774,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-39ad97e1e7a0a990e2",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_123",
          "type": "item",
          "number": 22,
          "x": 2606.923,
          "y": 2219.969,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-842a885905a76afc24",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_124",
          "type": "item",
          "number": 23,
          "x": 2781.169,
          "y": 2600.199,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-16e6cc54cc2d9aba24",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_125",
          "type": "item",
          "number": 24,
          "x": 2830.302,
          "y": 2785.168,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-6936751ee3142eeb1c",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_126",
          "type": "item",
          "number": 25,
          "x": 2715.678,
          "y": 2576.84,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-b439d50b6fae1f48e5",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_127",
          "type": "item",
          "number": 26,
          "x": 2735.139,
          "y": 2614.796,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-ea3d03ab12686daa4d",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_128",
          "type": "item",
          "number": 27,
          "x": 1967.499,
          "y": 3113.088,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-1dc042971376e3b653",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_129",
          "type": "item",
          "number": 28,
          "x": 1822.996,
          "y": 3091.403,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-dd039906480643ea56",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_130",
          "type": "item",
          "number": 29,
          "x": 1123.383,
          "y": 2511.796,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-5686ca311ba748ea85",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_132",
          "type": "item",
          "number": 30,
          "x": 1160.503,
          "y": 2385.06,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-8209b389087d3f59f3",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_133",
          "type": "item",
          "number": 31,
          "x": 1234.763,
          "y": 2522.479,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-537def71a1f8efdc1c",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_134",
          "type": "item",
          "number": 32,
          "x": 1723.313,
          "y": 1551.165,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-0db7f566b8dfe1234d",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_135",
          "type": "item",
          "number": 33,
          "x": 1588.395,
          "y": 1866.181,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-4db1aef31a6713b4e0",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_161",
          "type": "item",
          "number": 34,
          "x": 973.523,
          "y": 1216.805,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-ae6b153c886e2495c4",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_162",
          "type": "item",
          "number": 35,
          "x": 897.546,
          "y": 1190.81,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-bfd6d10a3e76f589f0",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_163",
          "type": "item",
          "number": 36,
          "x": 879.568,
          "y": 1086.378,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-681b7e7acb60667e9a",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_164",
          "type": "item",
          "number": 37,
          "x": 989.169,
          "y": 1037.332,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-8db3be49791865d1e0",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_165",
          "type": "item",
          "number": 38,
          "x": 913.805,
          "y": 1081.649,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-b6ab02ed529cda08c9",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_166",
          "type": "item",
          "number": 39,
          "x": 892.609,
          "y": 1049.307,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-20215135a2762ccacc",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_167",
          "type": "item",
          "number": 40,
          "x": 976.027,
          "y": 1148.756,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-3adab70ab238127967",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_168",
          "type": "item",
          "number": 41,
          "x": 913.288,
          "y": 1189.963,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-ca58fdd2f1e71710b7",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_169",
          "type": "item",
          "number": 42,
          "x": 1018.707,
          "y": 1149.225,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-bd61bcf2cbc77f8c70",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_170",
          "type": "item",
          "number": 43,
          "x": 1008.076,
          "y": 1008.835,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-7a689ae5826898f0ad",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_171",
          "type": "item",
          "number": 44,
          "x": 1688.533,
          "y": 990.837,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-5288332971c35e28eb",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_172",
          "type": "item",
          "number": 45,
          "x": 1786.941,
          "y": 977.256,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-a78efa4c5a937a43e5",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_173",
          "type": "item",
          "number": 46,
          "x": 1797.618,
          "y": 1043.37,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-91a0c4d00c827b68d1",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_174",
          "type": "item",
          "number": 47,
          "x": 1787.477,
          "y": 1132.743,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f036af072c73773a06",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_175",
          "type": "item",
          "number": 48,
          "x": 1782.529,
          "y": 1163.682,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-2d104e5717fe562127",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_176",
          "type": "item",
          "number": 49,
          "x": 1765.523,
          "y": 1013.369,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-144d0f445ef74ce739",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_177",
          "type": "item",
          "number": 50,
          "x": 1702.825,
          "y": 1029.003,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-d30bdedebc9c639e8a",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_178",
          "type": "item",
          "number": 51,
          "x": 1686.093,
          "y": 1028.707,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-51d4164a9812e8bd15",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_179",
          "type": "item",
          "number": 52,
          "x": 1684.211,
          "y": 1101.884,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-edb52f928876144fe2",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_180",
          "type": "item",
          "number": 53,
          "x": 1732.693,
          "y": 1164.546,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f818cd9d8bc80fcd1a",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_183",
          "type": "item",
          "number": 54,
          "x": 2363.821,
          "y": 1264.366,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-8e7177824320f0df1c",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_184",
          "type": "item",
          "number": 55,
          "x": 2429.013,
          "y": 1281.954,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-b35dfa8acdbbdb5167",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_185",
          "type": "item",
          "number": 56,
          "x": 2482.949,
          "y": 1386.387,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-915147da7eec7f11e9",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_186",
          "type": "item",
          "number": 57,
          "x": 2491.861,
          "y": 1380.606,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f55b55d90fb856c70c",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_187",
          "type": "item",
          "number": 58,
          "x": 2364.497,
          "y": 1371.371,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-2be4eaa097a8af49da",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_188",
          "type": "item",
          "number": 59,
          "x": 2516.404,
          "y": 1414.527,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-4d4f76fde68e08809b",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_189",
          "type": "item",
          "number": 60,
          "x": 2462.469,
          "y": 1377.475,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-53d5a1ea8f562da2e8",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_190",
          "type": "item",
          "number": 61,
          "x": 2384.772,
          "y": 1374.81,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-51ad355ca35282d672",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_191",
          "type": "item",
          "number": 62,
          "x": 2401.341,
          "y": 1259.285,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-cc77c0bc8947f55882",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_192",
          "type": "item",
          "number": 63,
          "x": 2804.531,
          "y": 1291.491,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-46a8e2a9771c6c0052",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_193",
          "type": "item",
          "number": 64,
          "x": 2867.457,
          "y": 1327.333,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-23cc658173348d245a",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_194",
          "type": "item",
          "number": 65,
          "x": 2902.062,
          "y": 1293.526,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-befd77ce8c69153023",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_195",
          "type": "item",
          "number": 66,
          "x": 2929.073,
          "y": 1351.689,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-aad17965fed24a6852",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_196",
          "type": "item",
          "number": 67,
          "x": 2800.079,
          "y": 1429.686,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-a68d46d32e1e825302",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_197",
          "type": "item",
          "number": 68,
          "x": 2769.356,
          "y": 1269.135,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f7a853752a9575ee09",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_198",
          "type": "item",
          "number": 69,
          "x": 2789.211,
          "y": 1418.279,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-6549e166121c2a0d23",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_199",
          "type": "item",
          "number": 70,
          "x": 2764.825,
          "y": 1392.505,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-a03e451ebcc18c97ad",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_2",
          "type": "item",
          "number": 71,
          "x": 2731.992,
          "y": 1596.346,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-0bc928f27a501680b6",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_20",
          "type": "item",
          "number": 72,
          "x": 1792.587,
          "y": 1195.771,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-c9465c080a845b74ab",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_200",
          "type": "item",
          "number": 73,
          "x": 2769.043,
          "y": 1320.725,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-debf356426d618450c",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_201",
          "type": "item",
          "number": 74,
          "x": 2825.793,
          "y": 1272.574,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-c588a98e3845b0a1fd",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_202",
          "type": "item",
          "number": 75,
          "x": 2802.064,
          "y": 1868.613,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-576cda811034fa079c",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_203",
          "type": "item",
          "number": 76,
          "x": 2863.626,
          "y": 1898.892,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-5d7e3c16bb5ebfe96f",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_204",
          "type": "item",
          "number": 77,
          "x": 2737.162,
          "y": 1929.955,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-853638dcdba28e6fdb",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_205",
          "type": "item",
          "number": 78,
          "x": 2663.374,
          "y": 1971.462,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-1733a205bc7fcbfbbc",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_206",
          "type": "item",
          "number": 79,
          "x": 2717.138,
          "y": 1917.934,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-1f76b98083627eba98",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_207",
          "type": "item",
          "number": 80,
          "x": 2723.22,
          "y": 1796.763,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-eb7b9eb9c48fe7c1a5",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_208",
          "type": "item",
          "number": 81,
          "x": 2717.689,
          "y": 1850.847,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-fb5ca44ba87e530b4b",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_209",
          "type": "item",
          "number": 82,
          "x": 2731.953,
          "y": 1920.385,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-520f9e9817a821ccf9",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_21",
          "type": "item",
          "number": 83,
          "x": 1732.272,
          "y": 934.944,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-c55d40cfda05114703",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_210",
          "type": "item",
          "number": 84,
          "x": 2816.413,
          "y": 1913.238,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-dc403cc28ca1f65169",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_211",
          "type": "item",
          "number": 85,
          "x": 2822.51,
          "y": 1866.807,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-2ac86d1d72947a1b9c",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_212",
          "type": "item",
          "number": 86,
          "x": 2714.797,
          "y": 2243.679,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-7afb4f981ecd20ea02",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_213",
          "type": "item",
          "number": 87,
          "x": 2775.14,
          "y": 2243.42,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-8d5a523e6095584398",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_214",
          "type": "item",
          "number": 88,
          "x": 2740.59,
          "y": 2276.563,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-e0ef1813072243746a",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_215",
          "type": "item",
          "number": 89,
          "x": 2643.198,
          "y": 2143.516,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-fe815bd2b754e74995",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_216",
          "type": "item",
          "number": 90,
          "x": 2592.038,
          "y": 2196.059,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-7012b7dd215b35d7f3",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_217",
          "type": "item",
          "number": 91,
          "x": 2599.042,
          "y": 2202.061,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-81cc812858ac4bdac0",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_218",
          "type": "item",
          "number": 92,
          "x": 2548.453,
          "y": 2146.961,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-e88e4c3fa5886b61eb",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_219",
          "type": "item",
          "number": 93,
          "x": 2598.338,
          "y": 2284.396,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-0c123e5eee52082bfb",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_22",
          "type": "item",
          "number": 94,
          "x": 1808.001,
          "y": 1044.945,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-2b527e2baa8df59ec3",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_220",
          "type": "item",
          "number": 95,
          "x": 2751.931,
          "y": 2182.218,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-0c2a01f22b687f123e",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_221",
          "type": "item",
          "number": 96,
          "x": 2743.535,
          "y": 2177.243,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-10a4d0d32f82798de3",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_222",
          "type": "item",
          "number": 97,
          "x": 2788.585,
          "y": 2588.453,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-2a1529a29c472276f8",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_223",
          "type": "item",
          "number": 98,
          "x": 2791.556,
          "y": 2705.549,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-873678d1606160d690",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_224",
          "type": "item",
          "number": 99,
          "x": 2819.83,
          "y": 2704.383,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-ac4d660a4034de9ac1",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_225",
          "type": "item",
          "number": 100,
          "x": 2806.72,
          "y": 2739.63,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-58e7b2fd34da5d3537",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_226",
          "type": "item",
          "number": 101,
          "x": 2767.636,
          "y": 2766.832,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-d7b72fef4ce84d776c",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_227",
          "type": "item",
          "number": 102,
          "x": 2680.244,
          "y": 2822.801,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f2be591bdc34f177e4",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_228",
          "type": "item",
          "number": 103,
          "x": 2816.1,
          "y": 2713.297,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-df8241218dfc439b4a",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_229",
          "type": "item",
          "number": 104,
          "x": 2796.714,
          "y": 2713.208,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-8d025918affb2cec91",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_23",
          "type": "item",
          "number": 105,
          "x": 1827.078,
          "y": 1144.769,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-14fb399cfc3b9f677a",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_230",
          "type": "item",
          "number": 106,
          "x": 2719.222,
          "y": 2770.891,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-45961af77dd1b9024f",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_231",
          "type": "item",
          "number": 107,
          "x": 2757.787,
          "y": 2827.96,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-1e44fa3effde895d9b",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_232",
          "type": "item",
          "number": 108,
          "x": 3639.468,
          "y": 2313.376,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f0558f56739f074734",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_233",
          "type": "item",
          "number": 109,
          "x": 3638.114,
          "y": 2350.041,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-211f756cea2571c5c5",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_234",
          "type": "item",
          "number": 110,
          "x": 3476.776,
          "y": 2389.75,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-7e495e3202b30cd92f",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_235",
          "type": "item",
          "number": 111,
          "x": 3467.552,
          "y": 2389.421,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-84ba0b79c949b6de95",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_236",
          "type": "item",
          "number": 112,
          "x": 3467.097,
          "y": 2309.09,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f528c335fb8d7ca649",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_237",
          "type": "item",
          "number": 113,
          "x": 3466.522,
          "y": 2385.721,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-4744352d721585b2a7",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_238",
          "type": "item",
          "number": 114,
          "x": 3589.494,
          "y": 2335.345,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f6dad2635d1ecf546f",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_239",
          "type": "item",
          "number": 115,
          "x": 3589.338,
          "y": 2249.986,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-fadc8a17fcb02e2f95",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_240",
          "type": "item",
          "number": 116,
          "x": 3547.238,
          "y": 2267.808,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-69cbf993df750b88c2",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_241",
          "type": "item",
          "number": 117,
          "x": 3548.69,
          "y": 2257.803,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-6f8c46f051e10dde3c",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_242",
          "type": "item",
          "number": 118,
          "x": 1137.447,
          "y": 2524.578,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-45014034001eb77c30",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_243",
          "type": "item",
          "number": 119,
          "x": 1123.643,
          "y": 2524.905,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-bc21d12140eece4271",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_244",
          "type": "item",
          "number": 120,
          "x": 1209.28,
          "y": 2553.59,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-7f94010670c269d2e5",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_245",
          "type": "item",
          "number": 121,
          "x": 1198.489,
          "y": 2445.489,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-10f4d3da0398f1b3f5",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_246",
          "type": "item",
          "number": 122,
          "x": 1173.059,
          "y": 2412.835,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f139204d5368be3cd7",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_247",
          "type": "item",
          "number": 123,
          "x": 1143.397,
          "y": 2398.48,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-e48c4b7f57a351e545",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_248",
          "type": "item",
          "number": 124,
          "x": 1190.72,
          "y": 2439.829,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-9aa75de0db890e3c69",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_249",
          "type": "item",
          "number": 125,
          "x": 1139.173,
          "y": 2563.878,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-619dd4d0d28d54d3a1",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_250",
          "type": "item",
          "number": 126,
          "x": 1244.185,
          "y": 2607.939,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-33b130b82cb503ed90",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_251",
          "type": "item",
          "number": 127,
          "x": 1267.902,
          "y": 2582.521,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-2c56618da51b585777",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_252",
          "type": "item",
          "number": 128,
          "x": 1848.205,
          "y": 3119.606,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-672c47028338e68ecc",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_253",
          "type": "item",
          "number": 129,
          "x": 1951.836,
          "y": 3130.967,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-65fd6d0de00c7e15c8",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_254",
          "type": "item",
          "number": 130,
          "x": 884.414,
          "y": 2391.626,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-c855ce34f365e08630",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_255",
          "type": "item",
          "number": 131,
          "x": 862.55,
          "y": 2370.605,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-170c4b47682ee4d6d7",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_256",
          "type": "item",
          "number": 132,
          "x": 1635.921,
          "y": 1551.165,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-0ca02751353adfdac0",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_257",
          "type": "item",
          "number": 133,
          "x": 1925.924,
          "y": 1897.605,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-491ff9f2abd81c446a",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_258",
          "type": "item",
          "number": 134,
          "x": 1733.943,
          "y": 2218.562,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-e58b987b2587a48e38",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_260",
          "type": "item",
          "number": 135,
          "x": 2060.06,
          "y": 2444.311,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-c74372f0f00c1f7a0d",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_261",
          "type": "item",
          "number": 136,
          "x": 1905.444,
          "y": 2463.228,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-2f3796770d07f49f13",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_267",
          "type": "item",
          "number": 137,
          "x": 1886.916,
          "y": 2452.812,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-b2121fe095acb0838a",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_268",
          "type": "item",
          "number": 138,
          "x": 1466.653,
          "y": 2715.006,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-539ca9e0a544d330e1",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_28",
          "type": "item",
          "number": 139,
          "x": 2431.956,
          "y": 1279.317,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-df9a3915127e2f7fcc",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_29",
          "type": "item",
          "number": 140,
          "x": 2891.548,
          "y": 1499.427,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f7917737f1ad88e56d",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_3",
          "type": "item",
          "number": 141,
          "x": 2413.066,
          "y": 2327.216,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-42bf6c6a09e44bebb3",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_31",
          "type": "item",
          "number": 142,
          "x": 2704.459,
          "y": 2260.55,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-ca22e6ae2e43b16cb8",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_32",
          "type": "item",
          "number": 143,
          "x": 2700.804,
          "y": 2304.867,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-b22244790a2ba60253",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_33",
          "type": "item",
          "number": 144,
          "x": 3555.013,
          "y": 2380.984,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-8cc51c66570c96e799",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_4",
          "type": "item",
          "number": 145,
          "x": 3734.46,
          "y": 2494.799,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-08af61e02974b80065",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_48",
          "type": "item",
          "number": 146,
          "x": 2674.06,
          "y": 2736.409,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-df73e883e9d9ff94ee",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_5",
          "type": "item",
          "number": 147,
          "x": 3441.756,
          "y": 475.417,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-8cda453985780f131d",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_63",
          "type": "item",
          "number": 148,
          "x": 2687.34,
          "y": 2507.561,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-1dcef134aad23e8273",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_64",
          "type": "item",
          "number": 149,
          "x": 1866.074,
          "y": 3137.284,
          "itemTags": [
            "ID.Item.BoltCutters.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-8bafa5c78e4cba9fc6",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_65",
          "type": "item",
          "number": 150,
          "x": 1504.992,
          "y": 2943.423,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-ae279b30fd4588fca6",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_8",
          "type": "item",
          "number": 151,
          "x": 1953.439,
          "y": 1174.239,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-71ddf44e63c10d00c5",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_81",
          "type": "item",
          "number": 152,
          "x": 1617.629,
          "y": 574.378,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-2d40933cc57477c940",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_82",
          "type": "item",
          "number": 153,
          "x": 1818.18,
          "y": 892.364,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-39dceebf625178e5aa",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_83",
          "type": "item",
          "number": 154,
          "x": 2582.222,
          "y": 1279.14,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-6f03aa5effeaa082dc",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_84",
          "type": "item",
          "number": 155,
          "x": 2639.753,
          "y": 721.021,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-99b7158896c0f99e89",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_85",
          "type": "item",
          "number": 156,
          "x": 3262.283,
          "y": 629.096,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-d9abdee6c9335d11b9",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_86",
          "type": "item",
          "number": 157,
          "x": 3438.786,
          "y": 1238.024,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-217a5c9e27b49ffacf",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_9",
          "type": "item",
          "number": 158,
          "x": 1026.367,
          "y": 2628.162,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-993f3ff0adb31a88a2",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_93",
          "type": "item",
          "number": 159,
          "x": 3632.174,
          "y": 2055.419,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-fcc5c7b73ba69da6a8",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_95",
          "type": "item",
          "number": 160,
          "x": 3452.544,
          "y": 2734.158,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-e4b054a22fc326996b",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_96",
          "type": "item",
          "number": 161,
          "x": 2837.362,
          "y": 2654.583,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-95690cef5e97e6d901",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_97",
          "type": "item",
          "number": 162,
          "x": 2348.896,
          "y": 3269.171,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-9fcbffc1aea3fa3346",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_98",
          "type": "item",
          "number": 163,
          "x": 1751.922,
          "y": 2851.566,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-483d76fea5811958f4",
          "sourceId": "Map2:Map2_Gameplay.json:BP_ItemSpawner_C_99",
          "type": "item",
          "number": 164,
          "x": 1307.146,
          "y": 2443.686,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "searchable-ccfadfadbac6f6fc56",
          "sourceId": "Map2:Map2_Gameplay.json:BP_Lootable_CabinetStandingTV_02_C_0",
          "type": "searchable",
          "number": 1,
          "x": 2789.054,
          "y": 1932.937,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinetStandingTV_02_C",
          "sourceLevel": "Map2_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-9307de32694b0618fe",
          "sourceId": "Map2:Map2_Gameplay.json:BP_Lootable_LunchBox_C_1",
          "type": "searchable",
          "number": 2,
          "x": 1749.932,
          "y": 2217.043,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_LunchBox_C",
          "sourceLevel": "Map2_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-508071fc98c0e12f1c",
          "sourceId": "Map2:Map2_Gameplay.json:BP_Lootable_Search_Crate_01_C_0",
          "type": "searchable",
          "number": 3,
          "x": 3616.935,
          "y": 2306.608,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map2_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-75ed57b814af2311d2",
          "sourceId": "Map2:Map2_Gameplay.json:BP_Lootable_Search_Crate_01_C_2",
          "type": "searchable",
          "number": 4,
          "x": 2607.705,
          "y": 2031.741,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map2_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-cdbf31e41c90acd884",
          "sourceId": "Map2:Map2_Gameplay.json:BP_Lootable_Search_Crate_01_C_4",
          "type": "searchable",
          "number": 5,
          "x": 3797.89,
          "y": 2761.517,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map2_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-dfc9698d3b42f429bc",
          "sourceId": "Map2:Map2_Gameplay.json:BP_Lootable_Search_Sink_NN_05a_C_13",
          "type": "searchable",
          "number": 6,
          "x": 3528.679,
          "y": 2405.012,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Sink_NN_05a_C",
          "sourceLevel": "Map2_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-8573204f23f926f786",
          "sourceId": "Map2:Map2_Gameplay.json:BP_Lootable_Table_Bedside_02_C_2",
          "type": "searchable",
          "number": 7,
          "x": 1732.373,
          "y": 1165.215,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Bedside_02_C",
          "sourceLevel": "Map2_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f1469027e6cc403f8c",
          "sourceId": "Map2:Map2_Gameplay.json:BP_Lootable_ToolCart_01b_C_1",
          "type": "searchable",
          "number": 8,
          "x": 2650.697,
          "y": 2030.178,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map2_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ffef72f95982b6c0be",
          "sourceId": "Map2:Map2_Gameplay.json:BP_Lootable_ToolCart_01b_C_2",
          "type": "searchable",
          "number": 9,
          "x": 1964.548,
          "y": 3116.534,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map2_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-1d62215cf7590f061b",
          "sourceId": "Map2:Map2_Gameplay.json:BP_Lootable_ToolCart_01b_C_3",
          "type": "searchable",
          "number": 10,
          "x": 862.996,
          "y": 2370.99,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map2_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-0544f2b96e1d9561f7",
          "sourceId": "Map2:Map2_Gameplay_MP.json:BP_Lootable_GunCabinet_C_1",
          "type": "searchable",
          "number": 11,
          "x": 2704.476,
          "y": 2310.488,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_GunCabinet_C",
          "sourceLevel": "Map2_Gameplay_MP.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        }
      ]
    },
    {
      "id": "tower-farm",
      "name": "Tower Farm",
      "image": "./assets/maps/tower-farm-realistic.webp",
      "width": 4096,
      "height": 4096,
      "styles": {
        "realistic": "./assets/maps/tower-farm-realistic.webp",
        "paper": "./assets/maps/tower-farm-paper.webp"
      },
      "pixelOffset": {
        "realistic": 0,
        "paper": {
          "x": -84.7,
          "y": -104.0
        }
      },
      "registration": {
        "actorToRealisticX": 176.0,
        "paperRelativeX": -84.7,
        "source": "CP07+CP08 feature registration; not live-game certified; v1.3.4 paper border cleanup",
        "paperRelativeY": -104.0
      },
      "overlays": {
        "addresses": [
          {
            "x": 1440.7,
            "y": 2968,
            "label": "300"
          },
          {
            "x": 3116.7,
            "y": 2224,
            "label": "301"
          },
          {
            "x": 1544.7,
            "y": 2200,
            "label": "302"
          },
          {
            "x": 2324.7,
            "y": 1920,
            "label": "303"
          },
          {
            "x": 2300.7,
            "y": 724,
            "label": "305"
          },
          {
            "x": 2928.7,
            "y": 588,
            "label": "309"
          }
        ],
        "streets": [
          {
            "x": 2064.7,
            "y": 2360,
            "label": "Ridgeline Rd.",
            "rotation": -90
          },
          {
            "x": 2892.7,
            "y": 1636,
            "label": "Clover Way",
            "rotation": 0
          }
        ],
        "grid": null,
        "labelAudit": "Paper texture 4096px text identifiers / on-source road footprints; visual review required in actual gameplay."
      },
      "locations": [
        {
          "id": "source-d0e911c582fcdab428",
          "sourceId": "Map5:Map5_Gameplay.json:BP_CellarEscape_C_0:cellar_escape",
          "type": "cellar",
          "number": 1,
          "x": 2453.461,
          "y": 2990.746,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "source-6a536979a80030a143",
          "sourceId": "Map5:Map5_Gameplay.json:BP_CellarEscape_C_1:cellar_escape",
          "type": "cellar",
          "number": 2,
          "x": 3315.005,
          "y": 3543.632,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "source-388db2e32e443c8270",
          "sourceId": "Map5:Map5_Gameplay.json:BP_CellarEscape_C_14:cellar_escape",
          "type": "cellar",
          "number": 3,
          "x": 1537.697,
          "y": 3285.007,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "source-a1d0da37b50bb06a34",
          "sourceId": "Map5:Map5_Gameplay.json:BP_CellarEscape_C_3:cellar_escape",
          "type": "cellar",
          "number": 4,
          "x": 3217.28,
          "y": 2348.032,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "source-ab03ab138efa1ecb2c",
          "sourceId": "Map5:Map5_Gameplay.json:BP_CellarEscape_C_4:cellar_escape",
          "type": "cellar",
          "number": 5,
          "x": 1341.44,
          "y": 2446.464,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "source-72de40d303a922e567",
          "sourceId": "Map5:Map5_Gameplay.json:BP_CellarEscape_C_6:cellar_escape",
          "type": "cellar",
          "number": 6,
          "x": 3200.498,
          "y": 837.317,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "source-c1c77644a8df0147ee",
          "sourceId": "Map5:Map5_Gameplay.json:BP_CellarEscape_C_8:cellar_escape",
          "type": "cellar",
          "number": 7,
          "x": 2447.36,
          "y": 1074.432,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Cellar"
        },
        {
          "id": "source-995aa6435f0b4811c4",
          "sourceId": "Map5:Map5_Gameplay.json:BP_StormDrainEscape_C_0:storm_drain_escape",
          "type": "drain",
          "number": 1,
          "x": 2704.896,
          "y": 2104.704,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Drain / Sewer"
        },
        {
          "id": "source-8d3d2054d296c80aaf",
          "sourceId": "Map5:Map5_Gameplay.json:BP_StormDrainEscape_C_1:storm_drain_escape",
          "type": "drain",
          "number": 2,
          "x": 1707.418,
          "y": 598.835,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Drain / Sewer"
        },
        {
          "id": "source-262afc2a44611fed64",
          "sourceId": "Map5:Map5_Gameplay.json:BP_StormDrainEscape_C_10:storm_drain_escape",
          "type": "drain",
          "number": 3,
          "x": 1820.16,
          "y": 1526.912,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Drain / Sewer"
        },
        {
          "id": "source-02c6a7e0a614882191",
          "sourceId": "Map5:Map5_Gameplay.json:BP_StormDrainEscape_C_12:storm_drain_escape",
          "type": "drain",
          "number": 4,
          "x": 3346.048,
          "y": 1891.584,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Drain / Sewer"
        },
        {
          "id": "source-5ebbb2a91025475837",
          "sourceId": "Map5:Map5_Gameplay.json:BP_StormDrainEscape_C_2:storm_drain_escape",
          "type": "drain",
          "number": 5,
          "x": 2413.44,
          "y": 486.272,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Drain / Sewer"
        },
        {
          "id": "source-7f9ca146fbd4a7edad",
          "sourceId": "Map5:Map5_Gameplay.json:BP_StormDrainEscape_C_3:storm_drain_escape",
          "type": "drain",
          "number": 6,
          "x": 1261.44,
          "y": 3201.152,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Drain / Sewer"
        },
        {
          "id": "source-4d038ea208412dfca2",
          "sourceId": "Map5:Map5_Gameplay.json:BP_StormDrainEscape_C_4:storm_drain_escape",
          "type": "drain",
          "number": 7,
          "x": 1055.36,
          "y": 1429.632,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Drain / Sewer"
        },
        {
          "id": "source-3ea22c4080dec087d6",
          "sourceId": "Map5:Map5_Gameplay.json:BP_StormDrainEscape_C_6:storm_drain_escape",
          "type": "drain",
          "number": 8,
          "x": 3375.491,
          "y": 1383.078,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Drain / Sewer"
        },
        {
          "id": "source-41072e5cf5c1e9c6ee",
          "sourceId": "Map5:Map5_Gameplay.json:BP_StormDrainEscape_C_8:storm_drain_escape",
          "type": "drain",
          "number": 9,
          "x": 3011.2,
          "y": 2627.712,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Storm Drain / Sewer"
        },
        {
          "id": "source-96985252b8d00e97d8",
          "sourceId": "Map5:Map5_Gameplay.json:BP_VehicleEscapeVolume_C_1:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 1,
          "x": 2079.36,
          "y": 3634.432,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "source-64a171338f50b94c40",
          "sourceId": "Map5:Map5_Gameplay.json:BP_VehicleEscapeVolume_C_2:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 2,
          "x": 3560.704,
          "y": 1635.072,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "source-c9f921f04cdf4667fd",
          "sourceId": "Map5:Map5_Gameplay.json:BP_VehicleEscapeVolume_C_3:vehicle_escape_volume",
          "type": "vehicleExit",
          "number": 3,
          "x": 1566.274,
          "y": 507.77,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Vehicle exit trigger (not parked sedan)"
        },
        {
          "id": "source-c04993513027b5de37",
          "sourceId": "",
          "type": "car",
          "number": 1,
          "x": 1621.123,
          "y": 1077.094,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "source-c32368b9d99c033eab",
          "sourceId": "",
          "type": "car",
          "number": 2,
          "x": 2520.014,
          "y": 3268.131,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "source-20f250a92695e35c78",
          "sourceId": "",
          "type": "car",
          "number": 3,
          "x": 2629.28,
          "y": 1859.851,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "source-aadd291a9155fefbad",
          "sourceId": "",
          "type": "car",
          "number": 4,
          "x": 1539.757,
          "y": 2805.677,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "source-2c577e658ae5dc90f1",
          "sourceId": "",
          "type": "car",
          "number": 5,
          "x": 1585.812,
          "y": 1693.183,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "source-19d705d7a346050014",
          "sourceId": "",
          "type": "car",
          "number": 6,
          "x": 3161.435,
          "y": 3556.489,
          "itemTags": [],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible civilian escape sedan spawn"
        },
        {
          "id": "source-243265f5e11ff6b243",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_0",
          "type": "item",
          "number": 1,
          "x": 1459.858,
          "y": 2880.246,
          "itemTags": [
            "ID.Item.SedanKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-e9df056c33ac643f54",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_1",
          "type": "item",
          "number": 2,
          "x": 1508.083,
          "y": 2963.858,
          "itemTags": [
            "ID.Item.SedanKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f1c00db50fbfc8cf96",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_10",
          "type": "item",
          "number": 3,
          "x": 2434.197,
          "y": 2898.062,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-acd80c4f1909e356bf",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_11",
          "type": "item",
          "number": 4,
          "x": 1308.785,
          "y": 2023.611,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-8d2ca7964c7de96758",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_119",
          "type": "item",
          "number": 5,
          "x": 1619.982,
          "y": 2307.359,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-a8ee96b6d7cd321942",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_120",
          "type": "item",
          "number": 6,
          "x": 2593.65,
          "y": 970.204,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-fc13e5e814b85ebbaf",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_121",
          "type": "item",
          "number": 7,
          "x": 2983.443,
          "y": 715.567,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-a2c9e9a50e63e6c249",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_122",
          "type": "item",
          "number": 8,
          "x": 3094.166,
          "y": 611.834,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-18fc86ce1f9cbb9141",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_123",
          "type": "item",
          "number": 9,
          "x": 3007.232,
          "y": 676.352,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-53183656e28bbe6f96",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_125",
          "type": "item",
          "number": 10,
          "x": 3145.149,
          "y": 793.342,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-545eeeb65a67a4b6c6",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_126",
          "type": "item",
          "number": 11,
          "x": 3130.624,
          "y": 2189.952,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-d961b6bef8e95ce044",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_127",
          "type": "item",
          "number": 12,
          "x": 3074.304,
          "y": 2373.76,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f022ffe34c4a95e4bb",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_128",
          "type": "item",
          "number": 13,
          "x": 3083.101,
          "y": 2316.16,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-ac753d4a954bba90c5",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_129",
          "type": "item",
          "number": 14,
          "x": 3151.488,
          "y": 2360.832,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-a4dea6ca4cd93b1237",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_130",
          "type": "item",
          "number": 15,
          "x": 2647.04,
          "y": 3019.136,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-eb41e2792452f30d88",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_131",
          "type": "item",
          "number": 16,
          "x": 2550.034,
          "y": 3147.57,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-14dc744f71bffc62ab",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_132",
          "type": "item",
          "number": 17,
          "x": 2641.28,
          "y": 3161.088,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-c21570ae7a5b1b3dd7",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_133",
          "type": "item",
          "number": 18,
          "x": 2859.087,
          "y": 2903.168,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-44d7777e686f903b1c",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_134",
          "type": "item",
          "number": 19,
          "x": 1495.168,
          "y": 2919.68,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-4c2a4cba45d2cce742",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_135",
          "type": "item",
          "number": 20,
          "x": 1507.712,
          "y": 2860.416,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-adb461a40b98241bb5",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_136",
          "type": "item",
          "number": 21,
          "x": 1423.36,
          "y": 2899.328,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-51eb569e8dacb462b5",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_137",
          "type": "item",
          "number": 22,
          "x": 1445.888,
          "y": 3048.96,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-0c976786cf8c0f8535",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_138",
          "type": "item",
          "number": 23,
          "x": 1300.224,
          "y": 2244.224,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-6c55737d2d26c4b93e",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_139",
          "type": "item",
          "number": 24,
          "x": 1654.272,
          "y": 2071.04,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-00df4795222cec5125",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_140",
          "type": "item",
          "number": 25,
          "x": 1448.192,
          "y": 2880.64,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-9c7e4b7ef2ef83af88",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_141",
          "type": "item",
          "number": 26,
          "x": 1511.54,
          "y": 2891.222,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-1ce9989936e94acec8",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_142",
          "type": "item",
          "number": 27,
          "x": 1429.888,
          "y": 2888.448,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-d8b5514115dfa9404c",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_143",
          "type": "item",
          "number": 28,
          "x": 1512.064,
          "y": 1823.744,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-a7e021b7623a589e03",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_15",
          "type": "item",
          "number": 29,
          "x": 1512.923,
          "y": 3033.911,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-a5347d1ff3a54503df",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_154",
          "type": "item",
          "number": 30,
          "x": 3161.6,
          "y": 2599.808,
          "itemTags": [
            "ID.Item.BoltCutters.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-ec02270c548ba1ce78",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_16",
          "type": "item",
          "number": 31,
          "x": 1794.926,
          "y": 1159.391,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-2a42106f482f0c9e74",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_17",
          "type": "item",
          "number": 32,
          "x": 2439.559,
          "y": 1129.58,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-4e5f13805555b79346",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_18",
          "type": "item",
          "number": 33,
          "x": 3193.496,
          "y": 796.829,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f55b3e160ec7bb2b92",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_19",
          "type": "item",
          "number": 34,
          "x": 2876.896,
          "y": 697.053,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-070b3137ecee7ab2b4",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_2",
          "type": "item",
          "number": 35,
          "x": 1654.471,
          "y": 2176.61,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-1ef16773865c057c75",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_20",
          "type": "item",
          "number": 36,
          "x": 2418.522,
          "y": 1865.637,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-095cbe29ce4264a5ec",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_21",
          "type": "item",
          "number": 37,
          "x": 2492.032,
          "y": 1832.192,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-87aecaa65ef4de5684",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_22",
          "type": "item",
          "number": 38,
          "x": 1564.544,
          "y": 2137.344,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-4e4132aad6f72a6a80",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_229",
          "type": "item",
          "number": 39,
          "x": 2389.632,
          "y": 2902.128,
          "itemTags": [
            "ID.Item.BoltCutters.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-5df75053e592b054ab",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_23",
          "type": "item",
          "number": 40,
          "x": 1628.82,
          "y": 2291.926,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-bfc5a4a45f4f20b732",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_234",
          "type": "item",
          "number": 41,
          "x": 2506.624,
          "y": 3155.2,
          "itemTags": [
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-9697b9ab2f0a5bed7c",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_24",
          "type": "item",
          "number": 42,
          "x": 1548.244,
          "y": 2207.054,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-3f422ce5f42de8bf79",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_241",
          "type": "item",
          "number": 43,
          "x": 1419.52,
          "y": 1097.472,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-8f0cb3eb0c71062d56",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_25",
          "type": "item",
          "number": 44,
          "x": 1576.704,
          "y": 2217.741,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f13066679b26be62fe",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_26",
          "type": "item",
          "number": 45,
          "x": 1557.163,
          "y": 2123.431,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-6ff98b0770a8124062",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_269",
          "type": "item",
          "number": 46,
          "x": 1413.451,
          "y": 1169.81,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-eca8d5799d9b9f9269",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_27",
          "type": "item",
          "number": 47,
          "x": 1619.84,
          "y": 2177.152,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-493b2a00738fde9dc5",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_28",
          "type": "item",
          "number": 48,
          "x": 1548.544,
          "y": 2230.4,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-d84daad5d8cabb6cd0",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_287",
          "type": "item",
          "number": 49,
          "x": 1619.982,
          "y": 2307.359,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-9cd91b37abc26c651d",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_289",
          "type": "item",
          "number": 50,
          "x": 1217.62,
          "y": 1389.908,
          "itemTags": [
            "ID.Item.CellarKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-3638d5e12fdf5cdebd",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_29",
          "type": "item",
          "number": 51,
          "x": 1626.453,
          "y": 2201.439,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-e0f4015571513f125c",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_290",
          "type": "item",
          "number": 52,
          "x": 1300.196,
          "y": 1106.781,
          "itemTags": [
            "ID.Item.CellarKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-ad37e441a7c9995ecc",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_297",
          "type": "item",
          "number": 53,
          "x": 1510.962,
          "y": 2877.895,
          "itemTags": [
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-0aabacb82953202629",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_3",
          "type": "item",
          "number": 54,
          "x": 1550.437,
          "y": 3408.136,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f425157ee92c839557",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_30",
          "type": "item",
          "number": 55,
          "x": 1496.955,
          "y": 3055.867,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-514719379caabcfd5d",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_31",
          "type": "item",
          "number": 56,
          "x": 1471.887,
          "y": 3038.848,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-9ed27ecb55303d1d17",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_32",
          "type": "item",
          "number": 57,
          "x": 1436.597,
          "y": 2924.168,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-888ace3201e7acb7f1",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_33",
          "type": "item",
          "number": 58,
          "x": 1402.296,
          "y": 2973.057,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-7228f9647179621369",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_34",
          "type": "item",
          "number": 59,
          "x": 1468.094,
          "y": 2959.852,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-047cabce78d7cff4a2",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_35",
          "type": "item",
          "number": 60,
          "x": 1422.694,
          "y": 2947.996,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-639b4e7c82dc7bfcc1",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_36",
          "type": "item",
          "number": 61,
          "x": 1423.36,
          "y": 2969.088,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-a062fcf9ac4c73c2e9",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_37",
          "type": "item",
          "number": 62,
          "x": 1420.058,
          "y": 2921.534,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-ce2725bfbd54f9e16e",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_38",
          "type": "item",
          "number": 63,
          "x": 1436.544,
          "y": 2921.472,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-de33bbb496f0e4d012",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_39",
          "type": "item",
          "number": 64,
          "x": 1478.707,
          "y": 2886.966,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-511c58db361ed5138c",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_40",
          "type": "item",
          "number": 65,
          "x": 1412.309,
          "y": 2944.944,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-906aec44ea30fadeb9",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_41",
          "type": "item",
          "number": 66,
          "x": 1556.864,
          "y": 2938.112,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-053de268e89cdbc2b5",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_42",
          "type": "item",
          "number": 67,
          "x": 1454.833,
          "y": 3029.902,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-277cdd1b455d3ea5e5",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_43",
          "type": "item",
          "number": 68,
          "x": 1514.624,
          "y": 3020.928,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-fc28099a1c6c4f435f",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_44",
          "type": "item",
          "number": 69,
          "x": 1535.488,
          "y": 3055.488,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-15c1dc7a074d920b6c",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_45",
          "type": "item",
          "number": 70,
          "x": 1455.232,
          "y": 3036.416,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-0955ce7c3b90301f76",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_46",
          "type": "item",
          "number": 71,
          "x": 1476.004,
          "y": 3030.146,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-4caae92fd351e6be68",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_47",
          "type": "item",
          "number": 72,
          "x": 1445.12,
          "y": 3068.416,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-317faac405a51ae2bd",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_48",
          "type": "item",
          "number": 73,
          "x": 2638.699,
          "y": 3042.572,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-6176512327b6cf1ef6",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_49",
          "type": "item",
          "number": 74,
          "x": 2616.142,
          "y": 3106.84,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-cdb560cfed2ca8f2dc",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_50",
          "type": "item",
          "number": 75,
          "x": 2630.004,
          "y": 3095.269,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-eba68e775a5c305399",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_51",
          "type": "item",
          "number": 76,
          "x": 3178.112,
          "y": 2374.272,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-521b0d1138e4b32cfb",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_52",
          "type": "item",
          "number": 77,
          "x": 3184.384,
          "y": 2379.52,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-c0deee40bc052f4e2b",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_53",
          "type": "item",
          "number": 78,
          "x": 3163.904,
          "y": 2337.28,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-0db9dd5ef0e49c8ca2",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_54",
          "type": "item",
          "number": 79,
          "x": 3170.944,
          "y": 2253.184,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-5df29ae4168b39e83d",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_56",
          "type": "item",
          "number": 80,
          "x": 3207.296,
          "y": 2245.12,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-15b6335130eee054d5",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_57",
          "type": "item",
          "number": 81,
          "x": 3162.977,
          "y": 2228.782,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-b698fc0b0495ceb9a8",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_58",
          "type": "item",
          "number": 82,
          "x": 3090.304,
          "y": 563.84,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-fc28dbee41feb740fa",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_59",
          "type": "item",
          "number": 83,
          "x": 3100.672,
          "y": 563.84,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-4f6137733b9dac8c8d",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_60",
          "type": "item",
          "number": 84,
          "x": 3124.608,
          "y": 622.336,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-c3f89d676d4b035c22",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_61",
          "type": "item",
          "number": 85,
          "x": 3050.274,
          "y": 524.095,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-0960f044468dc95e60",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_62",
          "type": "item",
          "number": 86,
          "x": 3018.819,
          "y": 625.671,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-9cb68996b1ee0bcabf",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_63",
          "type": "item",
          "number": 87,
          "x": 3092.989,
          "y": 588.54,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-066d2f4d0e9c202817",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_64",
          "type": "item",
          "number": 88,
          "x": 3140.952,
          "y": 615.159,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-19583b7bdfb2d2e4b5",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_65",
          "type": "item",
          "number": 89,
          "x": 2986.734,
          "y": 494.424,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-fe69593533c55cfc2f",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_66",
          "type": "item",
          "number": 90,
          "x": 2964.657,
          "y": 600.272,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-078911f6cf2f310211",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_67",
          "type": "item",
          "number": 91,
          "x": 3060.674,
          "y": 702.654,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-1c612352ed149df565",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_68",
          "type": "item",
          "number": 92,
          "x": 3148.416,
          "y": 614.137,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-40fc3c6916dea9ec9f",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_69",
          "type": "item",
          "number": 93,
          "x": 2484.321,
          "y": 1917.474,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-8be85e6d2321059265",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_7",
          "type": "item",
          "number": 94,
          "x": 2409.578,
          "y": 2954.421,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-a292f96a28811b7b69",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_70",
          "type": "item",
          "number": 95,
          "x": 2334.336,
          "y": 1929.344,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-875f2281c1d688987c",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_71",
          "type": "item",
          "number": 96,
          "x": 2520.704,
          "y": 1893.12,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-f32fa4e5ad34c766fe",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_72",
          "type": "item",
          "number": 97,
          "x": 2715.219,
          "y": 2653.125,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-db48dc25d633660f59",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_73",
          "type": "item",
          "number": 98,
          "x": 1610.103,
          "y": 3304.476,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-63523f0538b6b343e0",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_74",
          "type": "item",
          "number": 99,
          "x": 1305.054,
          "y": 1201.013,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-b1ecad9d79b1210eac",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_75",
          "type": "item",
          "number": 100,
          "x": 2937.225,
          "y": 3261.716,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-c6b8c02dedd71473be",
          "sourceId": "Map5:Map5_Gameplay.json:BP_ItemSpawner_C_88",
          "type": "item",
          "number": 101,
          "x": 2416.145,
          "y": 3446.864,
          "itemTags": [
            "ID.Item.Gascan.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-48305cac066613098f",
          "sourceId": "Map5:Map5_Gameplay_Spawners.json:BP_ItemSpawner_C_55",
          "type": "item",
          "number": 102,
          "x": 1413.451,
          "y": 1169.81,
          "itemTags": [
            "ID.Item.CellarKey.Default",
            "ID.Item.SedanKey.Default",
            "ID.Item.RepairKit.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-3a3232a5a20460b924",
          "sourceId": "Map5:Map5_Gameplay_Spawners.json:BP_ItemSpawner_C_77",
          "type": "item",
          "number": 103,
          "x": 1217.62,
          "y": 1389.908,
          "itemTags": [
            "ID.Item.CellarKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "source-eb1d728ae645da65d7",
          "sourceId": "Map5:Map5_Gameplay_Spawners.json:BP_ItemSpawner_C_78",
          "type": "item",
          "number": 104,
          "x": 1300.196,
          "y": 1106.781,
          "itemTags": [
            "ID.Item.CellarKey.Default"
          ],
          "sourceConfidence": "Source actor position projected; gameplay/visual spot checks still required",
          "role": "Possible escape-item source actor, randomized; not guaranteed"
        },
        {
          "id": "searchable-a725f0b081939b7e18",
          "sourceId": "Map5:Map5_Art.json:BP_CoupeSoftTop_01_Gameplay_C_0",
          "type": "searchable",
          "number": 1,
          "x": 1770.818,
          "y": 2905.047,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeSoftTop_01_Gameplay_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-4e6a180f317cccecc2",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_CabinetStandingTV_02_C_0",
          "type": "searchable",
          "number": 2,
          "x": 1482.363,
          "y": 2961.895,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinetStandingTV_02_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c99f00e0e745fbefae",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Desk_Office_NN_09b_C_0",
          "type": "searchable",
          "number": 3,
          "x": 1532.146,
          "y": 2303.072,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Desk_Office_NN_09b_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-6fa7d7c936e5b544c4",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Desk_Office_NN_09b_C_1",
          "type": "searchable",
          "number": 4,
          "x": 1495.514,
          "y": 3061.758,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Desk_Office_NN_09b_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-4308b85fa06a5c44f1",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_DresserVanity_01_C_0",
          "type": "searchable",
          "number": 5,
          "x": 1553.485,
          "y": 2256.97,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_DresserVanity_01_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-fbf819b38cd776c643",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_LaundryBasket_01_C_0",
          "type": "searchable",
          "number": 6,
          "x": 1456.433,
          "y": 2915.631,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_LaundryBasket_01_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-423cc8d31eb5a45b96",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_LaundryBasket_02_C_0",
          "type": "searchable",
          "number": 7,
          "x": 1445.387,
          "y": 3030.457,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_LaundryBasket_02_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-4a8e4891ecff9d41dd",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Search_Cabinet_NN_02a_C_0",
          "type": "searchable",
          "number": 8,
          "x": 1400.96,
          "y": 2930.432,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Cabinet_NN_02a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b641f81cb384e89b0a",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Search_Cabinet_NN_02a_C_1",
          "type": "searchable",
          "number": 9,
          "x": 1400.96,
          "y": 2977.792,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Cabinet_NN_02a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-1ac5f37802f1aab482",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Search_Cabinet_NN_17a_C_0",
          "type": "searchable",
          "number": 10,
          "x": 1539.945,
          "y": 2168.62,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Cabinet_NN_17a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-0b084953b746d25f12",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Search_CabinetSet_01b_C_0",
          "type": "searchable",
          "number": 11,
          "x": 1526.4,
          "y": 2206.464,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_01b_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d69e906de66cd7af2b",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Search_CabinetSet_01b_C_1",
          "type": "searchable",
          "number": 12,
          "x": 1526.4,
          "y": 2189.824,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_01b_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-2a7446c3c3e85f9c1f",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Search_CabinetSet_02j_C_0",
          "type": "searchable",
          "number": 13,
          "x": 3212.8,
          "y": 2302.848,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-33e562b22126544e6d",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Search_CabinetSet_02j_C_1",
          "type": "searchable",
          "number": 14,
          "x": 3157.632,
          "y": 2341.76,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-943e7148df99b1ddfc",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Search_CabinetSet_02j_C_2",
          "type": "searchable",
          "number": 15,
          "x": 3136.064,
          "y": 2398.72,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-7a11d6768193f7415a",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Search_Crate_01_C_0",
          "type": "searchable",
          "number": 16,
          "x": 1424.803,
          "y": 2883.648,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b03a21b84f2b25bd66",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Search_Crate_01_C_1",
          "type": "searchable",
          "number": 17,
          "x": 1578.257,
          "y": 2306.032,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5c3b2568628f0c2d59",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Search_Dresser_NN_11a_C_0",
          "type": "searchable",
          "number": 18,
          "x": 1672.971,
          "y": 2288.301,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-9ce933fa113ab6772e",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Search_Dresser_NN_11a_C_1",
          "type": "searchable",
          "number": 19,
          "x": 1639.447,
          "y": 2165.243,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-abeaf15cddd3108a6b",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Search_Dresser_NN_11a_C_2",
          "type": "searchable",
          "number": 20,
          "x": 1553.719,
          "y": 3046.728,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c6a5d7e5ccad351ec5",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Search_Sink_NN_02a_C_0",
          "type": "searchable",
          "number": 21,
          "x": 1454.718,
          "y": 3075.072,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Sink_NN_02a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-aa8a569a2271a319d2",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Search_Sink_NN_02a_C_1",
          "type": "searchable",
          "number": 22,
          "x": 1488.046,
          "y": 2944.574,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Sink_NN_02a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d13eb8c50ede6c7de9",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Search_Vanity_NN_01a_C_0",
          "type": "searchable",
          "number": 23,
          "x": 1438.682,
          "y": 2919.825,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Vanity_NN_01a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-443deb07466ff26a4d",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Search_Vanity_NN_01a_C_1",
          "type": "searchable",
          "number": 24,
          "x": 3125.959,
          "y": 2174.494,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Vanity_NN_01a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-53f02c585cab966648",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_ShelfStanding_02_C_0",
          "type": "searchable",
          "number": 25,
          "x": 1521.136,
          "y": 3022.202,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_ShelfStanding_02_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5cc608c5bce2de84d6",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Table_Bedside_01_C_0",
          "type": "searchable",
          "number": 26,
          "x": 1647.648,
          "y": 2256.274,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Table_Bedside_01_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ec871cef834a84beeb",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Table_Bedside_02_C_0",
          "type": "searchable",
          "number": 27,
          "x": 1532.792,
          "y": 3068.298,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Bedside_02_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-33e31d946d21be0583",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Table_Decor_01a_C_0",
          "type": "searchable",
          "number": 28,
          "x": 1646.733,
          "y": 2166.149,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Decor_01a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-1846430e2127b52489",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Table_Decor_01a_C_1",
          "type": "searchable",
          "number": 29,
          "x": 1502.855,
          "y": 3014.256,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Decor_01a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-54913e57398cfa057a",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Table_Set_04a_C_0",
          "type": "searchable",
          "number": 30,
          "x": 1533.564,
          "y": 2261.027,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-bcae78c486b9ee34e1",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Table_Set_04a_C_1",
          "type": "searchable",
          "number": 31,
          "x": 1620.173,
          "y": 2213.184,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5cf398432fbe7cd3dc",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Table_Set_04a_C_2",
          "type": "searchable",
          "number": 32,
          "x": 1526.85,
          "y": 2962.757,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-fdfca01a619ffd63d9",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Table_Set_04a_C_3",
          "type": "searchable",
          "number": 33,
          "x": 3064.96,
          "y": 2182.272,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-1a731b6dbc4fb8459c",
          "sourceId": "Map5:Map5_Art.json:BP_Lootable_Table_Set_04a_C_4",
          "type": "searchable",
          "number": 34,
          "x": 3064.96,
          "y": 2218.112,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-623399682c8b243037",
          "sourceId": "Map5:Map5_Art.json:StaticMeshActor_1162",
          "type": "searchable",
          "number": 35,
          "x": 2786.253,
          "y": 1947.163,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-43e5ccbf525e877f1f",
          "sourceId": "Map5:Map5_Art.json:StaticMeshActor_2472",
          "type": "searchable",
          "number": 36,
          "x": 1538.411,
          "y": 3332.694,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-18a88caed673cc1594",
          "sourceId": "Map5:Map5_Art.json:StaticMeshActor_2832",
          "type": "searchable",
          "number": 37,
          "x": 3095.295,
          "y": 2239.926,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-461b4d7a35766872ac",
          "sourceId": "Map5:Map5_Art.json:StaticMeshActor_2837",
          "type": "searchable",
          "number": 38,
          "x": 3091.2,
          "y": 2274.32,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Sink_NN_02a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ef6052b5e6418c2d6e",
          "sourceId": "Map5:Map5_Art.json:StaticMeshActor_2838",
          "type": "searchable",
          "number": 39,
          "x": 3183.109,
          "y": 2195.806,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Decor_01a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-8e611c00026534a166",
          "sourceId": "Map5:Map5_Art.json:StaticMeshActor_2839",
          "type": "searchable",
          "number": 40,
          "x": 3157.533,
          "y": 2285.094,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_TV_Stand_NN_03a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c89481a8913ff9ca00",
          "sourceId": "Map5:Map5_Art.json:StaticMeshActor_2849",
          "type": "searchable",
          "number": 41,
          "x": 3212.672,
          "y": 2328.704,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02c_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c461ade58caf90f597",
          "sourceId": "Map5:Map5_Art.json:StaticMeshActor_2850",
          "type": "searchable",
          "number": 42,
          "x": 3147.268,
          "y": 2359.39,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Cabinet_NN_02a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-65fac20fda742b7ce3",
          "sourceId": "Map5:Map5_Art.json:StaticMeshActor_2851",
          "type": "searchable",
          "number": 43,
          "x": 3045.274,
          "y": 2304.043,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-a61c8c079695bcbbf4",
          "sourceId": "Map5:Map5_Art.json:StaticMeshActor_2852",
          "type": "searchable",
          "number": 44,
          "x": 3069.97,
          "y": 2355.221,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_Dresser_NN_09a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ea0fa2c139461ce4ba",
          "sourceId": "Map5:Map5_Art.json:StaticMeshActor_3757",
          "type": "searchable",
          "number": 45,
          "x": 1557.12,
          "y": 2980.609,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Decor_01a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-9ce2cd94e61bb9d61a",
          "sourceId": "Map5:Map5_Art.json:StaticMeshActor_865",
          "type": "searchable",
          "number": 46,
          "x": 1583.689,
          "y": 2209.956,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_CabinentDrawer_04_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-57d5a7a09ea7f96297",
          "sourceId": "Map5:Map5_Art.json:StaticMeshActor_973",
          "type": "searchable",
          "number": 47,
          "x": 1583.983,
          "y": 2238.023,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_TV_Stand_NN_03a_C",
          "sourceLevel": "Map5_Art.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-c916fba01ba31cad60",
          "sourceId": "Map5:Map5_Art_GasStation.json:StaticMeshActor_278",
          "type": "searchable",
          "number": 48,
          "x": 2457.74,
          "y": 1909.517,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map5_Art_GasStation.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e96b731f8717ec2221",
          "sourceId": "Map5:Map5_Art_Market.json:BP_BusSchool_01_STATIC_C_1",
          "type": "searchable",
          "number": 49,
          "x": 2484.31,
          "y": 1575.932,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_BusSchool_01_Gameplay_C",
          "sourceLevel": "Map5_Art_Market.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d6162aec0e84bf93ba",
          "sourceId": "Map5:Map5_Art_Market.json:BP_Lootable_CabinentDrawer_04_C_0",
          "type": "searchable",
          "number": 50,
          "x": 2984.666,
          "y": 499.548,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_CabinentDrawer_04_C",
          "sourceLevel": "Map5_Art_Market.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-8a427d2829d9a2fdd2",
          "sourceId": "Map5:Map5_Art_Market.json:BP_Lootable_CabinentDrawer_04_C_1",
          "type": "searchable",
          "number": 51,
          "x": 2984.666,
          "y": 543.797,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_CabinentDrawer_04_C",
          "sourceLevel": "Map5_Art_Market.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-30237f3b9bc6a06d36",
          "sourceId": "Map5:Map5_Art_Market.json:BP_Lootable_CabinentStanding_05_C_0",
          "type": "searchable",
          "number": 52,
          "x": 2980.565,
          "y": 648.743,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinentStanding_05_C",
          "sourceLevel": "Map5_Art_Market.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-127128ee0cc17010c8",
          "sourceId": "Map5:Map5_Art_Market.json:BP_Lootable_CabinentStanding_05_C_1",
          "type": "searchable",
          "number": 53,
          "x": 2980.565,
          "y": 635.439,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinentStanding_05_C",
          "sourceLevel": "Map5_Art_Market.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5e14ca73f67a0a4f40",
          "sourceId": "Map5:Map5_Art_Market.json:BP_Lootable_CabinentStanding_05_C_2",
          "type": "searchable",
          "number": 54,
          "x": 2980.565,
          "y": 622.156,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinentStanding_05_C",
          "sourceLevel": "Map5_Art_Market.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f9af59eb6336edbd47",
          "sourceId": "Map5:Map5_Art_Market.json:BP_Lootable_DresserVanity_01_C_0",
          "type": "searchable",
          "number": 55,
          "x": 3093.174,
          "y": 499.584,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_DresserVanity_01_C",
          "sourceLevel": "Map5_Art_Market.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ebcb4413ce22291cec",
          "sourceId": "Map5:Map5_Art_Market.json:BP_Lootable_Search_Dresser_NN_11a_C_0",
          "type": "searchable",
          "number": 56,
          "x": 3048.646,
          "y": 525.541,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "Map5_Art_Market.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-22b7a11a4b7e935c11",
          "sourceId": "Map5:Map5_Art_Market.json:BP_Lootable_ShelfStanding_02_C_0",
          "type": "searchable",
          "number": 57,
          "x": 3020.057,
          "y": 565.035,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_ShelfStanding_02_C",
          "sourceLevel": "Map5_Art_Market.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-0c1d5f70d3c1065693",
          "sourceId": "Map5:Map5_Art_Market.json:BP_Lootable_ShelfStanding_02_C_1",
          "type": "searchable",
          "number": 58,
          "x": 3032.884,
          "y": 565.035,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_ShelfStanding_02_C",
          "sourceLevel": "Map5_Art_Market.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b570330c0af79556a8",
          "sourceId": "Map5:Map5_Art_Market.json:BP_Lootable_Table_Bedside_02_C_0",
          "type": "searchable",
          "number": 59,
          "x": 2972.271,
          "y": 593.336,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Bedside_02_C",
          "sourceLevel": "Map5_Art_Market.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-0c296758d8e51d38c9",
          "sourceId": "Map5:Map5_Art_Market.json:BP_Lootable_Table_Decor_01a_C_0",
          "type": "searchable",
          "number": 60,
          "x": 2914.684,
          "y": 594.517,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Decor_01a_C",
          "sourceLevel": "Map5_Art_Market.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-1fce37e92b142061b7",
          "sourceId": "Map5:Map5_Art_Market.json:BP_Lootable_Table_Set_04a_C_0",
          "type": "searchable",
          "number": 61,
          "x": 3072.447,
          "y": 544.653,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "Map5_Art_Market.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b738796f84c88c2c26",
          "sourceId": "Map5:Map5_Art_Market.json:BP_TowTruck_01_C_2",
          "type": "searchable",
          "number": 62,
          "x": 3316.301,
          "y": 1681.304,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeSoftTop_01_Gameplay_C",
          "sourceLevel": "Map5_Art_Market.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-412492a6403dbf3854",
          "sourceId": "Map5:Map5_Art_Market.json:StaticMeshActor_1420",
          "type": "searchable",
          "number": 63,
          "x": 2416.845,
          "y": 1094.683,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map5_Art_Market.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-49c8679bc7b3843965",
          "sourceId": "Map5:Map5_Art_Market.json:StaticMeshActor_2892",
          "type": "searchable",
          "number": 64,
          "x": 3134.106,
          "y": 792.182,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map5_Art_Market.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-a1e51e002fe9cd8ff0",
          "sourceId": "Map5:Map5_Art_Market.json:StaticMeshActor_482",
          "type": "searchable",
          "number": 65,
          "x": 3089.548,
          "y": 589.201,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Sink_NN_05a_C",
          "sourceLevel": "Map5_Art_Market.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-dd6d4bbbb16d3538fa",
          "sourceId": "Map5:Map5_Art_TrailerPark.json:BP_CoupeHatchback_01_Gameplay_C_0",
          "type": "searchable",
          "number": 66,
          "x": 3208.728,
          "y": 3189.231,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeHatchback_01_Gameplay_C",
          "sourceLevel": "Map5_Art_TrailerPark.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-06e8e3810440b07d2f",
          "sourceId": "Map5:Map5_Art_TrailerPark.json:BP_CoupeHatchback_01_Gameplay_C_1",
          "type": "searchable",
          "number": 67,
          "x": 2473.072,
          "y": 2830.277,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeHatchback_01_Gameplay_C",
          "sourceLevel": "Map5_Art_TrailerPark.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-51bcfd6b0bddaf2eb8",
          "sourceId": "Map5:Map5_Art_TrailerPark.json:BP_CoupeSoftTop_01_Gameplay_C_0",
          "type": "searchable",
          "number": 68,
          "x": 3201.925,
          "y": 2933.467,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeSoftTop_01_Gameplay_C",
          "sourceLevel": "Map5_Art_TrailerPark.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-6c254b9c2e6e75d71a",
          "sourceId": "Map5:Map5_Art_TrailerPark.json:BP_CoupeSoftTop_01_Gameplay_C_1",
          "type": "searchable",
          "number": 69,
          "x": 2530.851,
          "y": 2879.94,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeSoftTop_01_Gameplay_C",
          "sourceLevel": "Map5_Art_TrailerPark.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-10f38fafeecc4ce956",
          "sourceId": "Map5:Map5_Art_TrailerPark.json:BP_Lootable_CabinetStandingTV_01_C_0",
          "type": "searchable",
          "number": 70,
          "x": 2652.201,
          "y": 2756.243,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_CabinetStandingTV_01_C",
          "sourceLevel": "Map5_Art_TrailerPark.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ca5e05f31ad0286f0c",
          "sourceId": "Map5:Map5_Art_TrailerPark.json:BP_Lootable_Dresser_Modern_02c_C_0",
          "type": "searchable",
          "number": 71,
          "x": 2965.125,
          "y": 2728.722,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "Map5_Art_TrailerPark.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e58204438d51c4c674",
          "sourceId": "Map5:Map5_Art_TrailerPark.json:BP_Lootable_Dresser_Modern_02c_C_1",
          "type": "searchable",
          "number": 72,
          "x": 2768.898,
          "y": 2688.88,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Dresser_NN_11a_C",
          "sourceLevel": "Map5_Art_TrailerPark.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-064b6a774f1ab0a3bc",
          "sourceId": "Map5:Map5_Art_TrailerPark.json:BP_Lootable_LunchBox_C_0",
          "type": "searchable",
          "number": 73,
          "x": 2669.04,
          "y": 3050.383,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_LunchBox_C",
          "sourceLevel": "Map5_Art_TrailerPark.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-82cba627405d76b29f",
          "sourceId": "Map5:Map5_Art_TrailerPark.json:BP_Lootable_Search_Desk_NN_02a_C_1",
          "type": "searchable",
          "number": 74,
          "x": 2611.128,
          "y": 3113.578,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Desk_NN_02a_C",
          "sourceLevel": "Map5_Art_TrailerPark.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-39b9060632cd99b112",
          "sourceId": "Map5:Map5_Art_TrailerPark.json:BP_SportsOld_01_C_0",
          "type": "searchable",
          "number": 75,
          "x": 2902.097,
          "y": 3383.215,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_WagonClassic_01_Gameplay_C",
          "sourceLevel": "Map5_Art_TrailerPark.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b548da5079b9e37048",
          "sourceId": "Map5:Map5_Art_TrailerPark.json:StaticMeshActor_1299",
          "type": "searchable",
          "number": 76,
          "x": 2951.168,
          "y": 2816.256,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Decor_01a_C",
          "sourceLevel": "Map5_Art_TrailerPark.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ebc9ca6bc3ddcfa767",
          "sourceId": "Map5:Map5_Art_TrailerPark.json:StaticMeshActor_1301",
          "type": "searchable",
          "number": 77,
          "x": 3004.198,
          "y": 2782.354,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Sink_NN_02a_C",
          "sourceLevel": "Map5_Art_TrailerPark.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-9d777e61eb748a2538",
          "sourceId": "Map5:Map5_Art_TrailerPark.json:StaticMeshActor_1302",
          "type": "searchable",
          "number": 78,
          "x": 3009.608,
          "y": 2850.0,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_01b_C",
          "sourceLevel": "Map5_Art_TrailerPark.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-7d9547f9c643da0984",
          "sourceId": "Map5:Map5_Art_TrailerPark.json:StaticMeshActor_1303",
          "type": "searchable",
          "number": 79,
          "x": 3010.084,
          "y": 2851.611,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "Map5_Art_TrailerPark.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5b5beda86995467be6",
          "sourceId": "Map5:Map5_Art_TrailerPark.json:StaticMeshActor_1485",
          "type": "searchable",
          "number": 80,
          "x": 2547.889,
          "y": 3106.748,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinentStanding_05_C",
          "sourceLevel": "Map5_Art_TrailerPark.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-3c58f0237b253ce407",
          "sourceId": "Map5:Map5_Art_TrailerPark.json:StaticMeshActor_376",
          "type": "searchable",
          "number": 81,
          "x": 3152.129,
          "y": 3287.379,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "Map5_Art_TrailerPark.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b756f9df7b6af4ca2f",
          "sourceId": "Map5:Map5_Art_TrailerPark.json:StaticMeshActor_82",
          "type": "searchable",
          "number": 82,
          "x": 3115.858,
          "y": 3258.725,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Vanity_NN_01a_C",
          "sourceLevel": "Map5_Art_TrailerPark.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-3a6258f5a1810ae703",
          "sourceId": "Map5:Map5_Gameplay.json:BP_CoupeOld_02_C_0",
          "type": "searchable",
          "number": 83,
          "x": 2290.109,
          "y": 2042.608,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeOld_02_Gameplay_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f9406a07bca476887d",
          "sourceId": "Map5:Map5_Gameplay.json:BP_CoupeOld_02_C_1",
          "type": "searchable",
          "number": 84,
          "x": 2573.306,
          "y": 1914.277,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeHatchback_01_Gameplay_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f87203bfa7b4ba01e9",
          "sourceId": "Map5:Map5_Gameplay.json:BP_CoupeSoftTop_01_C_0",
          "type": "searchable",
          "number": 85,
          "x": 2186.287,
          "y": 1842.274,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeSoftTop_01_Gameplay_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f7a04697a22bbdde36",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_CabinentStanding_05_C_1",
          "type": "searchable",
          "number": 86,
          "x": 2710.773,
          "y": 2688.465,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_CabinentStanding_05_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e4085daa46282b3fc1",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Search_CabinetSet_01b_C_1",
          "type": "searchable",
          "number": 87,
          "x": 2729.893,
          "y": 2755.315,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_01b_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-977ce3e8d4a7c52842",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Search_CabinetSet_01b_C_2",
          "type": "searchable",
          "number": 88,
          "x": 2596.007,
          "y": 3048.773,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_01b_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e6187a840815e20253",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Search_CabinetSet_02j_C_0",
          "type": "searchable",
          "number": 89,
          "x": 1473.92,
          "y": 3075.072,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-885020fdb15db46686",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Search_CabinetSet_02j_C_1",
          "type": "searchable",
          "number": 90,
          "x": 2720.282,
          "y": 2731.511,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d2b43f313d0b613f7f",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Search_CabinetSet_02j_C_2",
          "type": "searchable",
          "number": 91,
          "x": 2596.894,
          "y": 3046.995,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_CabinetSet_02j_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-8cdfbc3952605bc6df",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Search_CabinetSet_NN_02d_C_1",
          "type": "searchable",
          "number": 92,
          "x": 1490.56,
          "y": 3054.592,
          "searchKind": "furniture",
          "componentCount": 2,
          "actorType": "BP_Lootable_Search_CabinetSet_NN_02d_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-302e2f1cf025853b6f",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Search_Crate_01_C_0",
          "type": "searchable",
          "number": 93,
          "x": 3154.797,
          "y": 859.606,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-feddf12d9eb868d4fe",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Search_Crate_01_C_1",
          "type": "searchable",
          "number": 94,
          "x": 3457.115,
          "y": 1068.731,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-7f9be5effa12518c47",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Search_Crate_01_C_10",
          "type": "searchable",
          "number": 95,
          "x": 1166.686,
          "y": 3430.695,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-cf78e3ea118738fb58",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Search_Crate_01_C_12",
          "type": "searchable",
          "number": 96,
          "x": 3362.855,
          "y": 3471.179,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-453d8aa1d5dcff95ab",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Search_Crate_01_C_2",
          "type": "searchable",
          "number": 97,
          "x": 2338.008,
          "y": 758.12,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5aef2bd12cf469a111",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Search_Crate_01_C_3",
          "type": "searchable",
          "number": 98,
          "x": 2503.065,
          "y": 961.953,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-1e12fd61ef2f52c820",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Search_Crate_01_C_4",
          "type": "searchable",
          "number": 99,
          "x": 1317.758,
          "y": 1096.002,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-23048c79f22d3447c0",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Search_Crate_01_C_5",
          "type": "searchable",
          "number": 100,
          "x": 1334.615,
          "y": 1330.114,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-48bd4be03e2eaa0bb4",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Search_Crate_01_C_6",
          "type": "searchable",
          "number": 101,
          "x": 3162.119,
          "y": 2890.887,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-8a52bd536c8e43833f",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Search_Crate_01_C_7",
          "type": "searchable",
          "number": 102,
          "x": 1239.913,
          "y": 2882.012,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-30045326308a464d5c",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Search_Crate_01_C_8",
          "type": "searchable",
          "number": 103,
          "x": 2843.855,
          "y": 1947.007,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-1d1d5eae56ae3f28c0",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Table_Decor_01a_C_0",
          "type": "searchable",
          "number": 104,
          "x": 1530.88,
          "y": 2916.352,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Decor_01a_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-df3b9f37d03333bd32",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Table_Decor_01a_C_1",
          "type": "searchable",
          "number": 105,
          "x": 2385.079,
          "y": 2906.176,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Decor_01a_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b1e4c0ba91a9c8bbf2",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_Table_Set_04a_C_1",
          "type": "searchable",
          "number": 106,
          "x": 2569.668,
          "y": 3156.783,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Table_Set_04a_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-1d2f53a3edd7ca5080",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_ToolCart_01b_C_0",
          "type": "searchable",
          "number": 107,
          "x": 1255.034,
          "y": 1328.775,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-bb52af46a984665c9b",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_ToolCart_01b_C_1",
          "type": "searchable",
          "number": 108,
          "x": 1272.252,
          "y": 2040.431,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5691a4ffdf7f7523ba",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_ToolCart_01b_C_2",
          "type": "searchable",
          "number": 109,
          "x": 1700.897,
          "y": 1775.718,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-15661ef9a31296e062",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_ToolCart_01b_C_3",
          "type": "searchable",
          "number": 110,
          "x": 1255.034,
          "y": 1328.775,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-cb76354d913c11de57",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_ToolCart_01b_C_4",
          "type": "searchable",
          "number": 111,
          "x": 1272.252,
          "y": 2040.431,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-db7ff91ddc0fd13f7d",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_ToolCart_01b_C_5",
          "type": "searchable",
          "number": 112,
          "x": 1700.897,
          "y": 1775.718,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f77d11ddbd177585d2",
          "sourceId": "Map5:Map5_Gameplay.json:BP_Lootable_ToolCart_01b_C_7",
          "type": "searchable",
          "number": 113,
          "x": 1446.177,
          "y": 1807.301,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-aaee61274a594b0127",
          "sourceId": "Map5:Map5_Gameplay.json:BP_TruckOld_01_C_0",
          "type": "searchable",
          "number": 114,
          "x": 1496.474,
          "y": 1094.654,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeHatchback_01_Gameplay_C",
          "sourceLevel": "Map5_Gameplay.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-35e5ec6c7adb1e7382",
          "sourceId": "Map5:Map5_Gameplay_Spawners.json:BP_Lootable_Search_Crate_01_C_1",
          "type": "searchable",
          "number": 115,
          "x": 3457.115,
          "y": 1068.731,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Gameplay_Spawners.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-cb62d6cef21e8f5b85",
          "sourceId": "Map5:Map5_Gameplay_Spawners.json:BP_Lootable_Search_Crate_01_C_11",
          "type": "searchable",
          "number": 116,
          "x": 3162.119,
          "y": 2890.887,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Gameplay_Spawners.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-ed75f5091ab17631cb",
          "sourceId": "Map5:Map5_Gameplay_Spawners.json:BP_Lootable_Search_Crate_01_C_13",
          "type": "searchable",
          "number": 117,
          "x": 1239.913,
          "y": 2882.012,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Gameplay_Spawners.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-f23d5c416cadc6629f",
          "sourceId": "Map5:Map5_Gameplay_Spawners.json:BP_Lootable_Search_Crate_01_C_15",
          "type": "searchable",
          "number": 118,
          "x": 2843.855,
          "y": 1947.007,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Gameplay_Spawners.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d1d1cafc03f1b85f9e",
          "sourceId": "Map5:Map5_Gameplay_Spawners.json:BP_Lootable_Search_Crate_01_C_3",
          "type": "searchable",
          "number": 119,
          "x": 2338.008,
          "y": 758.12,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Gameplay_Spawners.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-87604195793ac32b58",
          "sourceId": "Map5:Map5_Gameplay_Spawners.json:BP_Lootable_Search_Crate_01_C_5",
          "type": "searchable",
          "number": 120,
          "x": 2503.065,
          "y": 961.953,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Gameplay_Spawners.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-0a3e8b436265e4c563",
          "sourceId": "Map5:Map5_Gameplay_Spawners.json:BP_Lootable_Search_Crate_01_C_7",
          "type": "searchable",
          "number": 121,
          "x": 1317.758,
          "y": 1096.002,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Gameplay_Spawners.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-5a494e0e9d27d377ec",
          "sourceId": "Map5:Map5_Gameplay_Spawners.json:BP_Lootable_Search_Crate_01_C_9",
          "type": "searchable",
          "number": 122,
          "x": 1334.615,
          "y": 1330.114,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Crate_01_C",
          "sourceLevel": "Map5_Gameplay_Spawners.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-395672d9c0c85b4029",
          "sourceId": "Map5:Map5_Gameplay_Spawners.json:BP_Lootable_ToolCart_01b_C_3",
          "type": "searchable",
          "number": 123,
          "x": 1255.034,
          "y": 1328.775,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map5_Gameplay_Spawners.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-b854746c0272e912ac",
          "sourceId": "Map5:Map5_Gameplay_Spawners.json:BP_Lootable_ToolCart_01b_C_5",
          "type": "searchable",
          "number": 124,
          "x": 1272.252,
          "y": 2040.431,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map5_Gameplay_Spawners.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-7ea26e0041ae986b67",
          "sourceId": "Map5:Map5_Gameplay_Spawners.json:BP_Lootable_ToolCart_01b_C_7",
          "type": "searchable",
          "number": 125,
          "x": 1700.897,
          "y": 1775.718,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_Lootable_ToolCart_01b_C",
          "sourceLevel": "Map5_Gameplay_Spawners.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e8c43cdf5476f3b56c",
          "sourceId": "Map5:Map5_Lighting_PowerGrid.json:BP_Lootable_Table_Decor_01a_C_1",
          "type": "searchable",
          "number": 126,
          "x": 1673.6,
          "y": 2205.056,
          "searchKind": "furniture",
          "componentCount": 1,
          "actorType": "BP_Lootable_Search_Cabinet_NN_02a_C",
          "sourceLevel": "Map5_Lighting_PowerGrid.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-d14edf2cd31cdadee8",
          "sourceId": "Map5:Map5_Roads.json:BP_CoupeOld_01_C_0",
          "type": "searchable",
          "number": 127,
          "x": 2407.842,
          "y": 1803.462,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_CoupeSoftTop_01_Gameplay_C",
          "sourceLevel": "Map5_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-a464915b60e5c0d8c4",
          "sourceId": "Map5:Map5_Roads.json:BP_SportsOld_01_C_0",
          "type": "searchable",
          "number": 128,
          "x": 2006.636,
          "y": 2162.547,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_WagonClassic_01_Gameplay_C",
          "sourceLevel": "Map5_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-4b437af68848d49019",
          "sourceId": "Map5:Map5_Roads.json:BP_TruckOld_01_C_2",
          "type": "searchable",
          "number": 129,
          "x": 1599.714,
          "y": 1354.151,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_WagonClassic_01_Gameplay_C",
          "sourceLevel": "Map5_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-e2a50218d250d3991e",
          "sourceId": "Map5:Map5_Roads.json:BP_VanUtility_01_Gameplay_C_0",
          "type": "searchable",
          "number": 130,
          "x": 1737.316,
          "y": 1452.552,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_VanUtility_01_Gameplay_C",
          "sourceLevel": "Map5_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        },
        {
          "id": "searchable-73d66fd2b961783801",
          "sourceId": "Map5:Map5_Roads.json:BP_WagonOld_02_C_0",
          "type": "searchable",
          "number": 131,
          "x": 2513.4,
          "y": 2087.039,
          "searchKind": "vehicle",
          "componentCount": 1,
          "actorType": "BP_WagonOld_02_Gameplay_C",
          "sourceLevel": "Map5_Roads.json",
          "sourceConfidence": "FModel owner/root projected; no known item-specific loot table or match activation",
          "role": "Searchable source with UNKNOWN loot, not a confirmed escape-supply location"
        }
      ]
    }
  ],
  "itemTypes": {
    "ID.Item.SedanKey.Default": "Sedan Key",
    "ID.Item.Gascan.Default": "Gas Can",
    "ID.Item.RepairKit.Default": "Repair Kit",
    "ID.Item.CellarKey.Default": "Cellar Key (game-file tag)",
    "ID.Item.BoltCutters.Default": "Bolt Cutters"
  }
};
