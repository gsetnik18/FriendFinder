//Dependencies
var path = require("path");

//friend list
var friends = require('../data/friends.js');

module.exports = function(app){
    app.get('/api/friends', function(req, res) {
		res.json(friends);
    });

    //add new friends
    

}
console.log(friends)
