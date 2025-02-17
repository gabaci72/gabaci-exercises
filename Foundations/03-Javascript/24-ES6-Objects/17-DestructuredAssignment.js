//Destructured Assignment:
const robot = {//object
    model: '1E78V2',//property
    energyLevel: 100,//property
    functionality: {//object
      beep() {//method
        console.log('Beep Boop');//method body
      },
      fireLaser() {///method
        console.log('Pew Pew');//method body
      },
    }
  };
  
  //console.log(functionality);// This will throw an error because functionality is not defined in this scope.
  const {functionality} = robot;//destructuring assignment to extract the functionality property from the robot object.
  console.log(functionality);// This will log the functionality object to the console.
  functionality.beep();// This will call the beep method on the functionality object.
  functionality.fireLaser();// This will call the fireLaser method on the functionality object.
  console.log(robot.functionality.beep());// This will call the beep method on the functionality object and log its return value to the console.
 