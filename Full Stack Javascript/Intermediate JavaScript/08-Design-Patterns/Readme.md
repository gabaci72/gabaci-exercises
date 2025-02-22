# Top 30 JavaScript Design Patterns Interview Questions and Answers:
1. What is Design Pattern in JavaScript?
2. Types of Design Pattern in JavaScript?
3. What are the Main advantages of using design pattern in JavaScript?
4. How does the Module design pattern work in JavaScript?
5. What is the Observer pattern?
6. Explain the Singleton design pattern in JavaScript.
7. How does the Strategy pattern work in JavaScript?
8. Explain the Factory Design Pattern.
9. How does the Prototype pattern work?
10. What is the Decorator pattern in JavaScript?
11. What is Known as Gang of Four?
12. Define the MVC (Model-View-Controller) pattern in JavaScript.
13. Which is the most common used design pattern in javascript?
14. What do you understand by Dependency Injection pattern and how do you implemented it in JavaScript?
15. Explain the Publish-Subscribe pattern and provide an example in JavaScript.
16. How is the Strategy pattern different from the State pattern?
17. Explain the Proxy pattern in JavaScript.
18. How does the Template Method pattern work?
19. Explain the Chain of Responsibility pattern and provide an example in JavaScrip.
20. How is the Factory pattern different from the Abstract Factory pattern?
21. Describe the Proxy pattern and provide a real-world example in JavaScript
22. Explain the Command pattern and provide a use case in JavaScript
23. Describe the Memento pattern with example
24. What is the Revealing Module pattern?
25. How does the State Pattern work, and when it is used in JavaScript?
26. Explain the Flux architecture and how it utilizes the Observer Pattern
27. How does Module Pattern differ from the Revealing Module Pattern?
28. Differentiate between the Factory and Abstract Factory Patterns
29. Explain the Flux Pattern and its relationship with React
30. Example of Revealing Module pattern in JavaScript

### 1. Design Pattern in JavaScript:
A design pattern is the reusable solution to the common problem in software design and software development. It is basically a general template that can be applied to solve a particular design problem in code.

### 2. Types of Design Pattern in JavaScript:
There are mainly three types of design patterns:
* **Creational Design Pattern**
    * Factory Method Design Patterns
    * Abstract Factory Method Design Patterns
    * Singleton Method Design Pattern
    * Prototype Method Design Patterns
    * Builder Method Design Patterns

* **Structural Design Pattern**
    * Example for Structural Design Patterns
    * Types of Structural Design Patterns
    * Adapter Method Design Pattern
    * Bridge Method Design Pattern
    * Composite Method Design Pattern
    * Decorator Method Design Pattern
    * Facade Method Design Pattern
    * Flyweight Method Design Pattern
    * Proxy Method Design Pattern
    * Benefits of Structural Design Patterns
    * Challenges of Structural Design Patterns

* **Behavioral Design Pattern**
    * Chain Of Responsibility Method Design Pattern
    * Command Method Design Pattern
    * Interpreter Method Design Pattern
    * Mediator Method Design Pattern
    * Memento Method Design Patterns
    * Observer Method Design Pattern
    * State Method Design Pattern
    * Strategy Method Design Pattern
    * Template Method Design Pattern
    * Visitor Method Design Pattern


### 3. What are the Main advantages of using design pattern in JavaScript?
- **Reusability**: Patterns can be reused across different projects.
- **Maintainability**: Code is easier to maintain and understand.
- **Scalability**: Patterns help in scaling the application efficiently.

### 4. How does the Module design pattern work in JavaScript?
The Module pattern encapsulates "privacy" by creating a closure. It helps in organizing code into reusable modules.

```javascript
const Module = (function() {
    let privateVar = "I am private";

    function privateMethod() {
        console.log(privateVar);
    }

    return {
        publicMethod: function() {
            privateMethod();
        }
    };
})();

Module.publicMethod(); // Outputs: I am private
```

### 5. What is the Observer pattern?
The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

```javascript
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update());
    }
}

class Observer {
    update() {
        console.log("Observer notified");
    }
}

const subject = new Subject();
const observer = new Observer();

subject.addObserver(observer);
subject.notifyObservers(); // Outputs: Observer notified
```

