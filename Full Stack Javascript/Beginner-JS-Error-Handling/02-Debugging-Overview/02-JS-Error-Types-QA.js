// //myVariable++;
// // 1 - What type of error will be thrown on the line above: 

// const myString = 42;
// myString.substring(0);
// // 2 - What type of error will be thrown on the line above: 

// const myRandomNumber; = Math.random();
// // 3 - What type of error will be thrown on the line above: 



myVariable++; //myVariable++; is not defined. This will throw a ReferenceError.
// 1 - What type of error will be thrown on the line above: ReferenceError
//This is correct because the variable was never declared before trying to increment it

const myString = 42;
myString.substring(0);
// 2 - What type of error will be thrown on the line above: TypeError
//This is correct because you can't call string methods on a number (42). You need to convert it to a string first.

const myRandomNumber; = Math.random();
// 3 - What type of error will be thrown on the line above: SyntaxError
//This is correct because this is invalid syntax for variable declaration. It should be: const myRandomNumber = Math.random();



// 1 - ReferenceError
// 2 - TypeError
// 3 - SyntaxError

//ReferenceError: Accessing undefined variables
// TypeError: Using wrong types of values
// SyntaxError: Invalid JavaScript syntax

