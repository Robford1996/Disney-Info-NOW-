////////////////
//DEPENDENCIES
///////////////
// get .env variables
require("dotenv").config();
//pull PORT from .env, give default value 4000
const { PORT = 4000, MONGODB_URL } = process.env;
// import express
const express = require("express");
//create app object
const app = express();
//import mongoose
const mongoose = require("mongoose");
//import middleware
const cors = require("cors");
const morgan = require("morgan");

////////////////
//DATABASE CONNECTION
/////////////////
//Establish connection
mongoose.connect(MONGODB_URL);

//Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to Mongoose"))
  .on("close", () => console.log("You are disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

/////////////////////
//ROUTES
////////////////////
//test route
app.get("/", (req, res) => {
  res.send("hello mother");
});

///////////////////
//LISTENER
//////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
