'use strict';

// SPREAD, because on RIGHT side of =
const arr = [1, 2, 3, ...[4, 5]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

const starterMenu = ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'];
const mainMenu = ['Pizza', 'Pasta', 'Risotto'];

const [pizza, , risotto, ...otherFood] = [...mainMenu, ...starterMenu];
console.log(pizza, risotto, otherFood);

// Objects

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const { sat, ...weekdays } = openingHours;
console.log(weekdays);

// Functions

const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(`Sum: ${sum}`);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 1, 2, 3, 7, 4, 9, 6);

const x = [23, 5, 7];
add(...x);

function orderPizza(mainIngredient, ...otherIngredients) {
  console.log(mainIngredient);
  console.log(otherIngredients);
}

orderPizza('mushrooms', 'onion', 'olives', 'spinach');
orderPizza('mushrooms');
