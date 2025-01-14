function isBiggerThan10(element, index, array) {
    console.log(`Checking element: ${element}`);
    console.log(`Index: ${index}`);
    console.log(`Full array: ${array}`);
    
    const result = element > 10;
    console.log(`Is ${element} bigger than 10? ${result}`);
    
    return result;
}

console.log("Test with array [2, 5, 8, 1, 4]:");
[2, 5, 8, 1, 4].some(isBiggerThan10);

console.log("\nTest with array [12, 5, 8, 1, 4]:");
[12, 5, 8, 1, 4].some(isBiggerThan10);