function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(5, 10)); //15

console.log(sum(5, 10, 15)); //30;

console.log(sum(5, 10, 15, 100, 200)); //330
