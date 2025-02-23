//Imagine our doggy daycare is so successful that we decide to expand the business
// and open a kitty daycare. Before the daycare opens, we need to create a Cat class
// so we can quickly generate Cat instances. We know that the properties in
// our Cat class (name, behavior) are similar to the properties in our Dog class,
// though, there will be some differences, because of course, cats are not dogs.
// Let’s say that our Cat class looks like this:

class Animal {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}

class Cat extends Animal {
    constructor(name, usesLitter) {
        super(name); // Call the parent class constructor
        this._usesLitter = usesLitter;
    }

    get usesLitter() {
        return this._usesLitter;
    }
}

// Example usage:
const myCat = new Cat('Whiskers', true);
console.log(myCat.name); // Output: Whiskers
console.log(myCat.usesLitter); // Output: true
console.log(myCat.behavior); // Output: 0
myCat.incrementBehavior();
console.log(myCat.behavior); // Output: 1

