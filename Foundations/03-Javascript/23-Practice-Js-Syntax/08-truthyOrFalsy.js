/* It can be hard to keep track of what’s truthy or falsy in JavaScript. 
Write a function, truthyOrFalsy(), that takes in any value and returns true 
if that value is truthy and false if that value is falsy.

You might find this condition helpful:

if (value) {
  // Do something here
}
*/
// Write your function here:

function truthyOrFalsy(value) {
    if (value) {
        return true;
    } else {
        return false;
    }
}

// Optimized version.
function isFalsyOrEmpty(value) { }
function truthyOrFalsy(value) {
    return !!value; // Convert value to boolean using double negation.
    // return value ? true : false; // Alternative using ternary operator.
}

// Uncomment these to check your work!




// Uncomment the line below when you're ready to try out your function
console.log(truthyOrFalsy(0)) // Should print false

// We encourage you to add more function calls of your own to test your code!






