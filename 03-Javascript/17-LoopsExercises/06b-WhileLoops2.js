const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
// Below the cards array, declare a variable, currentCard, with the let keyword but don’t assign it a value.
let currentCard

/* 2. Create a while loop with a condition that checks if the currentCard does not have that value 'spade'.

Inside the block of your while loop, add the following line of code:

currentCard = cards[Math.floor(Math.random() * 4)];

to Clipboard

Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We’ll use this number to index the cards array, and assign the value of currentCard to a random element from that array.

If you notice the Run button spinning continuously or a “Lost connection to Codecademy” message in an exercise, you may have an infinite loop! If the stop condition for our loop is never met, we will create an infinite loop which stops our program from running anything else. To exit out of an infinite loop in an exercise, refresh the page — then fix the code for your loop.*/


while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

