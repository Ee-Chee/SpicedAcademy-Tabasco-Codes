module.exports = function fn(arg) {
    if (Array.isArray(arg)) {
        return arg.map(item => fn(item));
    } else if (typeof arg === "string") {
        return arg.split("").reduce((tot, letter) => letter + tot);
    } else {
        return null;
    }
};
