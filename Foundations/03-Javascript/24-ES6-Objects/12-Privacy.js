const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  
  
  robot._energyLevel = 'high'; // Below the robot object, reassign the _energyLevel property to 'high'.
  
  robot.recharge(); // This will output: Recharged! Energy is currently at high30%.