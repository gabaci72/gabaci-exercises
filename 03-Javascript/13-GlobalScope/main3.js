const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
//1.create an if statement that checks if the region is the 'The Arctic'.
  if (region === 'The Arctic') {
   let lightWaves = 'Northern Lights'; // 2.New variable inside the if block
   console.log(lightWaves);// 3.Logs 'Northern Lights'
  }

  console.log(lightWaves);// Logs 'Moonlight'
};

logVisibleLightWaves();
//When you run this code, it will log 'Northern Lights' inside the if block and 'Moonlight' outside the if block, demonstrating block scope.