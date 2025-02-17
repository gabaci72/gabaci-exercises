const rollTheDice = () => {
    // Generate a random number between 1 and 6 for die1
    let die1 = Math.floor(Math.random() * 6) + 1;

    // Generate a random number between 1 and 6 for die2
    let die2 = Math.floor(Math.random() * 6) + 1;

    // Return the sum of die1 and die2
    return die1 + die2;
};

// Test the function
console.log(rollTheDice());
