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
      
        console.log(req.body);
    
        
        
        
        
        res.json(friendList);
        //parseInt for scores
    //     for (var i = 0; i < res.scores; i++) {
    //         res.scores[i] = parseInt(res.scores[i]);
    //     };
    //     var friendshipIndex = 0;
    //     var minimumDifference = 400;

    //     for(var i = 0; i < friendList.length; i++) {
    //         var difference = 0;
    //         for(var j = 0; j < friendList[i].scores.length; j++) {
    //          difference += Math.abs(res.scores[j] - friendList[i].scores[j]);

    //           if(difference < minimumDifference) {
    //             friendshipIndex = i;
    //             minimumDifference = difference;
    //           }
    //         }

    //         friendList.push(userIn);

    //         res.json(friendList[friendshipIndex]);
    //     }
    //     console.log(friendList[friendshipIndex])
     });
}
