// Currying with Arrow Functions
/* Rewrite the function changeColor() with arrow expression syntax and assign it to the variable changeColorArrow.*/

/* function changeColor(color) {
   return function(obj) {
       obj.color = color;
   }
}*/

const changeColorArrow = (color) => (obj) => {
    obj.color = color;
};
