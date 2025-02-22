// Define a prototype object
var carPrototype = {
    drive: function () {
        console.log("Driving the car!");
    },
    stop: function () {
        console.log("Stopping the car!");
    }
};

// Create a new object using the prototype
var myCar = Object.create(carPrototype);

// Now, myCar has the drive and stop methods
myCar.drive(); // Output: Driving the car!
myCar.stop();  // Output: Stopping the car!
