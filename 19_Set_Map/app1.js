//================= JavaScript Sets ===========================

// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.

/*
    -->    Essential Set Methods

            Method	       ||         Description
        ---------------------------------------------------------------
            new Set()	   ||          Creates a new Set
            add()	       ||          Adds a new element to the Set
            delete()	   ||          Removes an element from a Set
            has()	       ||          Returns true if a value exists in the Set
            forEach()      ||          Invokes a callback for each element in the Set
            values()	   ||          Returns an iterator with all the values in a Set

            Property	              Description
        ---------------------------------------------------------------
            size	       ||         Returns the number of elements in a Set
*/

// How to Create a Set
// You can create a JavaScript Set by:

// ----> Passing an Array to new Set()
// ----> Create a new Set and use add() to add values
// ----> Create a new Set and use add() to add variables

// ----> The new Set() Method
// Pass an Array to the new Set() constructor:

// Create a Set
const letters = new Set(["a","b","c"]);
console.log("letters: ",letters); // Set(3) { 'a', 'b', 'c' }


// Create a Set and add values:

// Create a Set
const letters2 = new Set();

// Add Values to the Set
letters2.add("a");
letters2.add("b");
letters2.add("c");
console.log("letters2: ",letters2); // Set(3) { 'a', 'b', 'c' }

// Create a Set and add variables:

// Example
// Create a Set
const letters3 = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
letters3.add(a);
letters3.add(b);
letters3.add(c);
console.log("letters3: ",letters3); // letters3:  Set(3) { 'a', 'b', 'c' }

//--------------------------------------------------------
// The add() Method

letters3.add("d");
letters3.add("e");
console.log("add(): ",letters3); // add():  Set(5) { 'a', 'b', 'c', 'd', 'e' }
// If you add equal elements, only the first will be saved:

// Example
letters3.add("a");
letters3.add("b");
letters3.add("c");
letters3.add("c");
letters3.add("c");
letters3.add("c");
letters3.add("c");
letters3.add("c");
console.log("add(): ",letters3); //add():  Set(5) { 'a', 'b', 'c', 'd', 'e' }


//----------------------------------------------------
// The forEach() Method
// The forEach() method invokes (calls) a function for each Set element:

// Example
// Create a Set
const letters4 = new Set(["a","b","c"]);

// List all Elements
let text = "";
letters4.forEach (function(value) {
  text += value;
})
console.log("forEach(): ",letters4); // forEach():  Set(3) { 'a', 'b', 'c' }

//---------------------------------------------------
// The values() Method
// The values() method returns a new iterator object containing all the values in a Set:

// Example
letters4.values()   // Returns [object Set Iterator]
// Now you can use the Iterator object to access the elements:

// Example
// List all Elements
let text2 = "";
for (const x of letters4.values()) {
  text2 += x;
}
console.log("values(): ",letters4); // values():  Set(3) { 'a', 'b', 'c' }