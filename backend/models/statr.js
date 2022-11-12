const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const statrSchema = new Schema({
  name: String,
  description: String,
  yearOpened: Number,
  image: String,
  video: String,
});

module.exports = mongoose.model("Statr", statrSchema);
