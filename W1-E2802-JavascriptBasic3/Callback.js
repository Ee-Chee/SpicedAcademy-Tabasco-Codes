// function printObject(u, v) {
//     console.log("The value of " + v + " is " + u);
// }
//
// function printArray(x, y) {
//     console.log("The value of item " + y + " is " + x);
// }
//
// function each(a, callback) {
//     if (Array.isArray(a)) {
//         for (var i = 0; i < a.length; i++) {
//             printArray(a[i], i);
//         }
//     } else {
//         for (prop in a) {
//             printObject(a[prop], prop);
//         }
//     }
// }
// each([1, 2, 3, 4, 5], printArray);
// each({ a: 1, b: 2, c: 3 }, printObject);

function each(objOrArr, callback) {
    if (Array.isArray(objOrArr)) {
        objOrArr.forEach(callback);
    } else {
        for (var key in objOrArr) {
            callback(objOrArr[key], key);
        }
    }
}

each(
    {
        a: 1,
        b: 2
    },
    function(val, name) {
        console.log("The value of " + name + " is " + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

each(["a", "b"], function(val, idx) {
    console.log("The value of item " + idx + " is " + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'
