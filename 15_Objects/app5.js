// JavaScript Iterators
// The iterator protocol defines how to produce a sequence of values from an object.

// An object becomes an iterator when it implements a next() method.

// The next() method must return an object with two properties:

// value (the next value)
// done (true or false)

// value -->  The value returned by the iterator
//            (Can be omitted if done is true)
// done  -->  true if the iterator has completed
//            false if the iterator has produced a new value

//++++++++++++++++++++++++++++++++++++++++++
// Home Made Iterable
// This iterable returns never ending: 10,20,30,40,.... Everytime next() is called:

// Example
// Home Made Iterable
function myNumbers() {
  let n = 0;
  return {
    next: function() {
      n += 10;
      return {value:n, done:false};
    }
  };
}

// Create Iterable
const n = myNumbers();
n.next(); // Returns 10
n.next(); // Returns 20
n.next(); // Returns 30

// The problem with a home made iterable:

// It does not support the JavaScript for..of statement.

// A JavaScript iterable is an object that has a Symbol.iterator.

// The Symbol.iterator is a function that returns a next() function.

// An iterable can be iterated over with the code: for (const x of iterable) { }

// Example
// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}
// Now you can use for..of

for (const num of myNumbers) {
  // Any Code Here
}
// The Symbol.iterator method is called automatically by for..of.

// But we can also do it "manually":

let iterator = myNumbers[Symbol.iterator]();

while (true) {
  const result = iterator.next();
  if (result.done) break;
  // Any Code Here
}
