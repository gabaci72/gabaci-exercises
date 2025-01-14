const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below

/* Using const, declare a shorter-named variable, isTwoPlusTwo that will be easier to work with. Assign checkThatTwoPlusTwoEqualsFourAMillionTimes as its value.*/
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

/* Invoke your isTwoPlusTwo() function.*/
isTwoPlusTwo();

/* Use isTwoPlusTwo to console.log() the name property of the function we assigned to isTwoPlusTwo.*/
console.log(isTwoPlusTwo.name);
