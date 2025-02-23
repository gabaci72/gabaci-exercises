/*Instructions
If you want extra practice with inheritance, take some time to create a Doctor class that inherits from HospitalEmployee. The properties and methods for the Doctor class are listed below:

Doctor
properties: _name, _remainingVacationDays (set to 20 inside constructor()), _insurance
methods: .takeVacationDays()*/
class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

class Doctor extends HospitalEmployee {
    constructor(name, insurance) {
        super(name);
        this._insurance = insurance;
    }

    get insurance() {
        return this._insurance;
    }
}

// Example of creating a Doctor instance
const doctorSmith = new Doctor('Smith', 'Full Coverage');
console.log(doctorSmith.name); // Output: Smith
console.log(doctorSmith.insurance); // Output: Full Coverage
doctorSmith.takeVacationDays(5);
console.log(doctorSmith.remainingVacationDays); // Output: 15
