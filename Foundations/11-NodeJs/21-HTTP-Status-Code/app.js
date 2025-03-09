// Task: 1
// Inside the handleGetRequest() function, set the status code on the server response
// to the appropriate status code indicating success.

// Task: 2
// Unlike the GET requests, the POST requests are failing. 
// In the POST request handler code, set the status code on the server 
// response to the appropriate status code indicating an internal server error.

const http = require('http');

const handleGetRequest = (req, res) => {
  res.statusCode = 200;
  return res.end(JSON.stringify({ data: [] }));
}

const handlePostRequest = (req, res) => {
  res.statusCode = 500;
  console.log('Handling POST request');
  return res.end("Unable to create record");
}

// Creates server instance
const server = http.createServer((req, res) => {
  const { method } = req;
  console.log(`Received request with method: ${method}`);
  switch (method) {
    case 'GET':
      console.log('Switch case: GET');
      return handleGetRequest(req, res);
    case 'POST':
      return handlePostRequest(req, res);
    default:
      throw new Error(`Unsupported request method: ${method}`);
  }
});

// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});