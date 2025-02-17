/* 1.
Write a function, howOld(), that has two number parameters, 
age and year, and returns how old someone who is currently that age was 
(or will be) during that year. Handle three different cases:

If the year is in the future, you should return a string in the following format:
'You will be [calculated age] in the year [year passed in]'


If the year is before they were born, you should return a string in the following format:
'The year [year passed in] was [calculated number of years] years before you were born'


If the year is in the past but not before the person was born, 
you should return a string in the following format:
'You were [calculated age] in the year [year passed in]'


You might find these two variables helpful:

const yearDifference = year - theCurrentYear
const newAge = age + yearDifference


Once you have newAge, you’ll be able to handle the three difference cases.

If the newAge is less than 0, this means the year provided was before the 
person was born. If the newAge is greater than their current age, this means 
the year passed in is in the future. Otherwise, we know the year provided was 
in the past but not before they were born.*/

// Write your function here:

function howOld(age, year) {
    const currentYear = new Date().getFullYear();// Get the Current Year
    const yearDifference = year - currentYear;//Calculate Year Difference
    const newAge = age + yearDifference;//Calculate New Age

    //Handle Different Cases:
    if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`;
    }

    //Year Before Birth:
    else if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`;
    }

    //Year in the Past but After Birth:
    else {
        return `You were ${newAge} in the year ${year}`;
    }

};

// Test cases
console.log(howOld(25, 2030)); // You will be 35 in the year 2030
console.log(howOld(25, 1990)); // The year 1990 was 5 years before you were born
console.log(howOld(25, 2020)); // You were 20 in the year 2020

// Once your function is written, write function calls to test your code!
