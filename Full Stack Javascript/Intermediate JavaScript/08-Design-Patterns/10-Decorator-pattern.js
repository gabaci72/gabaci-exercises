function Coffee() {
    this.cost = function () {
        return 5;
    };
}

function MilkDecorator(coffee) {
    this.cost = function () {
        return coffee.cost() + 2;
    };
}

function SugarDecorator(coffee) {
    this.cost = function () {
        return coffee.cost() + 1;
    };
}

var coffee = new Coffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);

console.log(coffee.cost()); // Output: 8
