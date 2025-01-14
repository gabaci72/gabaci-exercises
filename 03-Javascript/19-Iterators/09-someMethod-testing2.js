const numbers1 = [2, 5, 8, 1, 4];
const numbers2 = [12, 5, 8, 1, 4];

const hasNumberOverTen1 = numbers1.some(num => num > 10);
console.log(hasNumberOverTen1); // false

const hasNumberOverTen2 = numbers2.some(num => num > 10);
console.log(hasNumberOverTen2); // true
