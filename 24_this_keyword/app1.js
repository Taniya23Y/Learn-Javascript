//================ JavaScript this Keyword ===================

const person = {
  firstName: "Anya",
  lastName: "Forger",
  location: "Ostania",
  age: 5,
  id: 56789,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName()); // Anya Forger
console.log(person); // object[person]

// This keyword => In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used:
// In an object method, this refers to the object.
/*
    Alone, this refers to the global object.
    In a function, this refers to the global object.
    In a function, in strict mode, this is undefined.
    In an event, this refers to the element that received the event.
    Methods like call(), apply(), and bind() can refer this to any object
*/

// this in a Method
// When used in an object method, this refers to the object.
// In the example on top of this page, this refers to the person object.
// Because the fullName method is a method of the person object.

fullName: function abc() {
  return this.firstName + " " + this.lastName;
}

// abc();

//++++++++++++++++++++++++++++++++++++++
// this Alone
// When used alone, this refers to the global object.
// Because this is running in the global scope.
// In a browser window the global object is [object Window]:

let x = this;
console.log(x); // {}

// In strict mode, when used alone, this also refers to the global object:
("use strict");
let y = this;
console.log(y); // {}

// But if you try to access a  property of this, you will get an error because
// there are no properties on the global object:
("use strict");
this.a = 10;
console.log(a); // ReferenceError: a is not defined

//++++++++++++++++++++++++++++++++++++++++++++++++++++
// this in a Function (Default)
// In a function, the global object is the default binding for this.

// In a browser window the global object is [object Window]:

function myFunction() {
  return this;
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
// this in a Function (Strict)
// JavaScript strict mode does not allow default binding.

// So, when used in a function, in strict mode, this is undefined.

("use strict");
function myFunction() {
  return this;
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
// this in Event Handlers
// In HTML event handlers, this refers to the HTML element that received the event:

<button onclick="this.style.display='none'">Click to Remove Me!</button>;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
// Object Method Binding
// In these examples, this is the person object:

const person1 = {
  firstName: "Anya",
  lastName: "Forger",
  id: 58966,
  myFunction: function () {
    return this;
  },
};

const person2 = {
  firstName: "Anya",
  lastName: "Forger",
  location: "Ostania",
  age: 5,
  id: 56789,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// i.e. this.firstName is the firstName property of this (the person object).

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Explicit Function Binding
// The call() and apply() methods are predefined JavaScript methods.

// They can both be used to call an object method with another object as argument.
// The example below calls person1.fullName with person2 as an argument, this refers to person2, even if fullName is a method of person1:

const person3 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person4 = {
  firstName: "Anya",
  lastName: "Forger",
};

// Return "Anya Forger":
person1.fullName.call(person2);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Function Borrowing
// With the bind() method, an object can borrow a method from another object.

// This example creates 2 objects (person and member).

// The member object borrows the fullname method from the person object:


const person5 = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nill",
}

let fullName = person.fullName.bind(member);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
