# The URL Module in Node.js
The `url` module in Node.js is a built-in module that provides utilities for working with URLs. It's commonly used for parsing, constructing, and manipulating URLs in Node.js applications.

### Key Classes and Methods

1. **`new URL(url)`**:
   - Creates a new URL object
   - Parses a URL string into its components

2. **`url.format(urlObject)`**:
   - Takes a URL object and returns a formatted URL string
   - Can convert both legacy urlObject and WHATWG URL objects

3. **`url.parse(urlString)`** (Legacy API):
   - Parses a URL string into components
   - Returns an object with URL properties

4. **Key URL Properties**:
   - `href`: The complete URL
   - `protocol`: The protocol scheme
   - `host`: Hostname with port
   - `hostname`: Just the hostname
   - `pathname`: The path section
   - `search`: The query string
   - `searchParams`: URLSearchParams object for query manipulation

5. **`URLSearchParams`**:
   - Utility for working with query strings
   - Methods: `get()`, `set()`, `append()`, `delete()`, etc.

Example usage:
```javascript
const url = new URL('https://example.com/path?query=value');
console.log(url.hostname); // 'example.com'
const searchParams = new URLSearchParams(url.search);
console.log(searchParams.get('query')); // 'value'
```
### Usage in Node.js
The `url` module is commonly used for:
- Parsing URLs from user input or configuration files.

- Constructing URLs for API requests or redirects.
- Manipulating query strings in URLs.
### Examples
```javascript
const url = new URL('https://example.com/path?query=value');
console.log(url.hostname); // 'example.com'
const searchParams = new URLSearchParams(url.search);
console.log(searchParams.get('query')); // 'value'

```
* Using these properties, one can break the URL down into easily usable parts for processing the request.
```javascript
const host = url.hostname; // example.com
const pathname = url.pathname; // /p/a/t/h
const searchParams = url.searchParams; // {query: 'string'}
```

### Conclusion

The `url` module in Node.js is a powerful tool for handling URLs, making it easier to parse, construct, and manipulate URLs in your applications. By understanding and utilizing its methods and properties, you can write more robust and maintainable code.

### References

- [Node.js Documentation: URL](https://nodejs.org/api/url.html)
- [MDN Web Docs - URL](https://developer.mozilla.org/en-US/docs/Web/API/URL)

- [MDN Web Docs - URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

### Exercises
1. **URL Parsing**: Write a script that takes a URL string as input and prints out its protocol, hostname, and pathname.
2. **URL Construction**: Write a script that takes a hostname, pathname, and query parameters as input and constructs a URL string.
3. **Query Parameter Manipulation**: Write a script that takes a URL string as input and modifies a specific query parameter.
4. **URL Validation**: Write a script that takes a URL string as input and validates if it's a valid URL.
5. **URL Encoding**: Write a script that takes a URL string as input and encodes it for safe use in a URL.
6. **URL Decoding**: Write a script that takes a URL string as input and decodes it from its encoded form.
7. **URL Comparison**: Write a script that takes two URL strings as input and compares them to see if they are equal.
8. **URL Fragment Manipulation**: Write a script that takes a URL string as input and modifies its fragment.
9. **URL Port Manipulation**: Write a script that takes a URL string as input and modifies its port number.
10. **URL Protocol Manipulation**: Write a script that takes a URL string as input and modifies its protocol.

### Solutions
1. **URL Parsing**:
```javascript
const url = new URL('https://example.com/path?query=value');
console.log(`Protocol: ${url.protocol}`);
console.log(`Hostname: ${url.hostname}`);
console.log(`Pathname: ${url.pathname}`);
```

