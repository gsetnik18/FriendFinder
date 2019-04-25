//Dependencies
var path = require("path");

//friend list
var friendList = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendList);
    });
    //add new friends
    app.post('/api/friends', function (req, res) {
        var userIn = req.body;
        var userRes = userIn.scores;
        console.log(req.body.scores)

        // parseInt for scores
        for (var i = 0; i < userRes.scores.length; i++) {
            user.scores[i] = parseInt(userRes.scores[i]);
        };
        console.log(req);
    });
};
