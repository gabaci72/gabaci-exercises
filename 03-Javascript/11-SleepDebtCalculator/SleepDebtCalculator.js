/*The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.*/

const getSleepHours = (day) => {
  switch (day.toLowerCase()) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 6;
    case 'thursday':
      return 5;
    case 'friday':
      return 8;
    case 'saturday':
      return 9;
    case 'sunday':
      return 7;
    default:
      return 'Invalid day';
  }
};

console.log(getSleepHours('monday'));   // should print 8
console.log(getSleepHours('tuesday'));  // should print 7
console.log(getSleepHours('wednesday'));// should print 6
console.log(getSleepHours('thursday')); // should print 5
console.log(getSleepHours('friday'));   // should print 8
console.log(getSleepHours('saturday')); // should print 9
console.log(getSleepHours('sunday'));   // should print 7

const getActualSleepHours = () => 
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');


const getIdealSleepHours = () => {
  const idealHours = 8; // Set this to your ideal hours per night
  return idealHours * 7;
};

console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
console.log(getIdealSleepHours());  // if idealHours is 8, should print 56

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8); // Pass your ideal hours here

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than needed.');
  } else {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
};

calculateSleepDebt();
