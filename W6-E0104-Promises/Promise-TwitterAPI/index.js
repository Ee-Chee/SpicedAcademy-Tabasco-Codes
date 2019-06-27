const express = require("express");
const app = express();
app.use(express.static("./ticker"));

const { getToken, getTweets } = require("./twitterReq");

app.get("/data.json", (req, res) => {
    getToken()
        // .then(getTweets) //if no body of function is intended. Just call it without () or (argument). Otherwise, errors occur.
        .then(token => {
            Promise.all([
                getTweets(token, "bbcworld"),
                getTweets(token, "TheOnion"),
                getTweets(token, "nytimes")
            ])
                .then(function(results) {
                    // console.log(results); //[[{},{},{}],[{},{},{}],[{},{},{}]]

                    let tweets = results[0].concat(results[1], results[2]);

                    tweets.sort(function(a, b) {
                        return new Date(b.create_at) - new Date(a.create_at);
                    });

                    let neededData = [];
                    let n = 8;
                    // console.log(tweets[2].full_text);
                    // console.log(tweets[2].entities.urls);
                    // console.log(tweets[2].entities.media);
                    // console.log(tweets[2].user);
                    for (let i = 0; i < n; i++) {
                        //only top 8 headlines selected
                        let str = {};
                        if (
                            tweets[i].entities.media === undefined ||
                            tweets[i].entities.urls[0] === undefined
                        ) {
                            n++;
                        } else {
                            str.href = tweets[i].entities.urls[0].url;
                            str.text =
                                tweets[i].user.name +
                                ": " +
                                tweets[i].full_text
                                    .replace(tweets[i].entities.urls[0].url, "")
                                    .replace(
                                        tweets[i].entities.media[0].url,
                                        ""
                                    );
                            neededData.push(str);
                        }
                    }
                    return neededData;
                })
                .then(data => {
                    res.json(data);
                });
        })
        .catch(function(err) {
            console.log(err, "error!!!");
        });
});

app.listen(8080, () => console.log("Hello Im Leng bot!!"));
