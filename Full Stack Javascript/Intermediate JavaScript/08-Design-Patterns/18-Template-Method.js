// Abstract class with the template method
function AbstractClass() { }

AbstractClass.prototype.templateMethod = function () {
    this.step1();
    this.step2();
    this.step3();
};

AbstractClass.prototype.step1 = function () {
    console.log("AbstractClass: Step 1");
};

AbstractClass.prototype.step2 = function () {
    console.log("AbstractClass: Step 2");
};

AbstractClass.prototype.step3 = function () {
    console.log("AbstractClass: Step 3");
};

// Concrete subclass inheriting from AbstractClass
function ConcreteClass() { }

ConcreteClass.prototype = Object.create(AbstractClass.prototype);
ConcreteClass.prototype.constructor = ConcreteClass;

// Override specific steps in the template method
ConcreteClass.prototype.step2 = function () {
    console.log("ConcreteClass: Step 2 overridden");
};

// Usage
const concreteObject = new ConcreteClass();
concreteObject.templateMethod();
