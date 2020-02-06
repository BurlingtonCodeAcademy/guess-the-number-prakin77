function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
    //The maximum is exclusive and the minimum is inclusive
  }
  
  console.log(getRandom(0, 100))

  const readline = require ('readline')

const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(question){
    return new Promise(function(resolve, reject){
        readlineInterface.question(question, resolve)
    })
}

async function hello(){
  //if name is Darth Voldemort Lex Luthor "NOOOO! That's impossible!"
  //else say "Hello!"
  let name = await ask('What is your name?')
  if (name==="Darth" || name==="Voldemort" || name==="Lex Luthor"){
      console.log("NOOO! That's impossible!")  
  } else {
      console.log("Hello! " + capitalize(name) + "!")  
  }
  process.exit()
}

hello()