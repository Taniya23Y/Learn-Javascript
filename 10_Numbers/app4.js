//         Javascript Number Methods
//    number methods can be used on all JavaScript numbers
/*
    Method	               |     Description
 --------------------------------------------------------------------------
   (1) toString()	       |     Returns a number as a string
   (2) toExponential()	   |     Returns a number written in exponential notation
   (3) toFixed()	       |     Returns a number written with a number of decimals
   (4) toPrecision()	   |     Returns a number written with a specified length
   (5) ValueOf()	       |     Returns a number as a number


*/

// The toString() Method
// The toString() method returns a number as a string.

// All number methods can be used on any type of numbers (literals, variables, or expressions):

let num = toString(25);
console.log(num); //[object Undefined]
console.log(typeof(num)); // string

let num1 = 123;
console.log(num1.toString()); // 123
console.log((123).toString()); // 123
console.log((100 + 23).toString()); // 123
console.log(typeof((100 + 23).toString())); // string

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// The toExponential() Method
// toExponential() returns a string, with a number rounded and written using exponential notation.

// A parameter defines the number of characters behind the decimal point:
// The parameter is optional. If you don't specify it, JavaScript will not round the number.

let checkExpo = 9.656;
console.log(checkExpo.toExponential(2)); // 9.66e+0
console.log(checkExpo.toExponential(4)); // 9.6560e+0
console.log(checkExpo.toExponential(6)); // 9.656000e+0
console.log(checkExpo.toExponential(8)); // 9.65600000e+0

console.log(checkExpo.toExponential()); // 9.656e+0

// typeof 
console.log(typeof(checkExpo.toExponential(4))); // string


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// The toFixed() Method
// toFixed() returns a string, with the number written with a specified number of decimals:

let checkFixed = 9.656;
console.log(checkFixed.toFixed(0)); // 10
console.log(checkFixed.toFixed(2)); // 96
console.log(checkFixed.toFixed(4)); // 9560
console.log(checkFixed.toFixed(6)); // 956000

console.log(checkFixed.toFixed()); // 10

// typeof
console.log(typeof(checkFixed.toFixed(6))); // string


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// The toPrecision() Method
// toPrecision() returns a string, with a number written with a specified length:


let ckeckPrecision = 9.656;
console.log(ckeckPrecision.toPrecision()); // 9.656
console.log(ckeckPrecision.toPrecision(2)); // 9.7
console.log(ckeckPrecision.toPrecision(4)); // 9.656
console.log(ckeckPrecision.toPrecision(6)); // 9.656000

// typeof 
console.log(typeof(ckeckPrecision.toPrecision(6))); // string

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// The valueOf() Method
// valueOf() returns a number as a number.


let checkVal = 123;
console.log(checkVal.valueOf()); // 123
console.log((123).valueOf()); // 123
console.log((100 + 23).valueOf()); // 123

// typeof 
console.log(typeof(checkVal.valueOf())); // string

// In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).
// The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.
// All JavaScript data types have a valueOf() and a toString() method.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Converting Variables to Numbers
// There are 3 JavaScript methods that can be used to convert a variable to a number:

/*
        Method	            |             Description
    ---------------------------------------------------------------------------
     (1) Number()	        |         Returns a number converted from its argument.
     (1) parseFloat()	    |         Parses its argument and returns a floating point number
     (1) parseInt()	        |         Parses its argument and returns a whole number


 The methods above are not number methods. They are global JavaScript methods.
                                           ----------------------------------
                                           Global JavaScript Methods⬆️⬆️⬆️⬆️
*/

// The Number() Method
// The Number() method can be used to convert JavaScript variables to numbers:

console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("10"));  // 10
console.log(Number("  10"));  // 10
console.log(Number("10  "));  // 10
console.log(Number(" 10  ")); // 10
console.log(Number("10.33"));  // 10.33
console.log(Number("10,33")); // NaN
console.log(Number("10 33")); // NaN
console.log(Number("John")); // NaN

// If the number cannot be converted, NaN (Not a Number) is returned.

// The Number() Method Used on Dates
// Number() can also convert a date to a number.

console.log(Number(new Date("1970-01-01"))); // 0
// Note
// The Date() method returns the number of milliseconds since 1.1.1970.

// The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:


console.log(Number(new Date("1970-01-02"))); // 86400000
console.log(Number(new Date("2017-09-30"))); // 1506729600000



// The parseInt() Method
// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:


console.log(parseInt("-10")); // -10
console.log(parseInt("-10.33"));  // -10
console.log(parseInt("10"));    // 10
console.log(parseInt("10.33"));  // 10
console.log(parseInt("10 20 30")); // 10
console.log(parseInt("10 years")); // 10
console.log(parseInt("years 10")); // NaN

// If the number cannot be converted, NaN (Not a Number) is returned.



// The parseFloat() Method
// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:


console.log(parseFloat("10")); // 10
console.log(parseFloat("10.33")); // 10.33
console.log(parseFloat("10 20 30")); // 10
console.log(parseFloat("10 years")); // 10
console.log(parseFloat("years 10")); // NaN

// If the number cannot be converted, NaN (Not a Number) is returned.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Number Object Methods
// These object methods belong to the Number object:

/*
                Method	              |           Description
-------------------------------------------------------------------------------------
        (1) Number.isInteger()	       |       Returns true if the argument is an integer
        (2) Number.isSafeInteger()	   |       Returns true if the argument is a safe integer
        (3) Number.parseFloat()	       |       Converts a string to a number
        (4) Number.parseInt()	       |       Converts a string to a whole number
*/

// Number Methods Cannot be Used on Variables
// The number methods above belong to the JavaScript Number Object.
// These methods can only be accessed like Number.isInteger().
// Using X.isInteger() where X is a variable, will result in an error:
// TypeError X.isInteger is not a function.



// The Number.isInteger() Method
// The Number.isInteger() method returns true if the argument is an integer.


console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false


// The Number.isSafeInteger() Method
// A safe integer is an integer that can be exactly represented as a double precision number.
// The Number.isSafeInteger() method returns true if the argument is a safe integer.


console.log(Number.isSafeInteger(10)); // true
console.log(Number.isSafeInteger(12345678901234567890)); // false


// Safe integers are all integers from -(253 - 1) to +(253 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.



// The Number.parseFloat() Method
// Number.parseFloat() parses a string and returns a number.
// Spaces are allowed. Only the first number is returned:


console.log(Number.parseFloat("10"));   // 10
console.log(Number.parseFloat("10.33") );  // 10.33
console.log(Number.parseFloat("10 20 30") );  // 10
console.log(Number.parseFloat("10 years") );  // 10
console.log(Number.parseFloat("years 10"));   //NaN
// If the number cannot be converted, NaN (Not a Number) is returned.

// Note
// The Number methods Number.parseInt() and Number.parseFloat()are the same as the
// Global methods parseInt() and parseFloat().
// The purpose is modularization of globals (to make it easier to use the same JavaScript code outside the browser).



// The Number.parseInt() Method
// Number.parseInt() parses a string and returns a whole number.
// Spaces are allowed. Only the first number is returned:


console.log(Number.parseInt("-10") ); // -10
console.log(Number.parseInt("-10.33")); // -10
console.log(Number.parseInt("10"));  // 10
console.log(Number.parseInt("10.33"));  // 10
console.log(Number.parseInt("10 20 30"));  // 10
console.log(Number.parseInt("10 years"));  // 10
console.log(Number.parseInt("years 10"));  // NaN

// If the number cannot be converted, NaN (Not a Number) is returned.

