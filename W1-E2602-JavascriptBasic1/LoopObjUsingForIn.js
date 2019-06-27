var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA"
};
var b = {};

for (var n in a) {
    b[a[n]] = n;
}

console.log(b);
