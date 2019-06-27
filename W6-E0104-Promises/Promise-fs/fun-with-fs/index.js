const fs = require("fs");

logSizes(`${__dirname}/files`).then(() => console.log("done!"));

function logSizes(path) {
    return fs.promises.readdir(path, { withFileTypes: true }).then(files => {
        //resolve files
        //when .promises is used, no resolve and reject would be seen.
        //promises and promisify can only be applicable on node-style function because its reject (err) and resolve (return values such as files, stats)are defined
        const promises = [];
        for (let i = 0; i < files.length; i++) {
            const nextPath = `${path}/${files[i].name}`;
            if (files[i].isDirectory()) {
                promises.push(logSizes(nextPath));
            }
            if (files[i].isFile()) {
                promises.push(
                    fs.promises.stat(nextPath).then(stats => {
                        console.log(`${nextPath}: ${stats.size}`); //no resolve here
                    })
                    //alternative
                    // console.log(nextPath + ": " + fs.statSync(nextPath).size)
                );
            }
        }
        return Promise.all(promises);
    });
}
// var promise1 = Promise.resolve(3);
// var promise2 = 42; //ONLY in promise all, resolve() is not necesarry. Because it will automatically resolve an array of all returned results of elements in the passed array.
// var promise4 = "hihi"; //ONLY in promise all, resolve() is not necesarry
// var promise3 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 100, 'foo');
// });
//
// Promise.all([promise1, promise2, promise3, promise4]).then(function(values) {
//   console.log(values);
// });
// expected output: Array [3, 42, "foo", "hihi"]

//keep in mind, resolve() in Promise must be used in the beginning of the chain. Return can be used in Then wihout promise.> y,
