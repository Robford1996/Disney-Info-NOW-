const express = require("express");
const router = express.Router();
const Dakatr = require("../models/dakatr.js");

//Index Route
router.get("/dak/attraction/:id", async (req, res) => {
  try {
    let selectedAttraction = await Dakatr.findById(req.params.id);
    res.json(selectedAttraction.name);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
