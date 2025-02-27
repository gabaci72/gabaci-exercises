# HTTP server with Node.js.
Creating an HTTP server with Node.js is a straightforward process. Below is a simple example to get you started. This example will create a basic HTTP server that listens on a specified port and responds with a "Hello, World!" message.
### Step-by-Step Guide  

1. **Initialize a Node.js Project**:
   First, create a new directory for your project and initialize a new Node.js project.
   ```bash
   mkdir my-http-server
   cd my-http-server
   npm init -y
   ```
   This will create a `package.json` file in your project directory.
2. **Create the Server File**: Create a new file named `server.js` in your project directory. This file will contain the code for your HTTP server.

3. **Write the Server Code**: Open `server.js` and add the following code:
   ```javascript
   const http = require('http');
   const hostname = '127.0.0.1';
   const port = 3000;
   const server = http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello, World!\n');
   });
   server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
   });
   ```
   This code creates an HTTP server that listens on port 3000 and responds with a "Hello, World!" message when accessed.
   **Run the Server**: To start the server, run the following command in your project directory:
   ```bash
   node server.js

   ```
   Your server should now be running and listening on port 3000. You can access it by
   opening a web browser and navigating to `http://localhost:3000`.
   **Customize the Server**: You can customize the server by modifying the code to handle different requests, serve static files, or integrate with a database.
   **Stop the Server**: To stop the server, press `Ctrl+C` in the terminal where the server is running.
   That's it! You've created a basic HTTP server with Node.js. You can further enhance your server by adding more features and functionality as needed.
