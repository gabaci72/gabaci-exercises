const vacationSpots = ['Bali', 'Paris', 'Tulum'];

/* Write a for loop that iterates through our vacationSpots array using i as the iterator variable.

Inside the block of the for loop, use console.log() to log each element in the vacationSpots array after the string 'I would love to visit '. For example, the first round of the loop should print 'I would love to visit Bali' to the console.

When writing/changing loops, there is a chance that our stopping condition isn’t met and we get a dreaded infinite loop which essentially stops our programming from running anything else! To exit out of an infinite loop in an exercise, refresh the page - then fix the code for your loop.*/

// Write your code below
for (let i=0; i < vacationSpots.length; i++) {
  console.log('I would love to visit '+ vacationSpots[i]);
}

/* To write a for loop that iterates through the vacationSpots array and logs each element with the string 'I would love to visit ', follow these steps:

Initialize the loop with let i = 0.
Set the stopping condition to i < vacationSpots.length.
Increment i in each iteration.
Inside the loop, use console.log() to log the desired message.
Here’s the logic for the loop:

Start with i = 0.
Continue as long as i is less than the length of vacationSpots.
Increment i by 1 in each iteration.
Log 'I would love to visit ' + vacationSpots[i].
This will ensure each element is*/