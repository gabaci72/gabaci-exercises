const robot = {//create object robot
    _model: "1E78V2",//create property model and assign value 1E78V2
    _energyLevel: 100,//create property energyLevel and assign value 100
    get energyLevel() {//create getter for energyLevel
      if (typeof this._energyLevel === "number") {//if energyLevel is a number
        return `My current energy level is ${this._energyLevel}`;//return string with energyLevel
      } else {//if energyLevel is not a number
        return "System malfunction: cannot retrieve energy level";//return string with error message
      }
    },
  };
  
  console.log(robot.energyLevel);//call getter for energyLevel and log to console
  
  