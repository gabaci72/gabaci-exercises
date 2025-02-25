const GPA_BENCHMARK = 3.5;
let students = {
  1: {
    name: 'Egill Vignission',
    gpa: 3.4
  },
  2: {
    name: 'Bianca Pargas',
    gpa: 3.8
  },
  3: {
    name: 'Aisling O\'Sullivan',
    gpa: 3.4
  },
  4: {
    name: 'Sameer Fares',
    gpa: 3.9
  }
}
 
let honorRoll = students.filter(student => {
 return student.gpa >= GPA_BENCHMARK;
});

// attempting to use the filter method on an object (students), which is not an array. This will result in an error.

// To fix this, we need to convert the students object into an array of its values. Here's how you can do it:

// let studentsArray = Object.values(students);
// let honorRoll = studentsArray.filter(student => {
//   return student.gpa >= GPA_BENCHMARK;
// });

// console.log(honorRoll); // Output: [ { name: 'Bianca Pargas', gpa: 3.8 }, { name: 'Sameer Fares', gpa: 3.9 } ]