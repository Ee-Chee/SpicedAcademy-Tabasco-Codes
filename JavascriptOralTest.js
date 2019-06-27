var x = 10;
var doubleX;

function timesTwo(a) {
    return a * 2;
}

doubleX = timesTwo(x);

var numbers = [x, doubleX];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers = {};

numbers.y = doubleX;
