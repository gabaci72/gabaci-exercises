//Inheritance 3
//Extend the HospitalEmployee class to include specialization and takeVacationDays. Code the Nurse class as well.
class HospitalEmployee {//Parent class
    constructor(name) {//Constructor for HospitalEmployee class
        this._name = name;//Adding new property to HospitalEmployee class
        this._remainingVacationDays = 20;//Adding new property to HospitalEmployee class with default value of 20 days
    }

    get name() {//Getter for name property
        return this._name;//Returning the name property value
    }

    get remainingVacationDays() {//Getter for remainingVacationDays property
        return this._remainingVacationDays;//Returning the remainingVacationDays property value
    }

    takeVacationDays(daysOff) {//Method to take vacation days off
        this._remainingVacationDays -= daysOff;//Subtracting the daysOff from remainingVacationDays property value
    }
}

class Nurse extends HospitalEmployee {//Child class
    constructor(name, certifications) {//Constructor for Nurse class
        super(name);//Calling the parent class constructor
        this._certifications = certifications;//Adding new property to Nurse class
    }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);//Creating a new instance of Nurse class
