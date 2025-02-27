const URL_TO_PARSE = 'https://www.example.com/p/a/t/h?prop1=value1&prop2=value2';

// No need to require 'url' as URL is globally available in modern Node.js
// const url = require('url');  <- Remove this line

// Create URL instance
const myUrl = new URL(URL_TO_PARSE);

// Extract protocol
const protocol = myUrl.protocol;

// Extract hostname
const hostname = myUrl.hostname;

// Extract pathname
const pathname = myUrl.pathname;

// Extract search parameters
const searchParams = myUrl.searchParams;

// SearchParams ile daha fazlası yapılabilir
console.log(searchParams.get('prop1')); // value1
console.log(searchParams.has('prop2')); // true