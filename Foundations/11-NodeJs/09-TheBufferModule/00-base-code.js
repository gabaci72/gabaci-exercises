const { Buffer } = require('node:buffer');

const buf = Buffer.from('Hello, World!');
console.log(buf.toString()); // Output: "Hello, World!"

// Change the first byte to 'P' (ASCII code 80)
buf[0] = 80; 

console.log(buf.toString()); // Output: "Pello, World!"

// The buffer is mutable, so changing the first byte changes the output.