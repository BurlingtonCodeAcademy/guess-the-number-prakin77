const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve);
    });
}

function sanitize(string) {
    string = string
        .toString()
        .trim()
        .toLowerCase();
    return string;
}

// Creates a random integer between two numbers
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
    //This throws the random number between two numbers
}

start();

async function start() {
    console.log("THIS IS A GUESSING GAME"); //title
    console.log("Here, I'll make up a number \nand you try to guess it")
    console.log("I can only hint you if your \nnumber is Higher or Lower \n................")

    //Game setup
    let minRange = await ask("What is the minimum range of your guess? "
    );
    minRange = +minRange;
    let maxRange = await ask("What is the maximum range of your guess? "
    );
    maxRange = +maxRange;
    console.log("I've now guessed a \nnumber between that range! \................");
    const compGuess = randomInteger(minRange, maxRange);
    let humanGuess = null;

    while (humanGuess !== compGuess) {
        humanGuess = await ask("What's your guess? ");

        if (humanGuess < compGuess) {
            console.log("Sorry! Try guessing it little higher!");
        } else if (humanGuess > compGuess) {
            console.log("Sorry! Try guessing it little lower!");
        } else {
            console.log("Yes! " + compGuess + " Thats correct. \nYou guessed it right.");
            process.exit();
        }
    }
}
