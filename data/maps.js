/* Source-researched map actors and marker layers; source confidence noted in records. */
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
        "paper": -84.3
      },
      "registration": {
        "actorToRealisticX": 175.94,
        "paperRelativeX": -84.3,
        "source": "CP07+CP08 feature registration; not live-game certified"
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
        "paper": -88.4
      },
      "registration": {
        "actorToRealisticX": 183.85,
        "paperRelativeX": -88.4,
        "source": "CP07+CP08 feature registration; not live-game certified"
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
        "paper": -84.1
      },
      "registration": {
        "actorToRealisticX": 175.79,
        "paperRelativeX": -84.1,
        "source": "CP07+CP08 feature registration; not live-game certified"
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
        "paper": -84.3
      },
      "registration": {
        "actorToRealisticX": 175.9,
        "paperRelativeX": -84.3,
        "source": "CP07+CP08 feature registration; not live-game certified"
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
        "paper": -84.7
      },
      "registration": {
        "actorToRealisticX": 176.0,
        "paperRelativeX": -84.7,
        "source": "CP07+CP08 feature registration; not live-game certified"
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
