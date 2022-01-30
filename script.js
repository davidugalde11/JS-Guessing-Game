let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  let humanAbsoluteValue = Math.abs(targetNumber - humanGuess);
  let computerAbsoluteValue = Math.abs(targetNumber - computerGuess);
  if (humanAbsoluteValue <= computerAbsoluteValue) {
    return true;
  }else{
    return false;
  }
};

const updateScore = winner => {
  switch(winner) {
  case('human'):
    humanScore += 1;
  case('computer'):
    computerScore += 1;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
};

