var numbers = {
    1: "eins",
    2: "zwei",
    3: "drei",
    4: "vier",
    5: "funf",
    6: "sechs",
    7: "sieben",
    8: "acht",
    9: "neun",
    10: "zehn"
};

function translateNumberToGerman() {
    console.log("hello");
    try {
        askForNumber();
    } catch (e) {
        alert("Invalid number!");
        translateNumberToGerman();
    }
}

function askForNumber() {
    var input = prompt("Insert a number between one and ten"); //string
    var n = Number(input);

    if (typeof n === "number" && !isNaN(n) && n > 0 && n <= 10) {
        for (var x in numbers) {
            if (x == n) {
                alert(numbers[x]);
            }
        }
    } else {
        return abc;
    }
}

translateNumberToGerman();
