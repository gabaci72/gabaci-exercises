//
// const goat = {
//     dietType: 'herbivore',
//     makeSound() {
//       console.log('baaa');
//     },
//     diet: () => {
//       console.log(this.dietType);
//     }
//   };
  
//   goat.diet(); // Prints undefined

  // Explanation:
  // The `diet` method is defined as an arrow function, which does not have its own `this` context.
  // Inside the arrow function, `this` refers to the surrounding lexical context, which is the global object in this case.
  // Since `dietType` is a property of the `goat` object, `this.dietType` is `undefined` in the global context.

//   const robot = {
//     energyLevel: 100,
//     checkEnergy: () => {
//       console.log(`Energy is currently at ${this.energyLevel}%.`);
//     }
//   }
  
//   robot.checkEnergy(); // Prints "Energy is currently at undefined%."
   // Explanation:
   // Similar to the previous example, the `checkEnergy` method is an arrow function, so `this` refers to the global object.
   // In the global context, `this.energyLevel` is `undefined`.
   // Therefore, the output is "Energy is currently at undefined%."
   // To fix this issue, you can use a regular function expression instead of an arrow function for the `checkEnergy` method:
//    const robot = {
//     energyLevel: 100,
//     checkEnergy() {
//       console.log(`Energy is currently at ${this.energyLevel}%.`);
//     }
//   }

//   robot.checkEnergy(); // Prints "Energy is currently at 100%."

//Refactor, or change, the method to use a function expression. You can write the function using either longhand or shorthand format.
const robot = {
    energyLevel: 100,
  checkEnergy: function() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  }
  
  }
  
  robot.checkEnergy(); // Prints "Energy is currently at 100%."
  // Explanation:
  // By using a function expression for the `checkEnergy` method, `this` now refers to the `robot` object.