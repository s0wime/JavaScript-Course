'use strict';

const arr = [7, 8, 9];

const newArray = [1, 2, ...arr];
console.log(newArray);

const menu = ['Pizza', 'Pasta', 'Risotto'];
const newMenu = [...menu, 'Gnocci'];
console.log(newMenu);

// Copy array

const menuCopy = [...menu];
console.log(menuCopy);

// Join arrays

const menu1 = ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'];
const menuJoin = [...menu, ...menu1];
console.log(menuJoin);

// Iterables: arrays, strings, maps, sets. NOT objects;

const string1 = 'Hello';
const letters = [...string1, ' ', 'W', 'o', 'r', 'l', 'd', '!'];
console.log(letters);
console.log(...string1);

// Work with functions

function orderPasta(ing1, ing2, ing3) {
  console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
}

const ingredients = [
  prompt("Let's make pasta! Ingredient 1: "),
  prompt('Ingredient 2: '),
  prompt('Ingredient 3: '),
];

orderPasta(...ingredients);

// Objects

const tempObj = {
  firstName: 'Temp',
  lastName: 'Object',
};

const newObj = { test: 'Test', ...tempObj, age: 25 };
console.log(newObj);
