/* Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' 
if the two strings are different.*/

const agreeOrDisagree = (first, second) => {
    if (first === second) {
        return 'You agree!'
    } else {
        return 'You disagree!'
    }
}
/*
// As a function declaration:
function agreeOrDisagree(first, second) {
   if (first === second) {
        return 'You agree!'
    } else {
        return 'You disagree!'
    }
}

// As a ternary: 
const agreeOrDisagree = (first, second) => (first === second) ? 'You agree!' : 'You disagree!'
*/

console.log(agreeOrDisagree("yep", "yep")) 