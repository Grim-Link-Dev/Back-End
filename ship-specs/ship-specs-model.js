const db = require("../database/config");


function findSpecs(id) {
  return db("ship_specs1")
    .join("ships", "ships.ship_id", "ship_specs1.id")
    .select(
        "ship_specs1.id",
        "ship_specs1.afterburner_speed",
        "ship_specs1.beam",
        "ship_specs1.cargocapacity",
        "ship_specs1.height",
        "ship_specs1.length",
        "ship_specs1.manufacturer_id",
        "ship_specs1.mass",
        "ship_specs1.max_crew",
        "ship_specs1.min_crew",
        "ship_specs1.pitch_max",
        "ship_specs1.production_note",
        "ship_specs1.production_status",
        "ship_specs1.roll_max",
        "ship_specs1.scm_speed",
        "ship_specs1.size",
        "ship_specs1.time_modified",
        "ship_specs1.type",
        "ship_specs1.xaxis_acceleration",
        "ship_specs1.yaw_max",
        "ship_specs1.yaxis_acceleration",
        "ship_specs1.zaxis_acceleration",
        "ship_specs1.description",
        "ship_specs1.url",
    )
    .where({ ship_id : id }); // where ship id is == req param id
}

async function findSpecsById(user_id, id) {
  return db("ship_specs1")
    .where("id", id)
    .first()
    .andWhere("id", id)
    .first();
}

function findSpecsBy(filter) {
  return db("ship_specs1")
    .select(
        "ship_specs1.id",
        "ship_specs1.afterburner_speed",
        "ship_specs1.beam",
        "ship_specs1.cargocapacity",
        "ship_specs1.height",
        "ship_specs1.length",
        "ship_specs1.manufacturer_id",
        "ship_specs1.mass",
        "ship_specs1.max_crew",
        "ship_specs1.min_crew",
        "ship_specs1.pitch_max",
        "ship_specs1.production_note",
        "ship_specs1.production_status",
        "ship_specs1.roll_max",
        "ship_specs1.scm_speed",
        "ship_specs1.size",
        "ship_specs1.time_modified",
        "ship_specs1.type",
        "ship_specs1.xaxis_acceleration",
        "ship_specs1.yaw_max",
        "ship_specs1.yaxis_acceleration",
        "ship_specs1.zaxis.acceleration",
        "ship_specs1.description",
        "ship_specs1.url",
    )
    .where(filter);
}


module.exports = {
  findSpecs,
  findSpecsById,
  findSpecsBy,
};
