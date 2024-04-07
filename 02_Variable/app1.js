// `let and const declarations are Hoisted` this are in the temporal dead zone at the time

/*
   Temporal  Dead Zone (TDZ) is a term used by JavaScript developers to describe a period of time 
   during which variables that have been declared using let or const. 
   The Temporal Dead Zone is a unique feature introduced with the and declarations in JavaScript. 
   It's the period between entering a scope and the actual declaration of a variable within that scope. 
   During this phase, the variable exists but is inaccessible. Accessing it before the declaration 
   results in a ReferenceError.

   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   The best way to avoid this temporal dead zone is to always put your declarations and initialization at 
   the top of code as soon as your codes starts running it hits the initialization part at the first.
*/


// console.log(b); // undefined
// console.log(a); // ReferenceError: Cannot access 'a' before initialization

let a = 10;
console.log(a); 
var b = 100;