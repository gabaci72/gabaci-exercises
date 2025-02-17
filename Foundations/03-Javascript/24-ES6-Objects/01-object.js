/*The spaceship we have so far looks good but, unfortunately, is not very fast at hyperspace travel due to having an inferior fuel source. Make a new spaceship object named fasterShip with the same color as spaceship but with a Fuel Type equal to 'Turbo Fuel'.*/
let spaceship = {
    homePlanet: "Earth",
    color: "silver",
    "Fuel Type": "Turbo Fuel",
    numCrew: 5,
    flightPath: ["Venus", "Mars", "Saturn"],
  };

  console.log(spaceship["Fuel Type"]);
  
 /* Let’s use the dot operator to access the value of numCrew from the spaceship object in the code editor. Create a variable crewCount and assign the spaceship‘s numCrew property to it.*/
  const crewCount = spaceship.numCrew;
  console.log(crewCount);//5

  
  /*Again using the dot operator, create a variable planetArray and assign the spaceship‘s flightPath property to it.*/
  const planetArray = spaceship.flightPath;
  console.log(planetArray);//["Venus", "Mars", "Saturn"]

  