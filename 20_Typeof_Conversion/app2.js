//================= JavaScript Type Conversion ====================
/*
            Converting Strings to Numbers
            Converting Numbers to Strings
            Converting Dates to Numbers
            Converting Numbers to Dates
            Converting Booleans to Numbers
            Converting Numbers to Booleans
*/

// JavaScript Type Conversion
// JavaScript variables can be converted to a new variable and another data type:

// By the use of a JavaScript function
// Automatically by JavaScript itself

//---------------------------------------------------------------------
// Converting Strings to Numbers
// The global method Number() converts a variable (or a value) into a number.

// A numeric string (like "3.14") converts to a number (like 3.14).
// An empty string (like "") converts to 0.
// A non numeric string (like "John") converts to NaN (Not a Number).


console.log(`Number("3.14"):`,Number("3.14")); // 3.14
console.log(`Number(Math.PI):`,Number(Math.PI)); // 3.141592653589793
console.log(`Number(" "): `,Number(" "));      // 0
console.log(`Number("99 88"): `,Number("99 88"));  // NaN
console.log(`Number("John"): `,Number("John")); // NaN
 
//---------------------------------------------------------------------
// The Unary + Operator
// The unary + operator can be used to convert a variable to a number:

let y = "5";      // y is a string
let x = + y;      // x is a number

// If the variable cannot be converted, it will still become a number, but with the value NaN (Not a Number):

let y1 = "John";   // y is a string
let x1 = + y1;      // x is a number (NaN)

//---------------------------------------------------------------------
// Converting Numbers to Strings
// The global method String() can convert numbers to strings.

// It can be used on any type of numbers, literals, variables, or expressions:


console.log(String(x));         // returns a string from a number variable x 5
console.log(String(123)  );     // returns a string from a number literal 123
console.log(String(100 + 23));  // returns a string from a number from an expression

// The Number method toString() does the same.

console.log(x.toString()); // 5
console.log((123).toString()); // 123
console.log((100 + 23).toString()); // 123

//---------------------------------------------------------------------
// Converting Dates to Numbers
// The global method Number() can be used to convert dates to numbers.

d = new Date();
console.log(Number(d));        // returns 1708681304292
// The date method getTime() does the same.

d1 = new Date();
console.log(d1.getTime());      // returns 1708681304292
//---------------------------------------------------------------------
//---------------------------------------------------------------------