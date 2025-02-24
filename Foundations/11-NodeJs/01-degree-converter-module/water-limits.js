/* water-limits.js */

/* Write a function that converts Celsius to Fahrenheit. */
/* The formula is: F = C * (9/5) + 32 */
/* Use the function to convert the freezing point and boiling point of water in Celsius to Fahrenheit. */
/* The freezing point of water in Celsius is 0. */
/* The boiling point of water in Celsius is 100. */

// function celsiusToFahrenheit(celsius) {
//     return celsius * (9/5) + 32;
//   }
  
//   const freezingPointC = 0;
//   const boilingPointC = 100;
  
//   const freezingPointF = celsiusToFahrenheit(freezingPointC);
//   const boilingPointF = celsiusToFahrenheit(boilingPointC);
  
//   console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
//   console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);

/* water-limits.js */
const converters = require('./converters.js');// Assuming the converters module is in the same directory and exports the celsiusToFahrenheit function

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = converters.celsiusToFahrenheit(freezingPointC);
const boilingPointF = converters.celsiusToFahrenheit(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);