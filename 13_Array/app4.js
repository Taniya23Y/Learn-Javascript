//-----------------------------------------------------------------------
// Array Properties and Methods
// The real strength of JavaScript arrays are the built-in array properties and methods:


//++++++++++++++++++++ Basic Array Methods ++++++++++++++++++++++++++
/*
        Array length
        Array toString()
        Array at()
        Array join()
        Array pop()
        Array push()
        Array shift()
        Array unshift()
        Array delete()
        Array concat()
        Array copyWithin()
        Array flat()
        Array splice()
        Array toSpliced()
        Array slice()
*/


//---------------------------------------------------------------------

// JavaScript Array length
// The length property returns the length (size) of an array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size); // 4

//---------------------------------------------------------------------

// JavaScript Array toString()
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.toString()); // Banana,Orange,Apple,Mango

//---------------------------------------------------------------------

// JavaScript Array at()
// ES2022 intoduced the array method at():

// Examples
// Get the third element of fruits using at():
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let fruit3 = fruits3.at(2);
console.log(fruit3); // Apple

// Get the third element of fruits using []:
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
let fruit2 = fruits4[2];
console.log(fruit2); // Apple

//---------------------------------------------------------------------

// JavaScript Array join()
// The join() method also joins all array elements into a string.

// It behaves just like toString(), but in addition you can specify the separator:
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits5.join(" * ")); // Banana * Orange * Apple * Mango

//---------------------------------------------------------------------
/*
        Popping and Pushing
        When you work with arrays, it is easy to remove elements and add new elements.
        This is what popping and pushing is:
        Popping items out of an array, or pushing items into an array.
*/

//---------------------------------------------------------------------

// JavaScript Array pop()
// The pop() method removes the last element from an array:
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.pop();
console.log(fruits6); // [ 'Banana', 'Orange', 'Apple' ]

// The pop() method returns the value that was "popped out":
let fruit4 = fruits5.pop();
console.log(fruit4); // Mango

//---------------------------------------------------------------------

// JavaScript Array push()
// The push() method adds a new element to an array (at the end):

const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
let fruit5 = fruits7.push("Kiwi");
console.log(fruits7); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

// The push() method returns the new array length:
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits8.push("Kiwi"); 
console.log(length); // 5

//---------------------------------------------------------------------

// Shifting Elements
// Shifting is equivalent to popping, but working on the first element instead of the last.

// JavaScript Array shift()
// The shift() method removes the first array element and "shifts" all other elements to a lower index.

const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
let fruit6 = fruits9.shift();
// The shift() method returns the value that was "shifted out":
console.log(fruit6); // Banana
console.log(fruits9); // [ 'Orange', 'Apple', 'Mango' ]

//---------------------------------------------------------------------

// JavaScript Array unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
let fruit7 = fruits10.unshift("Lemon");
// The unshift() method returns the new array length:
console.log(fruit7); // 5
console.log(fruits10); // [ 'Lemon', 'Banana', 'Orange', 'Apple', 'Mango' ]

//---------------------------------------------------------------------

// Changing Elements
// Array elements are accessed using their index number:

const fruits12 = ["Banana", "Orange", "Apple", "Mango"];
fruits12[0] = "Kiwi";
console.log(fruits12); // [ 'Kiwi', 'Orange', 'Apple', 'Mango' ]

//---------------------------------------------------------------------

// JavaScript Array length
// The length property provides an easy way to append a new element to an array:

const fruits13 = ["Banana", "Orange", "Apple", "Mango"];
fruits13[fruits13.length] = "Kiwi";
console.log(fruits13); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//---------------------------------------------------------------------

// JavaScript Array delete()
// Warning !
// Using delete() leaves undefined holes in the array.

// Use pop() or shift() instead.

const fruits14 = ["Banana", "Orange", "Apple", "Mango"];
delete fruits14[0];
console.log(fruits14); // [ <1 empty item>, 'Orange', 'Apple', 'Mango' ]

//---------------------------------------------------------------------

