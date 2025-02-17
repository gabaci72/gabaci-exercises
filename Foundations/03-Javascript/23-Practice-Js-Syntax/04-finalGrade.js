/* Write a function, finalGrade(). It should:

take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'tsc --init
80-89 should return: 'B'
90-100 should return: 'A'*/

function finalGrade(grade1, grade2, grade3) {
    if (grade1 < 0 || grade1 > 100 || grade2 < 0 || grade2 > 100 || grade3 < 0 || grade3 > 100) {
        return 'You have entered an invalid grade.';
    }

    const average = (grade1 + grade2 + grade3) / 3;

    if (average < 60) {
        return 'F';
    } else if (average < 70) {
        return 'D';
    } else if (average < 80) {
        return 'C';
    } else if (average < 90) {
        return 'B';
    } else {
        return 'A';
    }
}
console.log(finalGrade(90, 85, 80)); // Output: 'B'
console.log(finalGrade(65, 70, 75)); // Output: 'C'
console.log(finalGrade(50, 55, 60)); // Output: 'F'
console.log(finalGrade(105, 95, 90)); // Output: 'You have entered an invalid grade.'
console.log(finalGrade(-5, 95, 90)); // Output: 'You have entered an invalid grade.'