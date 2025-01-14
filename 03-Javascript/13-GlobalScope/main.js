//1.At the top of main.js, write three global variables:
//Name the first variable satellite and set it equal to 'The Moon'.
const satellite = "The Moon";
//Name the second variable galaxy and set it equal to 'The Milky Way'.
const galaxy = "The Milky Way";
//Name the third variable stars and set it equal to 'North Star'.
const stars = "North Star";

//2.write a function named callMyNightSky. Inside the function, include a return statement that returns the concatenation of the three global variables.
const callMyNightSky = () => {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
};
//3. use console.log() to log the value of callMyNightSky() to the console.
console.log(callMyNightSky());