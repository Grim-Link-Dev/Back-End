const router = require("express").Router();
const slimData = require("./ships");

router.get("/", async (req, res, next) => {
  
    try {
      res.json(slimData);
    } catch (err) {
      next(err);
    }
  });

  module.exports = router;