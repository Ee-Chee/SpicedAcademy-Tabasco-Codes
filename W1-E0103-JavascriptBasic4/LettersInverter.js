function invertCase(str) {
    var temp = str.split("");
    for (var i = 0; i < temp.length; i++) {
        if (temp[i] != temp[i].toUpperCase()) {
            temp[i] = temp[i].toUpperCase();
        } else {
            temp[i] = temp[i].toLowerCase();
        }
    }
    str = temp.join();
    return str;
}

console.log(invertCase("4MonKeY2"), invertCase("!PuncH?Zzz"));
