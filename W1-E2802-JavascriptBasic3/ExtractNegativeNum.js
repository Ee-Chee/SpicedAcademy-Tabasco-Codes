function getLessThanZero(a) {
    var negNum = [];
    for (var i = 0; i < a.length; i++)
        if (a[i] < 0) {
            negNum.push(a[i]);
        }
    return negNum;
}

console.log(getLessThanZero([2, 3, -213, 56, -98, -1, 0, 34, -15, 634]));
console.log(getLessThanZero([5, 6, 7, 10000]));
//use splice when a change of passed array is intended
