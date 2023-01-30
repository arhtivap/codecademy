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

function getAbsoluteDistance(num1,num2) {
    return Math.abs(num1-num2)
}

function compareGuesses(humanGuess,computerGuess,targetNumber) {
    checkUserGuess(humanGuess)
    const humanDifference = getAbsoluteDistance(humanGuess,targetNumber)
    const computerDifference = getAbsoluteDistance(computerGuess,targetNumber)
    if (humanDifference <= computerDifference) {
       return true 
    } else {
       return false 
    }
}

function updateScore(winner) {
    if (winner == 'human') {
        humanScore += 1
    } else {
        computerScore += 1
    }
}

function advanceRound() {
    currentRoundNumber += 1
}
