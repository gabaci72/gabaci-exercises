console.log('This message will be printed to the console.');

function throwError() {
  // Define the variable before using it
  let notDefinedVar = "This is a defined variable";
  return notDefinedVar;
}

// Call throwError() below:
console.log('Because of the error, this will not be printed!');
console.log(throwError()); // This will print the defined variable