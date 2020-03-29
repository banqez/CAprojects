let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => {
  return Math.floor(Math.random()*10)}

let compareGuesses = (humanGuess, computerGuess, targetGuess) => {
if (Math.abs(humanGuess - targetGuess) <= Math.abs(computerGuess - targetGuess)) 
{return true}
else {return false}  
}  


let updateScore = (winner) => { 
if (winner === 'human') {humanScore +=1}
else {computerScore +=1}
} 

let advanceRound = () => {
currentRoundNumber += 1 
}

