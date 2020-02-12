const readline = require ('readline')

const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(question){
    return new Promise(function(resolve, reject){
        readlineInterface.question(question, resolve)
    })
}

async function guessNum(){
//Ask if the guessed number is correct
  let guess = await ask('Did I guess your secret number?')
  guess==="Y" || guess === "y"|| guess==="Yes"
      console.log("Yay! I am SMART") 
      process.exit() 
//the progrem exits and no more response is needed.
}
guessNum()

