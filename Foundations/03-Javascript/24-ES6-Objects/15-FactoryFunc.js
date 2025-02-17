const robotFactory = (model, mobile) => {//factory function that returns an object
    return {//returning an object with the following properties
      model: model,//model property with the value of the model parameter
      mobile: mobile,//mobile property with the value of the mobile parameter
      beep() {//beep method that logs 'Beep Boop' to the console if the robot is mobile or logs 'Beep Boop Boop' if the robot is not mobile
        console.log('Beep Boop');//
      }
    };
  };
  console.log('The factory returns an objects:');//logs 'The factory returns an object:' to the console
  console.log(robotFactory());//logs the robotFactory function to the console
 
  console.log('The tinCan object declaration:');//logs 'The tinCan object:' to the console
  const tinCan = robotFactory('P-500', true);//creates a new robot object with the model property set to 'P-500' and the mobile property set to true and assigns it to the tinCan variable.
  console.log('The tinCan objects:');
  console.log(tinCan);//logs the tinCan object to the console
  
  console.log('The tinCan object beep method:');
  tinCan.beep();

  console.log('The tinCan object model property:');
  console.log(tinCan.model);

  console.log('The tinCan object mobile property:');
  console.log(tinCan.mobile);