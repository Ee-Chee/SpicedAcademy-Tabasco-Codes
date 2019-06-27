//resolve and reject are future-like return
//all callback used to handle async is replaced by Promise

const secrets = require("./secrets");
const https = require("https");

module.exports.getToken = function getToken() {
    return new Promise(function(resolve, reject) {
        let concatCreds = secrets.consumerKey + ":" + secrets.consumerSecret;
        let encodedCreds = Buffer.from(concatCreds).toString("base64");
        let options = {
            method: "POST",
            path: "/oauth2/token",
            host: "api.twitter.com",
            headers: {
                Authorization: `Basic ${encodedCreds}`,
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8"
            }
        };

        let cb = resp => {
            if (resp.statusCode !== 200) {
                reject(resp.statusCode);
            }

            let body = "";

            resp.on("data", chunk => {
                body += chunk;
            });

            resp.on("end", () => {
                try {
                    let parsedBody = JSON.parse(body);
                    let bearerToken = parsedBody.access_token;
                    resolve(bearerToken);
                } catch (err) {
                    reject(err);
                }
            });
        };

        https.request(options, cb).end("grant_type=client_credentials");
    });
};

module.exports.getTweets = function getTweets(bToken, screenName) {
    return new Promise(function(resolve, reject) {
        let options = {
            method: "GET",
            path: `/1.1/statuses/user_timeline.json?screen_name=${screenName}&tweet_mode=extended`,
            host: "api.twitter.com",
            headers: {
                Authorization: `Bearer ${bToken}`
            }
        };

        let cb = resp => {
            if (resp.statusCode !== 200) {
                reject(resp.statusCode);
            }

            let body = "";

            resp.on("data", chunk => {
                body += chunk;
            });

            resp.on("end", () => {
                try {
                    let parsedBody = JSON.parse(body);
                    resolve(parsedBody);
                } catch (err) {
                    reject(err);
                }
            });
        };
        https.request(options, cb).end();
    });
};