### 6. Explain the Singleton design pattern in JavaScript.
The Singleton pattern ensures a class has only one instance and provides a global point of access to it.

```javascript
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            this.value = Math.random();
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // Outputs: true
```

### 7. How does the Strategy pattern work in JavaScript?
The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable.

```javascript
class Strategy {
    execute() {
        throw new Error("Method 'execute()' must be implemented.");
    }
}

class ConcreteStrategyA extends Strategy {
    execute() {
        console.log("Executing Strategy A");
    }
}

class ConcreteStrategyB extends Strategy {
    execute() {
        console.log("Executing Strategy B");
    }
}

class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy() {
        this.strategy.execute();
    }
}

const context = new Context(new ConcreteStrategyA());
context.executeStrategy(); // Outputs: Executing Strategy A

context.setStrategy(new ConcreteStrategyB());
context.executeStrategy(); // Outputs: Executing Strategy B
```

### 8. Explain the Factory Design Pattern.
The Factory pattern provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

```javascript
class Product {
    constructor(name) {
        this.name = name;
    }
}

class ConcreteProductA extends Product {
    constructor() {
        super("Product A");
    }
}

class ConcreteProductB extends Product {
    constructor() {
        super("Product B");
    }
}

class Factory {
    createProduct(type) {
        switch (type) {
            case 'A':
                return new ConcreteProductA();
            case 'B':
                return new ConcreteProductB();
            default:
                throw new Error("Unknown product type");
        }
    }
}

const factory = new Factory();
const productA = factory.createProduct('A');
const productB = factory.createProduct('B');

console.log(productA.name); // Outputs: Product A
console.log(productB.name); // Outputs: Product B
```

### 9. How does the Prototype pattern work?
The Prototype pattern creates new objects by cloning existing objects, known as prototypes.

```javascript
class Prototype {
    clone() {
        return Object.create(this);
    }
}

const prototype = new Prototype();
prototype.name = "Prototype";

const clone = prototype.clone();
clone.name = "Clone";

console.log(prototype.name); // Outputs: Prototype
console.log(clone.name); // Outputs: Clone
```

### 10. What is the Decorator pattern in JavaScript?
The Decorator pattern attaches additional responsibilities to an object dynamically.

```javascript
class Component {
    operation() {
        return "Component operation";
    }
}

class Decorator {
    constructor(component) {
        this.component = component;
    }

    operation() {
        return this.component.operation();
    }
}

class ConcreteDecoratorA extends Decorator {
    operation() {
        return `ConcreteDecoratorA(${this.component.operation()})`;
    }
}

class ConcreteDecoratorB extends Decorator {
    operation() {
        return `ConcreteDecoratorB(${this.component.operation()})`;
    }
}

const component = new Component();
const decoratorA = new ConcreteDecoratorA(component);
const decoratorB = new ConcreteDecoratorB(decoratorA);

console.log(decoratorB.operation()); // Outputs: ConcreteDecoratorB(ConcreteDecoratorA(Component operation))
```

### 11. What is Known as Gang of Four?
The Gang of Four (GoF) refers to the four authors of the book "Design Patterns: Elements of Reusable Object-Oriented Software" (Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides).

### 12. Define the MVC (Model-View-Controller) pattern in JavaScript.
The MVC pattern separates an application into three interconnected components: Model (data), View (UI), and Controller (logic).

```javascript
class Model {
    constructor() {
        this.data = [];
    }

    addItem(item) {
        this.data.push(item);
    }

    getItems() {
        return this.data;
    }
}

class View {
    render(model) {
        console.log(model.getItems());
    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    addItem(item) {
        this.model.addItem(item);
        this.view.render(this.model);
    }
}

const model = new Model();
const view = new View();
const controller = new Controller(model, view);

controller.addItem("Item 1");
controller.addItem("Item 2");
```

### 13. Which is the most common used design pattern in javascript?
The most commonly used design pattern in JavaScript is the Module pattern, which helps in organizing code into reusable modules.

### 14. What do you understand by Dependency Injection pattern and how do you implemented it in JavaScript?
Dependency Injection (DI) is a design pattern that implements Inversion of Control (IoC) for resolving dependencies. It allows the creation of dependent objects outside of a class and provides those objects to a class in various ways.

