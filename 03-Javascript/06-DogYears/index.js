// Declare a constant variable for my age
const myAge = 25; // Replace 25 with your actual age

// Initialize a variable for the first two years of a dog's life
let earlyYears = 2;

/*Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears*/
earlyYears *= 10.5;

// Calculate the later years by subtracting the first two years from my age
let laterYears = myAge - 2;

// Multiply the later years by 4 to convert to dog years
laterYears *= 4;

/*o check your work, print earlyYears and laterYears to the console using console.log().  */
console.log(earlyYears);
console.log(laterYears);

// Calculate my age in dog years by adding early and later years
const myAgeInDogYears = earlyYears + laterYears;

// Store my name in lowercase letters
const myName = 'Seriano'.toLowerCase(); // Replace 'Your Name' with your actual name


// Log my name and age in dog years using string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
