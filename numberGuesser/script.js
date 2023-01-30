let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function checkUserGuess(humanGuess) {
    if (humanGuess<0 || humanGuess>9) {
       alert('Your number is out of range.') 
    }
}

function generateTarget() {
    return Math.floor(Math.random()*10)  
  }