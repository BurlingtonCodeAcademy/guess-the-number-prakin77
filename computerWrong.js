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
//if the response is Y, y or Yes, the progrem exits and no more response is needed.
//But need to ask if its Higher or Lower if the answer is not Y, y or Yes.
} else {
    console.log("Is it Higher (H) or Lower (L)?")  
        }
}
guessNum()
