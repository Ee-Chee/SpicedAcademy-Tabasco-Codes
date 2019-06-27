function reverseArr(arr) {
    var revArr = [];
    for (var i = 0; i < arr.length; i++) {
        revArr.unshift(arr[i]); //alternative: revArr.unshift(arr.slice(i, i + 1).shift()); //use slice to keep origninal array
    }
    console.log(arr);
    return revArr;
}

console.log(reverseArr([1, 2, 3, 4, 5, 6, 7]));
console.log(reverseArr(["a", "b", "c", "d"]));

// revArr = arr;
// revArr.reverse();
// dont use these, it returns both reversed arr. arr should remain unchanged.

//dont use new Array() to create new array unless it is used to create an empty array with certain length.
