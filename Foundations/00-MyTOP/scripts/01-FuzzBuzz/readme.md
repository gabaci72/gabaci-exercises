# Solving Fizz Buzz

```bash
I wrote a program that allows the user to enter a number and prints every number between one and the number the user entered, but prints Fizz for numbers that are evenly divisible by 3. I print Buzz for numbers that are evenly divisible by 5, and finally I print FizzBuzz for numbers that are evenly divisible by both 3 and 5.
```

## Writing the pseudocode:

```bash
When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
If the current number is divisible by 3 and 5 then print "FizzBuzz"
Otherwise print the current number
```

With JavaScript, we’ll use the “prompt” method.
The above code should create a little popup box that asks the user for a number. 
The input we get back will be stored in our variable answer.

```javascript
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```
