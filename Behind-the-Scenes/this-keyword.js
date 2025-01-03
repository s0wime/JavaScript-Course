'use strict';

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(2000);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1999);

const obj = {
  year: 2000,
  calcAge: function () {
    console.log(this);
  },
};

obj.calcAge();

const test = {
  year: 2018,
};

test.calcAge = obj.calcAge;
test.calcAge();
