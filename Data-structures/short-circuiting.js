'use strict';

// Use ANY data type, return ANY data type, short-circuiting
console.log('----- OR -----');

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const res = {
  name: 'test',
  fun: function () {
    console.log('Hello World!');
  },
};

res.numGuests = 0;

const guests1 = res.numGuests ? res.numGuests : 10;
console.log(guests1);

const guests2 = res.numGuests || 10;
console.log(guests2);

console.log('----- AND -----');

console.log(0 && 'Hello');
console.log(1 && 'Hello' && null);
console.log(1 && 'Hello');

if (res.fun) {
  res.fun();
}

res.fun && res.fun();

// Nullish coalescing

console.log('----- Nullish Coalescing -----');

// Nullish: null and undefined (NOT 0 or '')
const guests3 = res.numGuests ?? 10;
console.log(guests3);
