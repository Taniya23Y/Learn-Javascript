// JavaScript Number Properties

/*
    Method	               |     Description
 --------------------------------------------------------------------------
   (1) EPSILON	           |     The difference between 1 and the smallest number > 1.
   (2) MAX_VALUE	       |     The largest number possible in JavaScript
   (3) MIN_VALUE	       |     The smallest number possible in JavaScript
   (4) MAX_SAFE_INTEGER	   |     The maximum safe integer (253 - 1)
   (5) MIN_SAFE_INTEGER	   |     The maximum safe integer -(253 - 1)
   (6) POSITIVE_INFINITY   |     Infinity (returned on overflow)
   (7) NEGATIVE_INFINITY   |     Negative infinity (returned on overflow)
   (8) NaN	               |     A "Not-a-Number" value	

*/

// JavaScript EPSILON =>
// Number.EPSILON is the difference between the smallest floating point number greater than 1 and 1.

let num = Number.EPSILON;
console.log(num); // 2.220446049250313e-16


// JavaScript MAX_VALUE =>
// Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.

let num1 = Number.MAX_VALUE;
console.log(num1); // 1.7976931348623157e+308

/*
   Note**************

   Number Properties Cannot be Used on Variables
   ----------------------------------------------

   Number properties belong to the JavaScript Number Object.

   These properties can only be accessed as Number.MAX_VALUE.

   Using x.MAX_VALUE, where x is a variable or a value, will return undefined:

*/

let num2 = 6;
console.log(num2.MAX_VALUE); // undefined

// JavaScript MIN_VALUE =>
// Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.

let num3 = Number.MIN_VALUE;
console.log(num3); // 5e-324

let num4 = 6;
console.log(num4.MIN_VALUE); // undefined

// JavaScript MAX_SAFE_INTEGER
// Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.

// Number.MAX_SAFE_INTEGER is (253 - 1).

let num5 = Number.MAX_SAFE_INTEGER;
console.log(num5); // 9007199254740991

// JavaScript MIN_SAFE_INTEGER
// Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript.
// Number.MIN_SAFE_INTEGER is -(253 - 1).

let num6 = Number.MIN_SAFE_INTEGER;
console.log(num6); //-9007199254740991

// JavaScript POSITIVE_INFINITY =>

let num7 = Number.POSITIVE_INFINITY;
console.log(num7); // Infinity

// POSITIVE_INFINITY is returned on overflow:

let num8 = 1 / 0;
console.log(num8); // Infinity

// JavaScript NEGATIVE_INFINITY =>

let num9 = Number.NEGATIVE_INFINITY;
console.log(num9); // -Infinity
 
// NEGATIVE_INFINITY is returned on overflow:

let num10 = -1 / 0;
console.log(num10); // -Infinity

// JavaScript NaN - Not a Number
// NaN is a JavaScript reserved word for a number that is not a legal number.

let num11 = Number.NaN;
console.log(num11); // NaN

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

let num12 = 100 / "Apple";
console.log(num12); // NaN
console.log(typeof num12); // number