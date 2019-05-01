//Dependencies
//friend list
var friendList = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendList);
    });
    //add new friends
    app.post('/api/friends', function (req, res) {
        //parseInt for scores
        console.log(req.body);
        var closestMatch = {
            name: "",
            photo: "",
            friendDiff: 400 
        };

        var userData = req.body;
        var userScores = userData.scores;

        var totalDiff;

        for (var i = 0; i < friendList.length; i++) {
            var current = friendList[i];
            totalDiff = 0;

           

            for (var j=0; j<current.scores.length; j++){
                var currentFriendScore = current.scores[j];
                var currentUserScore = userScores[j];


                totalDiff += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));

                if (totalDiff <= closestMatch.friendDiff){
                    closestMatch.name = current.name;
                    closestMatch.photo = current.photo;
                    closestMatch.friendDiff = totalDiff
                }
            }
            


            //res.json(closestMatch);
        };
        friendList.push(userData);
        res.send(closestMatch);
        


     });
}
