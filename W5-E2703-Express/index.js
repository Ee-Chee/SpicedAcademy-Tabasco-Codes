const express = require("express");
const app = express();
app.use(
    require("body-parser").urlencoded({
        extended: false
    })
);
app.use(require("cookie-parser")());
const basicAuth = require("basic-auth");
//////////////////////////////////Initialization finished

app.use((req, res, next) => {
    if (
        req.url !== "/cookie" &&
        req.cookies.cookiePolicyAccepted === undefined
    ) {
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            return res.end();
        } //get rid of request of /favicon.ico

        res.cookie("userUrl", req.url);
        res.redirect("/cookie"); //redirect means request the specified path again, js will run from the beginning again
    } else {
        next();
    }
}); //next() and res cannot coexist

app.get("/cookie", (req, res) => {
    res.send(`
        <form action="/cookie" method="post">
            <input type="checkbox" name="idunno" value="ikr">In order to use this site, you have to accept cookies
            </br>
            <input type="submit" value="submit here!">
        </form>
    `); //type=submit sets the submit button. The text inside is set by its value
});

app.post("/cookie", (req, res) => {
    console.log("req.body: ", req.body); //return {idunno:ikr} when checkbox is checked
    if (req.body.idunno == "ikr") {
        res.cookie("cookiePolicyAccepted", true);
        console.log(req.cookies.userUrl);
        res.redirect(req.cookies.userUrl);
    } else {
        res.send(
            `<h1>Sorry Sir, you cannot use the site without accepting cookies!</h1>`
        );
    }
});

var auth = function(req, res, next) {
    //come first
    //header automatically set once successfully inserting pw and username, so that, user doesnt need to reenter pw and username everytime visiting the page
    var creds = basicAuth(req);
    if (!creds || creds.name != "hello" || creds.pass != "hihi") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
}; // app.use(auth);  //or put it in the middle: app.get("/", auth, ()=>)

app.get("/ticker", auth, (req, res) => {
    res.sendFile(__dirname + "/projects" + "/ticker");
});

app.use(express.static(__dirname + "\\projects")); //'\\'or '/' is accepted here. 'Use' method handle all types of request.method.
//'/' will be automaticaly added e.g. /Carousel -> /Carousel/
//if no file is specified, index.html is refered automatically.

///////////////////////////////
app.get("*", (req, res) => {
    //to handle incorrect url given by user
    console.log("* running!!!!!!!");
    res.send("invalid url!");
});
/////////////////////////////////
app.listen(8081, () => console.log("I am a listening bot..."));
