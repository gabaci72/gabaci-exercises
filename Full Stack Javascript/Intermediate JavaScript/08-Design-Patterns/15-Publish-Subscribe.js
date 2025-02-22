// Publisher (Subject)
class NewsAgency {
    constructor() {
        this.subscribers = [];
    }

    // Method to subscribe a new observer
    subscribe(observer) {
        this.subscribers.push(observer);
    }

    // Method to unsubscribe an observer
    unsubscribe(observer) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== observer);
    }

    // Method to notify all subscribers about a news update
    notify(news) {
        this.subscribers.forEach(subscriber => {
            subscriber.update(news);
        });
    }
}

// Subscriber (Observer)
class NewsSubscriber {
    constructor(name) {
        this.name = name;
    }

    // Update method to be called when notified
    update(news) {
        console.log(`${this.name} received news: ${news}`);
    }
}

// Example usage
const newsAgency = new NewsAgency();

const subscriber1 = new NewsSubscriber("Subscriber 1");
const subscriber2 = new NewsSubscriber("Subscriber 2");

// Subscribers subscribe to the news agency
newsAgency.subscribe(subscriber1);
newsAgency.subscribe(subscriber2);

// News agency notifies subscribers about a news update
newsAgency.notify("Breaking News: Important event!");

// Output:
// Subscriber 1 received news: Breaking News: Important event!
// Subscriber 2 received news: Breaking News: Important event!
