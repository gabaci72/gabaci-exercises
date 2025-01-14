/*Arrays and Functions */
const concept = ['arrays', 'can', 'be', 'mutated'];

console.log(concept); // This will output: ['arrays', 'can', 'be', 'mutated']

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

/* 1. In main.js, there is an array concept. There is also a function changeArr that will assign the element in index 3 of an array to 'MUTATED'. The function changeArr was called with an argument of concept.

Underneath the function call, log concept to the console to check if this reassignment mutated the array.

Do not alter the existing code, add a console.log() statement with concept under the existing code to find the value of concept.

Checkpoint 2 Step instruction is unavailable until previous steps are completed */

// Log the concept array to the console
console.log(concept); // This will output: ['arrays', 'can', 'be', 'MUTATED']

/* 2. Let’s double check what happens if we mutate an array using a built-in method inside a function.

Under the console.log() statement, define another function named removeElement that takes a parameter of newArr. Inside the function body call .pop() on newArr. */

// Define the removeElement function
function removeElement (newArr) {
  newArr.pop()
}

// 3. Call removeElement() with an argument of concept.

removeElement(concept);

/* 4.After calling removeElement(concept), check the value of concept by logging it to console.

Notice that in both cases, the change to the array was maintained outside of the function!*/

// Log the concept array again to check the change
console.log(concept); // This will output: ['arrays', 'can', 'be']








