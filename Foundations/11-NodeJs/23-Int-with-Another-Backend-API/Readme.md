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


