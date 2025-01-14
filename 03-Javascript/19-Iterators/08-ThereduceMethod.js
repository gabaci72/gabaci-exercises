const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);


console.log(newSum)



// Step by step checkking adding a first argument to .reduce()
let accumulator = 10;
newNumbers.forEach((currentValue) => {
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
    accumulator += currentValue;
});
console.log(newSum);
