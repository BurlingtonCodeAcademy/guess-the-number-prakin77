const readline = require('readline')

const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(question) {
    return new Promise(function (resolve, reject) {
        readlineInterface.question(question, resolve)
    })
}

async function guess() {
    let guess = await ask('Is it a new random number?')
    while (guess !== "Y" && guess !== "y" && guess && "Yes") {
        let newGuess = await ask('is it higher or lower?')
        if (newGuess === "H" || newGuess === "h" || newGuess === "Higher") {
            console.log(guess)
        }

        else if (newGuess === "L" || newGuess === "l" || newGuess === "Lower") {
        }
        guess = await ask('Is it + a new random number?')
    }
    process.exit()
}
guess()