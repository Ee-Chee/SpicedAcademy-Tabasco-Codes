function logType(a) {
    if (typeof a === "object") {
        if (Array.isArray(a)) {
            console.log('"array!"');
        } else if (a === null) {
            console.log('"null!"');
        } else {
            console.log('"object!"');
        }
    } else if (typeof a === "number") {
        if (isNaN(a)) {
            console.log('"not a number!"');
        } else {
            console.log('"number!"');
        }
        //console.log('"' + typeof a + "!" + '"');
    } else if (typeof a === "undefined") {
        console.log('"' + typeof a + '!"');
    } else if (typeof a === "null") {
        console.log('"' + typeof a + '!"');
    } else if (typeof a === "string") {
        console.log('"' + typeof a + '!"');
    } else if (typeof a === "boolean") {
        console.log('"' + typeof a + '!"');
    } else if (typeof a === "function") {
        console.log('"' + typeof a + '!"');
    } else {
        console.log('"I have no idea!"');
    }
}

logType(Symbol());
logType(undefined);
logType(null);
logType(34234324);
logType(NaN);
logType("Hello");
logType(true);
logType(function abc() {});
logType([]);
logType({});
