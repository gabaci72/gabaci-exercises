/**
 * Implementation based on requirements from README.md
 * Project: Meal Maker
 * Source: ./README.md
 * Purpose: Restaurant daily special menu system
 */
const menu = {//? Menu object with getter and setter methods
  _meal: "",//? Private property for meal
  _price: 0,//? Private property for price

  set meal(mealToCheck) {//? Setter method for meal
    if (typeof mealToCheck === "string") {//? Check if the input is a string
      this._meal = mealToCheck;//
    }
  },

  set price(priceToCheck) {//? Setter method for price
    if (typeof priceToCheck === "number") {//? Check if the input is a number
      this._price = priceToCheck;//? Set the private property _price to the input value
    }
  },

  get todaysSpecial() {//? Getter method for today's special
    if (this._meal && this._price) {//? Check if both _meal and _price are set
      return `Today's Special is ${this._meal} for $${this._price}!`;//? Return the formatted string
    } else {//? If either _meal or _price is not set
      return "Meal or price was not set correctly!";//? Return an error message
    }
  },
};

// Set values using the setter methods
menu.meal = "Pasta";//? Set the meal to "Pasta"
menu.price = 12;//? Set the price to 12

// Log Today's Special
console.log(menu.todaysSpecial);//? Log the formatted string with the meal and price
