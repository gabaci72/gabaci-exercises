try {
    throw Error('This error will get caught');
  } catch (e) {
    console.log(e);
  }
  // Prints: This error will get caught
  
  console.log('The thrown error that was caught in the try...catch statement!');
  // Prints: 'The thrown error that was caught in the try...catch statement!'
  // The program continues to run after the error is caught
  // The error is not thrown to the console
    