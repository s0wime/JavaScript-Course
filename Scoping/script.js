'use strict';

function calcAge(birthYear) {
  const age = 2047 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const temp = `You're a millenial, ${firstName}`;
      console.log(temp);
    }
    //
    // WON'T WORK
    // console.log(temp);
    //
    // WILL WORK
    //
    console.log(millenial);
    //
  }
  printAge();

  console.log(firstName);
  return age;
}

const firstName = 'Thomas';
//calcAge(2001);
calcAge(1981);

// WON'T WORK
// console.log(age);
// printAge();
