// module.exports.a = function() {
//     //export as an object. This is correct syntax for method.WRONG for function a(){}! Unless a = function a(){} or arrow function
//     console.log("hihi");
// };
//
// module.exports.test2 = function() {
//     console.log("hehe");
// };

function hello() {
    console.log("hohi");
}
module.exports = { hello };

// module.exports = () => {
//     console.log("arrowwww simplifies more further ");
// };

// module.exports.test2 = function() {
//     console.log("hehe");::
// };

// module.exports = "hoho"; //properties undefined, so string is not exported as an object but just a string.
