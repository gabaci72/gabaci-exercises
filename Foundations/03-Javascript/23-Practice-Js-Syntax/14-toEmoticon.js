/* Write a function, toEmoticon(), 
that takes in a string and returns the 
corresponding emoticon as a string.
 Use a switch/case, and cover these cases:

'shrug' should return '|_{"}_|'
'smiley face' should return ':)'
'frowny face' should return':('
'winky face' should return ';)'
'heart' should return '<3'
any other input should return '|_(* ~ *)_|'

A switch case takes the format:

switch (expression) {
    case "firstCase":
    // Do something
    case "secondCase":
    // Do something
    default:
    // Do something
}
*/

//Write your function here:
function toEmoticon(expression) {
    switch (expression) {
        case 'shrug':
            return '|_{"}_|';
        case 'smiley face':
            return ':)';
        case 'frowny face':
            return ':(';
        case 'winky face':
            return ';)';
        case 'heart':
            return '<3';
        default:
            return '|_(* ~ *)_|';
    }
}






//Uncomment the following line when you're ready to test your function
console.log(toEmoticon("whatever"))
// '|_(* ~ *)_|'    must be printed

/*Explanation:

The function uses a switch statement to match the input expression with predefined cases.
Each case corresponds to a specific expression and returns the associated emoticon.
The default case handles any input not explicitly covered by the other cases, providing a fallback emoticon. */