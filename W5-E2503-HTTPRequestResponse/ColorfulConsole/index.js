const http = require("http");
const ca = require("chalk-animation"); //npm install in node_modules
const chalk = require("chalk"); //npm install in node_modules
const querystring = require("querystring");

const server = http.createServer((req, res) => {
    if (req.on("error", err => console.log(err)));
    if (res.on("error", err => console.log(err)));

    if (req.method == "GET") {
        res.end(
            `
            <!doctype html>
            <html>
            <title>Colors</title>
            <form method="POST">
              <input type="text" name="text">
              <select name="color">
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
                <option value="gray">gray</option>
                <option value="magenta">magenta</option>
                <option value="cyan">cyan</option>
              </select>
              <button type="submit">Go</button>
            </form>
            </html>`
        );
    }
    if (req.method == "POST") {
        var body = "";
        req.on("data", function(chunk) {
            body += chunk;
        }).on("end", function() {
            console.log(body);
            let myBody = querystring.parse(body);
            res.statusCode = 200;
            res.setHeader("Content-type", "text/html");
            res.write(`
            <title>${myBody.text}</title>
            <a href="/" style="color:${myBody.color}">${myBody.text}</a>
            `);
            res.end();
        });
    }
});

server.listen(8080, () => ca.rainbow("listening!"));