```javascript
class Service {
    getData() {
        return "Data from Service";
    }
}

class Client {
    constructor(service) {
        this.service = service;
    }

    execute() {
        console.log(this.service.getData());
    }
}

const service = new Service();
const client = new Client(service);
client.execute(); // Outputs: Data from Service
```

### 15. Explain the Publish-Subscribe pattern and provide an example in JavaScript.
The Publish-Subscribe pattern is a messaging pattern where senders of messages, called publishers, do not program the messages to be sent directly to specific receivers, called subscribers.

```javascript
class PubSub {
    constructor() {
        this.events = {};
    }

    subscribe(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    publish(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
}

const pubsub = new PubSub();

pubsub.subscribe('event1', data => {
    console.log(`Event1 received: ${data}`);
});

pubsub.publish('event1', 'Hello World'); // Outputs: Event1 received: Hello World
```

### 16. How is the Strategy pattern different from the State pattern?
The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. The State pattern allows an object to alter its behavior when its internal state changes.

### 17. Explain the Proxy pattern in JavaScript.
The Proxy pattern provides a surrogate or placeholder object to control access to another object.

```javascript
const target = {
    name: "Target",
    getName() {
        return this.name;
    };

const proxy = new Proxy(target, {
    get(target, prop, receiver) {
        console.log(`Getting ${prop}`);
        return Reflect.get(target, prop, receiver);
    }
});

console.log(proxy.getName()); // Outputs: Getting getName
```

### 18. How does the Template Method pattern work?
The Template Method pattern defines the skeleton of an algorithm in a method, deferring some steps to subclasses.

```javascript
class AbstractClass {
    templateMethod() {
        this.step1();
        this.step2();
    }

    step1() {
        throw new Error("Method 'step1()' must be implemented.");
    }

    step2() {
        throw new Error("Method 'step2()' must be implemented.");
    }
}

class ConcreteClass extends AbstractClass {
    step1() {
        console.log("Step 1");
    }

    step2() {
        console.log("Step 2");
    }
}

const concrete = new ConcreteClass();
concrete.templateMethod(); // Outputs: Step 1 Step 2
```

### 19. Explain the Chain of Responsibility pattern and provide an example in JavaScript.
The Chain of Responsibility pattern passes a request along a chain of potential handlers until it is handled.

```javascript
class Handler {
    constructor(nextHandler) {
        this.nextHandler = nextHandler;
    }

    handle(request) {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}

class ConcreteHandlerA extends Handler {
    handle(request) {
        if (request === 'A') {
            console.log("Handled by A");
        } else if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}

class ConcreteHandlerB extends Handler {
    handle(request) {
        if (request === 'B') {
            console.log("Handled by B");
        } else if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}

const handlerA = new ConcreteHandlerA();
const handlerB = new ConcreteHandlerB(handlerA);

handlerB.handle('A'); // Outputs: Handled by A
handlerB.handle('B'); // Outputs: Handled by B
```

### 20. How is the Factory pattern different from the Abstract Factory pattern?
The Factory pattern provides an interface for creating objects, but allows subclasses to alter the type of objects that will be created. The Abstract Factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.

### 21. Describe the Proxy pattern and provide a real-world example in JavaScript.
The Proxy pattern provides a surrogate or placeholder object to control access to another object. A real-world example is a virtual proxy that loads a large image only when it is needed.

```javascript
class RealImage {
    constructor(filename) {
        this.filename = filename;
        this.loadFromDisk();
    }

    loadFromDisk() {
        console.log(`Loading ${this.filename}`);
    }

    display() {
        console.log(`Displaying ${this.filename}`);
    }
}

class ProxyImage {
    constructor(filename) {
        this.filename = filename;
        this.realImage = null;
    }

    display() {
        if (!this.realImage) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}

const proxyImage = new ProxyImage("test_image.jpg");
proxyImage.display(); // Outputs: Loading test_image.jpg Displaying test_image.jpg
```

### 22. Explain the Command pattern and provide a use case in JavaScript.
The Command pattern encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations.

