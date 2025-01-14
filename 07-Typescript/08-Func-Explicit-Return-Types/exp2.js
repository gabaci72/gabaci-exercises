var createArrowGreeting = function (name) {
    if (name) {
        return "Hello, ".concat(name, "!");
    }
    return undefined;
    // Typescript Error: Type 'undefined' is not assignable to type 'string'.
};
console.log(createArrowGreeting("John"));
