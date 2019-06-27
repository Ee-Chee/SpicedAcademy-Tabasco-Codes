let http = require("http");

let server = http.createServer(function(request, response) {
    console.log("REQUEST METHOD", request.method);
    console.log("REQUEST URL", request.url);
    console.log("REQUEST HEADERS", request.headers);

    request.on("error", function(err) {
        //necessary. If error is not handled, the process will end
        console.log(err);
    });

    if (request.method == "GET") {
        response.statusCode = 200;
        response.setHeader("Content-type", "text/html");
        response.write(`<h1>HI TABASCO !</h1>`); //also response.end(`<h1>HI TABASCO !</h1>`)
        response.end();
    }

    if (request.method == "POST") {
        //use Postman, select Post, insert url, select body, x-www-..., insert key and value
        var body = "";
        request
            .on("data", function(chunk) {
                console.log("CHUNKS", chunk);
                body += chunk;
            })
            .on("end", function() {
                console.log("BODY: ", body);
                response.end();
            });
    }
});

server.listen(8080, () => console.log("I'm listening")); //optional callback function here
//user doing requests on port 8080. Check out localhost:8080
