/* Declare a constant variable for today's temperature in Kelvin */
const kelvin = 0;

/* Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.*/
const celsius = kelvin - 273;

/* Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.

Fahrenheit = Celsius * (9/5) + 32

In the next step we will round the number saved to fahrenheit. Choose the variable type that allows you to change its value.*/

let fahrenheit = celsius * (9 / 5) + 32;

/* When you convert from Celsius to Fahrenheit, you often get a decimal number. To round down the Fahrenheit temperature using the .floor() method from the Math object, update the fahrenheit variable like this: */
fahrenheit = Math.floor(fahrenheit);

/*Use console.log and string interpolation to log the temperature in fahrenheit to the console */
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

/*Convert celsius to the Newton scale using the equation below
Newton = Celsius * (33/100)

Round down the Newton temperature using the .floor() method
Use console.log and string interpolation to log the temperature in newton to the console */ 
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);










