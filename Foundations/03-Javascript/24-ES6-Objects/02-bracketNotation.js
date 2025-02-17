let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  

/*Let’s use bracket notation to access the value of 'Active Mission' from the spaceship object in the code editor. Create a variable isActive and assign the spaceship‘s 'Active Mission' property to it. */
   let isActive =  spaceship['Active Mission'];
  

   console.log(isActive); // Output: true
    console.log(spaceship['Fuel Type']); // Output: Turbo Fuel
    console.log(spaceship['homePlanet']); // Output: Earth
    console.log(spaceship['numCrew']); // Output: 5
    console.log(spaceship['Active Mission']); // Output: true
    console.log(spaceship['Fuel Type']); // Output: Turbo Fuel
    console.log(spaceship['homePlanet']); // Output: Earth
    console.log(spaceship['numCrew']); // Output: 5

/*Using bracket notation and the propName variable provided, console.log() the value of the 'Active Mission' property. */

let propName = 'Active Mission';
console.log(spaceship[propName]); // Output: true