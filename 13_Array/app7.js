//========================= JavaScript Array Iteration ==================================

// Array Iteration Methods
// Array iteration methods operate on every array item:

/*
        Array forEach
        Array map()
        Array flatMap()
        Array filter()
        Array reduce()
        Array reduceRight()
        Array every()
        Array some()
        Array from()
        Array keys()
        Array entries()
        Array with()
        Array Spread (...)
*/

// JavaScript Array forEach()
// The forEach() method calls a function (a callback function) once for each array element.

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
//   console.log(txt);
}
console.log(numbers);

//---------------------------------------------------
// JavaScript Array map()
// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.

// This example multiplies each array value by 2:

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

console.log(numbers2); // [ 90, 8, 18, 32, 50 ]

//-----------------------------------------------------------
// JavaScript Array flatMap()
// ES2019 added the Array flatMap() method to JavaScript.

// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
console.log("flatMap(): ", newArr); // flatMap():  [ 2, 4, 6, 8, 10, 12 ]

//-----------------------------------------------------------
// JavaScript Array filter()
// The filter() method creates a new array with array elements that pass a test.

// This example creates a new array from elements with a value larger than 18:

const numbers3 = [25, 4, 9, 16, 45];
const over18 = numbers3.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log("filter()", over18); // filter() [ 25, 45 ]

//-------------------------------------------------------------
// JavaScript Array reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

// The reduce() method works from left-to-right in the array. See also reduceRight().

// The reduce() method does not reduce the original array.

// This example finds the sum of all numbers in an array:

let sum = numbers3.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

console.log("reduce(): ",sum); // reduce():  99

//-------------------------------------------------------
// JavaScript Array reduceRight()
// The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

// The reduceRight() works from right-to-left in the array. See also reduce().

// The reduceRight() method does not reduce the original array.

// This example finds the sum of all numbers in an array
let sum1 = numbers3.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

console.log("reduceRight(): ", sum1); // reduceRight():  99

//----------------------------------------------------------
// JavaScript Array every()
// The every() method checks if all array values pass a test.

// This example checks if all array values are larger than 18:

// numbers3 = [45, 4, 9, 16, 25];
let allOver18 = numbers3.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log("every(): ", allOver18); // every():  false

//-------------------------------------------------------------
// JavaScript Array some()
// The some() method checks if some array values pass a test.

// This example checks if some array values are larger than 18:

let someOver18 = numbers3.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log("some(): ", someOver18); // some():  true

//-------------------------------------------------------------
// JavaScript Array.from()
// The Array.from() method returns an Array object from any object with a length property or any iterable object.

// Create an Array from a String:

console.log(Array.from("ABCDEFG")); // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
  
//------------------------------------------------------------
// JavaScript Array keys()
// The Array.keys() method returns an Array Iterator object with the keys of an array.

// Create an Array Iterator object, containing the keys of the array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
let text1;
for (let x of keys) {
  text1 += x + "<br>";
}
console.log("Keys: ", keys); // Keys:  Object [Array Iterator] {}

//-------------------------------------------------------------
// JavaScript Array entries()
// Create an Array Iterator, and then iterate over the key/value pairs:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
    console.log(x); 
}

/* answer is: 
[ 0, 'Banana' ]
[ 1, 'Orange' ]
[ 2, 'Apple' ]
[ 3, 'Mango' ]*/

//---------------------------------------------------------
// JavaScript Array with() Method
// ES2023 added the Array with() method as a safe way to update elements in an array without altering the original array.


const months1 = ["January", "February", "Mar", "April"];
// const myMonths = months1.with(2, "March");
// console.log("Js with(): ", myMonths);

//---------------------------------------------------------
// JavaScript Array Spread (...)
// The ... operator expands an iterable (like an array) into more elements:

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log("Array Spread operator(...): ", year);

/*
Array Spread operator(...):  [
  'Jan', 'Feb', 'Mar',
  'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'May'
]
*/