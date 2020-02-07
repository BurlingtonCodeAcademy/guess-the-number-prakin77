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
  if (guess==="Y" || guess === "y"|| guess==="Yes"){
      console.log("Yay! I am SMART") 
      process.exit() 
//the progrem exits and no more response is needed.
  } else {
      console.log("Damn! Let's move on to the next step of this game.")  
  }
}
guessNum()

