// JavaScript Math Object => 
// The JavaScript Math object allows you to perform mathematical tasks on numbers.
// The Math Object
// Unlike other objects, the Math object has no constructor.
// The Math object is static.

// All methods and properties can be used without creating a Math object first.

//                   Math Properties (Constants)
// The syntax for any Math property is : Math.property.

// JavaScript provides 8 mathematical constants that can be accessed as Math properties:


console.log(Math.E);         // [2.718281828459045]  returns Euler's number
console.log(Math.PI);        // [3.141592653589793]  returns PI
console.log(Math.SQRT2);     // [1.4142135623730951] returns the square root of 2
console.log(Math.SQRT1_2);   // [0.7071067811865476] returns the square root of 1/2
console.log(Math.LN2);       // [0.6931471805599453] returns the natural logarithm of 2
console.log(Math.LN10);      // [2.302585092994046]  returns the natural logarithm of 10
console.log(Math.LOG2E);     // [1.4426950408889634] returns base 2 logarithm of E
console.log(Math.LOG10E);    // [0.4342944819032518] returns base 10 logarithm of E

//--------------------------------------------------------------------------------------

// Math Methods
// The syntax for Math any methods is : Math.method(number)

//                Number to Integer
//There are 4 common methods to round a number to an integer:
/*
        Math.round(x)	||   Returns x rounded to its nearest integer
        Math.ceil(x)	||   Returns x rounded up to its nearest integer
        Math.floor(x)	||   Returns x rounded down to its nearest integer
        Math.trunc(x)	||   Returns the integer part of x (new in ES6)
*/

// Math.round()
// Math.round(x) returns the nearest integer:
console.log("Math.round()");

console.log(Math.round(4.6)); // 5
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4

// Math.ceil()
// Math.ceil(x) returns the value of x rounded up to its nearest integer:
console.log("Math.ceil()");

console.log(Math.ceil(4.9));  // 5
console.log(Math.ceil(4.7));  // 5
console.log(Math.ceil(4.4));  // 5
console.log(Math.ceil(4.2));  // 5
console.log(Math.ceil(-4.2)); // -4

// Math.floor()
// Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log("Math.floor()");

console.log(Math.floor(4.9));  // 4
console.log(Math.floor(4.7));  // 4
console.log(Math.floor(4.4));  // 4
console.log(Math.floor(4.2));  // 4
console.log(Math.floor(-4.2)); // -5

//Math.trunc()
// Math.trunc(x) returns the integer part of x:
console.log("Math.trunc()");

console.log(Math.trunc(4.9));  // 4
console.log(Math.trunc(4.7));  // 4
console.log(Math.trunc(4.4));  // 4
console.log(Math.trunc(4.2));  // 4
console.log(Math.trunc(-4.2)); // -5

// Math.sign()
// Math.sign(x) returns if x is negative, null or positive:
console.log("Math.sign()");

console.log(Math.sign(-4)); // -1
console.log(Math.sign(0));  // 0
console.log(Math.sign(4));  // 1

// Math.pow()
// Math.pow(x, y) returns the value of x to the power of y:
console.log("Math.pow()");

console.log(Math.pow(8, 2)); // 64

// Math.sqrt()
// Math.sqrt(x) returns the square root of x:
console.log("Math.sqrt()");

console.log(Math.sqrt(64)); // 8

// Math.abs()
// Math.abs(x) returns the absolute (positive) value of x:
console.log("Math.abs()");

console.log(Math.abs(-4.7)); // 4.7

// Math.sin()
// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
// If you want to use degrees instead of radians, you have to convert degrees to radians:

// Angle in radians = Angle in degrees x PI / 180.


console.log(Math.sin(90 * Math.PI / 180));    // returns 1 (the sine of 90 degrees)

// Math.cos()
// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
// If you want to use degrees instead of radians, you have to convert degrees to radians:

// Angle in radians = Angle in degrees x PI / 180.


console.log(Math.cos(0 * Math.PI / 180) );    // returns 1 (the cos of 0 degrees)

// Math.min() and Math.max()
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
console.log("Math.min()");

console.log(Math.min(0, 150, 30, 20, -8, -200) ); // -200

// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
console.log("Math.min()");

console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150

// Math.random()
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
console.log("Math.random()");

console.log(Math.random()); // 0.630542617554724

// The Math.log() Method
// Math.log(x) returns the natural logarithm of x.
//The natural logarithm returns the time needed to reach a certain level of growth:
console.log("Math.log()");

console.log(Math.log(1)); // 0
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(3)); // 1.0986122886681096

// note*************** Math.E and Math.log() are twins.


// The Math.log2() Method
// Math.log2(x) returns the base 2 logarithm of x.
console.log("Math.log2(x)");

console.log(Math.log2(2)); // 1

// The Math.log10() Method
//Math.log10(x) returns the base 10 logarithm of x.
//How many times must we multiply 10 to get 1000?

console.log(Math.log10(1000)); // 3