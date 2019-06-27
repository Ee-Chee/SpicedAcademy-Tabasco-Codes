const express = require("express");
const app = express();
app.use(
    require("body-parser").urlencoded({
        extended: false
    })
);
app.use(require("cookie-parser")());
//////////////////////////////////Initialization finished
app.use(express.static(__dirname + "\\projects")); //use method handle all types of request.method

app.use((req, res, next) => {
    // redirect stuff :)
    next();
});

app.use((req, res, next) => {
    console.log("req.cookies", req.cookies);
    next();
});

app.post("/post-fun", (req, res) => {
    console.log("req.body: ", req.body);
    res.send("sending response!!!!!!!!!!!!!"); //end response
});

app.get("/hello/tabasco", (req, res) => {
    res.cookie("isLoggedOn", true); //cookie:set
    res.send("<h1>sending a response from express!</h1>");
});

app.get("/hello/:name/:animal", (req, res) => {
    console.log("req.params: ", req.params);
    console.log("my cookies: ", req.cookies); //cookies:read
    res.json(req.params);
});

app.get("/serve/html", (req, res) => {
    if (req.cookies.isLoggedOn) {
        res.sendFile(__dirname + "/index.html"); //direct to the file
    } else {
        res.send("you did something wrong");
    }
});

app.get("*", (req, res) => {
    //to handle incorrect url given by user
    console.log("* running!!!!!!!");
    res.redirect("/serve/html"); //redirection
});
//5 ways of response: res.send, res.json, res.render, res.redirect, res.sendFile
app.listen(8080, () => console.log("Listening!!!!!"));
