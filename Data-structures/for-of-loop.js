'use strict';

const starterMenu = ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'];
const mainMenu = ['Pizza', 'Pasta', 'Risotto'];

const menu = [...mainMenu, ...starterMenu];

for (const item of menu) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(`${item[0] + 1} - ${item[1]}`);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} - ${el}`);
}

// Loop over objects keys, values, entries

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

// Property names

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

// Property values

for (const value of Object.values(openingHours)) {
  console.log(value);
}

// Property entries

for (const entry of Object.entries(openingHours)) {
  console.log(entry);
}
