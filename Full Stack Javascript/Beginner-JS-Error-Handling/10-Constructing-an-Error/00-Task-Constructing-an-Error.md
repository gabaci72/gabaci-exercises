# Constructing an Error

At the top of "00-Bugswithcode.js" add a console.log() that prints an error with the message 'User missing name'.

After running the code, take note of the console.log() at the bottom of main.js and if that line of code still runs.

The argument passed to the Error() function becomes the message property of the new error. You may use the Error() function create the error object or use the new keyword with the Error().

console.log(Error('Message goes here'));
// OR
console.log(new Error('Message goes here'));


Either line of code will do the same thing.