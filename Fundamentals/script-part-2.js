"use strict";

/* WORK WITH FUNCTIONS

function logger() {
  console.log("Helllooo!");
}

logger();
logger();
logger();

function fruitProccessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
  return juice;
}

console.log(fruitProccessor(3, 5));
console.log(fruitProccessor(11, 8));

*/

/* WORK WITH FUNCTION DECLARATIONS, EXPRESSIONS AND ARROW FUNCTIONS

// FUNCTION DECLARATION

function calcAge1(birthYear) {
  return 2047 - birthYear;
}

const age1 = calcAge1(2000);
console.log(`Your age is : ${age1}`);

// FUNCTION EXPRESSION

const calcAge2 = function (birthYear) {
  return 2047 - birthYear;
};
const age2 = calcAge2(1999);
console.log(`Your age is : ${age2}`);

// ARROW FUNCTION

const calcAge3 = (birthYear) => 2047 - birthYear;
const age3 = calcAge2(1998);
console.log(`Your age is : ${age3}`);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2047 - birthYear;
  const retirementAge = 65;
  return `${firstName} retires in ${retirementAge - age} years`;
};
console.log(yearsUntilRetirement(1997, "Jonas"));
console.log(yearsUntilRetirement(1994, "Bob"));

*/

/* WORK WITH ARRAYS

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
const years = new Array(1991, 2000, 2021, 2047);

console.log(friends[0]);
console.log(friends.length);

friends[2] = "Jonas";
console.log(friends);

// friends = ["Bob", "Alice"];

const person = ["First", "Last", 2047 - 2002, "Teacher", friends];
console.log(person);

*/
