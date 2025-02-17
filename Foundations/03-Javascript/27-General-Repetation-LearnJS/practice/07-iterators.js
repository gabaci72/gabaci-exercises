//Array Iterator Methods:
//forEach: Executes a provided function once for each array element.
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number)); // Output: 1 2 3 4 5
//map: Creates a new array with the results of calling a provided function on every element in the calling array.   

const prices = [100, 200, 300, 400];
const discountedPrices = prices.map(price => price * 0.9);
const expensiveItems = prices.filter(price => price > 250);
