const http = require("http");
const https = require("https");

const handleGetRequest = (req, res) => {
    // Configuration for the external GET request
    const options = {
        hostname: "static-assets.codecademy.com",
        path: "/Courses/Learn-Node/http/data.json",
        method: "GET",
    };

    // You can now use these options to make a request
    // For example, using https.get(options, callback)
};

// Creates server instance
const server = http.createServer((req, res) => {
    const { method } = req;

    switch (method) {
        case "GET":
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
