// console.log(process); // process.argv is important. Pass in arguments from command line
// console.log(process.argv[2]);
const url = require("url");
const myURL = url.parse(process.argv[2]);

console.log("The protocol is " + myURL.protocol);
console.log("The host is " + myURL.host);
console.log("The hostname is " + myURL.hostname);
console.log("The port is " + myURL.port);
console.log("The pathname is " + myURL.pathname);
console.log("The query is " + myURL.query);

const querystring = require("querystring");
const myQueryString = querystring.parse(myURL.query);

for (let x in myQueryString) {
    console.log("The value of the " + x + " parameter is " + myQueryString[x]);
}
