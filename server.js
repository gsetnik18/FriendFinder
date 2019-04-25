//Dependencies
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.get(express.static(path.join(__dirname, './app/public')));
app.use(express.static(path.join(__dirname, 'app/data')));


require('./app/routing/apiroutes')(app);
require('./app/routing/htmlroutes')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });