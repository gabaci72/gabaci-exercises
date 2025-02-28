# The Querystring Module in Node.js

While the url module can handle query strings attached to URLs, it can also be done with the built-in querystring module. The querystring module is dedicated to providing utilities solely focused on parsing and formatting URL query strings. As such, the module provides a much smaller number of methods  to use. The core methods are listed below:


## .parse()
: This method is used for parsing a URL query string into a collection of key-value pairs. The .decode() method does the same.

```js
const str = 'prop1=value1&prop2=value2';
querystring.parse(str); // Returns { prop1: value1, prop2: value2}
```

## .stringify()
: This method is used for producing a URL query string from a given object via iteration of the object’s “own properties.” The .encode() method does the same.
```js
const props = { "prop1": value1, "prop2": value2};
querystring.stringify(props); // Returns 'prop1=value1&prop2=value2'
```


## .escape(): 
This method is used for performing percent-encoding on a given query string.
```js
const str = 'prop1=value1&prop2=value2';
querystring.escape(str); // Returns 'prop1=value1&prop2=value2'
```
## .unescape(): 
This method is used to decode percent-encoded characters within a given query string.
```js
const str = 'prop1=value1&prop2=value2';
querystring.unescape(str); // Returns 'prop1=value1&prop2=value2'
```
# .split():
In JavaScript, we can split a string using the .split() method. You can isolate the query string by splitting the URL at the ? character.
```js
const queryToParse = stringToParse.split('?')[1];
```

## Important Notes:
The querystring module is not meant to be used for parsing or formatting entire URLs. It is meant to be used for parsing and formatting only the query string portion of a URL. This means that the querystring module is not meant to be used for parsing or formatting URLs that do not have a query string.

The querystring module is focused solely on manipulating URL query strings, so it requires the query string to have already been isolated from an incoming URL as part of a request. This means that some pre-processing of the URL is necessary before being able to use the module.

Additionally, it is worth noting that in the latest versions of Node (v16.x) the querystring module has become a legacy feature, with its core functionality having been absorbed into the url module via the URLSearchParams API. However, the features in the querystring module are still handy when using the long-term support versions of Node.js (v14.x).


## Index:
[strings] Preview: Docs Strings are any grouping of characters (letters, spaces, numbers, or symbols) surrounded by quotes or backticks.(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

[querystring] Preview: Docs The querystring module is dedicated to providing utilities solely focused on parsing and formatting URL query strings.(https://nodejs.org/api/querystring.html)

[parse()] Preview: Docs Returns a new value taken from a provided JSON string.(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

[stringify()] Preview: Docs Returns a JSON string corresponding to the specified value, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)


[escape()] Preview: Docs The escape() method computes a new string in which certain characters have been replaced by a hexadecimal escape sequence.(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/escape)


[unescape()] Preview: Docs The unescape() method computes a new string in which hexadecimal escape sequences are replaced with the character that it represents.(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/unescape)

[percent-encoding] Preview: Docs Percent-encoding, also known as URL encoding, is a mechanism for encoding information in a Uniform Resource Identifier (URI) under certain circumstances.(https://en.wikipedia.org/wiki/Percent-encoding)