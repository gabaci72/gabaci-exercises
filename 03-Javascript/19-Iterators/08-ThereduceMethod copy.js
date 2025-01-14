const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17
let accumulator = 0;
numbers.forEach((currentValue) => {
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
    accumulator += currentValue;
});

console.log(`summedNums: ${accumulator}`); // Output: summedNums: 17


