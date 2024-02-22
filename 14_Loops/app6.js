//======================= JavaScript Iterables ====================
// Iterables are iterable objects (like Arrays).

// Iterables can be accessed with simple and efficient code.

// Iterables can be iterated over with for..of loops

//------------------------------------------------------
// The For Of Loop
// The JavaScript for..of statement loops through the elements of an iterable object.

/*
Syntax
for (variable of iterable) {
  // code block to be executed
}
*/

// Iterating
// Iterating is easy to understand.

// It simply means looping over a sequence of elements.

// Here are some easy examples:

// Iterating over a String
// Iterating over an Array

//---------------------------------------------------------------
// Iterating Over a String
// You can use a for..of loop to iterate over the elements of a string:

// Example
const name = "W3Schools";

for (const x of name) {
  // code block to be executed
}

//-----------------------------------------------------------------

// Iterating Over an Array
// You can use a for..of loop to iterate over the elements of an Array:

// Example
const letters1 = ["a","b","c"];

for (const x of letters1) {
  // code block to be executed
}

// You can learn more details about Iterables in the chapter JS Object Iterables.

//-----------------------------------------------------------
// Iterating Over a Set
// You can use a for..of loop to iterate over the elements of a Set:

// Example
const letters3 = new Set(["a","b","c"]);

for (const x of letters3) {
  // code block to be executed
}

//--------------------------------------------------------------
// Iterating Over a Map
// You can use a for..of loop to iterate over the elements of a Map:

// Example
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for (const x of fruits) {
  // code block to be executed
}