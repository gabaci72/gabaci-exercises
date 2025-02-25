# Iterable-error\iterable-error-brief.md
## Without Try-Catch block solution: 
```javascript
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

// Convert the students object to an array of values
let studentArray = Object.values(students);

// Use the filter method on the array
let honorRoll = studentArray.filter(student => {
  return student.gpa >= GPA_BENCHMARK;
});

console.log(honorRoll);
```