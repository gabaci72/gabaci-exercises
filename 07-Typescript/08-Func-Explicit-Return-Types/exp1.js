function createGreeting(name) {
    if (name) {
        return "Hello, ".concat(name, "!");
    }
    return undefined;
    // Typescript Error: Type 'undefined' is not assignable to type 'string'.
}
;
console.log(createGreeting());
