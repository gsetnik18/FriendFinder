//Dependencies
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.send("Welcome to Friend Finder! Let's meet some people!");
  });

app.get("/survey", function(req, res) {
  res.json(survey);
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });