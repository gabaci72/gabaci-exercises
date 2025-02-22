/*The function makeGreeting() takes one string argument.

Write additional code to make makeGreeting() return a function.

The returned function should return a concatenation of the first string, a space, and the second string, such as “Hello World”.

You can uncomment the lines below the function to check your work.*/

function makeGreeting(string) {
return function(secondString) {
        return string + ' ' + secondString;
    };
 
 
}

let hello = makeGreeting('Hello');
let helloWorld = hello('World');
console.log(helloWorld);