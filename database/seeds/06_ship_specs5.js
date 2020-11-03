
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ship_specs5')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ship_specs5').insert([
        {
          id: "183",
          afterburner_speed: null,
          beam: "7.0",
          cargocapacity: "0",
          height: "5.5",
          length: "17.0",
          manufacturer_id: "3",
          mass: null,
          max_crew: "2",
          min_crew: "1",
          pitch_max: null,
          production_note: null,
          production_status: "flight-ready",
          roll_max: null,
          scm_speed: "33",
          size: "vehicle",
          time_modified: "3 months ago",
          type: "combat",
          xaxis_acceleration: null,
          yaw_max: null,
          yaxis_acceleration: null,
          zaxis_acceleration: null,
          description: null,
          url: "/pledge/ships/anvil-ballista/Anvil-Ballista"
        },
        {
          id: "184",
          afterburner_speed: null,
          beam: "7.0",
          cargocapacity: "0",
          height: "5.5",
          length: "17.0",
          manufacturer_id: "3",
          mass: null,
          max_crew: "2",
          min_crew: "1",
          pitch_max: null,
          production_note: null,
          production_status: "flight-ready",
          roll_max: null,
          scm_speed: "33",
          size: "vehicle",
          time_modified: "3 months ago",
          type: "combat",
          xaxis_acceleration: null,
          yaw_max: null,
          yaxis_acceleration: null,
          zaxis_acceleration: null,
          description: null,
          url: "/pledge/ships/anvil-ballista/Anvil-Ballista-Snowblind"
        },
        {
          id: "185",
          afterburner_speed: null,
          beam: "7.0",
          cargocapacity: "0",
          height: "5.5",
          length: "17.0",
          manufacturer_id: "3",
          mass: null,
          max_crew: "2",
          min_crew: "1",
          pitch_max: null,
          production_note: null,
          production_status: "flight-ready",
          roll_max: null,
          scm_speed: "33",
          size: "vehicle",
          time_modified: "3 months ago",
          type: "combat",
          xaxis_acceleration: null,
          yaw_max: null,
          yaxis_acceleration: null,
          zaxis_acceleration: null,
          description: null,
          url: "/pledge/ships/anvil-ballista/Anvil-Ballista-Dunestalker"
        },
        {
          id: "186",
          afterburner_speed: null,
          beam: "72.0",
          cargocapacity: "64",
          height: "21.6",
          length: "125.0",
          manufacturer_id: "12",
          mass: "13526320",
          max_crew: "8",
          min_crew: "4",
          pitch_max: null,
          production_note: null,
          production_status: "in-concept",
          roll_max: null,
          scm_speed: "115",
          size: "large",
          time_modified: "1 year ago",
          type: "combat",
          xaxis_acceleration: null,
          yaw_max: null,
          yaxis_acceleration: null,
          zaxis_acceleration: null,
          description: "With four centuries of distinguished service under its belt, The Aegis Dynamics Nautilus tactical minelayer represents the ultimate in strategic combat engineering, with fully-integrated mine-deployment, sweeping and disarming capabilities. ",
          url: "/pledge/ships/aegis-nautilus/Nautilus"
        },
        {
          id: "187",
          afterburner_speed: null,
          beam: "72.0",
          cargocapacity: "64",
          height: "21.6",
          length: "125.0",
          manufacturer_id: "12",
          mass: "13526320",
          max_crew: "8",
          min_crew: "4",
          pitch_max: null,
          production_note: null,
          production_status: "in-concept",
          roll_max: null,
          scm_speed: "115",
          size: "large",
          time_modified: "1 year ago",
          type: "combat",
          xaxis_acceleration: null,
          yaw_max: null,
          yaxis_acceleration: null,
          zaxis_acceleration: null,
          description: "With four centuries of distinguished service under its belt, The Aegis Dynamics Nautilus tactical minelayer represents the ultimate in strategic combat engineering, with fully-integrated mine-deployment, sweeping and disarming capabilities. This limited edition Solstice model is exclusive to members of the Chairman’s Club and includes sequential serial numbering according to production order.",
          url: "/pledge/ships/aegis-nautilus/Nautilus-Solstice-Edition"
        },
        {
          id: "189",
          afterburner_speed: "1220",
          beam: "17.0",
          cargocapacity: "0",
          height: "8.0",
          length: "30.0",
          manufacturer_id: "1",
          mass: "225621",
          max_crew: "1",
          min_crew: "1",
          pitch_max: null,
          production_note: null,
          production_status: "flight-ready",
          roll_max: null,
          scm_speed: "168",
          size: "small",
          time_modified: "3 months ago",
          type: "combat",
          xaxis_acceleration: null,
          yaw_max: null,
          yaxis_acceleration: null,
          zaxis_acceleration: null,
          description: "Stop ships dead in their tracks with RSI’s premier Quantum Enforcement ship. The Mantis features a tailor-made Quantum Enforcement Device from Wei-Tek, capable of ripping ships out of QT with its Quantum Snare and preventing hasty escapes with its Quantum Dampener.",
          url: "/pledge/ships/rsi-mantis/Mantis"
        },
        {
          id: "191",
          afterburner_speed: null,
          beam: "10.0",
          cargocapacity: "4",
          height: "3.2",
          length: "12.0",
          manufacturer_id: "3",
          mass: null,
          max_crew: "3",
          min_crew: "1",
          pitch_max: null,
          production_note: null,
          production_status: "flight-ready",
          roll_max: null,
          scm_speed: "140",
          size: "small",
          time_modified: "3 months ago",
          type: "exploration",
          xaxis_acceleration: null,
          yaw_max: null,
          yaxis_acceleration: null,
          zaxis_acceleration: null,
          description: "Designed specifically for the Anvil Carrack, this snub ship is the perfect scout, landing craft, and support vessel for the iconic explorer. Despite its size, it’s capable of going it alone too thanks to a quantum drive, class-leading shields, and ability to equip a jump module.",
          url: "/pledge/ships/anvil-pisces/C8-Pisces"
        },
        {
          id: "192",
          afterburner_speed: null,
          beam: "10.0",
          cargocapacity: "4",
          height: "3.2",
          length: "13.0",
          manufacturer_id: "3",
          mass: null,
          max_crew: "3",
          min_crew: "1",
          pitch_max: null,
          production_note: null,
          production_status: "flight-ready",
          roll_max: null,
          scm_speed: "140",
          size: "small",
          time_modified: "3 months ago",
          type: "exploration",
          xaxis_acceleration: null,
          yaw_max: null,
          yaxis_acceleration: null,
          zaxis_acceleration: null,
          description: "Additional firepower turns the base Pisces into a highly capable mini-explorer. Ideal for inter-system travel or investigating tight spots inaccessible to larger ships, it’s a small ship ready for big adventures.  ",
          url: "/pledge/ships/anvil-pisces/C8X-Pisces-Expedition"
        },
        {
          id: "198",
          afterburner_speed: null,
          beam: "30.2",
          cargocapacity: "0",
          height: "5.5",
          length: "27.2",
          manufacturer_id: "68",
          mass: null,
          max_crew: "1",
          min_crew: null,
          pitch_max: null,
          production_note: null,
          production_status: "in-concept",
          roll_max: null,
          scm_speed: null,
          size: "medium",
          time_modified: "11 months ago",
          type: "combat",
          xaxis_acceleration: null,
          yaw_max: null,
          yaxis_acceleration: null,
          zaxis_acceleration: null,
          description: "Whether heading up a crew or hunting big ships solo, the Ares Inferno is a force to be reckoned with. This ballistic Gatling-equipped variant tears through gunship armor and turns smaller fighters to dust in seconds.",
          url: "/pledge/ships/crusader-ares/Crusader-Ares-Inferno"
        },
        {
          id: "200",
          afterburner_speed: null,
          beam: "30.2",
          cargocapacity: "0",
          height: "5.5",
          length: "27.2",
          manufacturer_id: "68",
          mass: null,
          max_crew: "1",
          min_crew: null,
          pitch_max: null,
          production_note: null,
          production_status: "in-concept",
          roll_max: null,
          scm_speed: null,
          size: "small",
          time_modified: "10 months ago",
          type: "combat",
          xaxis_acceleration: null,
          yaw_max: null,
          yaxis_acceleration: null,
          zaxis_acceleration: null,
          description: "Spark fear in the corridors of the most formidable gunships and frigates with the Ares Ion. This laser-equipped variant delivers extremely powerful shots to quickly disable the shields of even the biggest enemy vessels.",
          url: "/pledge/ships/crusader-ares/Crusader-Ares-Ion"
        },
        {
          id: "201",
          afterburner_speed: null,
          beam: "25.0",
          cargocapacity: "96",
          height: "15.0",
          length: "45.0",
          manufacturer_id: "73",
          mass: null,
          max_crew: "4",
          min_crew: "1",
          pitch_max: null,
          production_note: null,
          production_status: "flight-ready",
          roll_max: null,
          scm_speed: null,
          size: "medium",
          time_modified: "3 months ago",
          type: "industrial",
          xaxis_acceleration: null,
          yaw_max: null,
          yaxis_acceleration: null,
          zaxis_acceleration: null,
          description: "ARGO’s pragmatic no-nonsense approach to ship design is celebrated in the unmistakable silhouette of the MOLE. Just one look at this machine and you know it means business. Tap into your full potential with the combined force of ARGO’s patented trilateral mining system. The MOLE has a total of 24 mineral pods, each holding 12 SCU. Eight pods are usable at one time – when they’re full, either head home or jettison them for collection by another vessel and carry on mining. Three independently controlled articulated extraction stations allow for maximum power and near-limitless versatility. The MOLE lives by the adage ’many hands make for light work’.",
          url: "/pledge/ships/argo-mole/Argo-Mole"
        },
        {
          id: "202",
          afterburner_speed: null,
          beam: "25.0",
          cargocapacity: "96",
          height: "8.0",
          length: "45.0",
          manufacturer_id: "73",
          mass: null,
          max_crew: "4",
          min_crew: "1",
          pitch_max: null,
          production_note: null,
          production_status: "flight-ready",
          roll_max: null,
          scm_speed: null,
          size: "medium",
          time_modified: "3 months ago",
          type: "industrial",
          xaxis_acceleration: null,
          yaw_max: null,
          yaxis_acceleration: null,
          zaxis_acceleration: null,
          description: "ARGO’s pragmatic no-nonsense approach to ship design is celebrated in the unmistakable silhouette of the MOLE. Just one look at this machine and you know it means business. Tap into your full potential with the combined force of ARGO’s patented trilateral mining system. The MOLE has a total of 24 mineral pods, each holding 12 SCU. Eight pods are usable at one time – when they’re full, either head home or jettison them for collection by another vessel and carry on mining. Three independently controlled articulated extraction stations allow for maximum power and near-limitless versatility. The MOLE lives by the adage ’many hands make for light work’.",
          url: "/pledge/ships/argo-mole/Argo-Mole-Carbon-Edition"
        },
        {
          id: "203",
          afterburner_speed: null,
          beam: "25.0",
          cargocapacity: "96",
          height: "8.0",
          length: "45.0",
          manufacturer_id: "73",
          mass: null,
          max_crew: "4",
          min_crew: "1",
          pitch_max: null,
          production_note: null,
          production_status: "flight-ready",
          roll_max: null,
          scm_speed: null,
          size: "medium",
          time_modified: "3 months ago",
          type: "industrial",
          xaxis_acceleration: null,
          yaw_max: null,
          yaxis_acceleration: null,
          zaxis_acceleration: null,
          description: "ARGO’s pragmatic no-nonsense approach to ship design is celebrated in the unmistakable silhouette of the MOLE. Just one look at this machine and you know it means business. Tap into your full potential with the combined force of ARGO’s patented trilateral mining system. The MOLE has a total of 24 mineral pods, each holding 12 SCU. Eight pods are usable at one time – when they’re full, either head home or jettison them for collection by another vessel and carry on mining. Three independently controlled articulated extraction stations allow for maximum power and near-limitless versatility. The MOLE lives by the adage ’many hands make for light work’.",
          url: "/pledge/ships/argo-mole/Argo-Mole-Talus-Edition"
        },
        {
          id: "208",
          afterburner_speed: null,
          beam: "5.8",
          cargocapacity: "2",
          height: "2.7",
          length: "7.2",
          manufacturer_id: "6",
          mass: null,
          max_crew: null,
          min_crew: null,
          pitch_max: null,
          production_note: null,
          production_status: "in-concept",
          roll_max: null,
          scm_speed: "50",
          size: null,
          time_modified: "6 months ago",
          type: "ground",
          xaxis_acceleration: null,
          yaw_max: null,
          yaxis_acceleration: null,
          zaxis_acceleration: null,
          description: "Trek to the edge of the galaxy with confidence thanks to Origin’s trademark build quality and design. Built with the most extreme environments in mind, the G12 suits all types of planetary travel, from traversing tundras to sightseeing.",
          url: "/pledge/ships/origin-g12/Origin-G12"
        },
        {
          id: "209",
          afterburner_speed: null,
          beam: "5.8",
          cargocapacity: null,
          height: "2.7",
          length: "7.2",
          manufacturer_id: "6",
          mass: null,
          max_crew: null,
          min_crew: null,
          pitch_max: null,
          production_note: null,
          production_status: "in-concept",
          roll_max: null,
          scm_speed: "55",
          size: "vehicle",
          time_modified: "4 months ago",
          type: "competition",
          xaxis_acceleration: null,
          yaw_max: null,
          yaxis_acceleration: null,
          zaxis_acceleration: null,
          description: "Stripped back and meticulously engineering for performance, Origin has taken everything learned from preparing the 350r and M50 ships for competition and added it to the ubiquitous ground racer. Lighter, faster, and with a built-in EMP for protection, it’s ready for anything the outlands can throw at it.",
          url: "/pledge/ships/origin-g12/Origin-G12r"
        },
        {
          id: "210",
          afterburner_speed: null,
          beam: "5.8",
          cargocapacity: null,
          height: "2.7",
          length: "7.2",
          manufacturer_id: "6",
          mass: null,
          max_crew: null,
          min_crew: null,
          pitch_max: null,
          production_note: null,
          production_status: "in-concept",
          roll_max: null,
          scm_speed: "45",
          size: "vehicle",
          time_modified: "6 months ago",
          type: "combat",
          xaxis_acceleration: null,
          yaw_max: null,
          yaxis_acceleration: null,
          zaxis_acceleration: null,
          description: "The G12a combines military might with Origin’s unique approach to high-end engineering. Designed for all offensive ground-based operations, it’s the ideal partner for long-range perimeter patrols, intercepting assailants, and exploring dangerous new locales.",
          url: "/pledge/ships/origin-g12/Origin-G12a"
        },
        {
          id: "211",
          afterburner_speed: null,
          beam: "18.0",
          cargocapacity: "0",
          height: "5.0",
          length: "20.0",
          manufacturer_id: "69",
          mass: "28000",
          max_crew: "1",
          min_crew: "1",
          pitch_max: null,
          production_note: null,
          production_status: "in-production",
          roll_max: null,
          scm_speed: "250",
          size: "small",
          time_modified: "2 months ago",
          type: "combat",
          xaxis_acceleration: null,
          yaw_max: null,
          yaxis_acceleration: null,
          zaxis_acceleration: null,
          description: "This ship is a recreation of the Tevarin Talon by Esperia. The Talon is the Tevarin equivalent to the Aegis Gladius or Vanduul Blade; a single-seat combat ship. The Talon is the perfect example of the Tevarin way of building a spaceship: maneuverable with powerful, directional 'Phalanx' shields but weak physical armour, as the Tevarin way of war was to strike first and strike hard, before using their Phalanx shields to cover their escape.\n<br /><br />\nLearn more at <a href=\"https://robertsspaceindustries.com/talon\" style=\"color:#00deff;\"> https://robertsspaceindustries.com/talon </a>",
          url: "/pledge/ships/talon/Esperia-Talon"
        },
        {
          id: "212",
          afterburner_speed: null,
          beam: "18.0",
          cargocapacity: "0",
          height: "5.0",
          length: "20.0",
          manufacturer_id: "69",
          mass: "28000",
          max_crew: "1",
          min_crew: "1",
          pitch_max: null,
          production_note: null,
          production_status: "in-production",
          roll_max: null,
          scm_speed: "250",
          size: "small",
          time_modified: "2 months ago",
          type: "combat",
          xaxis_acceleration: null,
          yaw_max: null,
          yaxis_acceleration: null,
          zaxis_acceleration: null,
          description: "This ship is a recreation of the Tevarin Talon by Esperia. The Talon is the Tevarin equivalent to the Aegis Gladius or Vanduul Blade; a single-seat combat ship. The Talon is the perfect example of the Tevarin way of building a spaceship: maneuverable with powerful, directional 'Phalanx' shields but weak physical armour, as the Tevarin way of war was to strike first and strike hard, before using their Phalanx shields to cover their escape.\n<br /><br />\nLearn more at <a href=\"https://robertsspaceindustries.com/talon\" style=\"color:#00deff;\"> https://robertsspaceindustries.com/talon </a>",
          url: "/pledge/ships/talon/Esperia-Talon-Shrike"
        },
        {
          id: "214",
          afterburner_speed: null,
          beam: "3.8",
          cargocapacity: "1",
          height: "3.1",
          length: "5.1",
          manufacturer_id: "17",
          mass: null,
          max_crew: "1",
          min_crew: "1",
          pitch_max: null,
          production_note: null,
          production_status: "flight-ready",
          roll_max: null,
          scm_speed: null,
          size: "vehicle",
          time_modified: "1 month ago",
          type: "industrial",
          xaxis_acceleration: null,
          yaw_max: null,
          yaxis_acceleration: null,
          zaxis_acceleration: null,
          description: "At Greycat, we understand that mining isn't a one-size-fits-all operation, so we designed the ROC to be as hard-working and versatile as the miners who use it. Small enough to access hard-to-reach ore deposits, but with enough power to get through the tough jobs, the ROC perfectly complements any mining enterprise. It's perfectly at home supporting full-scale operations, and a first-rate starter vehicle for fledgling diggers. Whatever the task, with Greycat, you have the right tool for the job. ",
          url: "/pledge/ships/roc/ROC"
        }
      ]);
    });
};