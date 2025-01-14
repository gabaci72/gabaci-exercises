// Runners who are 25 years old and registered early:
//const age = 25;
//const registeredEarly = true;

//Runners who are 25 years old and did NOT register early:
//const age = 25;
//const registeredEarly = false;

//Runners who are 16 years old and registered early:

//const age = 16;
//const registeredEarly = true;

//Runners who are 16 years old and did NOT register early:

//const age = 16;
//const registeredEarly = false;
let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false; // or true, depending on the test condition
const age = 19; // Set to the runner's age

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (age < 18) {
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  console.log('Please see the registration desk.');
}
