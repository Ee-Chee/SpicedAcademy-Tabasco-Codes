const countries = require("./countries");
test("When find is passed an empty string, it returns an empty array", () => {
    expect(countries.find("")).toEqual([]);
});

test("The array that it returns contains no more than four matches", () => {
    expect(countries.find("m").length).toBeLessThanOrEqual(4);
});

test("The search is case insensitive", () => {
    // console.log(countries.find("malaysia")[0], countries.find("MALAYSIA")[0]);
    expect(
        countries.find("malaysia")[0] === countries.find("MALAYSIA")[0]
    ).toBe(true);
});
test("If there are no matching countries, an empty array is returned", () => {
    expect(countries.find("as").length).toBe(0);
});

// npm test countries.test.js
