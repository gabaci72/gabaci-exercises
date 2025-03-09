// Take a look at the workspace to the right. There is a complete server that processes HTTP requests to various resources. Think about how you could modify this server to add more features.

// Here are some interesting ways you could modify the server:

// Add some additional headers to a response.
// Process the query parameters for the GET requests with the querystring module instead of the url module.
// Make a request to a database from within an endpoint.

const http = require('http');
const querystring = require('querystring'); // Required for query parameters
const url = require('url'); // Required for URL parsing (added as a suggestion)

// Handle GET Request
const handleGetRequest = (req, res) => {
 // Access query parameters by parsing the URL (suggestion)
 const parsedUrl = url.parse(req.url);
 const queryParams = querystring.parse(parsedUrl.query);
console.log('Incoming query parameters:', queryParams); // Log incoming parameters (suggestion)

const options = {
hostname: 'static-assets.codecademy.com',
path: '/Courses/Learn-Node/http/data.json',
method: 'GET'
};

const request = http.request(options, (response) => {
let data = '';

response.on('data', (chunk) => {
data += chunk;
});

response.on('end', () => {
// Add response headers
res.setHeader('Content-Type', 'application/json');
res.setHeader('Author', 'Cohere AI');

res.end(data);
});

// Notify the client in case of error (suggestion)
response.on('error', (error) => {
console.error('External request error:', error); // Log the error (suggestion)
res.statusCode = 500; // Internal Server Error (suggestion)
res.setHeader('Content-Type', 'text/plain'); // Error message for plain text (suggestion)
res.end('An error occurred during the request to the external server.'); // Error message to the user (suggestion)
});
});

// Error handling related to external requests (suggestion)
request.on('error', (error) => {
console.error('Request error:', error); // Log the error (suggestion)
res.statusCode = 500; // Internal Server Error (suggestion)
res.setHeader('Content-Type', 'text/plain'); // Plain text for the error message (suggestion)
res.end('An error occurred during the server request.'); // Error message to the user (suggestion)
});

request.end();
};

//Creates server instance
const server = http.createServer((req, res) => {
 const { method } = req;

 switch (method) {
 case 'GET':
 handleGetRequest(req, res);
 break;
 default:
 res.statusCode = 405; // Method Not Allowed (suggestion)
 res.setHeader('Content-Type', 'text/plain'); // Plain text for error message (suggestion)
 res.end(`Unsupported request method: ${method}`); // Error message (suggestion) to the user
 }
});

// Starts server listening on specified port
server.listen(4001, '127.0.0.1', () => {
    const { address, port } = server.address();
    console.log(`Server is listening on: http://${address}:${port}`);
});