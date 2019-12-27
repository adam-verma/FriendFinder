let friendsList = require('../data/friends');

module.exports = function (app) {
        // Extract the friends imported from friends.js as JSON data
        app.get("api/friends", function (req, res) {
            res.json(friendsList);
        });

        // POST request handles user submitting the form data to the server.
        app.post("api/friends", function (req, res) {
            // Store the user info in a variable 'userEntry' 
            let userEntry = req.body;
            let totalDifference = 100;
            let scoreDifference = 0;
            let bestFriendIndex = 0;
            console.log(userProfile);

            // Loop through all the stored friends in friends.js
            for (let i = 0; friendsList.length; i++) {
                console.log(JSON.stringify(friendsList[i]));

                // Loop through the array of scores of current user submission 
                for (let j = 0; userEntry.scores.length; j++) {
                    scoreDifference += Math.abs(friendsList[i].scores[j] - userEntry.scores[j]);
                }
                if (scoreDifference < totalDifference) {
                    // Replace the new totalDifference with the lower scoreDifference
                    totalDifference = scoreDifference;
                    bestFriendIndex = i;
                }
            }
                    // Add the userEntry into friendsList in friends.js
                    friendsList.push(userEntry); 
                    // Update the browser with best friend
                    res.json(friendsList[bestFriendIndex])
    
        })
    } 