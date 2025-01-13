'use strict';

const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :)')
  .set(false, 'We are closed!');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 16;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('name'));
console.log(rest.delete('name'));
console.log(rest.has('name'));

console.log(rest.size);

rest.clear();
console.log(rest);

rest.set([1, 2, 3], 'Test');
console.log(rest);
console.log(rest.get([1, 2, 3])); // This is not going to work because of the heap

const arr = [1, 2, 3];
rest.set(arr, 'Work');
console.log(rest.get(arr)); // This is going to work

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

// Maps iteration

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);

console.log(question);

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

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quize app

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`${key} - ${value}`);
//   }
// }
// const answer = Number(prompt('Your answer:'));
// console.log(question.get(answer === question.get('correct')));

// Convert map to array

console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
