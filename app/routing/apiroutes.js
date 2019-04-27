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

        // parseInt for scores
        for (var i = 0; i < userRes.scores.length; i++) {
            user.scores[i] = parseInt(userRes.scores[i]);
        };
        var friendshipIndex = 0;
        var minimumDifference = 400;

        for(var i = 0; i < friends.length; i++) {
            var difference = 0;
            for(var j = 0; j < friends[i].scores.length; j++) {
             difference += Math.abs(user.scores[j] - friends[i].scores[j]);

              if(difference < minimumDifference) {
                friendshipIndex = i;
                minimumDifference = difference;
              }
            }

            friends.push(userIn);

            res.json(friends[friendshipIndex]);
        }
    });
}
