const { first, second, third, dbl } = require("./promises"); //import the function

// Using Promise.all

let arrOfPromises = [];

for (let i = 0; i < 50; i++) {
    arrOfPromises.push(dbl(i));
}

Promise.all(arrOfPromises) //all functions inside the array run async. Order is important here!

    .then(results => {
        //the results are an array storing all the returned value of functions based on the order(FCFS)
        console.log(results);
    })

    .catch(err => {
        //when any dbl(i) breaks and rejects an error, catch will execute
        console.log(err);
    });

// promisifying functions using util.promisify

var fs = require("fs");
const util = require("util");
const readdir = util.promisify(fs.readdir); //3 ways to define promise constructor for using promise...then.
//promisify, old-fasioned way(by defining inside function, and require("fs").promises
readdir(__dirname) //start passing argument to the constructor function imported from promises.js
    .then(files => {
        console.log(files);
    })

    .catch(err => {
        //catch error when something goes wrong in the functions
        console.log(err);
    });

// working with functions that return Promises
dbl(3) //use Promise.all...then when sync is not important in the first place but demanded after executing those functions.
    .then(() => {
        return dbl(5);
    })

    .then(() => {
        return dbl(11);
    })

    .then(() => {
        return dbl(77);
    })

    .catch(err => {
        console.log(err);
    });
