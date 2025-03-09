# Interacting with Another Backend API.
Interacting with Another Backend API
23 min
Just like with databases, sometimes servers need to make 
Preview: Docs XMLHttpRequest is a built-in browser object that allows HTTP requests to be made in JavaScript. It is basically used to fetch data from APIs.
requests
 to external APIs to accomplish some goal. There are a variety of reasons to reach out to external services. Some common situations are payment processing, service integrations with other products, webhooks, and so on.

There are a few 
Preview: Docs Loading link description
methods
 provided by the http module that facilitate making HTTP requests to external services. One of these methods is the request() method. The request() method takes two arguments; it takes a configuration object containing details about the request as well as a callback to handle the response.

```javascript

const options = {
  hostname: 'example.com',
  port: 8080,
  path: '/projects',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

const request = http.request(options, res => {
  // Handle response here
})

```

For convenience, the http module provides a convenient method for making GET requests in the form of the get() method. This method differs from the request() method in that it automatically 
Preview: Docs Loading link description
sets
 the method to GET and calls req.end() automatically.

The fact that servers can make HTTP requests to other services opens up possibilities for different architecture designs for back-ends. One example of an architecture made possible by this ability is microservice architectures. Microservice architectures divide needs into separate lightweight services that communicate via HTTP over a network. As such, a single application can be comprised of dozens of microservices, which could all be written in different programming languages, but work together by communicating over HTTP.

microservice diagram
.![Microservice Architecture](./img/microservices.png)

## Challenge
### Task 1 :
In our HTTP server, we will process incoming GET requests by invoking a handler function called handleGetRequest(). Part of this processing will include making a GET request to the following URL which requires some configuration.

```markdown
https://static-assets.codecademy.com/Courses/Learn-Node/http/data.json
```
```javascript
const handleGetRequest = (req, res) => { // Function to handle GET requests
  // Configuration for the external GET request
  const options = { // Object containing configuration for the external GET request
    hostname: "static-assets.codecademy.com", // Hostname of the external server

    path: "/Courses/Learn-Node/http/data.json", // Path to the resource being requested
    method: "GET", // HTTP method to use for the request
  };
  
  // You can now use these options to make a request
  // For example, using https.get(options, callback)
};
  ```
### Explanation:
* Hostname: Extracted from the URL, it is static-assets.codecademy.com.
* Path: The path part of the URL is /Courses/Learn-Node/http/data.json.
* Method: Since you are making a GET request, the method is set to 'GET'.

### Task 2 :
Create a const variable called request. Set the variable to the https.request() method with the options object as the first argument and a callback function as the second argument. Create a callback function using the ES6 arrow function syntax. The callback function should also take a single argument called response.
* Hint:
The .request() method of the http module takes two arguments—a configuration object and a callback that exposes the response.
```javascript
const config = {
  // config options
}; 

const request = http.request(config, (res) => {
  // Process response here
})
```

```javascript
// * Tassk 2 Answer:// Create the request
  const request = https.request(options, (response) => {
    // Process the response here
    console.log('Response received');
  });

  // End the request
  request.end();
};
```

### Task 3 :

Our HTTPS request needs to be set up to be able to receive the data properly. Data from the response will usually be received in chunks and pieced together. As such, we need to watch for these chunks of data and process them. We can do this by listening to the data event.

In the callback of the .request() method, create a variable called data initialized with an empty string. Then, listen for the data event and add the received data to the data variable.

You can listen for events on the response of a request using the .on() method. The .on() method takes an event as the first argument and a callback as the second argument.
``javascript

response.on('EVENT', () => {
  // Handle event processing here
})
```
###  Task 4 :
Once all of the data has been received from the response, we need to handle that data.

To know when a response is finished, we can listen for the end event. Still in the callback of the .request() method, set up a listener for the end event of the response.
```javascript
response.on('end', () => {
  // Handle end event here
});
```
### Task 5 :
When the end event is triggered, we can work with the data from the response. In this case, we will act as a proxy and relay the data from the external API to the client that made the request. In the callback of the listener for the end event, log the data retrieved from the API to the console, then return the data by dispatching a response to the caller.

After the definition of request but still within handleGetRequest, be sure to signal the end of the request.

Run your code with node app.js, then click on the “Check Work” button.
```javascript
// Task 5 Answer:
// Handle end event
response.on('end', () => {
    // Log the data received from the API
    console.log(data);
    // Send the data to the client
    res.end(data);
    ;
    // Signal the end of the request
    request.end();
    ;
    console.log("Request ended");
});
```