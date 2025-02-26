setImmediate(() => {
    console.log('Hello! My name is Codey.')
});
// console.log(setImmediate); // This will log the function definition of setImmediate to the console. 

// console.log(setInterval); // This will log the function definition of setInterval to the console.

// console.log(setTimeout); // This will log the function definition of setTimeout to the console.

// console.log(setImmediate); // This will log the function definition of setImmediate to the console.
//In Node.js, `setImmediate` is a function that schedules a callback to be executed in the next iteration of the event loop. It is similar to `setTimeout` with a delay of 0 milliseconds, but it is more efficient and is specifically designed for I/O-bound operations.
