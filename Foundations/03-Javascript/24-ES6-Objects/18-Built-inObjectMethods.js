const robot = {// Create an object named robot with the following properties:
	model: 'SAL-1000',//model
  mobile: true,// mobile
  sentient: false,// sentient
  armor: 'Steel-plated',// armor
  energyLevel: 75// energyLevel
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);// Add the missing code below:

console.log(robotKeys);// Output should be: model, mobile, sentient, armor, energyLevel

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)// Add the missing code below:
console.log(robotEntries);// Output should be: [ [ 'model', 'SAL-1000' ], [ 'mobile', true ], [ 'sentient', false ], [ 'armor', 'Steel-plated' ], [ 'energyLevel', 75 ] ]

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)// Add the missing code below;

console.log(newRobot);// Output should be: { model: 'SAL-1000', mobile: true, sentient: false, armor: 'Steel-plated', energyLevel: 75, laserBlaster: true, voiceRecognition: true }