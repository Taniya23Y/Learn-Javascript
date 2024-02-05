// Number => JavaScript has only one type of number. Numbers can be written with or without decimals.

/*
    JavaScript Numbers are Always 64-bit Floating Point
    Unlike many other programming languages, JavaScript does not define different types 
    of numbers, like integers, short, long, floating-point etc.

    JavaScript numbers are always stored as double precision floating point numbers, 
    following the international IEEE 754 standard.

    This format stores numbers in 64 bits, where the number (the fraction) is stored in
    bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

    Value (aka Fraction/Mantissa)	||        Exponent	    ||      Sign
    52 bits (0 - 51) 	            ||   11 bits (52 - 62)	||    1 bit (63)
*/


// Floating Precision-
// Floating point arithmetic is not always 100% accurate
let num1 = 0.2 + 0.1;
console.log(num1); // 0.30000000000000004

// To solve the problem above, it helps to multiply and divide
num1 = (0.2*10 + 0.1*10) / 10;
console.log(num1); // 0.3


// Adding Numbers and Strings
/* 
    JavaScript uses the + operator for both addition and concatenation.
    --> Numbers are added. 
    --> Strings are concatenated.
*/

// --> Numbers are added. 
let number1 = 23;
let number2 = 2;
console.log(number1 + number2); // 25 (Number are added(+))

// --> Strings are concatenated.
let numberFirst = '23';
let numberSecond = '2';
console.log(numberFirst + numberSecond); // 232 (Strings are concatenated (+))
let finalNumber = numberFirst + numberSecond;
console.log(typeof finalNumber); // string

// --> add a number and a string, the result will be a string concatenation
let number_First = 12;
let number_Second = '25';
console.log(number_First + number_Second); // 1225 (String concatenation)
let final_Number = number_First + number_Second;
console.log(typeof final_Number); // string

// --> add a string and a number, the result will be a string concatenation
let num_1 = '12';
let num_2 = 4;
let num_3 = num_1 + num_2;
console.log(num_3); // 124  ("" + 4) -> "124" string concatenation
let final_Num = num_1 + num_2;
console.log(typeof final_Num); // string

// Another Example
let user1 = 10;
let user2 = 20;
let user3 = "30";
let result = user1+ user2 + user3;
console.log(result); // 3030

// NaN - Not a Number
// NaN is a JavaScript reserved word indicating that a number is not a legal number.
// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)
let number_1 = 100 / "Apple";
console.log(number_1); // NaN

number_1 = "Apple" / 100;
console.log(number_1); // NaN

// if the string is numeric, the result will be a number
number_1 = 100 / "100";
console.log(number_1); // 1

number_1 = "100" / "100";
console.log(number_1); // 1

number_1 = "100" / 100;
console.log(number_1); // 1

// use the global JavaScript function isNaN() to find out if a value is a not a number.
function checkValueIsNan(value){
    return typeof value === 'number' && !isNaN(value);
}
console.log(checkValueIsNan("Hello")); // false
console.log(checkValueIsNan(5)); // true

// use of NaN in a mathematical operation, the result will also be NaN
let checkNum = NaN;
let checkNum1 = 100;
let output = checkNum + checkNum1;
console.log(output); // NaN

checkNum = NaN;
checkNum1 = "100";
output = checkNum + checkNum1;
console.log(output); // NaN100

// NaN is a number: typeof NaN returns number
let check = NaN;
console.log(typeof(check)); // number

// --> Infinity
// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
                                            // * Output of left side code is -> 
// Example                                  //  4
let myNumber = 2;                           //  16
// Execute until Infinity                   //  256
let txt = "";                               //  65536
while (myNumber != Infinity) {              //  4294967296
   myNumber = myNumber * myNumber;          //  18446744073709552000
   txt = txt + myNumber + "\n";             //  3.402823669209385e+38
}                                           //  1.157920892373162e+77
                                            //  1.3407807929942597e+154
console.log(txt);                           //  Infinity
                               

// Division by 0 (zero) also generates Infinity
let zeroNum = 2 / 0; 
console.log(zeroNum); // Infinity
let zeroNum1 = -2 / 0;
console.log(zeroNum1); // -Infinity

// Infinity is a number: typeof Infinity returns number
console.log(typeof Infinity); // number


// --> JavaScript Numbers as Objects
// Normally JavaScript numbers are primitive values created from literals.

let numObj = 123;
console.log(numObj); // 123

//But numbers can also be defined as objects with the keyword new:

let numObj1 = new Number(123);
console.log(numObj1); // [Number: 123] as a object

// Example
let x = 123;
let y = new Number(123);
let sum = x + y; 
console.log(sum); // 246

// let's find out of typeof above code 
console.log(typeof(x)); // number
console.log(typeof(y)); // object
console.log(typeof(sum)); // number

// When using the == operator, x and y are equal.
let equalNum = 500;
let equalNum1 = new Number(500);
console.log(equalNum == equalNum1); // true
console.log(equalNum === equalNum1); // false

// Comparing two JavaScript objects always returns false.
let checkAnotherNum = new Number(500);
let checkAnotherNum1 = new Number(500);
console.log(checkAnotherNum == checkAnotherNum1); // false
console.log(checkAnotherNum === checkAnotherNum1); // false