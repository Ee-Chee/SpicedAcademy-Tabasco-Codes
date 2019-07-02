const express = require("express");
const app = express();
//This is a project on how a server interact/communicate with document javascript (js used in index.html)
app.use(express.static("./ticker")); //start the communication. Index.html is read and script.js is invoked. check out the js file.

const { getToken, getTweets, filterTweets } = require("./twitterReq");

app.get("/data.json", (req, res) => {
    //upon getting request from script.js, this runs
    //it takes time to request data from twitter. Other functions will run before a completed data collected.
    //so, we use callbacks to handle this ASYNCHRONOUS behavior.
    //the "bearerToken" variable is the actual bearerToken that we need to make requests to the Twitter API (Requirement defined by Twitter API, see the API documentation)
    //////////////////////////////////////////////////////////////////////////////
    //Starting from here self-defined functions (modules) are imported from twitterReq.js
    getToken(function(err, bearerToken) {
        //Note:pass function as an argument to getToken()
        if (err) {
            console.log("err in getToken callback: ", err);
            return;
        }

        getTweets(bearerToken, function(err, tweets) {
            //Note:pass the result "bearerToken" from getToken() and a function as the argument of getToken()
            if (err) {
                console.log("err in getTweets callback: ", err);
                return;
            }
            // filterTweets doesn't take a callback because it's SYNCHRONOUS
            let filteredTweets = filterTweets(tweets);
            // console.log(tweets);

            // send the filtered tweets back to the ticker
            res.json(filteredTweets); //dont stringify the argument. Pass res.json an object.
            //this will return the script.js a json file. Story ends.
        });
    });
});

app.listen(8080, () => console.log("Hello Im Leng bot!"));
