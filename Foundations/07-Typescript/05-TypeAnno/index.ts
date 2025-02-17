function triple(value: number) {
  return value * 3;
}

function greetTripled(greeting: string, value: number) {
  console.log(`${greeting}, ${triple(value)}!`);
}

//greetTripled(5, 'Hiya');
greetTripled('Hiya', 5);