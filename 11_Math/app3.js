// JavaScript Random
//Math.random()
console.log("Math.random()");
//Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

// Returns a random number:
console.log(Math.random()); // 0.730369298891343

// ------> Math.random() always returns a number lower than 1.

// JavaScript Random Integers
// Math.random() used with Math.floor() can be used to return random integers.
// There is no such thing as JavaScript integers.

// We are talking about numbers with no decimals here.

// Returns a random integer from 0 to 9:
console.log(Math.floor(Math.random() * 10)); // 5

// Returns a random integer from 0 to 10:
console.log(Math.floor(Math.random() * 11)); // 2

// Returns a random integer from 0 to 99:
console.log(Math.floor(Math.random() * 100)); // 65

// Returns a random integer from 0 to 100:
console.log(Math.floor(Math.random() * 101)); // 39

// Returns a random integer from 1 to 10:
console.log(Math.floor(Math.random() * 10) + 1); // 4

// Returns a random integer from 1 to 100:
console.log(Math.floor(Math.random() * 100) + 1); // 90

// A Proper Random Function
// This JavaScript function always returns a random number between min (included) and max (excluded):


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
console.log(getRndInteger(1, 10)); // Output will be 4

//This JavaScript function always returns a random number between min and max (both included):

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(getRndInteger(1,10)); // 7

