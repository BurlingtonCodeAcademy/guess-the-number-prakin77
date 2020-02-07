const readline = require('readline')

const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(question) {
    return new Promise(function (resolve, reject) {
        readlineInterface.question(question, resolve)
    })
}

async function guess() {
    //Codes to generate loop of questions
    let guess = await ask("Is it Random#?")
    // generates a random number 
    while (guess !== "Y" && guess !== "y" && guess !== "Yes") {
        let newGuess = await ask("is it higher or lower?")
        if (newGuess === "H" || newGuess === "h" || newGuess === "Higher") {
            guess = await ask("Is it + 1Random#?")
            //if higher, generates a random number in higher range
        }

        else if (newGuess === "L" || newGuess === "l" || newGuess === "Lower") {
            guess = await ask("Is it + a new 2Random#?")
        //if lower, generates a random number in lower range
        }
    }
    process.exit()
}
guess()