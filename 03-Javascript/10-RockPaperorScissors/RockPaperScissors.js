console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error! Invalid choice.");
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'You won with a secret cheat code!';
  }

  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
};


console.log(getUserChoice("Paper")); // should print 'paper'
console.log(getUserChoice("fork")); // should print 'Error!' and `undefined`

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

//console.log(getComputerChoice()); // should print 'rock', 'paper', or 'scissors'
//console.log(getComputerChoice()); // should print 'rock', 'paper', or 'scissors'
//console.log(getComputerChoice()); // should print 'rock', 'paper', or 'scissors'

// Remove the second declaration of determineWinner
// const determineWinner = (userChoice, computerChoice) => {
//   if (userChoice === computerChoice) {
//     return "The game is a tie!";
//   }
//
//   if (userChoice === "rock") {
//     if (computerChoice === "paper") {
//       return "The computer won!";
//     } else {
//       return "You won!";
//     }
//   }
//
//   if (userChoice === "paper") {
//     if (computerChoice === "scissors") {
//       return "The computer won!";
//     } else {
//       return "You won!";
//     }
//   }
//
//   if (userChoice === "scissors") {
//     if (computerChoice === "rock") {
//       return "The computer won!";
//     } else {
//       return "You won!";
//     }
//   }
// };

console.log(determineWinner("rock", "scissors")); // should print 'You won!'
console.log(determineWinner("rock", "paper")); // should print 'The computer won!'
console.log(determineWinner("rock", "rock")); // should print 'The game is a tie!'

console.log(determineWinner("paper", "rock")); // should print 'You won!'
console.log(determineWinner("paper", "scissors")); // should print 'The computer won!'
console.log(determineWinner("paper", "paper")); // should print 'The game is a tie!'

console.log(determineWinner("scissors", "paper")); // should print 'You won!'
console.log(determineWinner("scissors", "rock")); // should print 'The computer won!'
console.log(determineWinner("scissors", "scissors")); // should print 'The game is a tie!'

const playGame = () => {
  const userChoice = getUserChoice('scissors'); // You can change 'scissors' to 'rock' or 'paper'
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

// Call the playGame function to start the game
playGame();
