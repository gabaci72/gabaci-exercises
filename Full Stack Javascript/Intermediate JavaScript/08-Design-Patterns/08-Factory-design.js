// Product constructor
function Car(model, year) {
    this.model = model;
    this.year = year;
}

// Factory function
function CarFactory() { }

CarFactory.prototype.createCar = function (model, year) {
    return new Car(model, year);
};

// Usage
const factory = new CarFactory();
const car1 = factory.createCar('Toyota', 2022);
const car2 = factory.createCar('Honda', 2023);

console.log(car1); // Car { model: 'Toyota', year: 2022 }
console.log(car2); // Car { model: 'Honda', year: 2023 }
