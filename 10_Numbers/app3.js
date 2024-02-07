/*
 BigInt => JavaScript BigInt variables are used to store big integer values that are 
           too big to be represented by a normal JavaScript Number.
*/

// JavaScript Integer Accuracy
// JavaScript integers are only accurate up to 15 digits:

// Integer Precision
let num = 1.999999999999999;
console.log(num); // 1.999999999999999
let num1 = 1.9999999999999999;
console.log(num1); // 2

// How to Create a BigInt
// To create a BigInt, append n to the end of an integer or call BigInt():

let num2 = 9999999999999999;
console.log(num2); // 10000000000000000

let num3 = 9999999999999999n;
console.log(num3); // 9999999999999999n

let num4 = 1234567890123456789012345n;
console.log(num4); // 1234567890123456789012345n

let num5 = BigInt(1234567890123456789012345)
console.log(num5); // 1234567890123456824475648n

// BigInt: A new JavaScript Datatype
// The JavaScript typeof a BigInt is "bigint":

let checkType = BigInt(999999999999999);
console.log(typeof(checkType)); // bigint

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// BigInt Operators
// Operators that can be used on a JavaScript Number can also be used on a BigInt.

// BigInt Multiplication Example
let x = 9007199254740995n;
let y = 9007199254740995n;
let z = x * y;
console.log(z); // 81129638414606735738984533590025n

// Notes++
// Arithmetic between a BigInt and a Number is not allowed (type conversion lose information).
// Unsigned right shift (>>>) can not be done on a BigInt (it does not have a fixed width).

// TODO: TypeError: Cannot mix BigInt and other types
/*  
    let x1 = 9007199254740995;
    let y1 = 9007199254740995n;
    let z1 = x1 * y1;
    console.log(z1); // TypeError: Cannot mix BigInt and other types, use explicit conversions
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// BigInt Decimals
// A BigInt can not have decimals.

// BigInt Division Example
/*
    let x2 = 5n;
    let y2 = x2 / 2;
    console.log(y2); // Error: Cannot mix BigInt and other types, use explicit conversion.

*/
    // ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
       

let x3 = 5n;
let y3 = Number(x3) / 2;
console.log(y3); // 2.5

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Precision Curiosity
// Rounding can compromise program security:

//               MAX_SAFE_INTEGER Example

let numCheck = 9007199254740992 === 9007199254740993; // is true !!!
console.log(numCheck); // true

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Minimum and Maximum Safe Integers
// ES6 added max and min properties to the Number object:

//                (1) MAX_SAFE_INTEGER
//                (2) MIN_SAFE_INTEGER


//               MAX_SAFE_INTEGER     Example
let maxCheck = Number.MAX_SAFE_INTEGER;
console.log(maxCheck); // 9007199254740991

//               MIN_SAFE_INTEGER     Example
let minCheck = Number.MIN_SAFE_INTEGER;
console.log(minCheck); // -9007199254740991

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// New Number Methods
// ES6 also added 2 new methods to the Number object:

//                  (1) Number.isInteger()
//                  (2) Number.isSafeInteger()

// The Number.isInteger() Method => The Number.isInteger() method returns true if the argument is an integer.

// Example: isInteger()
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false


// The Number.isSafeInteger() Method => A safe integer is an integer that can be exactly represented as a double precision number.

// The Number.isSafeInteger() method returns true if the argument is a safe integer.

//          Example isSafeInteger()
console.log(Number.isSafeInteger(10)); // true
console.log(Number.isSafeInteger(12345678901234567890)); // false


// note++ 
// Safe integers are all integers from -(253 - 1) to +(253 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.