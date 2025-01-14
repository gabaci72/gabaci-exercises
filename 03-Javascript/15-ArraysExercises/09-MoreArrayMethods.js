//More Array Methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

//1.Use the .shift() method to remove the first item from the array groceryList. Log the new groceryList to the console.
groceryList.shift();
// Log the updated groceryList to the console
console.log(groceryList); // This will output: ['bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains']

/* Under the code added in step 1, use the .unshift() method to add 'popcorn' to the beginning of your grocery list.

After calling .unshift() on groceryList, log groceryList to the console.

You may wish to delete the console.log() statement from the previous step. */
groceryList.unshift('popcorn');
// Log the updated groceryList to the console
console.log(groceryList); // This will output: ['popcorn', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains']

/* You’re in a hurry so you decide to ask a friend to help you with your grocery shopping. You want him to pick up the 'bananas', 'coffee beans', and 'brown rice'.

Under the code you added for step 2, use .slice() to provide your friend with a list of these three things.

Log this part of the list to the console. Unlike the two previous checkpoints, you should do both of these steps in one line.*/

// Use .slice() to get 'bananas', 'coffee beans', and 'brown rice' and log it
console.log(groceryList.slice(1, 4)); // This will output: ['bananas', 'coffee beans', 'brown rice']

/*After calling .slice() on groceryList, log the grocery list to the console one more time.

Notice that the groceryList array still contains the same items it had in Step 2. That means .slice() is non-mutating! You can confirm this in the link in the previous step. */

// Log the original groceryList to show it is unchanged
console.log(groceryList); // This will output: ['popcorn', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains']

/* 
Let’s find the index of a particular element in groceryList using .indexOf().

Call .indexOf() on groceryList to find the index of the element 'pasta' and save the returned value to a const variable named pastaIndex.

Then log pastaIndex to the console. (You may remove the other console.log() statements to declutter the terminal.) */

// Find the index of 'pasta' and save it to pastaIndex
const pastaIndex = groceryList.indexOf('pasta');

// Log pastaIndex to the console
console.log(pastaIndex); // This will output: 4


