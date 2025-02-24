//The Util Module
const util = require('util');

const today = new Date();
const earthDay = 'April 22, 2022';

console.log(util.types.isDate(today));
console.log(util.types.isDate(earthDay));
console.log(util.types.isDate('2022-04-22'));

console.table(util.types);