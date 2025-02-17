const person = {// An object literal with a getter method for the full name property.
    _firstName: 'John',// The underscore character is used to indicate that this property is private.
    _lastName: 'Doe',// The underscore character is used to indicate that this property is private.
    get fullName() {// A getter method for the full name property.
      if (this._firstName && this._lastName){// If both first name and last name are present, return the full name.
        return `${this._firstName} ${this._lastName}`;// Return the full name.
      } else {// If either first name or last name is missing, return an error message.
        return 'Missing a first name or a last name.';// Return an error message.
      }
    }
  }
  
  // To call the getter method: 
  person.fullName; // 'John Doe'

  console.log(person.fullName); // 'John Doe'