'use strict';

// Constructor Function

const Person = function (firstName, birthYear) {
  (this.firstName = firstName), (this.birthYear = birthYear);
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// Calling the function with new follows 4 steps thus
// 1. new {}(empty object) is created
// 2. function is called. this ={} (this keyword is assigned to the empty object)
// 3. {} linked to the prototype
// 4. function automatically returns the {}

// prototypes

// setting a method(function) on the prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

console.log(Person.prototype.isPrototypeOf(jonas));

console.log(Person.prototype.isPrototypeOf(Person));

// setting a property on the prototype

Person.prototype.spieces = 'Homo Sapien';

console.log(jonas.spieces);

console.log(jonas.hasOwnProperty('name'));
console.log(jonas.hasOwnProperty('spieces'));

const h1 = document.querySelector('h1');
console.dir(h1);
