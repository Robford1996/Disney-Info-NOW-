////////////////
//DEPENDENCIES
///////////////
// get .env variables
require("dotenv").config();
//pull PORT from .env, give default value 4000
const { PORT = 4000 } = process.env;
// import express
const express = require("express");
//create app object
const app = express();

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
