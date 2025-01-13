'use strict';

// SETS ARE ITERABLES, UNIQUE VALUES

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

const [pasta, pizza, ...others] = ordersSet;

console.log(pasta, pizza);

console.log(new Set('Hello'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Bread');
ordersSet.add('Bread');
console.log(ordersSet);
console.log(ordersSet.delete('Bread'));
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

// Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);

// New methods

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods);

const allFood = italianFoods.union(mexicanFoods);
console.log(allFood);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods);

const uniqueItalianMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianMexicanFoods);
