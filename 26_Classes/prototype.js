const newHero = ['hulk', 'spiderman'];
// console.log(prototype.newHero);
console.log(Object.getPrototypeOf(newHero)); // Object(0) []

// Constructor function for creating Person objects
function Person(name, age){
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype of Person Objects
Person.prototype.greet = function(){
    return `Hello, my name is ${this.name} and I am ${this.age} years Old.`;
};

// Creating a new instance of person
const john = new Person('John', 30);

// Accessing properties and invoking method
console.log(john.name); // Output: John
console.log(john.age); // Output: 30
console.log(john.greet()); // Output: Hello, my name is John and I am 30 years old.

// Adding a new Property to the prototype of Person objects
Person.prototype.country = 'USA';

// Accessing the newly added property
console.log(john.country); // Output: USA

// Accessing prototype using __proto__
console.log(john.__proto__ === Person.prototype); // Output: true
console.log(john.__proto__); // Output: { greet: [Function (anonymous)], country: 'USA' }
console.log(john.__proto__.__proto__); // Output: [Object: null prototype] {}
console.log(john.__proto__.__proto__.__proto__); // Output: null