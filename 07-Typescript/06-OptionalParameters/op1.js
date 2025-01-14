// function greet(name: string) {
//   console.log(`Hello, ${name || 'Anonymous'}!`);
// }
// greet('Anders'); // Prints: Hello, Anders!
// greet(); // TypeScript Error: Expected 1 arguments, but got 0.
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
greet("Alice"); // This will call the function and print the output
