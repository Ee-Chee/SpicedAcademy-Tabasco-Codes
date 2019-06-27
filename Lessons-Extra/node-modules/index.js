//main module runs itself automatically similar as an immediately-invoked function
// console.log(module); exports==module.exports
//console.log(exports); //empty object. Put it in child modules so that main module can import the js file.
const a = require("./childmodule1"); //childmodule1.js will run first. Returned value from require() is exports of targeted module. Its properties and values are passed/imported.
console.log(a);

// a.test1();

console.log(exports); //Module is an object representing the current module. It is local to each module and it is also private. It is empty now.
// exports.test2 = () => {
//     console.log("hohohoho!!!!!!");
//console.log(exports);
// };
