const name = 'Nala'; // Global name variable

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3); // Ensure random is inside the function
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

const getTrainingDays = event => {
  let days; // Declare days here
  if (event === 'Marathon') {
    days = 50; // Assign value to days
  } else if (event === 'Triathlon') {
    days = 100; // Assign value to days
  } else if (event === 'Pentathlon') {
    days = 200; // Assign value to days
  }
  return days;
};

const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

// Existing code for Nala
const event = getRandEvent();
const days = getTrainingDays(event);
logEvent(name, event);
logTime(name, days);

// Code for Warren
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
logEvent(name2, event2);
logTime(name2, days2);


