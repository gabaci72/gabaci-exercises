// 1. At the bottom of main.js, use console.log() to print the value saved to 
//   thename property of the surgeonRomero object.

// 2. Call .takeVacationDays() on surgeonRomero, with an input of 3.

// 3. After the call to .takeVacationDays(), use console.log() to print the 
// value saved to the remainingVacationDays property of the surgeonRomero instance.


class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get department() {
      return this._department;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff; //The method takeVacationDays is designed to reduce the _remainingVacationDays property   
      // by the number of daysOff passed as an argument.
      }
  }
  
  const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

  console.log(surgeonRomero.name); // 1. Francisco Romero
  surgeonRomero.takeVacationDays(3); // 2. Call takeVacationDays with 3 days off for surgeonRomero

  console.log(surgeonRomero.remainingVacationDays); // 3. 17 (20 - 3)
