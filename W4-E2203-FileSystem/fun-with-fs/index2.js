const fs = require("fs");
let returnObj = mapSizes(__dirname + "/files");
function mapSizes(path) {
    //Can't set properties on undefined.
    //Add obj[file.name] = {} right after obj = {} -->obj[file.name][file.name2] works
    let obj = {};
    // console.log(obj);
    const files = fs.readdirSync(path, { withFileTypes: true });

    files.forEach(file => {
        if (file.isFile()) {
            obj[file.name] = fs.statSync(path + "/" + file.name).size;
        } else {
            let tempPath = path;
            tempPath += "/" + file.name;
            obj[file.name] = mapSizes(tempPath);
        }
    });
    // console.log("end");
    // console.log(obj);
    return obj;
}

let str = JSON.stringify(returnObj, null, 4); //null function; 4 white-space

fs.writeFileSync("files.json", str);
