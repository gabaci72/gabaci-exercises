/*Preview: Docs Loading link description Objects  are collections of related data and functionality. We store that functionality in Preview: Docs Methods are object properties that contain functions. methods  on our objects:*/
// const goat = {
//     dietType: 'herbivore',
//     makeSound() {
//       console.log('baaa');
//     }
//   };

  // Calling the makeSound() method on the goat object.
//   goat.makeSound(); // Outputs: baaa

  /*Nice, we have a goat object that can print baaa to the console. Everything seems to be working fine. What if we wanted to add a new method to our goat object called .diet() that prints the goat‘s dietType? We would write:*/
//   const goat = {
//     dietType: 'herbivore',
//     makeSound() {
//       console.log('baaa');
//     },
//     diet() {
//       console.log(dietType);
//     }
//   };
//   goat.diet(); 
//   // Output will be "ReferenceError: dietType is not defined"

// const goat = {
//     dietType: 'herbivore',
//     makeSound() {
//       console.log('baaa');
//     },
//     diet() {
//       console.log(this.dietType);
//     }
//   };
  
//   goat.diet(); 
//   // Output: herbivore

  /*The this keyword is used to refer to the current object. In this case, this.dietType refers to the dietType property of the goat object.*/

  const robot = {//object.
    model: '1E78V2',//property of the object.
    energyLevel: 100,//property of the object.
    provideInfo() {//method of the object.
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;//this refers to the current object.	
    }
  };
  console.log(robot.provideInfo());//calling the method of the object.
  // Output: I am 1E78V2 and my current energy level is 100.