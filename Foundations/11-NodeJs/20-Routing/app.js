//Task 1: 
// Our server is going to handle different types of requests. 
// Using a switch statement, add a condition to match for incoming GET requests 
// within the callback function of .createServer().
// Hint: You can check the type of HTTP request by inspecting the value of the method property 
// of the req object.

//Task 2:
//Using the ES6 arrow function notation, assign a function to a const variable called 
//handleGetRequest. This function should take two arguments—req and res.

// Task 3: 
// Return the handleGetRequest() function when HTTP method matches GET. 
// Pass the req and res variables from the .createServer() callback
// into the handler function as the first and second arguments, respectively.

const http = require('http');

// Create a handler function for GET requests
const handleGetRequest = (req, res) => {
  // Parse the URL from the request
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  // Check if the pathname matches '/users'
  if (pathname === '/users') {
    // Return an empty array as a JSON string
    const responseData = JSON.stringify([]);
    res.setHeader('Content-Type', 'application/json');
    res.end(responseData);
  } else {
    // Handle other paths
    res.statusCode = 404;
    res.end('Resource not found');
  }
};

// Create a simple server
const server = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Invoke the handler function for GET requests
      return handleGetRequest(req, res);
    // Add more cases for other HTTP methods if needed
    default:
      res.statusCode = 405;
      res.end(`Method ${method} not allowed`);
  }
});

// Make the server listen on port 4001
server.listen(4001, () => {
  console.log('Server is listening on port 4001');
});
