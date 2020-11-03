exports.seed = function (knex) {
  return knex("ships")
    .truncate()
    .then(function () {
      return knex("ships").insert([
        {
          ship_id: "1",
          chassis_id: "1",
          name: "Aurora ES"
        },
        {
          ship_id: "3",
          chassis_id: "1",
          name: "Aurora LX"
        },
        {
          ship_id: "4",
          chassis_id: "1",
          name: "Aurora MR"
        },
        {
          ship_id: "5",
          chassis_id: "1",
          name: "Aurora CL"
        },
        {
          ship_id: "6",
          chassis_id: "1",
          name: "Aurora LN"
        },
        {
          ship_id: "7",
          chassis_id: "2",
          name: "300i"
        },
        {
          ship_id: "8",
          chassis_id: "2",
          name: "315p"
        },
        {
          ship_id: "9",
          chassis_id: "2",
          name: "325a"
        },
        {
          ship_id: "10",
          chassis_id: "2",
          name: "350r"
        },
        {
          ship_id: "11",
          chassis_id: "3",
          name: "F7C Hornet"
        },
        {
          ship_id: "122",
          chassis_id: "3",
          name: "F7C Hornet Wildfire"
        },
        {
          ship_id: "13",
          chassis_id: "3",
          name: "F7C-S Hornet Ghost"
        },
        {
          ship_id: "14",
          chassis_id: "3",
          name: "F7C-R Hornet Tracker"
        },
        {
          ship_id: "15",
          chassis_id: "3",
          name: "F7C-M Super Hornet"
        },
        {
          ship_id: "37",
          chassis_id: "3",
          name: "F7A Hornet"
        },
        {
          ship_id: "177",
          chassis_id: "3",
          name: "F7C-M Super Hornet Heartseeker"
        },
        {
          ship_id: "47",
          chassis_id: "4",
          name: "Constellation Aquila"
        },
        {
          ship_id: "45",
          chassis_id: "4",
          name: "Constellation Andromeda"
        },
        {
          ship_id: "46",
          chassis_id: "4",
          name: "Constellation Taurus"
        },
        {
          ship_id: "49",
          chassis_id: "4",
          name: "Constellation Phoenix"
        },
        {
          ship_id: "156",
          chassis_id: "4",
          name: "Constellation Phoenix Emerald"
        },
        {
          ship_id: "16",
          chassis_id: "5",
          name: "Freelancer"
        },
        {
          ship_id: "31",
          chassis_id: "5",
          name: "Freelancer DUR"
        },
        {
          ship_id: "32",
          chassis_id: "5",
          name: "Freelancer MAX"
        },
        {
          ship_id: "33",
          chassis_id: "5",
          name: "Freelancer MIS"
        },
        {
          ship_id: "56",
          chassis_id: "6",
          name: "Cutlass Black"
        },
        {
          ship_id: "57",
          chassis_id: "6",
          name: "Cutlass Red"
        },
        {
          ship_id: "58",
          chassis_id: "6",
          name: "Cutlass Blue"
        },
        {
          ship_id: "193",
          chassis_id: "6",
          name: "Cutlass Black Best In Show Edition"
        },
        {
          ship_id: "100",
          chassis_id: "7",
          name: "Avenger Stalker"
        },
        {
          ship_id: "124",
          chassis_id: "7",
          name: "Avenger Titan Renegade"
        },
        {
          ship_id: "101",
          chassis_id: "7",
          name: "Avenger Warlock"
        },
        {
          ship_id: "102",
          chassis_id: "7",
          name: "Avenger Titan"
        },
        {
          ship_id: "64",
          chassis_id: "8",
          name: "Gladiator"
        },
        {
          ship_id: "22",
          chassis_id: "9",
          name: "M50"
        },
        {
          ship_id: "88",
          chassis_id: "10",
          name: "Starfarer"
        },
        {
          ship_id: "89",
          chassis_id: "10",
          name: "Starfarer Gemini"
        },
        {
          ship_id: "24",
          chassis_id: "11",
          name: "Caterpillar"
        },
        {
          ship_id: "125",
          chassis_id: "11",
          name: "Caterpillar Pirate Edition"
        },
        {
          ship_id: "194",
          chassis_id: "11",
          name: "Caterpillar Best In Show Edition"
        },
        {
          ship_id: "72",
          chassis_id: "12",
          name: "Retaliator Bomber"
        },
        {
          ship_id: "99",
          chassis_id: "12",
          name: "Retaliator Base"
        },
        {
          ship_id: "26",
          chassis_id: "13",
          name: "Scythe"
        },
        {
          ship_id: "27",
          chassis_id: "14",
          name: "Idris-M"
        },
        {
          ship_id: "28",
          chassis_id: "14",
          name: "Idris-P"
        },
        {
          ship_id: "92",
          chassis_id: "15",
          name: "P-52 Merlin"
        },
        {
          ship_id: "65",
          chassis_id: "16",
          name: "Mustang Alpha"
        },
        {
          ship_id: "66",
          chassis_id: "16",
          name: "Mustang Beta"
        },
        {
          ship_id: "67",
          chassis_id: "16",
          name: "Mustang Gamma"
        },
        {
          ship_id: "69",
          chassis_id: "16",
          name: "Mustang Delta"
        },
        {
          ship_id: "70",
          chassis_id: "16",
          name: "Mustang Omega"
        },
        {
          ship_id: "172",
          chassis_id: "16",
          name: "Mustang Alpha Vindicator"
        },
        {
          ship_id: "59",
          chassis_id: "17",
          name: "Redeemer"
        },
        {
          ship_id: "60",
          chassis_id: "18",
          name: "Gladius"
        },
        {
          ship_id: "121",
          chassis_id: "18",
          name: "Gladius Valiant"
        },
        {
          ship_id: "188",
          chassis_id: "18",
          name: "Pirate Gladius"
        },
        {
          ship_id: "35",
          chassis_id: "19",
          name: "Khartu-Al"
        },
        {
          ship_id: "36",
          chassis_id: "20",
          name: "Merchantman"
        },
        {
          ship_id: "55",
          chassis_id: "21",
          name: "890 Jump"
        },
        {
          ship_id: "62",
          chassis_id: "22",
          name: "Carrack"
        },
        {
          ship_id: "204",
          chassis_id: "22",
          name: "Carrack w/C8X"
        },
        {
          ship_id: "205",
          chassis_id: "22",
          name: "Carrack Expedition w/C8X"
        },
        {
          ship_id: "206",
          chassis_id: "22",
          name: "Carrack Expedition"
        },
        {
          ship_id: "61",
          chassis_id: "23",
          name: "Herald"
        },
        {
          ship_id: "41",
          chassis_id: "24",
          name: "Hull C"
        },
        {
          ship_id: "84",
          chassis_id: "24",
          name: "Hull A"
        },
        {
          ship_id: "85",
          chassis_id: "24",
          name: "Hull B"
        },
        {
          ship_id: "86",
          chassis_id: "24",
          name: "Hull D"
        },
        {
          ship_id: "87",
          chassis_id: "24",
          name: "Hull E"
        },
        {
          ship_id: "71",
          chassis_id: "25",
          name: "Orion"
        },
        {
          ship_id: "51",
          chassis_id: "26",
          name: "Reclaimer"
        },
        {
          ship_id: "196",
          chassis_id: "26",
          name: "Reclaimer Best In Show Edition"
        },
        {
          ship_id: "63",
          chassis_id: "28",
          name: "Javelin"
        },
        {
          ship_id: "75",
          chassis_id: "30",
          name: "Vanguard Warden"
        },
        {
          ship_id: "95",
          chassis_id: "30",
          name: "Vanguard Harbinger"
        },
        {
          ship_id: "96",
          chassis_id: "30",
          name: "Vanguard Sentinel"
        },
        {
          ship_id: "127",
          chassis_id: "30",
          name: "Vanguard Hoplite"
        },
        {
          ship_id: "90",
          chassis_id: "31",
          name: "Reliant Kore"
        },
        {
          ship_id: "105",
          chassis_id: "31",
          name: "Reliant Mako"
        },
        {
          ship_id: "106",
          chassis_id: "31",
          name: "Reliant Sen"
        },
        {
          ship_id: "107",
          chassis_id: "31",
          name: "Reliant Tana"
        },
        {
          ship_id: "91",
          chassis_id: "32",
          name: "Genesis Starliner"
        },
        {
          ship_id: "93",
          chassis_id: "33",
          name: "Glaive"
        },
        {
          ship_id: "97",
          chassis_id: "34",
          name: "Endeavor"
        },
        {
          ship_id: "98",
          chassis_id: "35",
          name: "Sabre"
        },
        {
          ship_id: "120",
          chassis_id: "35",
          name: "Sabre Comet"
        },
        {
          ship_id: "148",
          chassis_id: "35",
          name: "Sabre Raven"
        },
        {
          ship_id: "103",
          chassis_id: "37",
          name: "Crucible"
        },
        {
          ship_id: "104",
          chassis_id: "38",
          name: "P72 Archimedes"
        },
        {
          ship_id: "207",
          chassis_id: "38",
          name: "P72 Archimedes Emerald"
        },
        {
          ship_id: "108",
          chassis_id: "39",
          name: "Blade"
        },
        {
          ship_id: "109",
          chassis_id: "40",
          name: "Prospector"
        },
        {
          ship_id: "110",
          chassis_id: "41",
          name: "Buccaneer"
        },
        {
          ship_id: "111",
          chassis_id: "42",
          name: "Dragonfly Yellowjacket"
        },
        {
          ship_id: "112",
          chassis_id: "42",
          name: "Dragonfly Black"
        },
        {
          ship_id: "113",
          chassis_id: "43",
          name: "MPUV Personnel"
        },
        {
          ship_id: "114",
          chassis_id: "43",
          name: "MPUV Cargo"
        },
        {
          ship_id: "115",
          chassis_id: "44",
          name: "Terrapin"
        },
        {
          ship_id: "116",
          chassis_id: "45",
          name: "Polaris"
        },
        {
          ship_id: "117",
          chassis_id: "46",
          name: "Prowler"
        },
        {
          ship_id: "123",
          chassis_id: "47",
          name: "85X"
        },
        {
          ship_id: "126",
          chassis_id: "48",
          name: "Razor"
        },
        {
          ship_id: "157",
          chassis_id: "48",
          name: "Razor EX"
        },
        {
          ship_id: "158",
          chassis_id: "48",
          name: "Razor LX"
        },
        {
          ship_id: "128",
          chassis_id: "49",
          name: "Hurricane"
        },
        {
          ship_id: "129",
          chassis_id: "50",
          name: "Banu Defender"
        },
        {
          ship_id: "130",
          chassis_id: "51",
          name: "Eclipse"
        },
        {
          ship_id: "131",
          chassis_id: "52",
          name: "Nox"
        },
        {
          ship_id: "132",
          chassis_id: "52",
          name: "Nox Kue"
        },
        {
          ship_id: "134",
          chassis_id: "53",
          name: "Cyclone"
        },
        {
          ship_id: "135",
          chassis_id: "53",
          name: "Cyclone-TR"
        },
        {
          ship_id: "136",
          chassis_id: "53",
          name: "Cyclone-RC"
        },
        {
          ship_id: "137",
          chassis_id: "53",
          name: "Cyclone-RN"
        },
        {
          ship_id: "138",
          chassis_id: "53",
          name: "Cyclone-AA"
        },
        {
          ship_id: "139",
          chassis_id: "54",
          name: "Ursa Rover"
        },
        {
          ship_id: "179",
          chassis_id: "54",
          name: "Ursa Rover Fortuna"
        },
        {
          ship_id: "140",
          chassis_id: "55",
          name: "600i Touring"
        },
        {
          ship_id: "141",
          chassis_id: "55",
          name: "600i Explorer"
        },
        {
          ship_id: "143",
          chassis_id: "56",
          name: "X1 Base"
        },
        {
          ship_id: "145",
          chassis_id: "56",
          name: "X1 Velocity"
        },
        {
          ship_id: "147",
          chassis_id: "56",
          name: "X1 Force"
        },
        {
          ship_id: "149",
          chassis_id: "57",
          name: "Pioneer"
        },
        {
          ship_id: "150",
          chassis_id: "58",
          name: "Hawk"
        },
        {
          ship_id: "151",
          chassis_id: "59",
          name: "Hammerhead"
        },
        {
          ship_id: "195",
          chassis_id: "59",
          name: "Hammerhead Best In Show Edition"
        },
        {
          ship_id: "154",
          chassis_id: "61",
          name: "Nova"
        },
        {
          ship_id: "155",
          chassis_id: "62",
          name: "Vulcan"
        },
        {
          ship_id: "159",
          chassis_id: "63",
          name: "100i"
        },
        {
          ship_id: "160",
          chassis_id: "63",
          name: "125a"
        },
        {
          ship_id: "161",
          chassis_id: "63",
          name: "135c"
        },
        {
          ship_id: "162",
          chassis_id: "64",
          name: "C2 Hercules"
        },
        {
          ship_id: "163",
          chassis_id: "64",
          name: "M2 Hercules"
        },
        {
          ship_id: "164",
          chassis_id: "64",
          name: "A2 Hercules"
        },
        {
          ship_id: "165",
          chassis_id: "65",
          name: "Vulture"
        },
        {
          ship_id: "166",
          chassis_id: "66",
          name: "Apollo Triage"
        },
        {
          ship_id: "167",
          chassis_id: "66",
          name: "Apollo Medivac"
        },
        {
          ship_id: "168",
          chassis_id: "67",
          name: "Mercury Star Runner"
        },
        {
          ship_id: "169",
          chassis_id: "68",
          name: "Valkyrie"
        },
        {
          ship_id: "171",
          chassis_id: "68",
          name: "Valkyrie Liberator Edition"
        },
        {
          ship_id: "170",
          chassis_id: "69",
          name: "Kraken"
        },
        {
          ship_id: "175",
          chassis_id: "69",
          name: "Kraken Privateer"
        },
        {
          ship_id: "173",
          chassis_id: "70",
          name: "Arrow"
        },
        {
          ship_id: "174",
          chassis_id: "71",
          name: "San'tok.yāi"
        },
        {
          ship_id: "176",
          chassis_id: "72",
          name: "SRV"
        },
        {
          ship_id: "178",
          chassis_id: "73",
          name: "Corsair"
        },
        {
          ship_id: "180",
          chassis_id: "74",
          name: "Ranger RC"
        },
        {
          ship_id: "181",
          chassis_id: "74",
          name: "Ranger TR"
        },
        {
          ship_id: "182",
          chassis_id: "74",
          name: "Ranger CV"
        },
        {
          ship_id: "183",
          chassis_id: "75",
          name: "Anvil Ballista "
        },
        {
          ship_id: "184",
          chassis_id: "75",
          name: "Anvil Ballista Snowblind"
        },
        {
          ship_id: "185",
          chassis_id: "75",
          name: "Anvil Ballista Dunestalker"
        },
        {
          ship_id: "186",
          chassis_id: "76",
          name: "Nautilus "
        },
        {
          ship_id: "187",
          chassis_id: "76",
          name: "Nautilus Solstice Edition"
        },
        {
          ship_id: "189",
          chassis_id: "77",
          name: "Mantis"
        },
        {
          ship_id: "191",
          chassis_id: "78",
          name: "C8 Pisces"
        },
        {
          ship_id: "192",
          chassis_id: "78",
          name: "C8X Pisces Expedition "
        },
        {
          ship_id: "198",
          chassis_id: "79",
          name: "Crusader Ares Inferno "
        },
        {
          ship_id: "200",
          chassis_id: "79",
          name: "Crusader Ares Ion"
        },
        {
          ship_id: "201",
          chassis_id: "80",
          name: "Argo Mole"
        },
        {
          ship_id: "202",
          chassis_id: "80",
          name: "Argo Mole Carbon Edition"
        },
        {
          ship_id: "203",
          chassis_id: "80",
          name: "Argo Mole Talus Edition"
        },
        {
          ship_id: "208",
          chassis_id: "81",
          name: "Origin G12"
        },
        {
          ship_id: "209",
          chassis_id: "81",
          name: "Origin G12r"
        },
        {
          ship_id: "210",
          chassis_id: "81",
          name: "Origin G12a"
        },
        {
          ship_id: "211",
          chassis_id: "82",
          name: "Esperia Talon"
        },
        {
          ship_id: "212",
          chassis_id: "82",
          name: "Esperia Talon Shrike"
        },
        {
          ship_id: "214",
          chassis_id: "83",
          name: "ROC"
        }
      ]);
    });
};
