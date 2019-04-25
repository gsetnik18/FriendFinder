//Dependencies
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.get(express.static(path.join(__dirname, './app/public')));

require('/app/routing/apiroutes')(app);
require('/app/routing/htmlroutes')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });