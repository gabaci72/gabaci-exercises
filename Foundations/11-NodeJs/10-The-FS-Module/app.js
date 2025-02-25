const fs = require('fs');

let secretWord = null;

let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
    // Update secretWord based on the content of finalFile.txt
    if (data.includes("secret word is")) {
      secretWord = data.split("secret word is")[1].trim();
    }
  }
};

// Read files in sequence as indicated by the clues
fs.readFile('./fileOne.txt', 'utf-8', (err, data) => {
  if (!err) {
    console.log(data); // For debugging purposes
    // Extract the name of the next file from the content
    const nextFile = data.match(/look at (\w+\.txt)/)[1];
    fs.readFile(`./${nextFile}`, 'utf-8', readDataCallback);
  }
});