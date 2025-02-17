//Property value shorthand technique

// Writing this code longhand:
// const robotFactory = (model, mobile) => {
//     return {
//       model: model,
//       mobile: mobile,
//       beep() {
//         console.log('Beep Boop');
//       }
//     }
//   }
  
//   // To check that the property value shorthand technique worked:
//   const newRobot = robotFactory('P-501', false)
//   console.log(newRobot.model)
//   console.log(newRobot.mobile)

  
//Instead of writing this code longhand, we can use property value shorthand to condense it:
  const robotFactory = (model, mobile) => {
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)