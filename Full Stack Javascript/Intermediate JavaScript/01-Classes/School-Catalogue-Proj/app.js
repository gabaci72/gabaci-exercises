class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === 'number') {
            this._numberOfStudents = newNumberOfStudents;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }

    static pickSubstituteTeacher(substituteTeachers) {
        const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomIndex];
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}

const substituteTeacher = School.pickSubstituteTeacher([
    'Jamal Crawford',
    'Lou Williams',
    'J. R. Smith',
    'James Harden',
    'Jason Terry',
    'Manu Ginobli'
]);

console.log(substituteTeacher);

const alSmith = new HighSchool(
    'Al E. Smith',
    415,
    ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']
);
console.log(alSmith.sportsTeams);
