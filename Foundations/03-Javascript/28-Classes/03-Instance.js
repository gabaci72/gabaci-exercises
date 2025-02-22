class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}
//Create an instance of the Surgeon class — set the name to 'Francisco Romero' and 
// department to 'Cardiovascular'. Save the instance to a constant variable called surgeonRomero.
const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');

console.log(surgeonRomero); // Output: Surgeon { name: 'Francisco Romero', department: 'Cardiovascular' }

//Create an instance of the Surgeon class — set the name to 'Ruth Jackson' and 
// department to 'Orthopedics'. Save the instance to a constant variable called surgeonJackson.
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
console.log(surgeonJackson); // Output: Surgeon { name: 'Ruth Jackson', department: 'Orthopedics' } 
