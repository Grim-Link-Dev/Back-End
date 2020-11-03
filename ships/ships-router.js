const router = require("express").Router();
const ships = require("./ships-model");
const shipSpecsRouter = require("../ship-specs/ship-specs-router");
const allData = require("./ships");
const shipSpecs = require("../ship-specs/ship-specs-model");
/*
router.get("/", async (req, res, next) => {
  try {
    res.json(slimData);
  } catch (err) {
    next(err);
  }
});

*/
router.get("/", async (req, res, next) => {
  try{
  res.json(allData)
  } catch(err){
    next(err)
  }
});


router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    await ships.findById(id).then((payload) => {
      if (payload) {
        res.json(payload);
      } else {
        res.status(404).json({ message: "Could not find ship by said ID." });
      }
    });
  } catch (err) {
    next(err);
  }
});

  router.use("/:id/specs/", shipSpecsRouter)
  module.exports = router;