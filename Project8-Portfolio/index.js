const http = require("http");
const fs = require("fs");
const path = require("path");
var contentType;
//create dynamic interface
http.createServer(function(req, res) {
    if (req.method != "GET") {
        res.statusCode = 405; //Method not allowed error code
        return res.end(); //add return here to exit the function
    }

    const myPath = path.normalize(__dirname + "\\Projects" + req.url); //normalize a path by resolving or fixing '...' '\\\\' etc. see w3schools
    // console.log(myPath);
    // console.log(req.url);
    if (!myPath.startsWith(__dirname + "\\Projects")) {
        //backslash has its functionality. If it is used in a string, double slash it will do. \ is a path of server.
        //endsWith and startsWith are method of string.prototype.
        //allow only files contained in the projects directory to be served. Not letting user access index.js file. Private to server.
        res.statusCode = 403; //forbidden means that you dont have permission to access to particular file or the directory.
        return res.end();
    }
    fs.stat(myPath, function(err, stats) {
        //stats is the returned object containing size info. But it is used here to check if it is a file method isFile() is predefined without flag true unlike readdir
        if (err) {
            //prompts error to directory (non-file), file not found
            console.log(err);
            res.statusCode = 404;
            return res.end();
        } else if (stats.isFile()) {
            const readStream = fs.createReadStream(myPath); //create a stream to flow data, much faster. Streaming instead of downloading. Async.
            res.statusCode = 200;
            res.setHeader("Content-type", setContentType(path.extname(myPath))); //extname method return the ext of the file in the path
            //setHeader Content-type is a secure way to make sure it works in all browsers. Some browsers cannot recognize .json and so on.
            readStream.pipe(res); //method of createReadStream to direct the stream to response
            readStream.on("error", err => {
                //Important to add this error handler here for handling 8080 or 8080/
                res.statusCode = 404;
                return res.end();
            });
        } else if (req.url.endsWith("/")) {
            res.statusCode = 200;
            fs.createReadStream(myPath + "index.html").pipe(res);
        } else {
            //user requests an url without /. e.g. ../Carousel
            // fs.createReadStream(myPath + "/index.html").pipe(res); Adding a backslash here doesnt work here because
            //When user requests an url without "/" it means he can only access the folder or files in the previous directory
            //use view page source to check the .css file. It is located at 8080/styles.css but not Carousel/styles.css.
            //use redirect to solve the issue.
            res.setHeader("Location", req.url + "/");
            res.statusCode = 302; //301 is permanent, 302 is temporary redirect. This line telling browser to redirect.
            //Request the redirected url again (second time here)
            return res.end();
        }
    });
}).listen(8080, () => console.log("Hello Im bot Leng!"));

function setContentType(ext) {
    switch (ext) {
        case ".html":
            contentType = "text/html";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".js":
            contentType = "text/javascript";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".gif":
            contentType = "image/gif";
            break;
        case ".jpg":
            contentType = "image/jpeg";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".svg":
            contentType = "image/svg+xml";
            break;
        case ".html":
            contentType = "audio/mpeg3";
            break;
    }
    return contentType;
}
