// Creating Objects with ES6:
const user = {
    name: 'Gaba',
    age: 30,
    greet() {
        return `Hello, I'm ${this.name}`;
    }
};
console.log(user.greet());

// Output: Hello, I'm Gaba