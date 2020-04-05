const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
var path = require("path");

//If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

//Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

const PORT = process.env.PORT || 3000;;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});