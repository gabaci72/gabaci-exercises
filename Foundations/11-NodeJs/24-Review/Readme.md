# Simple HTTP Server in Node.js

This is a basic HTTP server built with Node.js. It is designed to handle GET requests and retrieve data from an external source.

## Features

*   **Handles GET Requests:** The server is configured to respond to GET requests.
*   **External Data Fetching:**  Upon receiving a GET request, the server fetches data from `http://static-assets.codecademy.com/Courses/Learn-Node/http/data.json`.
*   **Query Parameter Logging:**  The server parses and logs any query parameters included in the GET request URL.
*   **Response Headers:**  Sets `Content-Type` to `application/json` and adds an `Author` header to the response.
*   **Error Handling:** Includes basic error handling for issues during the external data request and for unsupported request methods.
*   **Listens on Port 4001:** The server runs on `http://127.0.0.1:4001`.

## How to Run

1.  Make sure you have Node.js installed.
2.  Save the provided code as `app.js`.
3.  Open your terminal in the directory where you saved `app.js`.
4.  Run the command: `node app.js`
5.  The server will start, and you should see the message `Server is listening on: http://127.0.0.1:4001` in your terminal.

## How to Test

You can test the server by sending a GET request to `http://127.0.0.1:4001` using your web browser or a tool like `curl` or Postman.

For example, in your browser, you can simply navigate to:

`http://127.0.0.1:4001`

Or, using `curl` in your terminal:

```bash
curl http://127.0.0.1:4001
```

You can also test with query parameters:

`http://127.0.0.1:4001?param1=value1&param2=value2`

The server will return the JSON data fetched from the external URL and log the query parameters to the console.

## Further Improvements (as suggested in the code comments)

*   Add more headers to the response.
*   Process query parameters using the `querystring` module (already implemented).
*   Integrate with a database for data storage and retrieval.
*   Implement handling for other HTTP methods like POST, PUT, DELETE etc.