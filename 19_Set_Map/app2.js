//==================== JavaScript Maps ===========================

// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

/*
    
    -->    Essential Get Methods

            Method	       ||         Description
        ---------------------------------------------------------------
            new Map()	   ||          Creates a new Map
            set()	       ||          Sets the value for a key in a Map
            get()          ||          gets the value for a key in a Map
            delete()	   ||          Removes an element from a Map
            has()	       ||          Returns true if a value exists in the Map
            forEach()      ||          Invokes a callback for each element in the Map
            entries()	   ||          Returns an iterator with the [key, value] pairs in a Map

            Property	              Description
        ----------------------------------------------------------------------
            size	       ||         Returns the number of elements in a get
*/

//How to Create a Map
// You can create a JavaScript Map by:

// ----> Passing an Array to new Map()
// ----> Create a Map and use Map.set()

//---------------------------------------------------------------
// The new Map() Method
// You can create a Map by passing an Array to the new Map() constructor:

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
console.log(fruits); // Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }

//----------------------------------------------------------------
// The set() Method
// You can add elements to a Map with the set() method:

// Create a Map
const fruits2 = new Map();

// Set Map Values
fruits2.set("apples", 500);
fruits2.set("bananas", 300);
fruits2.set("oranges", 200);
console.log(fruits2); // Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }

// The set() method can also be used to change existing Map values:
fruits2.set("apples", 200);
console.log("set(): ", fruits2); // Map(3) { 'apples' => 200, 'bananas' => 300, 'oranges' => 200 }

//----------------------------------------------------------------
// The get() Method
// The get() method gets the value of a key in a Map:

// Example
fruits2.get("apples"); 
console.log("get(): ", fruits2.get("apples")); // get():  200

//----------------------------------------------------------------
// The size Property
// The size property returns the number of elements in a Map:

// Example
console.log("size():", fruits2.size); // size(): 3

//----------------------------------------------------------------
// The delete() Method
// The delete() method removes a Map element:

// Example
console.log("delete():", fruits2.delete("apples")); // delete(): true
console.log("size():", fruits2.size); // size(): 2

//----------------------------------------------------------------
// The has() Method
// The has() method returns true if a key exists in a Map:

// Example
console.log("has():", fruits.has("apples")); // has(): true

console.log("has():", fruits2.has("apples")); // has(): false

//----------------------------------------------------------------
/*           JavaScript Objects vs Maps
   
        Differences between JavaScript Objects and Maps:

                Object	   ||        Map
                ----------------------------------------------------------
                Iterable   ||      Not directly iterable	Directly iterable
                Size	   ||      Do not have a size property	Have a size property
                Key Types  ||	   Keys must be Strings (or Symbols)	Keys can be any datatype
                Key Order  ||      Keys are not well ordered	Keys are ordered by insertion
                Defaults   ||      Have default keys	Do not have default keys
*/

//-------------------------------------------------------------------------------
// The forEach() Method
// The forEach() method calls a function for each key/value pair in a Map:


// List all entries
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value+"\n";
})
console.log("forEach():",text);
/*answer: 
forEach(): apples = 500
bananas = 300
oranges = 200 */

//-------------------------------------------------------------------------------
// The entries() Method
// The entries() method returns an iterator object with the [key, values] in a Map:

// List all entries
let text2 = "";
for (const x of fruits.entries()) {
  text2 += x + " ";
}
console.log("entries():", text2); // entries(): apples,500 bananas,300 oranges,200