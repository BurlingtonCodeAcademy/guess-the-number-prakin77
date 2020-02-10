const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve);
    });
}

start();

async function start() {
    console.log("THIS IS A GUESSING GAME"); //title
    console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
    let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
    console.log('You entered: ' + secretNumber + '\n................ \nBelow is what I guessed \n................');

//Random Number Generator function that uses (max-min)/2 for quicker answer
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(((max - min) / 2) + min)
}

// Setting up the minimum and maximim values
let minValue = 0;
let maxValue = 100;
let randomNum = getRandom(minValue, maxValue)
let guessCount = 1; // global variable to count guess count

// Setting up the guessing function and prompting if it is your number.
async function guess() {
    let guess = await ask("Is it " + randomNum + " ?")

    //If guess is Yes, then end the process.
    //If guess is Not Yes, then prompt for another random number in a loop
    //Prompt for Higher or Lower in loop when answer is other than Yes.
    while (guess !== "Y" && guess !== "y" && guess !== "Yes") {
        let newGuess = await ask("is it higher or lower?")
        if (newGuess === "H" || newGuess === "h" || newGuess === "Higher") {
            minValue = randomNum //Random number is new minimum range
            randomNum = getRandom(minValue, maxValue)
            guess = await ask("Is it " + randomNum + " ?")
            guessCount += 1;
        }

        else if (newGuess === "L" || newGuess === "l" || newGuess === "Lower") {
            maxValue = randomNum //Random number is new maximum range
            randomNum = getRandom(minValue, maxValue)
            guess = await ask("Is it " + randomNum + " ?")
            guessCount += 1;
        }
    }
    console.log("Your number was " + randomNum + "\nI guessed it in " + guessCount + " " + "tries.")
    process.exit()
}
guess()
}