```javascript
class Command {
    execute() {
        throw new Error("Method 'execute()' must be implemented.");
    }
}

class ConcreteCommand extends Command {
    constructor(receiver) {
        super();
        this.receiver = receiver;
    }

    execute() {
        this.receiver.action();
    }
}

class Receiver {
    action() {
        console.log("Receiver action executed");
    }
}

class Invoker {
    constructor(command) {
        this.command = command;
    }

    executeCommand() {
        this.command.execute();
    }
}

const receiver = new Receiver();
const command = new ConcreteCommand(receiver);
const invoker = new Invoker(command);

invoker.executeCommand(); // Outputs: Receiver action executed
```

### 23. Describe the Memento pattern with example.
The Memento pattern captures and externalizes an object's internal state so that the object can be restored to this state later, without violating encapsulation.

```javascript
class Originator {
    constructor(state) {
        this.state = state;
    }

    createMemento() {
        return new Memento(this.state);
    }

    setMemento(memento) {
        this.state = memento.getState();
    }

    getState() {
        return this.state;
    }
}

class Memento {
    constructor(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
}

class Caretaker {
    constructor() {
        this.mementos = [];
    }

    addMemento(memento) {
        this.mementos.push(memento);
    }

    getMemento(index) {
        return this.mementos[index];
    }
}

const originator = new Originator("State 1");
const caretaker = new Caretaker();

caretaker.addMemento(originator.createMemento());
originator.setState("State 2");
caretaker.addMemento(originator.createMemento());

originator.setMemento(caretaker.getMemento(0));
console.log(originator.getState()); // Outputs: State 1
```

### 24. What is the Revealing Module pattern?
The Revealing Module pattern is a variation of the Module pattern that reveals only the public methods and properties.

```javascript
const Module = (function() {
    let privateVar = "I am private";

    function privateMethod() {
        console.log(privateVar);
    }

    return {
        publicMethod: function() {
            privateMethod();
        }
    };
})();

Module.publicMethod(); // Outputs: I am private
```

### 25. How does the State Pattern work, and when it is used in JavaScript?
The State pattern allows an object to alter its behavior when its internal state changes. It is used when an object must change its behavior at runtime depending on its state.

```javascript
class State {
    handle() {
        throw new Error("Method 'handle()' must be implemented.");
    }
}

class ConcreteStateA extends State {
    handle() {
        console.log("Handling State A");
    }
}

class ConcreteStateB extends State {
    handle() {
        console.log("Handling State B");
    }
}

class Context {
    constructor(state) {
        this.state = state;
    }

    setState(state) {
        this.state = state;
    }

    request() {
        this.state.handle();
    }
}

const context = new Context(new ConcreteStateA());
context.request(); // Outputs: Handling State A

context.setState(new ConcreteStateB());
context.request(); // Outputs: Handling State B
```

### 26. Explain the Flux architecture and how it utilizes the Observer Pattern.
Flux is an application architecture for building client-side web applications. It utilizes the Observer pattern to manage the flow of data and ensure that the UI is always in sync with the application state.

### 27. How does Module Pattern differ from the Revealing Module Pattern?
The Module pattern encapsulates "privacy" by creating a closure, while the Revealing Module pattern explicitly reveals only the public methods and properties.

### 28. Differentiate between the Factory and Abstract Factory Patterns.
The Factory pattern provides an interface for creating objects, but allows subclasses to alter the type of objects that will be created. The Abstract Factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.

### 29. Explain the Flux Pattern and its relationship with React.
Flux is an application architecture for building client-side web applications. It is often used with React to manage the flow of data and ensure that the UI is always in sync with the application state.

### 30. Example of Revealing Module pattern in JavaScript.
```javascript
const Module = (function() {
    let privateVar = "I am private";

    function privateMethod() {
        console.log(privateVar);
    }

    return {
        publicMethod: function() {
            privateMethod();
        }
    };
})();

Module.publicMethod(); // Outputs: I am private
```

## Sources
- [GeeksforGeeks: Top 30 JavaScript Design Patterns Interview Questions](https://www.geeksforgeeks.org/top-30-javascript-design-patterns-interview-questions/)

This way, you give credit to the original source and ensure that you are complying with any licensing requirements.