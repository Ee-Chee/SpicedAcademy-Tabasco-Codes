function fizzbuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            if (i % 5 == 0) {
                console.log("fizzbuzz");
            } else {
                console.log("fizz");
            }
        } else {
            if (i % 5 == 0) {
                console.log("buzz");
            } else {
                console.log(i);
            }
        }
    }
}
//install Prettier-Atom. Configurate settings: check 'ESLint integration', 'Format files on Save' and 'Run Prettier last'
//copy paste in powershell (!wsl nor bash): wget https://gist.githubusercontent.com/spicedacademy/c846c627c4df1bcd255c7bf6eb92a15a/raw/2d7262cbff80936fd721678d8c98c89c3b0e8a05/.eslintrc.json -out ~/.eslintrc.json
