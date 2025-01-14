const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

/*
1.Individual elements in arrays can also be stored to variables.

Create a variable named listItem and set it equal to the first item in the famousSayings array using square bracket notation ([]).

Then use console.log() to print the listItem variable to the console.
 */

const listItem = famousSayings[0];
console.log(listItem);

/*
2.
Now, console.log() the third element in the famousSayings array using bracket notation to access the element.

Do not save the element to a new variable before you log it.
 */
console.log(famousSayings[2]);

/*
3.
Awesome, you can access each element in an array using the index. But what happens if you try to access an index that is beyond the last element?

Try to log the item at index [3] of famousSayings to the console. What is logged to the console?
 */
console.log(famousSayings[3]);


