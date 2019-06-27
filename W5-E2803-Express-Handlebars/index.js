const express = require("express");
const app = express();
var hb = require("express-handlebars");
app.engine("handlebars", hb());
app.set("view engine", "handlebars");
const fs = require("fs");
//////////////////////////////////////////////////////
let arr = [];
fs.readdir("./projects", { withFileTypes: true }, function(err, files) {
    //"./projects" same as __dirname + "/public"
    if (err) {
        console.log("bro, err-.-");
    } else {
        files.forEach(dir => {
            arr.push(dir.name);
        });
    }
});
//render sends response in express
// specific to templating engines ==like
//handlebars!

app.get("/projects", (req, res) => {
    res.render("greetings", { proname: arr, layout: "main" });
});

app.get("/projects/:projectName/description", (req, res) => {
    //it is not case sensitive for the input project name!
    // console.log(req.url);
    let data = JSON.parse(fs.readFileSync("description.json")); //read JSON data! The same path with index.js
    // console.log(data);
    let selectedPro = req.params;
    let j = 0;
    // console.log(req.params); //an object { projectName: --> arr[i]}
    for (let i = 0; i < data.length; i++) {
        if (selectedPro.projectName === data[i].name) {
            res.render("descriptioncontent", {
                proname: arr,
                tit: data[i].name,
                des: data[i].description,
                layout: "main"
            });
        } else {
            // handle /projects/project-that-does-not-exist/descriptionk
            j++;
            if (j == data.length) {
                res.redirect("/projects");
            }
        }
    }
});

//tells server to look inside of public
//for static file
app.use(express.static("./projects"));
//Files contained in the directory named "projects" will now be served from "/". That is, the word "projects" will not appear in the url.
//if /Carousel is inserted /Carousel/index.html is automatically read.
app.use(express.static("./public"));
//this line is needed since static ./projects is used. It is used to clearify the path for handlebars .css, images , etc to refer. Otherwise, css and images wouldnt take effect in this example.
app.get("*", (req, res) => {
    //to handle incorrect url given by user
    //but this doesnt handle /projects/project-that-does-not-exist/description because it matches get url condition above
    console.log("* running!!!!!!!");
    res.redirect("/projects");
});

app.listen(8080, () => console.log("Im Bot serving for Leng's portfolio!"));
