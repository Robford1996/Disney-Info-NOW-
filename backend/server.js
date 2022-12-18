////////////////
//DEPENDENCIES
///////////////
// get .env variables
require("dotenv").config();
//pull PORT from .env, give default value 4000
const { PORT = 4000, DATABASE_URI } = process.env;
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
mongoose.connect(DATABASE_URI);

//Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to Mongoose"))
  .on("close", () => console.log("You are disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

//////////////////////
//MODELS
/////////////////////

//require routes
const indexRoutes = require("./routes/index");

///////////////////
//MIDDLEWARE
///////////////////
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/", indexRoutes);

/////////////////////
//ROUTES
////////////////////

//test route
app.get("/din", (req, res) => {
  res.send("hello mother");
});
 
//MK route 
const mkController = require("./controllers/mk.js");
app.use("/mk", mkController); 

//EPCOT Route 
const ecController = require("./controllers/ec.js");
app.use("/ec", ecController);

//Studios Route
const stController = require("./controllers/st.js");
app.use("/st", stController);

//DAK Route
const dakController = require("./controllers/dak.js");
app.use("/dak", dakController);

///////////////////
//LISTENER
//////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
