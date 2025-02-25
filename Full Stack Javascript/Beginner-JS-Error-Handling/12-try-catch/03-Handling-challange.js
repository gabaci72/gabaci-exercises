// If you want to challenge yourself:

// Force different built-in error object to be thrown in a try...catch statement and see when the messages are different.
// Test out what different data types you can throw.
// Use try...catch for a function that accepts user input to allow errors to be thrown but your program to continue running
function testErrors() {
    try {
      // Force a ReferenceError
      let result = undefinedVariable;
    } catch (e) {
      console.log('ReferenceError caught:', e.message);
    }
  
    try {
      // Force a TypeError
      null.f();
    } catch (e) {
      console.log('TypeError caught:', e.message);
    }
  
    try {
      // Throw a string
      throw "This is a string error";
    } catch (e) {
      console.log('String error caught:', e);
    }
  }
  
  function userInputFunction(input) {
    try {
      if (typeof input !== 'string') {
        throw new Error('Input must be a string');
      }
      console.log('User input is valid:', input);
    } catch (e) {
      console.log('Error:', e.message);
    }
  }
  
  // Test the functions
  testErrors();
  userInputFunction(123); // Invalid input
  userInputFunction('Hello'); // Valid input
  