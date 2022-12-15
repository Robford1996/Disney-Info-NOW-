const express = require("express");
const router = express.Router();
const Ecatr = require("../models/ecatr.js");

//Index Route
router.get("/ec/attraction/:id", async (req, res) => {
  try {
    let selectedAttraction = await Ecatr.findById(req.params.id);
    res.json(selectedAttraction.name);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
