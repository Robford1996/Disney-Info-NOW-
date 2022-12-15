const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dakatrSchema = new Schema({
  name: String,
  parkFound: String,
  land: String,
  description: String,
  yearOpened: Number,
  image: String,
  video: String,
});

module.exports = mongoose.model("Dakatr", dakatrSchema);
