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

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// Solution

// Remember that this is always assigned to the object that is created with the new operator on a construction function

const Car = function (make, speed) {
  (this.make = make), (this.speed = speed);
};

Car.prototype.accelarate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
bmw.accelarate();
bmw.accelarate();
bmw.brake();

const mercedes = new Car('Mercedes', 95);
mercedes.accelarate();
mercedes.brake();

// function printNumber() {
//   console.log('This a function decalartion');
// }

// printNumber();

// ES6 classes

// In ES6 a method can be created directly in the class decaleration or on directly on the prototype but it is not a good practice to do that when working with construction function

// class expression
// const PersonCl = class {}

// class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   // Methods

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hello ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }
// }

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hello ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) return (this._fullName = name);
    else alert(`${name} is not a valid name`);
  }

  get fullName() {
    return this, this._fullName;
  }
}

// PersonCl.prototype.greet = function () {
//   console.log(`Hello ${this.firstName}`);
// };

const jessica = new PersonCl('Jessica Davis', 1996);
jessica.calcAge();
jessica.greet();
console.log(jessica.age);

// Important things to note
// 1.Classes are not hoisted, i.e they cannot be used before they are created
// 2. Classes are first-class citizens i.e they can be passed to a function and can also be returned from a function
// 3. Classes are executed in strict mode

const walter = new PersonCl('walter', 1997);
walter.greet();

// Setter and Getter

const account = {
  owner: 'Jonas',
  movement: [200, 500, 300, 800],

  get latest() {
    return this.movement.slice(-1).pop();
  },

  set latest(mov) {
    return this.movement.push(mov);
  },
};

console.log(account.latest);

console.log((account.latest = 500));

console.log(account.movement);
