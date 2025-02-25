// Import the Buffer module
const { Buffer } = require('node:buffer');

// Create a buffer from a string
const buf = Buffer.from('Hello, World!');

// List the data in the buffer before changing it
console.log('Buffer contents before change:');
for (let i = 0; i < buf.length; i++) {
  console.log(`Byte ${i}: ${buf[i]}`);
}

// Modify the buffer
buf[0] = 80; // ASCII code for 'H'

// List the data in the buffer after changing it
console.log('Buffer contents after change:');
for (let i = 0; i < buf.length; i++) {
  console.log(`Byte ${i}: ${buf[i]}`);
}