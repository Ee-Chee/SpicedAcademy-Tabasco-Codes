const fs = require("fs");

logSizes(__dirname + "/files"); //__dirname is an argument of module refering to the current directory's path
//IMPORTANT! use node.exe to run index.js. Node on Ubuntu is not uptodate(node -v) but windows does
function logSizes(path) {
    fs.readdir(path, { withFileTypes: true }, function(err, files) {
        //readdir is async method(the execution will carry on first before callback function runs)
        //results returned in an array and saved to 'files'.
        //When withFileTypes is set to true, the results will contain fs.Dirent objects. It means we can use result1.name(), result2.isFile()...
        // console.log(files);
        // console.log(files[0].isFile());
        if (err) {
            //invalid path
            console.log(err);
        } else {
            //forEach is used for an Array to call a function once for each element. The function must take one arg which is the current element being passed.
            files.forEach(file => {
                if (file.isFile()) {
                    console.log(
                        path +
                            "/" +
                            file.name +
                            ": " +
                            fs.statSync(path + "/" + file.name).size //__filename return the path of the current file, i.e. index.js
                        //stat allows .name, .isFile() automatically unlike readdir
                    );
                } else {
                    //directory
                    let temp = path;
                    temp += "/" + file.name;
                    logSizes(temp);
                }
            });
        }
    });
}
