'use strict';

// VARIABLES
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'Teacher';
const year = 2001;

// FUNCTIONS
console.log(addDecl(1, 2));
// console.log(addExpr(1, 2));
// console.log(addArrow(1, 2));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// EXAMPLE
if (!temp) tempFunc();

var temp = 10;

function tempFunc() {
  console.log('/////');
}
