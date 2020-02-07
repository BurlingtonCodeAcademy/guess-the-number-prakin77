const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve);
    });
}

start();

async function start() {
    console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
    //This throws the random number between two numbers
}

let minValue = 0;
let maxValue = 100;
let randomNum = getRandom(minValue, maxValue)

async function guess() {
    //Codes to generate loop of questions
    let guess = await ask("Is it " + randomNum + " ?")
    // generates a random number 
    while (guess !== "Y" && guess !== "y" && guess !== "Yes") {
        let newGuess = await ask("is it higher or lower?")
        if (newGuess === "H" || newGuess === "h" || newGuess === "Higher") {
            minValue = randomNum
            randomNum = getRandom(minValue, maxValue)
            guess = await ask("Is it " + randomNum  + " ?")
            //if higher, generates a random number in higher range
        }

        else if (newGuess === "L" || newGuess === "l" || newGuess === "Lower") {
            maxValue = randomNum
            randomNum = getRandom(minValue, maxValue)
            guess = await ask("Is it " + randomNum + " ?")
            //if lower, generates a random number in lower range
        }
    }
    process.exit()
}
guess()
