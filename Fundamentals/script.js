// let firstName = "Jonas";

// console.log(firstName);

// HOW TO USE COMMENTS

/* WORK WITH DATA TYPES

let booleanValue = true;
console.log(booleanValue);
console.log(typeof booleanValue);
console.log(typeof 23);
console.log(typeof "string");

booleanValue = "make boolean as string";
console.log(booleanValue);
console.log(typeof booleanValue);

let year;
console.log(year);
console.log(typeof year);

year = 2121;
console.log(typeof year);

console.log(typeof null);

*/

/* WORK WITH LET, CONST, VAR

let age = 20;
age = 21;
console.log(age);

// DOESN'T WORK
const birthYear = 2000;
birthYear = 2001;
const job;

// VAR

var job = "programmer";
job = "teacher";
console.log(job);

*/

/* WORK WITH OPERATORS

const now = 2041;
const ageJonas = now - 2002;
const ageSarah = now - 1999;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);

const firstName = "Name";
const lastName = "Last";
console.log(firstName + " " + lastName);

let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x *= 10;
x++;
x--;
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageJonas >= 18;
console.log(isFullAge);

*/

/* WORK WITH STRINGS

const firstName = "Jonas";
const job = "teacher";
const birthYear = 2000;
const year = 2043;

const jonas =
"I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + ".";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
console.log(jonasNew);

*/

/* WORK WITH IF / ELSE STATEMENTS

const age = 18;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`Your age (${age}) is enough!`);
} else {
  console.log(`You're too young. Wait another ${18 - age} years!`);
}

*/

/* WORK WITH TYPE CONVERSION AND COERCION

// TYPE CONVERSION

const inputYear = "2000";
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);
console.log(Number(inputYear), inputYear);

console.log(Number("aaaaa"));

console.log(String(2000));

// TYPE COERCION

console.log("I'm " + 23 + " years old.");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("20" ** "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

*/

/* TRUTHY AND FALSY VALUES

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean(1));
console.log(Boolean("Jonas"));

const money = 1;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log(":(");
}

let height;

if (height) {
  console.log("Ok!");
} else {
  console.log("Not ok... Height is undefined");
}

*/

/* EQUALITY OPERATORS

const age = 18;
if (age === 18) console.log("Everything is ok!");

console.log(18 === 18);
console.log(18 === "18"); // STRICT

console.log(18 == 18);
console.log(18 == "18"); // LOOSE

const favourite = Number(prompt("What's your favourite number?"));

if (favourite === 36) {
  console.log("Oh, cool!");
} else if (favourite !== 36) {
  console.log("Why not 23?");
} else if (favourite === 7) {
  console.log("77777777777");
} else {
  console.log("Number is not 36 and 7.");
}

*/
