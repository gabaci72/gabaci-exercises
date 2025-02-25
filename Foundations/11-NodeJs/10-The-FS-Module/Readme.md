# Instructions
## Treasure Hunt

1. Task
We’ve created a devious treasure hunt for you! Your task is to use fs.readFile() to figure out the secret word and assign that value to the secretWord variable in app.js. Here’s your first clue, found scratched into walls of an abandoned castle: fileOne.txt.

There are many ways to complete this treasure hunt! You could write one program in app.js to solve the puzzle or you can run app.js to gain new insight and then change the program based on what you’ve figured out.

If you want some direction, but aren’t quite ready to check out the hint: we suggest you use the fs.readFile() method to print the contents of fileOne.txt.

We created the following error-first callback function to start:

let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
}; 


Next we ran:

fs.readFile('./fileOne.txt', 'utf-8', readDataCallback);


This gave us the clue that the next file was called anotherFile.txt, so we ran:

fs.readFile('./anotherFile.txt', 'utf-8', readDataCallback);


That gave us the clue that the next file was called finalFile.txt, so we ran:

fs.readFile('./finalFile.txt', 'utf-8', readDataCallback);


That gave us the secret word!