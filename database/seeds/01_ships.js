exports.seed = function (knex) {
  return knex("ships")
    .truncate()
    .then(function () {
      return knex("ships").insert([
          {
            id: "1",
            chassis_id: "1",
            name: "Aurora ES",
            
          },
          {
            id: "3",
            chassis_id: "1",
            name: "Aurora LX"
          },
          {
            id: "4",
            chassis_id: "1",
            name: "Aurora MR"
          },
          {
            id: "5",
            chassis_id: "1",
            name: "Aurora CL"
          },
          {
            id: "6",
            chassis_id: "1",
            name: "Aurora LN"
          },
          {
            id: "7",
            chassis_id: "2",
            name: "300i"
          },
          {
            id: "8",
            chassis_id: "2",
            name: "315p"
          },
          {
            id: "9",
            chassis_id: "2",
            name: "325a"
          },
          {
            id: "10",
            chassis_id: "2",
            name: "350r"
          },
          {
            id: "11",
            chassis_id: "3",
            name: "F7C Hornet"
          },
          {
            id: "122",
            chassis_id: "3",
            name: "F7C Hornet Wildfire"
          },
          {
            id: "13",
            chassis_id: "3",
            name: "F7C-S Hornet Ghost"
          },
          {
            id: "14",
            chassis_id: "3",
            name: "F7C-R Hornet Tracker"
          },
          {
            id: "15",
            chassis_id: "3",
            name: "F7C-M Super Hornet"
          },
          {
            id: "37",
            chassis_id: "3",
            name: "F7A Hornet"
          },
          {
            id: "177",
            chassis_id: "3",
            name: "F7C-M Super Hornet Heartseeker"
          },
          {
            id: "47",
            chassis_id: "4",
            name: "Constellation Aquila"
          },
          {
            id: "45",
            chassis_id: "4",
            name: "Constellation Andromeda"
          },
          {
            id: "46",
            chassis_id: "4",
            name: "Constellation Taurus"
          },
          {
            id: "49",
            chassis_id: "4",
            name: "Constellation Phoenix"
          },
          {
            id: "156",
            chassis_id: "4",
            name: "Constellation Phoenix Emerald"
          },
          {
            id: "16",
            chassis_id: "5",
            name: "Freelancer"
          },
          {
            id: "31",
            chassis_id: "5",
            name: "Freelancer DUR"
          },
          {
            id: "32",
            chassis_id: "5",
            name: "Freelancer MAX"
          },
          {
            id: "33",
            chassis_id: "5",
            name: "Freelancer MIS"
          },
          {
            id: "56",
            chassis_id: "6",
            name: "Cutlass Black"
          },
          {
            id: "57",
            chassis_id: "6",
            name: "Cutlass Red"
          },
          {
            id: "58",
            chassis_id: "6",
            name: "Cutlass Blue"
          },
          {
            id: "193",
            chassis_id: "6",
            name: "Cutlass Black Best In Show Edition"
          },
          {
            id: "100",
            chassis_id: "7",
            name: "Avenger Stalker"
          },
          {
            id: "124",
            chassis_id: "7",
            name: "Avenger Titan Renegade"
          },
          {
            id: "101",
            chassis_id: "7",
            name: "Avenger Warlock"
          },
          {
            id: "102",
            chassis_id: "7",
            name: "Avenger Titan"
          },
          {
            id: "64",
            chassis_id: "8",
            name: "Gladiator"
          },
          {
            id: "22",
            chassis_id: "9",
            name: "M50"
          },
          {
            id: "88",
            chassis_id: "10",
            name: "Starfarer"
          },
          {
            id: "89",
            chassis_id: "10",
            name: "Starfarer Gemini"
          },
          {
            id: "24",
            chassis_id: "11",
            name: "Caterpillar"
          },
          {
            id: "125",
            chassis_id: "11",
            name: "Caterpillar Pirate Edition"
          },
          {
            id: "194",
            chassis_id: "11",
            name: "Caterpillar Best In Show Edition"
          },
          {
            id: "72",
            chassis_id: "12",
            name: "Retaliator Bomber"
          },
          {
            id: "99",
            chassis_id: "12",
            name: "Retaliator Base"
          },
          {
            id: "26",
            chassis_id: "13",
            name: "Scythe"
          },
          {
            id: "27",
            chassis_id: "14",
            name: "Idris-M"
          },
          {
            id: "28",
            chassis_id: "14",
            name: "Idris-P"
          },
          {
            id: "92",
            chassis_id: "15",
            name: "P-52 Merlin"
          },
          {
            id: "65",
            chassis_id: "16",
            name: "Mustang Alpha"
          },
          {
            id: "66",
            chassis_id: "16",
            name: "Mustang Beta"
          },
          {
            id: "67",
            chassis_id: "16",
            name: "Mustang Gamma"
          },
          {
            id: "69",
            chassis_id: "16",
            name: "Mustang Delta"
          },
          {
            id: "70",
            chassis_id: "16",
            name: "Mustang Omega"
          },
          {
            id: "172",
            chassis_id: "16",
            name: "Mustang Alpha Vindicator"
          },
          {
            id: "59",
            chassis_id: "17",
            name: "Redeemer"
          },
          {
            id: "60",
            chassis_id: "18",
            name: "Gladius"
          },
          {
            id: "121",
            chassis_id: "18",
            name: "Gladius Valiant"
          },
          {
            id: "188",
            chassis_id: "18",
            name: "Pirate Gladius"
          },
          {
            id: "35",
            chassis_id: "19",
            name: "Khartu-Al"
          },
          {
            id: "36",
            chassis_id: "20",
            name: "Merchantman"
          },
          {
            id: "55",
            chassis_id: "21",
            name: "890 Jump"
          },
          {
            id: "62",
            chassis_id: "22",
            name: "Carrack"
          },
          {
            id: "204",
            chassis_id: "22",
            name: "Carrack w/C8X"
          },
          {
            id: "205",
            chassis_id: "22",
            name: "Carrack Expedition w/C8X"
          },
          {
            id: "206",
            chassis_id: "22",
            name: "Carrack Expedition"
          },
          {
            id: "61",
            chassis_id: "23",
            name: "Herald"
          },
          {
            id: "41",
            chassis_id: "24",
            name: "Hull C"
          },
          {
            id: "84",
            chassis_id: "24",
            name: "Hull A"
          },
          {
            id: "85",
            chassis_id: "24",
            name: "Hull B"
          },
          {
            id: "86",
            chassis_id: "24",
            name: "Hull D"
          },
          {
            id: "87",
            chassis_id: "24",
            name: "Hull E"
          },
          {
            id: "71",
            chassis_id: "25",
            name: "Orion"
          },
          {
            id: "51",
            chassis_id: "26",
            name: "Reclaimer"
          },
          {
            id: "196",
            chassis_id: "26",
            name: "Reclaimer Best In Show Edition"
          },
          {
            id: "63",
            chassis_id: "28",
            name: "Javelin"
          },
          {
            id: "75",
            chassis_id: "30",
            name: "Vanguard Warden"
          },
          {
            id: "95",
            chassis_id: "30",
            name: "Vanguard Harbinger"
          },
          {
            id: "96",
            chassis_id: "30",
            name: "Vanguard Sentinel"
          },
          {
            id: "127",
            chassis_id: "30",
            name: "Vanguard Hoplite"
          },
          {
            id: "90",
            chassis_id: "31",
            name: "Reliant Kore"
          },
          {
            id: "105",
            chassis_id: "31",
            name: "Reliant Mako"
          },
          {
            id: "106",
            chassis_id: "31",
            name: "Reliant Sen"
          },
          {
            id: "107",
            chassis_id: "31",
            name: "Reliant Tana"
          },
          {
            id: "91",
            chassis_id: "32",
            name: "Genesis Starliner"
          },
          {
            id: "93",
            chassis_id: "33",
            name: "Glaive"
          },
          {
            id: "97",
            chassis_id: "34",
            name: "Endeavor"
          },
          {
            id: "98",
            chassis_id: "35",
            name: "Sabre"
          },
          {
            id: "120",
            chassis_id: "35",
            name: "Sabre Comet"
          },
          {
            id: "148",
            chassis_id: "35",
            name: "Sabre Raven"
          },
          {
            id: "103",
            chassis_id: "37",
            name: "Crucible"
          },
          {
            id: "104",
            chassis_id: "38",
            name: "P72 Archimedes"
          },
          {
            id: "207",
            chassis_id: "38",
            name: "P72 Archimedes Emerald"
          },
          {
            id: "108",
            chassis_id: "39",
            name: "Blade"
          },
          {
            id: "109",
            chassis_id: "40",
            name: "Prospector"
          },
          {
            id: "110",
            chassis_id: "41",
            name: "Buccaneer"
          },
          {
            id: "111",
            chassis_id: "42",
            name: "Dragonfly Yellowjacket"
          },
          {
            id: "112",
            chassis_id: "42",
            name: "Dragonfly Black"
          },
          {
            id: "113",
            chassis_id: "43",
            name: "MPUV Personnel"
          },
          {
            id: "114",
            chassis_id: "43",
            name: "MPUV Cargo"
          },
          {
            id: "115",
            chassis_id: "44",
            name: "Terrapin"
          },
          {
            id: "116",
            chassis_id: "45",
            name: "Polaris"
          },
          {
            id: "117",
            chassis_id: "46",
            name: "Prowler"
          },
          {
            id: "123",
            chassis_id: "47",
            name: "85X"
          },
          {
            id: "126",
            chassis_id: "48",
            name: "Razor"
          },
          {
            id: "157",
            chassis_id: "48",
            name: "Razor EX"
          },
          {
            id: "158",
            chassis_id: "48",
            name: "Razor LX"
          },
          {
            id: "128",
            chassis_id: "49",
            name: "Hurricane"
          },
          {
            id: "129",
            chassis_id: "50",
            name: "Banu Defender"
          },
          {
            id: "130",
            chassis_id: "51",
            name: "Eclipse"
          },
          {
            id: "131",
            chassis_id: "52",
            name: "Nox"
          },
          {
            id: "132",
            chassis_id: "52",
            name: "Nox Kue"
          },
          {
            id: "134",
            chassis_id: "53",
            name: "Cyclone"
          },
          {
            id: "135",
            chassis_id: "53",
            name: "Cyclone-TR"
          },
          {
            id: "136",
            chassis_id: "53",
            name: "Cyclone-RC"
          },
          {
            id: "137",
            chassis_id: "53",
            name: "Cyclone-RN"
          },
          {
            id: "138",
            chassis_id: "53",
            name: "Cyclone-AA"
          },
          {
            id: "139",
            chassis_id: "54",
            name: "Ursa Rover"
          },
          {
            id: "179",
            chassis_id: "54",
            name: "Ursa Rover Fortuna"
          },
          {
            id: "140",
            chassis_id: "55",
            name: "600i Touring"
          },
          {
            id: "141",
            chassis_id: "55",
            name: "600i Explorer"
          },
          {
            id: "143",
            chassis_id: "56",
            name: "X1 Base"
          },
          {
            id: "145",
            chassis_id: "56",
            name: "X1 Velocity"
          },
          {
            id: "147",
            chassis_id: "56",
            name: "X1 Force"
          },
          {
            id: "149",
            chassis_id: "57",
            name: "Pioneer"
          },
          {
            id: "150",
            chassis_id: "58",
            name: "Hawk"
          },
          {
            id: "151",
            chassis_id: "59",
            name: "Hammerhead"
          },
          {
            id: "195",
            chassis_id: "59",
            name: "Hammerhead Best In Show Edition"
          },
          {
            id: "154",
            chassis_id: "61",
            name: "Nova"
          },
          {
            id: "155",
            chassis_id: "62",
            name: "Vulcan"
          },
          {
            id: "159",
            chassis_id: "63",
            name: "100i"
          },
          {
            id: "160",
            chassis_id: "63",
            name: "125a"
          },
          {
            id: "161",
            chassis_id: "63",
            name: "135c"
          },
          {
            id: "162",
            chassis_id: "64",
            name: "C2 Hercules"
          },
          {
            id: "163",
            chassis_id: "64",
            name: "M2 Hercules"
          },
          {
            id: "164",
            chassis_id: "64",
            name: "A2 Hercules"
          },
          {
            id: "165",
            chassis_id: "65",
            name: "Vulture"
          },
          {
            id: "166",
            chassis_id: "66",
            name: "Apollo Triage"
          },
          {
            id: "167",
            chassis_id: "66",
            name: "Apollo Medivac"
          },
          {
            id: "168",
            chassis_id: "67",
            name: "Mercury Star Runner"
          },
          {
            id: "169",
            chassis_id: "68",
            name: "Valkyrie"
          },
          {
            id: "171",
            chassis_id: "68",
            name: "Valkyrie Liberator Edition"
          },
          {
            id: "170",
            chassis_id: "69",
            name: "Kraken"
          },
          {
            id: "175",
            chassis_id: "69",
            name: "Kraken Privateer"
          },
          {
            id: "173",
            chassis_id: "70",
            name: "Arrow"
          },
          {
            id: "174",
            chassis_id: "71",
            name: "San'tok.yāi"
          },
          {
            id: "176",
            chassis_id: "72",
            name: "SRV"
          },
          {
            id: "178",
            chassis_id: "73",
            name: "Corsair"
          },
          {
            id: "180",
            chassis_id: "74",
            name: "Ranger RC"
          },
          {
            id: "181",
            chassis_id: "74",
            name: "Ranger TR"
          },
          {
            id: "182",
            chassis_id: "74",
            name: "Ranger CV"
          },
          {
            id: "183",
            chassis_id: "75",
            name: "Anvil Ballista "
          },
          {
            id: "184",
            chassis_id: "75",
            name: "Anvil Ballista Snowblind"
          },
          {
            id: "185",
            chassis_id: "75",
            name: "Anvil Ballista Dunestalker"
          },
          {
            id: "186",
            chassis_id: "76",
            name: "Nautilus "
          },
          {
            id: "187",
            chassis_id: "76",
            name: "Nautilus Solstice Edition"
          },
          {
            id: "189",
            chassis_id: "77",
            name: "Mantis"
          },
          {
            id: "191",
            chassis_id: "78",
            name: "C8 Pisces"
          },
          {
            id: "192",
            chassis_id: "78",
            name: "C8X Pisces Expedition "
          },
          {
            id: "198",
            chassis_id: "79",
            name: "Crusader Ares Inferno "
          },
          {
            id: "200",
            chassis_id: "79",
            name: "Crusader Ares Ion"
          },
          {
            id: "201",
            chassis_id: "80",
            name: "Argo Mole"
          },
          {
            id: "202",
            chassis_id: "80",
            name: "Argo Mole Carbon Edition"
          },
          {
            id: "203",
            chassis_id: "80",
            name: "Argo Mole Talus Edition"
          },
          {
            id: "208",
            chassis_id: "81",
            name: "Origin G12"
          },
          {
            id: "209",
            chassis_id: "81",
            name: "Origin G12r"
          },
          {
            id: "210",
            chassis_id: "81",
            name: "Origin G12a"
          },
          {
            id: "211",
            chassis_id: "82",
            name: "Esperia Talon"
          },
          {
            id: "212",
            chassis_id: "82",
            name: "Esperia Talon Shrike"
          },
          {
            id: "214",
            chassis_id: "83",
            name: "ROC"
          }
      ]);
    });
};
