const router = require("express").Router({ mergeParams: true });
const shipSpecs = require("./ship-specs-model");
const ships = require("../ships/ships-model");


//GET specific specs on ship_id param
router.get("/", async (req, res, next) => {
    const { id } = req.params;
    const specificShip = ships.findById(id);
    if (specificShip) {
      shipSpecs
        .findSpecs(id)
        .then((data) => {
          if (data == 0) {
            res
              .status(404)
              .json({ message: "This ship appears to not have any specs" });
          } else {
            res.status(200).json(data);
          }
        })
        .catch((err) => next(err));
    }
  });



  module.exports = router;