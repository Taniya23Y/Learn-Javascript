//================= Javascript Scope ===========================

// Scope determines the accessibility (visibility) of variables.

// JavaScript variables have 3 types of scope:

// (1) Block scope
// (2) Function scope
// (3) Global scope

//-------------------------------------------------------------------
// Block Scope
// Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block:
{
    x = 100;
} // x is not accessible here, it's out of its scope

// Variables declared with the var keyword can NOT have block scope.
// Variables declared inside a { } block can be accessed from outside the block.
{
   var x = 120;
} // x is accessible. It has function scope.
console.log(x); // Output: 120

//-----------------------------------------------------------------
// Local Scope
// Variables declared within a JavaScript function, are LOCAL to the function:

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
/*
Local variables have Function Scope:
They can only be accessed from within the function.
*/
// Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
// Local variables are created when a function starts, and deleted when the function is completed.

//-----------------------------------------------------------------
// Function Scope
// JavaScript has function scope: Each function creates a new scope.
// Variables defined inside a function are not accessible (visible) from outside the function.
// Variables declared with var, let and const are quite similar when declared inside a function.
// They all have Function Scope:

function myFunction() {
  var carName = "Volvo";   // Function Scope
}

function myFunction() {
  let carName = "Volvo";   // Function Scope
}

function myFunction() {
    const carName = "Volvo";   // Function Scope
  }

//--------------------------------------------------------------
// Global JavaScript Variables
// A variable declared outside a function, becomes GLOBAL.

// Example
let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}

/*
   A global variable has Global Scope:
   All scripts and functions on a web page can access it. 
*/

// Global Scope
// Variables declared Globally (outside any function) have Global Scope.
// Global variables can be accessed from anywhere in a JavaScript program.
// Variables declared with var, let and const are quite similar when declared outside a block.

// They all have Global Scope:

var x = 2;       // Global scope
let x = 2;       // Global scope
const x = 2;       // Global scope

//------------------------------------------------------------