/*
      Merging Arrays (Concatenating)
      In programming languages, concatenation means joining strings end-to-end.
      Concatenation "snow" and "ball" gives "snowball".
      Concatenating arrays means joining arrays end-to-end.
*/

// JavaScript Array concat()
// The concat() method creates a new array by merging (concatenating) existing arrays:

// Example (Merging Two Arrays)
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren); // [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]

/*
     Note
     The concat() method does not change the existing arrays. It always returns a new array.
     The concat() method can take any number of array arguments.
*/

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren2 = arr1.concat(arr2, arr3);
console.log(myChildren2); // [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin','Morgan']

// The concat() method can also take strings as arguments:

// Example (Merging an Array with Values)
const arr4 = ["Emil", "Tobias", "Linus"];
const myChildren3 = arr4.concat("Peter"); 
console.log(myChildren3); // [ 'Emil', 'Tobias', 'Linus', 'Peter' ]

//---------------------------------------------------------------------

// Array copyWithin()
// The copyWithin() method copies array elements to another position in an array:

//Example: Copy to index 2, all elements from index 0:

const fruits15 = ["Banana", "Orange", "Apple", "Mango"];
fruits15.copyWithin(2, 0);
console.log(fruits15); // [ 'Banana', 'Orange', 'Banana', 'Orange' ]

//Example: Copy to index 2, the elements from index 0 to 2:

const fruits16 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits16.copyWithin(2, 0, 2);
console.log(fruits16); // [ 'Banana', 'Orange', 'Banana', 'Orange', 'Kiwi' ]

/*
   Note
   The copyWithin() method overwrites the existing values.
   The copyWithin() method does not add items to the array.
   The copyWithin() method does not change the length of the array.
*/

//---------------------------------------------------------------------

/*
  Flattening an Array
  Flattening an array is the process of reducing the dimensionality of an array.
  Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
*/

// JavaScript Array flat() 
// The flat() method creates a new array with sub-array elements concatenated to a specified depth.

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]

//---------------------------------------------------------------------

/*
   Splicing and Slicing Array
   The splice() method adds new items to an array.
   The slice() method slices out a piece of an array.
*/

// JavaScript Array splice()
// The splice() method can be used to add new items to an array:

const fruits17 = ["Banana", "Orange", "Apple", "Mango"];
fruits17.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits17); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

/*
   The first parameter (2) defines the position where new elements should be added (spliced in).
   The second parameter (0) defines how many elements should be removed.
   The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
   The splice() method returns an array with the deleted items:
*/
const fruits18 = ["Banana", "Orange", "Apple", "Mango"];
fruits18.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits18); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi' ]

// Using splice() to Remove Elements
// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

const fruits19 = ["Banana", "Orange", "Apple", "Mango"];
fruits19.splice(0, 1);
console.log(fruits19); // [ 'Orange', 'Apple', 'Mango' ]

/*
     The first parameter (0) defines the position where new elements should be added (spliced in).
     The second parameter (1) defines how many elements should be removed.
     The rest of the parameters are omitted. No new elements will be added.
*/

// JavaScript Array toSpliced()
// ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.
// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

// const months1 = ["Jan", "Feb", "Mar", "Apr"];
// months1.toSpliced(0, 1);
// console.log(months1);
// const spliced = months1.toSpliced(0, 1);
// console.log(spliced);


//---------------------------------------------------------------------

// JavaScript Array slice()
// The slice() method slices out a piece of an array into a new array:

// Example
// Slice out a part of an array starting from array element 1 ("Orange"):

const fruits20 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits20.slice(1);
console.log(citrus); // [ 'Orange', 'Lemon', 'Apple', 'Mango' ]

// The slice() method can take two arguments like slice(1, 3).
// The method then selects elements from the start argument, and up to (but not including) the end argument.

// Example
const fruits21 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = fruits21.slice(1, 3); 
console.log(citrus1); // [ 'Orange', 'Lemon' ]

// If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.

// Example
const fruits22 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus2 = fruits22.slice(2);
console.log(citrus2); // [ 'Lemon', 'Apple', 'Mango' ]