const url = 'https://www.example.com/p/a/t/h?course=node&lesson=http';
console.log('Original URL:', url);

const querystring = require('querystring');
console.log('\nquerystring module:', querystring);
// Parse the query string
const queryToParse = 'course=node&lesson=http';
console.log('\nQuery to parse:', queryToParse);

const parsedQuery = querystring.parse(queryToParse);
console.log('\nParsed query object:', parsedQuery);

// Add new property
parsedQuery.exercise = 'querystring';
console.log('\nModified query object:', parsedQuery);

// Convert back to query string
const modifiedQueryString = querystring.stringify(parsedQuery);
console.log('\nFinal query string:', modifiedQueryString);

//Output:
// Original URL: https://www.example.com/p/a/t/h?course=node&lesson=http

// querystring module: [Module: null prototype] { parse: [Function: parse], stringify: [Function: stringify] }
// Query to parse: course=node&lesson=http

// Parsed query object: { course: 'node', lesson: 'http' }
// Modified query object: { course: 'node', lesson: 'http', exercise: 'querystring' }
// Final query string: course=node&lesson=http&exercise=querystring
// https://nodejs.org/api/querystring.html#querystring_querystring_parse_str_sep_eq_options

// https://nodejs.org/api/querystring.html#querystring_querystring_stringify_obj_sep_eq_options
