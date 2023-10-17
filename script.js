let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


// generateTargetFnx
const generateTarget = () => {
  const secretTargetNum = Math.floor(Math.random() * 10);
  return secretTargetNum;
}

// generateGuessesFnx
const compareGuesses = (humanGuess, computerGuess, secretNum) => {
  const humanDifference = Math.abs(humanGuess - secretNum);
  const computerDifference = Math.abs(compareGuesses - secretNum);

  if(humanDifference <= compareGuesses){
    return true;
  }else {
    return false
  }
}

// generateUpdateScore
const updateScore = winner => {
  let humanScore;
  let computerScore;

  if(winner === 'human'){
    humanScore++
  }else if (winner === 'computer'){
    computerScore++
  }
}

// generatingAdvanceRoundFnx
const advanceRound = () => {
  let currentRoundNumber;
  currentRoundNumber++
}

// THE SOLUTION
// const generateTarget = () => {
//     return Math.floor(Math.random() * 10);
//   }
  
//   const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
//     const humanDifference = Math.abs(targetGuess - humanGuess)
//     const computerDifference = Math.abs(targetGuess - computerGuess)
//     return humanDifference <= computerDifference;
//   }
  
//   const updateScore = winner => {
//     if (winner === 'human') {
//       humanScore++;
//     } else if (winner === 'computer') {
//       computerScore++;
//     }
//   }
  
//   const advanceRound = () => currentRoundNumber++;
  