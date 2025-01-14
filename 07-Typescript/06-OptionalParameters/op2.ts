function greet(name?: string) {
  console.log(`Hello, ${name|| 'Anonymous'}!`);
}

greet(); // Prints: Hello, Anonymous!
