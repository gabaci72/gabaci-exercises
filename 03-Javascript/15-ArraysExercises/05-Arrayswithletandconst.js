let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
console.log(condiments); // This will output: ['Mayo', 'Mustard', 'Soy Sauce', 'Sriracha']

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

/* 1.Below the two existing arrays, re-assign the element in index 0 of condiments to 'Mayo'.

Log the updated array, condiments, to the console.*/

// Re-assign the element at index 0 to 'Mayo'
condiments[0] = 'Mayo';

// Log the updated array
console.log(condiments); // This will output: ['Mayo', 'Mustard', 'Soy Sauce', 'Sriracha']

/*2. Below your code from Step 1, reassign condiments to be a new array that contains a single string ['Mayo']

Log the result to the console.

Notice that you can re-assign elements in an array and re-assign an entire new array to a variable declared using the let keyword.*/
// Reassign condiments to a new array with a single string 'Mayo'
condiments = ['Mayo'];

// Log the result
console.log(condiments); // This will output: ['Mayo']

/*3. Below your code from Step 2, re-assign the last item from the utensils array to 'Spoon'.

Log the updated array to the console. */

// Re-assign the last item to 'Spoon'
utensils[utensils.length - 1] = 'Spoon';

// Log the updated array
console.log(utensils); // This will output: ['Fork', 'Knife', 'Chopsticks', 'Spoon']




