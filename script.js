'use strict';

/*
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

// Static Method

Person.hey = function () {
  console.log('Hey there 👋');
};

Person.hey();
// jonas.hey();
// jonas.hey would give an error because the hey method was not created on the prototype but rather on the constructor

console.log(Person.prototype.isPrototypeOf(jonas));

console.log(Person.prototype.isPrototypeOf(Person));

// setting a property on the prototype

Person.prototype.spieces = 'Homo Sapien';

console.log(jonas.spieces);

console.log(jonas.hasOwnProperty('name'));
console.log(jonas.hasOwnProperty('spieces'));

const h1 = document.querySelector('h1');
console.dir(h1);

*/

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

/*
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

*/

// function printNumber() {
//   console.log('This a function decalartion');
// }

// printNumber();

/*

////////////////////////////////////////////////
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

  //   Instances Method
  //  Methods would be added to .prototype property
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

  //   Static Methods
  static hey() {
    console.log('Hey there 👋');
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

const walter = new PersonCl('walter williams', 1997);
walter.greet();


//////////////////////////////////////////////////
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

*/

/*
///////////////////////////////////////

// Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge();

const sarah = Object.create(PersonProto);

sarah.init('Sarah', 2020);
sarah.calcAge();

*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/*
// Solution
class Car2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return `${this.make} is going at ${this.speed / 1.6} ml/s`;
  }

  set speedUS(speed) {
    return `${this.make} is going at ${(this.speed = speed * 1.6)} ml/s`;
  }
}

const ford = new Car2('Ford', 120);

console.log(ford.speedUS);

ford.brake();
ford.brake();
ford.accelerate();

console.log((ford.speedUS = 50));
console.log(ford);
*/

/*
////////////////////////////////////
// Inheritance between Classes: Contructor Function

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;

  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

Student.prototype.constructor = Student;

const mikel = new Student('Mikel', 2010, 'Computer Science');

console.log(mikel instanceof Person);
mikel.introduce();
mikel.calcAge();

*/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
// Solution

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  console.log(`Battery charged to ${chargeTo}%`);
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}% `
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(90);
tesla.accelerate();
tesla.accelerate();
*/

//////////////////////////////////////
// Inheritance between classes: ES6 Classes
/*

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) return (this._fullName = name);
    else alert(`${name} not a fullName`);
  }

  get fullName() {
    return this._fullName;
  }

  //   Static Method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I am ${2037 - this.birthYear} old, but as a student I feel like I am ${
        2037 - this.birthYear + 10
      } old`
    );
  }
}

const matha = new StudentCl('Matha Jones', 2020, 'Computer Science');

matha.introduce();
matha.calcAge();

*/

/////////////////////////////////////
// Inheritance between Classes: Object.create()
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);

jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

/////////////////////////////////////
// Encapsulation: Private Class Fields and Methods

// 1) Public Field
// 2) Private Field
// 3) Public Method
// 4) Private Method
// Static version of all the 4

class Accounts {
  // Pulic Fields
  local = navigator.language;
  bank = 'Bankist';

  //   Private field
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.local = navigator.language;

    console.log(`Thanks for opening an account with us ${this.owner}`);
  }

  //   Public Interface(API)(Public Methods)

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  //   Private Method
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
    return this;
  }
}

const acc1 = new Accounts('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(10000);

// Chaining
acc1.withdraw(200).deposit(500).withdraw(400).requestLoan(1000);

console.log(acc1);
