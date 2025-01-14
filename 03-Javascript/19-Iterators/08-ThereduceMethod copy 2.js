const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums); // Output: 117

let accumulator = 100;
numbers.forEach((currentValue) => {
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
    accumulator += currentValue;
});

console.log(`summedNums: ${accumulator}`); 