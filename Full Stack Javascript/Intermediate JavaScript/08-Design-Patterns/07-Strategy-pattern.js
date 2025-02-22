// Define a set of strategies

// Strategy 1
const strategyA = {
    execute: function () {
        console.log("Executing Strategy A");
    },
};

// Strategy 2
const strategyB = {
    execute: function () {
        console.log("Executing Strategy B");
    },
};

// Context that will use the strategy
function Context(strategy) {
    this.strategy = strategy;

    // Method to set a new strategy
    this.setStrategy = function (strategy) {
        this.strategy = strategy;
    };

    // Method to execute the current strategy
    this.executeStrategy = function () {
        this.strategy.execute();
    };
}

// Example usage

const context = new Context(strategyA);

context.executeStrategy(); // Output: Executing Strategy A

context.setStrategy(strategyB);
context.executeStrategy(); // Output: Executing Strategy B
