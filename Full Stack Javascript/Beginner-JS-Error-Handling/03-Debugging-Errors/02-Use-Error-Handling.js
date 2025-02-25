function isSumBigger(number1, number2, total) {
    try {
        if (typeof number1 !== 'number' || typeof number2 !== 'number' || typeof total !== 'number') {
            throw new TypeError('All arguments must be numbers');
        }

        const sum = number1 + number2;

        if (sum > total) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(`Error in isSumBigger: ${error.message}`);
        return null; // Return null or handle the error as needed
    }
}

// Should return true
try {
    console.log('isSumBigger(1, 3, 2) returns: ' + isSumBigger(1, 3, 2));
} catch (error) {
    console.error(`Error in main code: ${error.message}`);
}

// Should return false
try {
    console.log('isSumBigger(1, 3, 5) returns: ' + isSumBigger(1, 3, 5));
} catch (error) {
    console.error(`Error in main code: ${error.message}`);
}

// Additional test cases to check error handling
try {
    console.log('isSumBigger("1", 3, 2) returns: ' + isSumBigger("1", 3, 2)); // Should throw TypeError
} catch (error) {
    console.error(`Error in main code: ${error.message}`);
}

try {
    console.log('isSumBigger(1, 3) returns: ' + isSumBigger(1, 3)); // Should throw TypeError
} catch (error) {
    console.error(`Error in main code: ${error.message}`);
}