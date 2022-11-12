const express = require("express");
const router = express.Router();
const Statr = require("../models/statr.js");

//Index Route
router.get("/st/:id/attraction", async (req, res) => {
  try {
    let selectedAttraction = await Statr.findById(req.params.id);
    res.json(selectedAttraction.name);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
