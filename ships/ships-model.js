const db = require("../database/config");

function find() {
  return db("ships").select("ship_id", "chassis_id", "name");
}

function findById(ship_id) {
  return db("ships")
    .select("ship_id", "chassis_id", "name")
    .where({ ship_id })
    .first();
}

function findBy(filter) {
  return db("ships")
    .select("ship_id", "chassis_id", "name")
    .where(filter);
}


module.exports = {
  find,
  findBy,
  findById,
};
