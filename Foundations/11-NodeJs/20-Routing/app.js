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

// Task 4:
// This distinction can be made using the pathname. 
// Within the handleGetRequest() function, create a const variable called pathname, 
// assigning it the value of the url from the request. Then, write an 
//if statement to match the pathname of '/users'.

// Task 5:
// In the if statement that you just created, return an empty array as a response. 
// Use the JSON.stringify() method to convert the array into a JSON string.

const http = require('http');

// Handle get request
const handleGetRequest = (req, res) => {
  const pathname = req.url;

  if (pathname === '/users') {
    res.end(JSON.stringify([]));
  }
}

// Creates server instance
const server = http.createServer((req, res) => {
  const { method } = req;
 
  switch(method) {
    case 'GET':
      return handleGetRequest(req, res);
    default:
      throw new Error(`Unsupported request method: ${method}`);
  }
});

// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});