'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log('B737'[0]);

console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal')); // returns -1

console.log(airline.slice(4));
console.log(airline.slice(airline.indexOf('Air')));
console.log(airline.slice(4, 7));

console.log(airline.slice(-1));
console.log(airline.slice(-8));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat!');
  } else {
    console.log('You got lucky!');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(typeof new String('Hello'));
console.log(typeof new String('Hello').slice(0));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name

let passanger = 'aLiCe'; // Alice

const fixName = function (name) {
  name = name.toLowerCase();
  name = name[0].toUpperCase() + name.slice(1);
  return name;
};

passanger = fixName(passanger);
console.log(passanger);

// Compare emails

const email = 'hello@world.com';
const loginEmail = '  hElLo@woRlD.COm \n';

const compareEmails = function (correctEmail, comparedEmail) {
  comparedEmail = comparedEmail.toLowerCase().trim();
  return correctEmail.toLowerCase() === comparedEmail;
};

console.log(compareEmails(email, loginEmail));

// Replacing

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const str = ',,,,,,,,';
console.log(str.replaceAll(',', '.'));
console.log(str.replace(/,/g, '.'));

// Booleans

const newPlane = 'Airbus A320neo';
console.log(newPlane.startsWith('A'));
console.log(newPlane.includes('A320'));
console.log(newPlane.includes('B33243'));

if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) {
  console.log('YEEES!!!');
}

// Split and join

console.log('a+very+nice+string'.split('+'));
console.log('Hello World !'.split(' '));

const [firstName, lastName] = 'Hello World'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const finalName = [];
  for (const word of name.split(' ')) {
    finalName.push(word[0].toUpperCase() + word.slice(1));
  }
  return finalName.join(' ');
};

console.log(capitalizeName('jessica ann smith davis'));
console.log(capitalizeName('hello world'));

// Padding a string

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));

console.log('LOG'.padStart(13, '-').padEnd(23, '-'));

// Practical example

const maskCreditCard = function (number) {
  const str = String(number);
  return str.slice(-4).padStart(str.length, '*');
};

console.log(maskCreditCard(1111111111111111));
console.log(maskCreditCard('3248923894723672'));

// Repeat

const weather = 'Bad weather... All Departures Delayed... ';
console.log(weather.repeat(5));

// Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const formatFlights = function (string) {
  const flightsArr = [];
  for (const flight of string.split('+')) {
    const info = flight.split(';');
    const status = info[0].split('_').join(' ');
    const route = `from ${info[1].slice(0, 3).toUpperCase()} to ${info[2]
      .slice(0, 3)
      .toUpperCase()}`;
    const time = `(${info[3].split(':').join('h')})`;
    flightsArr.push(`${status} ${route} ${time}`);
  }
  return flightsArr;
};

console.log(formatFlights(flights));
