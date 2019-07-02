const secrets = require("./secrets");
const https = require("https");

module.exports.getToken = function getToken(callback) {
    //authentication is needed. Use david's credentials in this project. See secrets.json.
    //For security reasons, always create .gitignore and put the name of the file containing the credentials (secrets.json) inside gitignore
    //This tells git to ignore this file when committing. Prevent it from exposing to repository

    let concatCreds = secrets.consumerKey + ":" + secrets.consumerSecret;
    let encodedCreds = Buffer.from(concatCreds).toString("base64"); //see documentation
    //use old-fashioned way to make a request to twitter api. AJAX is not applicable because jquery is library not initialized.
    let options = {
        //see documentation
        method: "POST",
        path: "/oauth2/token",
        host: "api.twitter.com",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
    };

    let cb = resp => {
        // this will happen if something went wrong!
        if (resp.statusCode !== 200) {
            callback(resp.statusCode);
            return;
        }

        let body = "";

        resp.on("data", chunk => {
            body += chunk;
        });

        resp.on("end", () => {
            try {
                let parsedBody = JSON.parse(body);
                // bearerToken!!!!!!! we got it!!!
                let bearerToken = parsedBody.access_token;
                // callback won't run until bearerToken is defined
                callback(null, bearerToken); //error = null, bearerToken is passed!
            } catch (err) {
                // catch runs if 'body' is valid JS, NOT JSON
                callback(err);
            }
        });
    };

    https.request(options, cb).end("grant_type=client_credentials");
    //once the request is successful. Twitter API will response, chunk of data is passed to cb and cb function is called.
    //every request made must be ended with end() in order to execute the request. The string inside the end() is the body of the post.
};

module.exports.getTweets = function getTweets(bToken, callback) {
    // console.log(bToken);
    let options = {
        //see documentation
        method: "GET",
        path:
            "/1.1/statuses/user_timeline.json?screen_name=TheOnion&tweet_mode=extended",
        host: "api.twitter.com",
        headers: {
            Authorization: `Bearer ${bToken}`
        }
    };

    let cb = resp => {
        // this will happen if something went wrong!
        if (resp.statusCode !== 200) {
            callback(resp.statusCode);
            // callback(resp.statusCode);
            return;
        }

        let body = "";

        resp.on("data", chunk => {
            body += chunk;
        });

        resp.on("end", () => {
            try {
                let parsedBody = JSON.parse(body);
                callback(null, parsedBody); //tweets data obtained!
            } catch (err) {
                callback(err);
            }
        });
    };
    https.request(options, cb).end();
};

module.exports.filterTweets = function filterTweets(tweets) {
    // this function filters (cleans up) the response we get from Twitter API
    let neededData = [];
    let n = 5;
    // console.log(tweets[2].full_text);
    // console.log(tweets[2].entities.urls);
    // console.log(tweets[2].entities.media);
    for (let i = 0; i < n; i++) {
        //only top 5 headlines selected
        let str = {};
        if (tweets[i].entities.media === undefined) {
            //it means the posted/shared text on twitter timeline has no url link to its own website.
            n++; //make sure 5 headlines obtained.
        } else {
            str.href = tweets[i].entities.urls[0].url;
            str.text = tweets[i].full_text
                .replace(tweets[i].entities.urls[0].url, "")
                .replace(tweets[i].entities.media[0].url, ""); //remove http links from text
            neededData.push(str);
        }
    }
    return neededData; //object of healines
};
