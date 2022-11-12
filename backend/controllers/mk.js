const express = require("express");
const router = express.Router();
const Mkatr = require("../models/mkatr.js");

//Index Route
router.get("/mk/:id/attraction", async (req, res) => {
  try {
    let selectedAttraction = await Mkatr.findById(req.params.id);
    res.json(selectedAttraction.name);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
