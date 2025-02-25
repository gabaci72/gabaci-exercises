try {
    eval('const myRandomNumber; = Math.random();'); // This will throw a SyntaxError because of invalid syntax.
} catch (error) {
    console.log(error.name, ":", error.message);
}

try {
    myVariable++; // This will throw a ReferenceError because myVariable is not defined.
} catch (error) {
    console.log(error.name, ":", error.message);
}

try {
    const myString = 42;
    myString.substring(0); // This will throw a TypeError because substring is not a method of a number.
} catch (error) {
    console.log(error.name, ":", error.message);
}

try {
    const myRandomNumber = Math.random(); // This should be correct syntax.
    console.log(myRandomNumber); // Just to show it works
} catch (error) {
    console.log(error.name, ":", error.message);
}