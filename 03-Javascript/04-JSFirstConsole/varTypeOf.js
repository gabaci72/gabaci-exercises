// typeof operator //

//  --------------------------------------//
function checkType(value) {
    const type = typeof value;
    switch (type) {
      case "string":
        console.log("The value is a string.");
        break;
      case "number":
        console.log("The value is a number.");
        break;
      case "boolean":
        console.log("The value is a boolean.");
        break;
      case "undefined":
        console.log("The value is a  undefined.");
        break;
      case "object":
        if (value === null) {
          console.log("The value is a  null.");
        } else {
          console.log("The value is a object.");
        }
        break;
      case "function":
        console.log("The value is a function.");
        break;
      case "symbol":
        console.log("The value is a symbol.");
        break;
      default:
        console.log("An unknown type.");
    }
  }
  
  checkType("Hello"); // Output: The value is a string.
  checkType(42); // Output: The value is a string.
  checkType(true); // Output: The value is a boolean.
  checkType(undefined); // Output: The value is a  undefined.
  checkType(null); // Output: The value is a  null.
  checkType({}); // Output: The value is a object.
  checkType(function() {}); // Output: The value is a function.
  checkType(Symbol("mySymbol")); // Output: The value is a symbol.