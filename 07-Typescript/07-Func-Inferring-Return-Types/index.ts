function getRandomNumber(){
  return Math.random();
}

// Assuming getRandomNumber is defined in index.ts
let myVar = getRandomNumber(); // TypeScript infers the type as number