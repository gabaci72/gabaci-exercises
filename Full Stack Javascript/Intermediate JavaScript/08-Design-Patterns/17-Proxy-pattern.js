// Original object
const realSubject = {
    request: function () {
        console.log("Real subject handles the request.");
    }
};

// Proxy handler
const handler = {
    request: function () {
        console.log("Proxy handles the request before forwarding it to the real subject.");
        realSubject.request();
    }
};

// Creating a Proxy
const proxy = new Proxy(realSubject, handler);

// Using the Proxy
proxy.request();
