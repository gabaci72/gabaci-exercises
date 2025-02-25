// let error = Error('Error message: ');
// console.log(error.message);
// Output:
// Error message:
// let error = new Error('Error message: ');
// console.log(error.message);
// Output:
// Error message:

// try {
//     // Code to throw an error
//     throw new Error('Error message');
//     } catch (error) {
//     // Code to run when an error is caught
//     console.log('Error caught:', error.message);
//     }
// // Output:
// // Error caught: Error message

// Create an error
let error = new Error('Username is missing');

// Throw an error
try {
throw error;
} catch (e) {
// Catch and handle errors
console.log('Error caught:', e.message);
}

// Continuing the program
console.log('The program continues.');