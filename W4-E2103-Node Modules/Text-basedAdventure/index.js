const chalk = require("chalk");

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let story = {
    q: "Welcome to The Land Of Wizards! Would you like to play?",
    answers: {
        yes: {
            q:
                "You are alone in a dark forest and facing a fork in the road. Which direction do you turn?",
            answers: {
                left: {
                    q:
                        "There's a scary wizard! He asks you a tough question. What's 1+1?",
                    answers: {
                        "2": "congratulations!"
                    }
                },
                right: "This was not the right choice. Goodbye!"
            }
        },
        no: "Alright then. Enjoy your day!"
    }
};

console.log(chalk.yellowBright("Heyyyyyyyyyyyyyy!"));

var insArr = ["yes", "no"];
var display = insArr[0] + "||" + insArr[1] + " ";
function askQuestion(obj) {
    rl.question(chalk.green(obj.q + " " + chalk.red(display)), ans => {
        const ansCheck = obj.answers[ans];

        if (typeof ansCheck == "string") {
            console.log(obj.answers[ans]);
            rl.close();
        } else if (typeof ansCheck == "object") {
            obj = obj.answers[ans];
            insArr = Object.keys(obj.answers);
            // console.log(insArr);
            if (insArr[1] === undefined) {
                display = "";
            } else {
                display = insArr[0] + "||" + insArr[1] + " ";
            }
            askQuestion(obj);
        } else {
            console.log("invalid answer, please try again");
            askQuestion(obj);
        }
    });
}
askQuestion(story);
