//========================= JavaScript Array Search ==================================

/*
                JavaScript Array Search
        -->    Array Find and Search Methods
                    Array indexOf()
                    Array lastIndexOf()
                    Array includes()
                    Array find()
                    Array findIndex()
                    Array findLast()
                    Array findLastIndex()
*/

// JavaScript Array indexOf()
// The indexOf() method searches an array for an element value and returns its position.

const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple") + 1;
let position = fruits.indexOf("Apple");
console.log(position); // 1
position = fruits.indexOf();
console.log("Position:", position); // Position: -1

// If the searchElement is not found in the array, it will return -1.

/*
   Syntax
    array.indexOf(item, start)
    item   -->	Required. The item to search for.
    start  -->	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
    Array.indexOf() returns -1 if the item is not found.
    If the item is present more than once, it returns the position of the first occurrence.
*/

//-----------------------------------------------------------

// JavaScript Array lastIndexOf()
// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

position = fruits.lastIndexOf("Apple");
console.log(position); // 2

/*
   Syntax
   array.lastIndexOf(item, start)
   item --> Required. The item to search for
   start --> Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning
*/

//---------------------------------------------------------------
// JavaScript Array includes()
// ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

position = fruits.includes("Mango");
console.log("for includes():", position); // for includes(): true

/*
  Syntax
  array.includes(search-item)
  Array.includes() allows to check for NaN values. Unlike Array.indexOf().
*/

//-----------------------------------------------------------------
// JavaScript Array find()
// The find() method returns the value of the first array element that passes a test function.
// This example finds (returns the value of) the first element that is larger than 18:

const numbers = [4, 19, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
myFunction();
console.log("First number over 18 is:",first); // First number over 18 is: 19

/*
    Note that the function takes 3 arguments:
      The item value
      The item index
      The array itself
*/

//------------------------------------------------------------

// JavaScript Array findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.
// This example finds the index of the first element that is larger than 18:

first = numbers.findIndex(myFunction);
console.log("First number over 18 has index: ", first); // First number over 18 has index:  1

//-----------------------------------------------------------------

// JavaScript Array findLast() Method
// ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.

const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
console.log(high); // 42
console.log(temp.indexOf(high)); // 4

//------------------------------------------------------------------
// JavaScript Array findLastIndex() Method
// The findLastIndex() method finds the index of the last element that satisfies a condition.

let pos = temp.findLastIndex(x => x > 40);
console.log(pos); // 4