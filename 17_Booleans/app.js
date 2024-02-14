// Booleans A JavaScript Boolean represents one of two values: true or false.

// Boolean Values
// Very often, in programming, you will need a data type that can only have one of two values, like

// YES / NO
// ON / OFF
// TRUE / FALSE
// For this, JavaScript has a Boolean data type. It can only take the values true or false.

//========================================================================
// The Boolean() Function
// You can use the Boolean() function to find out if an expression (or a variable) is true:

  
console.log(Boolean(10 > 9)); // true

//=========================================================================

// Comparisons and Conditions
// Here are some examples:

/*
    Operator ||  	  Description	   ||        Example
-----------------------------------------------------------------------
      ==	 ||        equal to	       ||    if (day == "Monday")
      >	     ||        greater than	   ||    if (salary > 9000)
      <	     ||        less than	   ||    if (age < 18)
*/

// The Boolean value of an expression is the basis for all JavaScript comparisons and conditions.

//================================================================

// Everything With a "Value" is True
console.log("100 = "+ Boolean(100)); // 100 = true
console.log("3.14 = "+ Boolean(3.14)); // 3.14 = true
console.log("-15 = "+ Boolean(-15)); // -15 = true
console.log("'Hello' = "+ Boolean("Hello")); // Hello = true
console.log("'false' = "+ Boolean("false")); // false = true
console.log("7 + 1 + 3.14 = "+ Boolean(7 + 1 + 3.14)); // 7 + 1 + 3.14 = true

//===================================================================

// Everything Without a "Value" is False

//--------------------------------------------
// The Boolean value of 0 (zero) is false:

let num = 0;
console.log(Boolean(num));

//--------------------------------------------
// The Boolean value of -0 (minus zero) is false:

let num1 = -0;
console.log(Boolean(num1)); // false

//--------------------------------------------
// The Boolean value of "" (empty string) is false:

let num2 = "";
console.log(Boolean(num2)); // false

//--------------------------------------------
// The Boolean value of undefined is false:

let num3;
console.log(Boolean(num3)); // false

//--------------------------------------------
// The Boolean value of null is false:

let num4 = null; 
console.log(Boolean(num4)); // false
 
//--------------------------------------------
// The Boolean value of false is (you guessed it) false:

let num5 = false;
console.log(Boolean(num5)); // false

//--------------------------------------------
// The Boolean value of NaN is false:

let num6 = 10 / "Hello";
console.log(Boolean(num6)); // false

//=============================================================

// JavaScript Booleans as Objects
// Normally JavaScript booleans are primitive values created from literals:

let num7 = false;
// But booleans can also be defined as objects with the keyword new:

let num8 = new Boolean(false);
// Example
let num9 = false; // typeof num9 returns boolean
let num10 = new Boolean(false); // typeof num10 returns object

// Do not create Boolean objects.
// The new keyword complicates the code and slows down execution speed.
// Boolean objects can produce unexpected results:

//----------------------------------------------
// When using the == operator, x and y are equal:

let num11 = false;
let num12 = new Boolean(false);
console.log(num11==num12); // true

//--------------------------------------------------
// When using the === operator, x and y are not equal:

let x = false;
let y = new Boolean(false);
// Note the difference between (x==y) and (x===y).

//------------------------------------------------

// (num13 == num14) true or false?

let num13 = new Boolean(false);
let num14 = new Boolean(false);
console.log(num13 == num14); // false

//-----------------------------------------------
// (num15 === num16) true or false?

let num15 = new Boolean(false);
let num16 = new Boolean(false);
console.log(num15 ===  num16); // false

// Comparing two JavaScript objects always return false.