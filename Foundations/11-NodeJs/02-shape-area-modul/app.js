/* app.js */

const radius = 5;
const sideLength = 10;

// Import the shape-area.js module using object destructuring
const { circleArea, squareArea } = require("./shape-area.js")

// Use the imported circleArea() and squareArea() methods
const areaOfCircle = circleArea(radius);
const areaOfSquare = squareArea(sideLength);

// Print the values to the console
console.log("Area of circle:", areaOfCircle);
console.log("Area of square:", areaOfSquare);