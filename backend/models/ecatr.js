const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ecatrSchema = new Schema({
  name: String,
  parkFound: String,
  land: String,
  description: String,
  yearOpened: Number,
  image: String,
  video: String,
});

module.exports = mongoose.model("Ecatr", ecatrSchema);
