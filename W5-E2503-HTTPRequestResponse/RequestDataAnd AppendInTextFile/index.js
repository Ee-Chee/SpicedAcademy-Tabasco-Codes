let http = require("http");
let fs = require("fs");
let str;

let server = http.createServer(function(request, response) {
    console.log("REQUEST METHOD", request.method);
    console.log("REQUEST URL", request.url);
    // console.log("REQUEST HEADERS", request.headers);

    request.on("error", function(err) {
        //necessary. If error is not handled, the process will end
        console.log(err);
    });
    response.statusCode = 200;
    str =
        Date() +
        "\t" +
        request.method +
        "\t" +
        request.url +
        "\t" +
        request.headers["user-agent"] +
        "\n";
    fs.appendFile("requests.txt", str, err => {
        if (err) {
            throw err;
        }
        console.log("done!", request.url);
    });

    // if (request.url == "/requests.txt") {
    //     response.setHeader("Content-type", "text/plain");
    //     let rs = fs.createReadStream("requests.txt");
    //     rs.pipe(response);
    //
    //     response.end();
    // }

    // response.end(); dont use it here. It fires twice in the result. end method sends the request.
});

server.listen(8080, () => console.log("Hello Im bot!")); //optional callback function here
//user doing requests on port 8080. Check out localhost:8080
