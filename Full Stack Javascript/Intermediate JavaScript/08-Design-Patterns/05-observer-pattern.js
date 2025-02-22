// Subject
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update());
    }

    // Some state change in the subject
    setState(newState) {
        this.state = newState;
        this.notifyObservers();
    }
}

// Observer
class Observer {
    constructor(name) {
        this.name = name;
    }

    update() {
        console.log(`${this.name} has been notified of the state change.`);
    }
}

// Example usage
const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.setState("New State");
