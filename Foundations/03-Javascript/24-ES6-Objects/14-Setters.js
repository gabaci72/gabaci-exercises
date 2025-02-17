const robot = {//object literal
    _model: '1E78V2',//underscore means private property
    _energyLevel: 100,//underscore means private property
    _numOfSensors: 15,//underscore means private property
    get numOfSensors(){//this is a getter method
      if(typeof this._numOfSensors === 'number'){//if the type of this._numOfSensors is a number
        return this._numOfSensors;//return the number of sensors
      } else {//if the type of this._numOfSensors is not a number
        return 'Sensors are currently down.'//return the string 'Sensors are currently down.'
      }
    },
    set numOfSensors(num) {//this is a setter method
      if (typeof num === 'number' && num >= 0){//if the type of num is a number and num is greater than or equal to 0
        this._numOfSensors = num;//set the number of sensors to num
      } else {//if the type of num is not a number or num is less than 0
        console.log('Pass in a number that is greater than or equal to 0')//print the string 'Pass in a number that is greater than or equal to 0'
      }   
    } 
  };
  
  robot.numOfSensors = 100;//set the number of sensors to 100
  console.log(robot.numOfSensors);//print the number of sensors to the console
  
  
  