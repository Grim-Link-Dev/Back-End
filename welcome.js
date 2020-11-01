const express = require("express");
const router = express.Router();
const fs = require("fs");


router.get("/", (req, res) => {
  res.render('pages/auth')  
  res.status(200)
});

module.exports = router;
