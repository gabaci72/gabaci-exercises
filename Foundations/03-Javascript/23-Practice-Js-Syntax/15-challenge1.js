/* Create a function colorMessage() that takes 2 string arguments, 
favoriteColor and shirtColor.

If the value of favoriteColor is the same as the value of shirtColor 
return the string 'The shirt is your favorite color!'.

If not, return the string 'That is a nice color.'

Feel free to test your code under the function definition.*/

// Create function below
// Create function below
function colorMessage(favoriteColor, shirtColor) {
    if (favoriteColor === shirtColor) {
        return 'The shirt is your favorite color!';
    } else {
        return 'That is a nice color.';
    }
}

// Test the function
console.log(colorMessage('blue', 'blue')); // Should return 'The shirt is your favorite color!'
console.log(colorMessage('blue', 'red'));  // Should return 'That is a nice color.'

