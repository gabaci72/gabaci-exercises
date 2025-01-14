function greet(name: string) {
    console.log(`Hello, ${name}!`);
}

greet('Katz'); // Prints: Hello, Katz  

greet(1337); // Error: argument '1337' is not assignable to parameter of type 'string'
