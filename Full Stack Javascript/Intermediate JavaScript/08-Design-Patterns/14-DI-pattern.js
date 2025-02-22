/////// Dependency Injection Pattern ////////
// 1. Constructor Injection
// 2. Setter Injection
// 3. Interface Injection
// 4. Method Injection
// 5. Field Injection
// 6. Property Injection
// 7. Lookup Method Injection
// 8. Service Locator Injection
// 9. Dependency Injection Container

// Engine class
class Engine {
    constructor(power) {
        this.power = power;
    }
}

// 1. Constructor Injection
class CarConstructor {
    constructor(engine) {
        this.engine = engine;
    }

    start() {
        console.log(`Car started with ${this.engine.power} horsepower.`);
    }
}

// 2. Setter Injection
class CarSetter {
    setEngine(engine) {
        this.engine = engine;
    }

    start() {
        console.log(`Car started with ${this.engine.power} horsepower.`);
    }
}

// 3. Interface Injection (simulated)
class EngineInterface {
    getEngine() {
        throw new Error("Method not implemented.");
    }
}

class CarInterface {
    constructor(engine) {
        this.engine = engine;
    }

    start() {
        console.log(`Car started with ${this.engine.getEngine().power} horsepower.`);
    }
}

// 4. Method Injection
class CarMethod {
    start(engine) {
        console.log(`Car started with ${engine.power} horsepower.`);
    }
}

// 5. Field Injection
class CarField {
    engine; // Field Injection

    start() {
        console.log(`Car started with ${this.engine.power} horsepower.`);
    }
}

// 6. Property Injection
class CarProperty {
    set engine(engine) {
        this._engine = engine;
    }

    get engine() {
        return this._engine;
    }

    start() {
        console.log(`Car started with ${this.engine.power} horsepower.`);
    }
}

// 7. Lookup Method Injection
class EngineLocator {
    static getEngine() {
        return new Engine(200);
    }
}

class CarLookup {
    start() {
        const engine = EngineLocator.getEngine();
        console.log(`Car started with ${engine.power} horsepower.`);
    }
}

// 8. Service Locator Injection
class ServiceLocator {
    static services = {};

    static register(serviceName, service) {
        this.services[serviceName] = service;
    }

    static get(serviceName) {
        return this.services[serviceName];
    }
}

class CarServiceLocator {
    start() {
        const engine = ServiceLocator.get('engine');
        if (!engine) {
            throw new Error("Engine not found");
        }
        console.log(`Car started with ${engine.power} horsepower.`);
    }
}

// 9. Dependency Injection Container
class DIContainer {
    static services = {};

    static register(serviceName, service) {
        this.services[serviceName] = service;
    }

    static resolve(serviceName) {
        return this.services[serviceName];
    }
}

// Registering services in DI Container
const engineInstance = new Engine(200);
ServiceLocator.register('engine', engineInstance);
const carServiceLocator = new CarServiceLocator();

// Example Usage
carServiceLocator.start(); // Output: Car started with 200 horsepower.

const engine = new Engine(200);
const carConstructor = new CarConstructor(engine);
carConstructor.start(); // Output: Car started with 200 horsepower.

const carSetter = new CarSetter();
carSetter.setEngine(engine);
carSetter.start(); // Output: Car started with 200 horsepower.

const carInterface = new CarInterface({ getEngine: () => engine });
carInterface.start(); // Output: Car started with 200 horsepower.

const carMethod = new CarMethod();
carMethod.start(engine); // Output: Car started with 200 horsepower.

const carField = new CarField();
carField.engine = engine; // Field Injection
carField.start(); // Output: Car started with 200 horsepower.

const carProperty = new CarProperty();
carProperty.engine = engine; // Property Injection
carProperty.start(); // Output: Car started with 200 horsepower.

const carLookup = new CarLookup();
carLookup.start(); // Output: Car started with 200 horsepower.