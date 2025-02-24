/* shape-area.js */
//Complete the shape-area.js module. Your module must declare and export two functions with the following signatures:

// circleArea(radiusLength).
// squareArea(sideLength).
// You may create these as either named functions or anonymous function expressions.

// Hint

// You can calculate the area of a circle based on its radius like so:
// PI * radius * radius
// const PI = Math.PI;

// Define and export circleArea() and squareArea() below
/* shape-area.js */
// Function to calculate the area of a circle
function circleArea(radiusLength) {
    return Math.PI * radiusLength * radiusLength;
}

// Function to calculate the area of a square
function squareArea(sideLength) {
    return sideLength * sideLength;
}

// Export the functions
module.exports = { circleArea, squareArea };
