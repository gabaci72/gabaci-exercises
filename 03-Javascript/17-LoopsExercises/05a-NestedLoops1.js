// Nested Loops
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];

for (let i = 0; i < myArray.length; i++) { // 0, 1, 2
  for (let j = 0; j < yourArray.length; j++) { // 0, 1, 2
    console.log(`Comparing ${myArray[i]} with ${yourArray[j]}`);
      if (myArray[i] === yourArray[j]) { // 6 === 19, 19 === 19, 20 === 2
      console.log('Both arrays have the number: ' + yourArray[j]); // 19
    } // 19
  } // 19
} // 19
