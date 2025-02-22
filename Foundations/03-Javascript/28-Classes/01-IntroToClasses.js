class Dog { // Here we create the class Dog
    constructor(name) { // Here we create the constructor method for the class Dog. The constructor method is a special method that is called when a new object is created. It is used to initialize the object's properties. In this case, we are initializing the object's name and behavior properties.  The name property is set to the value of the name parameter that is passed to the constructor method. The behavior property is set to 0.
      this._name = name; // Here we set the value of the name property to the value of the name parameter that is passed to the constructor method. The underscore before the name is a convention that indicates that the property is private. This means that it should not be accessed directly from outside the class. Instead, it should be accessed through a getter method. In this case, the getter method is the name method.
      this._behavior = 0; // Here we set the value of the behavior property to 0. The underscore before the behavior is a convention that indicates that the property is private. This means that it should not be accessed directly from outside the class. Instead, it should be accessed through a getter method. In this case, the getter method is the behavior method.
    }
  
    get name() { /// Here we create the getter method for the name property. The getter method is a special method that is used to access the value of a property. In this case, the getter method is used to access the value of the name property. The getter method returns the value of the name property.
      return this._name; // Here we return the value of the name property. The underscore before the name is a convention that indicates that the property is private. This means that it should not be accessed directly from outside the class. Instead, it should be accessed through a getter method. In this case, the getter method is the name method.
    }
    get behavior() { // Here we create the getter method for the behavior property. The getter method is a special method that is used to access the value of a property. In this case, the getter method is used to access the value of the behavior property. The getter method returns the value of the behavior property.
      return this._behavior; // Here we return the value of the behavior property. The underscore before the behavior is a convention that indicates that the property is private. This means that it should not be accessed directly from outside the class. Instead, it should be accessed through a getter method. In this case, the getter method is the behavior method.
    }   
  
    incrementBehavior() { // Here we create the incrementBehavior method. The incrementBehavior method is a special method that is used to increment the behavior property. The incrementBehavior method increments the behavior property by 1.
      this._behavior ++;
    }
  }
const halley = new Dog('Halley'); // Create a new Dog object with the name 'Halley'
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
