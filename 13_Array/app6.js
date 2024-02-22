//========================= JavaScript Array Sorting ==================================

// JavaScript Sorting Arrays
/*
    -->     Alpabetic Sort

            Array sort()
            Array reverse()
            Array toSorted()
            Array toReversed()


    -->    Numeric Sort

            Random Sort
            Math.min()
            Math.max()
            Home made Min()
            Home made Max()
*/

// Sorting an Array
// The sort() method sorts an array alphabetically:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log("Sorted array is:", fruits); // Sorted array is: [ 'Apple', 'Banana', 'Mango', 'Orange' ]

//--------------------------------------------------------------

//Reversing an Array
// The reverse() method reverses the elements in an array:

console.log("Reverse array is: ", fruits.reverse()); // Reverse array is:  [ 'Orange', 'Mango', 'Banana', 'Apple' ]

// By combining sort() and reverse(), you can sort an array in descending order:

fruits.sort();
fruits.reverse();
console.log(fruits); // [ 'Orange', 'Mango', 'Banana', 'Apple' ]

//--------------------------------------------------------------
// JavaScript Array toSorted() Method
// ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.

// The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
const months = ["Jan", "Feb", "Mar", "Apr"];
// let sorted = months.toSorted();
// console.log("Sorted arrays by toStored(): ", months.toSorted());

//----------------------------------------------------------------
// JavaScript Array toReversed() Method
// ES2023 added the toReversed() method as a safe way to reverse an array without altering the original array.

// The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
// console.log("Sorted arrays by toStored(): ", months.toREversed());

//=========================================================================
// Numeric Sort
// By default, the sort() function sorts values as strings.

// This works well for strings ("Apple" comes before "Banana").
// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a compare function:

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points); // [ 1, 5, 10, 25, 40, 100 ]

// Use the same trick to sort an array descending

points.sort(function (a, b) {
  return b - a;
});
console.log("Descending order: ", points); // Descending order:  [ 100, 40, 25, 10, 5, 1 ]

/*
-->  The Compare Function
  The purpose of the compare function is to define an alternative sort order.
  The compare function should return a negative, zero, or positive value, depending on the arguments:

  function(a, b){return a - b}
  When the sort() function compares two values, it sends the values to the compare function, and sorts the 
  values according to the returned (negative, zero, positive) value.
  If the result is negative, a is sorted before b.
  If the result is positive, b is sorted before a.
  If the result is 0, no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).
When comparing 40 and 100, the sort() method calls the compare function(40, 100).
The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
*/

//---------------------------------------------------------------
// Sorting an Array in Random Order
// Using a sort function, like explained above, you can sort an numeric array in random order

points.sort(function () {
  return 0 - Math.random();
}); // Sort by Random order:  [ 100, 40, 25, 10, 5, 1 ]
points.sort(function () {
  return 1 - Math.random();
}); //Sort by Random order:  [ 1, 5, 10, 25, 40, 100 ]
points.sort(function () {
  return 0.5 - Math.random();
});
console.log("Sort by Random order: ", points); // Sort by Random order:  [ 5, 100, 10, 40, 25, 1 ]

//----------------------------------------------------------------
// The Fisher Yates Method
// The points.sort() method in the example above is not accurate. It will favor some numbers over others.

// The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!

const point = [40, 100, 1, 5, 25, 10];
// for loop
for (let i = point.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = point[i];
  point[i] = point[j];
  point[j] = k;
}

console.log(point); // [ 10, 25, 5, 100, 40, 1 ]

//--------------------------------------------------------

// Find the Lowest (or Highest) Array Value
// There are no built-in functions for finding the max or min value in an array.

// To find the lowest or highest value you have 3 options:

// Sort the array and read the first or last element
// Use Math.min() or Math.max()
// Write a home made function
// Find Min or Max with sort()
// After you have sorted an array, you can use the index to obtain the highest and lowest values.

// Sort Ascending:
points.sort(function (a, b) {
  return a - b;
});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value

// Sort Descending:

points.sort(function (a, b) {
  return b - a;
});
// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value

//++++++++++++++++++++++++++++++++++
// Using Math.min() on an Array
// You can use Math.min.apply to find the lowest number in an array:

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

console.log("Lowest number is: ", myArrayMin(points)); // Lowest number is:  1

// Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).

//++++++++++++++++++++++++++++++++++
// Using Math.max() on an Array
// You can use Math.max.apply to find the highest number in an array:

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

console.log("Highest number is: ", myArrayMax(points)); // Highest number is:  100

// Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).

//-------------------------------------------------------------
// avaScript Array Minimum Method
// There is no built-in function for finding the lowest value in a JavaScript array.

// The fastest code to find the lowest number is to use a home made method.

// This function loops through an array comparing each value with the lowest value found:

function myArrayMin1(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

console.log(myArrayMin1(points)); // 1

//-------------------------------------------
// JavaScript Array Maximum Method
// There is no built-in function for finding the highest value in a JavaScript array.

// The fastest code to find the highest number is to use a home made method.

// This function loops through an array comparing each value with the highest value found

function myArrayMax1(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

console.log(myArrayMax1(points)); // 100
