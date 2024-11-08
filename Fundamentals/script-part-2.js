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

/* WORK WITH ARRAY METHODS

const friends = ["Michael", "Steven", "Peter"];
friends.push("James");
console.log(friends);

friends.unshift("John");
console.log(friends);

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("fsdoifq1"));

console.log(friends.includes("Steven"));
console.log(friends.includes("fsdoifq1"));

friends.push(20);
console.log(friends.includes("20"));
console.log(friends.includes(20));

*/

/* WORK WITH OBJECTS

const jonas = {
  firstName: "Jonas",
  lastName: "Lastname",
  age: 2047 - 2002,
  job: "Teacher",
  friends: ["Steven", "John"],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between first name, last name, age, job and friends."
);
jonas[interestedIn] === true
  ? console.log(jonas[interestedIn])
  : console.log("There is no such property.");

jonas.location = "France";
jonas["email"] = "email@email.email";
console.log(jonas);

*/

/* WORK WITH OBJECT METHODS

const obj1 = {
  firstName: "Name",
  lastName: "Last",
  birthYear: 2002,
  job: "Teacher",
  hasDriverLicense: true,
  calcAge: function (birthYear) {
    return 2047 - birthYear;
  },
};

console.log(obj1.calcAge(2002));
console.log(obj1["calcAge"](2002));

const obj2 = {
  firstName: "Name",
  lastName: "Last",
  birthYear: 2002,
  job: "Teacher",
  hasDriverLicense: true,
  calcAge: function () {
    return 2047 - this.birthYear;
  },
};

console.log(obj2.calcAge());
console.log(obj2["calcAge"]());

const obj3 = {
  firstName: "Name",
  lastName: "Last",
  birthYear: 2002,
  job: "Teacher",
  hasDriverLicense: true,
  calcAge: function () {
    this.age = 2047 - this.birthYear;
    return this.age;
  },
};

console.log(obj3.calcAge());
console.log(obj3.age);

*/

/* WORK WITH FOR LOOP

for (let i = 0; i < 10; i++) {
  console.log("Smth repeats 10 times :)");
}

const randomArray = ["Hello", "World", 2000, "!", "+", "array"];

for (let i = 0; i < randomArray.length; i++) {
  console.log(randomArray[i]);
}

for (let i = 0; i < randomArray.length; i++) {
  if (typeof randomArray[i] !== "string") {
    console.log("Skipping this iteration...");
    continue;
  }

  console.log(randomArray[i]);
}

for (let i = 0; i < randomArray.length; i++) {
  if (typeof randomArray[i] !== "number") {
    console.log("Breaking for loop...");
    break;
  }

  console.log(randomArray[i]);
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = testArray.length - 1; i >= 0; i--) {
  console.log(testArray[i]);
}

for (let i = 0; i < 3; i++) {
  console.log("Parent for iteration: " + (i + 1));
  for (let j = 0; j < 5; j++) {
    console.log("Child for iteration: " + (j + 1));
  }
}

*/
