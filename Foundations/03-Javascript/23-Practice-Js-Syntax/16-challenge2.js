// Create a function isEven() that takes a number as its
// only parameter.The function should return true if the number
// is even and false if the number is odd.

// function isEven(number) {
//     return number % 2 === 0;
// }

// console.log(isEven(4));

function isEven(number) {
    if (typeof number !== 'number') {
        throw new Error('Input must be a number');
    }
    return number % 2 === 0;
}
console.log(isEven(4));  // true
console.log(isEven(7));  // false
console.log(isEven(0));  // true
console.log(isEven(-2)); // true
console.log(isEven(3.5)); // false (since 3.5 is not an integer)