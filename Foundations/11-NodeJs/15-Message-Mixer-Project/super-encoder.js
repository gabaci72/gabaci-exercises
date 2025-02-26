const { caesarCipher, symbolCipher, reverseCipher } = require('./encryptors.js');

const encodeMessage = (str) => {
  const caesarResult = caesarCipher(str, 6);
  const symbolResult = symbolCipher(caesarResult);
  const reverseResult = reverseCipher(symbolResult);
  console.log("Caesar Result:", caesarResult);
  console.log("Symbol Result:", symbolResult);
  console.log("Reverse Result:", reverseResult);
  return reverseResult;
};

const decodeMessage = (str) => {
  const reverseResult = reverseCipher(str);
  const symbolResult = symbolCipher(reverseResult);
  const caesarResult = caesarCipher(symbolResult, -6);
  console.log("Reverse Result:", reverseResult);
  console.log("Symbol Result:", symbolResult);
  console.log("Caesar Result:", caesarResult);
  return caesarResult;
};

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  console.log("Received input:", str);
  console.log("Command argument:", process.argv[2]);
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } else if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  }

  return output;
};

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', (input) => {
  const output = handleInput(input);
  process.stdout.write(output + '\n');
  process.exit();
});