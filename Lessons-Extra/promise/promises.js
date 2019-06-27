module.exports.first = function first() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000)
    });
};

module.exports.second = function second() {
    return new Promise((resolve, reject) => {
        resolve(2);
    });
};

module.exports.third = function third() {
    return new Promise((resolve, reject) => {
        resolve(3);
    });
};

module.exports.dbl = function dbl(n) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            if (isNaN(n)) {
                reject(new Error("Ivana's custom error message! Bad user! Bad!"))
            } else {
                resolve(n * 2)
            }
        }, 1500)
    })
}
