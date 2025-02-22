/* Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.

Here are the classifications:
0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult'
65-140 should return 'senior citizen'
If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'*/

function lifePhase(age) {
    if (age < 0 || age > 140) {
        return 'This is not a valid age';
    } else if (age >= 0 && age <= 3) {
        return 'baby';
    } else if (age >= 4 && age <= 12) {
        return 'child';
    } else if (age >= 13 && age <= 19) {
        return 'teen';
    } else if (age >= 20 && age <= 64) {
        return 'adult';
    } else if (age >= 65 && age <= 140) {
        return 'senior citizen';
    }
}

// Test the function
console.log(lifePhase(2)); // Output: 'baby'
console.log(lifePhase(10)); // Output: 'child'
console.log(lifePhase(15)); // Output: 'teen'
console.log(lifePhase(30)); // Output: 'adult'
console.log(lifePhase(70)); // Output: 'senior citizen'
console.log(lifePhase(150)); // Output: 'This is not a valid age'
console.log(lifePhase(-5)); // Output: 'This is not a valid age'
