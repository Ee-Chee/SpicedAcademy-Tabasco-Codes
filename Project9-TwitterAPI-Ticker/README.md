# Project 9 Twitter API
This is a Ticker project displaying the headlines from the Twitter timeline of a news organization, such as <a href="https://twitter.com/theonion">the Onion</a>.

## Part 1 Authentication
The <a href="https://dev.twitter.com/rest/public">Twitter API</a> requires authentication. This means credentials need to be passed with each request. If we were to make requests via ajax, we'd have to have our application's credentials available in the browser, which means they would be available to anyone using our site. Unacceptable! We will have to make our requests to the Twitter API from the server.

Twitter's API requires all requests be made with HTTPS. Thus we will use the <a href="https://nodejs.org/api/https.html#https_https_request_options_callback">`request`</a> method of Node's <a href="https://nodejs.org/api/https.html">`https`</a> module. A fuller example of how to make a request is available <a href="https://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request/">here</a> (this example uses the `http` module but the `https` interface is identical).

A prerequisite for using Twitter's API is creating an application at <a href="https://apps.twitter.com">https://apps.twitter.com</a>

A note about base64 encoding: This exercise requires you to base64-encode a string, and in Node.js, you can achieve this by first converting it to a Buffer (which is a representation of the string's data in binary) and then into a base64 encoded string:

```javascript
Buffer.from("take a deep breath").toString("base64"); // 'dGFrZSBhIGRlZXAgYnJlYXRo'
```

We will be using <a href="https://developer.twitter.com/en/docs/basics/authentication/overview/application-only">Application-only authentication</a> for this project. In order to make requests to get data, we will first have to obtain what they call a "bearer token." It is the bearer token that we will use to make subsequent requests.

Follow <a href="https://developer.twitter.com/en/docs/basics/authentication/overview/application-only">these instructions</a> step by step to obtain your bearer token (you have to scroll down to the section entitled "Issuing application-only requests").

To get tweets we will use the <a href="https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline">statuses/user_timeline</a> endpoint. When making the request, you should pass two query string parameters. With the `screen_name` parameter you will specify the user whose tweets you want. Additionally, you should add `tweet_mode=extended` to the query string to ensure that you get the full tweet text, which, as of early 2018, may be up to 280 characters long. The body of the response from this endpoint will be an array of objects representing tweets. The `full_text` property of each object gives you access to the full text of the tweet. The urls contained in the text are listed in the `entities.urls` array.

In your response to your ajax request, include only tweets that have just one url that appears at the end of the tweet text. Do not include tweets that have no url, have more than one url, or have one url that appears medially. It would be best if you removed the url from the tweet text. The text itself will be contained by an `<a>` tag so there is no need to show the url.

Note that even after you confirm a tweet has only one url and you remove it from the text, other urls may still apear in the text. This is because Twitter includes in the tweet text the urls to images and videos that were included in the tweet. Just as the links in a tweet are listed in the tweet's `entities.urls` array, the media urls will be listed in the `entities.media` array. You can loop through these and remove them from the text.

Note also that no changes to your existing ticker code will be necessary. In your express app, you should create a static directory and copy your ticker files into it (except for the json file containing the links, which will not be needed). You should also create a route to handle the ajax request that your client-side Javascript makes (e.g., if your json file had been called "links.json", the url for your route should be `/links.json`). It is in this route that you should initiate the retrieval of the token and then the tweets from the Twitter API. Finally, you should send the tweets back to the client using `res.json`.
