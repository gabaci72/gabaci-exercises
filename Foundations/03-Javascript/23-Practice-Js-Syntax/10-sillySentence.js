/* .
Write a function, sillySentence(), that has 3 string parameters and returns 
the following silly sentence with the blanks filled in by the arguments 
passed into the function:


sillySentence('excited', 'love', 'functions'); 
// Should return 'I am so excited because I love coding! Time to write 
some more awesome functions!'*/
// Write your function here:

function sillySentence(adjective, verb, noun) {
    let sentence = `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;
    return sentence;
}
console.log(sillySentence('excited', 'love', 'functions'));
// Should return 'I am so excited because I love coding! Time to write some more awesome functions!'






// Uncomment the line below when you're ready to try out your function
// console.log(sillySentence('excited', 'love', 'functions'))

// We encourage you to add more function calls of your own to test your code!

