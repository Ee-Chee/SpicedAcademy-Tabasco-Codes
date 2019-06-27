// const test2 = require("./test2");
// test2.a(); //like accessing a method in an object

// const { test2 } = require("./test2"); //equal to an object => test2 = the imported function of test 2
// test2();

const { hello } = require("./test2");
console.log(hello());

// const test2 = require("./test2");
// console.log(test2());

// const { nothesamename } = require("./test2");
// console.log(nothesamename); ////undefined!!!!Must be the same name as imported function!

//////////////////////////////////////////////////////////////////JSON test
// const test = require("./test");
//
// console.log(test.hihi);
