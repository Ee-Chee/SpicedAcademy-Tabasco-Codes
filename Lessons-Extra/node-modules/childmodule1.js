exports.test1 = () => {
    console.log("hello!!!!!!");
};

module.exports = "string"; //test exports = "string";as well or module.exports=exports = "string";
// exports = function(msg) {
//     console.log(msg);
// };

console.log(exports);

// exports and module.exports are the same unless you reassign exports within your module.
//
// The easiest way to think about it, is to think that this line is implicitly at the top of every module.
//
// var exports = module.exports = {};
// If, within your module, you reassign exports, then you reassign it within your module and it no longer equals module.exports. This is why, if you want to export a function, you must do:
//
// module.exports = function() { ... }
// If you simply assigned your function() { ... } to exports, you would be reassigning exports to no longer point to module.exports.
//
// If you don't want to refer to your function by module.exports every time, you can do:
//
// module.exports = exports = function() { ... }
// Notice that module.exports is the left most argument.
//
// Attaching properties to exports is not the same since you are not reassigning it. That is why this works
//
// exports.foo = function() { ... }
