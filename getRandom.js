function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
    //This throws the random number between two numbers
  }
  
  console.log(getRandom(0, 100))

// Please think of a number between 1 and 100 (inclusive).
// I will try to guess it.

// Is it... 50? N
// Is it higher (H), or lower (L)? H
// Is it... 75? N
// Is it higher (H), or lower (L)? L
// Is it... 63? N
// Is it higher (H), or lower (L)? H
// Is it... 69? N
// Is it higher (H), or lower (L)? L
// Is it... 66? Y
// Your number was 66!
// I guessed it in 5 tries.