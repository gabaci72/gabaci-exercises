function greet(name) {
    console.log("Hello, ".concat(name || 'Anonymous', "!"));
}
greet(); // Prints: Hello, Anonymous!
