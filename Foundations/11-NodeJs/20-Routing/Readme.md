# Setting up a Server with HTTP
# Routing in Node.js
To process and respond to requests appropriately, servers need to do more than look at a request and dispatch a response. Internally, a server needs to maintain a way to handle each request based on specific criteria such as method, pathname, etc. The process of handling requests in specific ways based on the information provided within the request is known as routing.

The method is one important piece of information that can be used to route requests. Since each HTTP request contains a method such as GET and POST, it is a great way to discern different classes of requests based on the action intended for the server to carry out. Thus, all GET requests could be routed to a specific function for handling, while all POST requests are routed to another function to be handled. This also allows for the logical co-location of processing code with the specific verb to be handled.

```js
const server = http.createServer((req, res) => { // create a server
  const { method } = req; // destructure method from req

  switch(method) { // switch on method
    case 'GET': // handle GET request
      return handleGetRequest(req, res); // call handleGetRequest
    case 'POST': // handle POST request
      return handlePostRequest(req, res); // call handlePostRequest
    case 'DELETE': // handle DELETE request
      return handleDeleteRequest(req, res); // call handleDeleteRequest
    case 'PUT': // handle PUT request
      return handlePutRequest(req, res); // call handlePutRequest
    default: // handle other request methods
      throw new Error(`Unsupported request method: ${method}`); // throw error
  }
})
```

In the above example, the HTTP method property is destructured from the req object and used to conditionally invoke a handler function built specifically for handling those types of requests. This is great at first glance, but it should soon become apparent that the routing is not specific enough. After all, how will one GET request be distinguished from another?

We can distinguish one request from another of the same method through the use of the pathname. The pathname allows the server to understand what resource is being targeted. Let’s take a look at the handleGetRequest handler function.

```js
function handleGetRequest(req, res) { // handle GET request
  const { pathname } = new URL(req.url); // destructure pathname from req
  let data = {}; // initialize data

  if (pathname === '/projects') { // handle GET request for projects
    data = await getProjects(); // call getProjects
    res.setHeader('Content-Type', 'application/json'); // set content type
    return res.end(JSON.stringify(data)); // end response with data
  }

  res.statusCode = 404; // set status code
  return res.end('Requested resource does not exist'); // end response with error message

}
```
Within the handleGetRequest() function, the pathname is being checked to match a known resource, '/projects'. If the pathname matches, the resource data is fetched and then subsequently dispatched from the server as a successful response. Otherwise, the .statusCode property is set to 404, indicating that the resource is not found, and a corresponding error message is dispatched. This pattern can be extrapolated to any number of conditional resource matches, allowing the server to handle many different types of requests to different resources.

## Index:
* [request] Preview: Docs XMLHttpRequest is a built-in browser object that allows HTTP requests to be made in JavaScript. It is basically used to fetch data from APIs. It is also used to send data to APIs.
link: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

* [destructured] Preview: The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment