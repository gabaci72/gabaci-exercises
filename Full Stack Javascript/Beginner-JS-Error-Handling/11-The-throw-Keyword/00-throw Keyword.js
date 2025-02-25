// throw Error('Username or password does not match');
// // Error: Something wrong happened

// console.log('This will never run');

// The code will throw an error before reaching the `console.log` statement. Therefore, the message "This will never run" will not be logged to the console. The error message "Username or password does not match" will be thrown, and the script will terminate at that point.
// If you want to handle the error gracefully, you can use a `try...catch` block:  

// try {
//   throw Error('Username or password does not match');
// } catch (error) {
//   console.log(error.message); // Username or password does not match
// }
// console.log('This will run after the error is caught');

// In this case, the error will be caught, and the message "This will run after the error is caught" will be logged to the console. The `catch` block will handle the error, and the script will continue executing after the `try...catch` block.

// If you want to handle different types of errors differently, you can use multiple `catch` blocks or check the type of error within a single `catch` block. Here's an example:

try {
  throw Error('Username or password does not match');
} catch (error) {
  if (error.message === 'Username or password does not match') {
    console.log('Authentication error:', error.message);
  } else {
    console.log('An unexpected error occurred:', error.message);
  }
}