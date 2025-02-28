# Setting up a Server with HTTP
# Routing in Node.js
To process and respond to 
Preview: Docs XMLHttpRequest is a built-in browser object that allows HTTP requests to be made in JavaScript. It is basically used to fetch data from APIs.
requests
 appropriately, servers need to do more than look at a request and dispatch a response. Internally, a server needs to maintain a way to handle each request based on specific criteria such as method, pathname, etc. The process of handling requests in specific ways based on the information provided within the request is known as routing.

The method is one important piece of information that can be used to route requests. Since each HTTP request contains a method such as GET and POST, it is a great way to discern different classes of requests based on the action intended for the server to carry out. Thus, all GET requests could be routed to a specific function for handling, while all POST requests are routed to another function to be handled. This also allows for the logical co-location of processing code with the specific verb to be handled.