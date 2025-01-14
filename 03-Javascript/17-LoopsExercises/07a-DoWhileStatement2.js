// Write your code below
/* 1.We’d like a program to simulate part of the cake-baking process. Depending on the recipe, a different number of cups of sugar is required. Create the variable cupsOfSugarNeeded, and assign it a number value of your choosing.

The cups of sugar must be added to the batter one at a time. Declare the variable cupsAdded and assign it the value 0.*/
let cupsOfSugarNeeded = 5; // You can choose any number
let cupsAdded = 0;

/* 2.We have a sweet tooth, so we want to add at least one cup of sugar to the batter even if the value of cupsOfSugarNeeded is 0.

Create a do...while loop which increments cupsAdded by one while cupsAdded is less than cupsOfSugarNeeded.

In order to help us visualize the output on each iteration of the loop, add a console.log within the do...while block and log the value of cupsAdded.*/

do {
  cupsAdded++;
  console.log(cupsAdded + ' cup was added');
} while (cupsAdded < cupsOfSugarNeeded);


