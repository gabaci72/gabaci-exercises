/*In this project we will build a Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.*/

let userName = "Seriano";
// Define userName as an empty string

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

// This code checks if userName has a value and logs the appropriate greeting.
const userQuestion = "Will I have a good day today?";
// Define userQuestion

// Log the user's question
console.log(`${userName} asked: ${userQuestion}`);
//This will print the user’s name along with the question they asked.

let randomNumber = Math.floor(Math.random() * 8);
//We need to generate a random number between 0 and 7.

let eightBall = ''; //Create one more variable named eightBall, and set it equal to an empty string

/*switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Error';
}*/

//This switch statement checks the value of randomNumber and assigns the corresponding Magic Eight Ball phrase to eightBall

if (randomNumber === 0) {
    eightBall = 'It is certain';
  } else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
  } else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
  } else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
  } else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
  } else if (randomNumber === 5) {
    eightBall = 'My sources say no';
  } else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
  } else if (randomNumber === 7) {
    eightBall = 'Signs point to yes';
  } else {
    eightBall = 'Error';
  }
  //This if/else if/else structure achieves the same result as the switch statement. Run the program multiple times to see different random results.

console.log(eightBall); //Use the console.log() method to print the Magic Eight Ball’s response.

