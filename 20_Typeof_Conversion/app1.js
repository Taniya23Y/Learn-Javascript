//=============== JavaScript typeof ============================

// In JavaScript there are 5 different data types that can contain values:
/*
              (1)  string
              (2)  number
              (3)  boolean
              (4)  object
              (5)  function

        There are 6 types of objects:

              (1)  Object
              (2)  Date
              (3)  Array
              (4)  String
              (5)  Number
              (6)  Boolean
     
        And 2 data types that cannot contain values:

              (1)  null
              (2)  undefined
*/

//----------------------------------------------------------
// The typeof Operator
// You can use the typeof operator to find the data type of a JavaScript variable.


console.log(typeof "John" );                // Returns "string"
console.log(typeof 3.14 );                  // Returns "number"
console.log(typeof NaN  );                  // Returns "number"
console.log(typeof false);                  // Returns "boolean"
console.log(typeof [1,2,3,4]  );            // Returns "object"
console.log(typeof {name:'John', age:34});  // Returns "object"
console.log(typeof new Date()    );         // Returns "object"
console.log(typeof function () {}  );       // Returns "function"
console.log(typeof myCar);                  // Returns "undefined" *
console.log(typeof null);                   // Returns "object"

// You cannot use typeof to determine if a JavaScript object is an array (or a date).

//----------------------------------------------------------
// Primitive Data
// A primitive data value is a single simple data value with no additional properties and methods.

// The typeof operator can return one of these primitive types:

/*

    string
    number
    boolean
    undefined
*/

console.log(typeof "John");              // Returns "string"
console.log(typeof 3.14 );               // Returns "number"
console.log(typeof true);                // Returns "boolean"
console.log(typeof false );              // Returns "boolean"
console.log(typeof x );                  // Returns "undefined" (if x has no value)

//----------------------------------------------------------
// Complex Data
// The typeof operator can return one of two complex types:

/*
   function
   object
*/

// The typeof operator returns "object" for objects, arrays, and null.

// The typeof operator does not return "object" for functions.

console.log(typeof {name:'John', age:34}); // Returns "object"
console.log(typeof [1,2,3,4] );            // Returns "object" (not "array", see note below)
console.log(typeof null);                  // Returns "object"
console.log(typeof function myFunc(){});   // Returns "function"

// The typeof operator returns "object" for arrays because in JavaScript arrays are objects.

//----------------------------------------------------------
/*
The Data Type of typeof
The typeofoperator is not a variable. It is an operator. Operators ( + - * / ) do not have any data type.

But, the typeof operator always returns a string (containing the type of the operand).
*/

//----------------------------------------------------------
// The constructor Property
// The constructor property returns the constructor function for all JavaScript variables.


console.log("John".constructor  );              // Returns function String()  {[native code]}
console.log((3.14).constructor );               // Returns function Number()  {[native code]}
console.log(false.constructor  );               // Returns function Boolean() {[native code]}
console.log([1,2,3,4].constructor );            // Returns function Array()   {[native code]}
console.log({name:'John',age:34}.constructor);  // Returns function Object()  {[native code]}
console.log(new Date().constructor   );         // Returns function Date()    {[native code]}
console.log(function () {}.constructor);        // Returns function Function(){[native code]}
//------------------------------------------------------------
// You can check the constructor property to find out if an object is an Array (contains the word "Array"):

const fruits = ["Banana", "Orange", "Apple"];
console.log(isArray.fruits); // undefined
function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}
console.log(isArray(fruits)); // true

//--------------------------------------------------------------
// Or even simpler, you can check if the object is an Array function:


function isArray(myArray) {
  return myArray.constructor === Array;
}
console.log(isArray.fruits);