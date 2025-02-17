/* Create a function, tipCalculator(), 
that has two parameters, a string representing the quality of
 the service received and a number representing the total cost.

Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%

tipCalculator('good', 100) // Should return 20


A good way to calculate a percentage is by multiplying 
it by the percentage divided by 100.

20% of X = X * .20

For this problem, you may choose to use either 
a switch or multiple if‘s. A switch case takes the format:

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

function tipCalculator(quality, total) {
    switch (quality) {
        case 'bad':
            return total * 0.05;
        case 'ok':
            return total * 0.15;
        case 'good':
            return total * 0.20;
        case 'excellent':
            return total * 0.30;
        default:
            return total * 0.18;
    }
}

// Test the function
console.log(tipCalculator('good', 100)); // Should return 20





