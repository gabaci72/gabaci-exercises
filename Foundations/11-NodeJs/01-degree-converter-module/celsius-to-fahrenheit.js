/* celsius-to-fahrenheit.js */
/* Write a program that takes a temperature in Celsius as an argument and prints the equivalent temperature in Fahrenheit. */
/* The formula to convert Celsius to Fahrenheit is: */
/* Fahrenheit = Celsius * (9/5) + 32 */
/* For example, if the input is 25, the output should be: */
/* 25 degrees Celsius = 77 degrees Fahrenheit */

/* You can get the input from the command line arguments. */

/* For example, if you run the program with: */
/* node celsius-to-fahrenheit.js 25 */

/* The output should be: */
/* 25 degrees Celsius = 77 degrees Fahrenheit */

/* Here is the solution: */

// /* celsius-to-fahrenheit.js */
// function celsiusToFahrenheit(celsius) {
//     return celsius * (9/5) + 32;
// }

// const celsiusInput = process.argv[2]; // Get the 3rd input from the argument list
// const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

// console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);

/* celsius-to-fahrenheit.js */
const { celsiusToFahrenheit } = require('./converters.js');// Import the celsiusToFahrenheit function from converters.js

const celsiusInput = process.argv[2]; 
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);