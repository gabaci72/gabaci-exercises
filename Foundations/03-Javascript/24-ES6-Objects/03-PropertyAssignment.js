let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below

/* 1.Reassign the color property of the spaceship object to have a value of 'glorious gold'*/
spaceship.color = 'glorious gold';
console.log(spaceship.color);

/*2.Without changing lines 1 - 6, add a numEngines property with a numeric value between 1 and 10 to the spaceship object. */
spaceship.numEngines = 4;
console.log(spaceship.numEngines);

/* 3.Use the delete operator to remove the 'Secret Mission' property from the spaceship object.*/
delete spaceship  ['Secret Mission'];
console.log(spaceship);
