//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JavaScript Arrays
// An array is a special variable, which can hold more than one value:

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars); // [ 'Saab', 'Volvo', 'BMW' ]

//---------------------------------------------------------

// Why Use Arrays?
// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
// However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

// The solution is an array!

// An array can hold many values under a single name, and you can access the values by referring to an index number.

//-----------------------------------------------------------------------------

// Creating an Array
// Using an array literal is the easiest way to create a JavaScript Array.

/* Syntax:

const array_name = [item1, item2, ...];    

*/
// It is a common practice to declare arrays with the const keyword.

//-----------------------------------------------------------------------------
// Spaces and line breaks are not important. A declaration can span multiple lines:

// Example
const cars1 = [
  "Saab",
  "Volvo",
  "BMW"
];

console.log(cars1); // [ 'Saab', 'Volvo', 'BMW' ]

//----------------------------------------------------------------------------------

// You can also create an array, and then provide the elements:

const cars2 = [];
cars2[0]= "Saab";
cars2[1]= "Volvo";
cars2[2]= "BMW";
console.log(cars2); // [ 'Saab', 'Volvo', 'BMW' ]

//----------------------------------------------------------------------------------
// Using the JavaScript Keyword new
// The following example also creates an Array, and assigns values to it:

const cars3 = new Array("Saab", "Volvo", "BMW");
console.log(cars3); // [ 'Saab', 'Volvo', 'BMW' ]

// The two examples above do exactly the same.
// There is no need to use new Array().
// For simplicity, readability and execution speed, use the array literal method.

//----------------------------------------------------------------------------------

//Accessing Array Elements
// You access an array element by referring to the index number:

const cars4 = ["Saab", "Volvo", "BMW"];
let car4 = cars[0];
console.log(car4); // Saab
// Note: Array indexes start with 0.

// [0] is the first element. [1] is the second element.

//----------------------------------------------------------------------------------

// Changing an Array Element
// This statement changes the value of the first element in cars:

cars[0] = "Opel";
// Example
cars5 = ["Saab", "Volvo", "BMW"];
cars5[0] = "Opel";
console.log(cars5); // [ 'Opel', 'Volvo', 'BMW' ]

//----------------------------------------------------------------------------------

// Converting an Array to a String
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); // Banana,Orange,Apple,Mango

//----------------------------------------------------------------------------------

// Access the Full Array
// With JavaScript, the full array can be accessed by referring to the array name:

// Example
const cars6 = ["Saab", "Volvo", "BMW"];
console.log(cars6); // [ 'Saab', 'Volvo', 'BMW' ]

//----------------------------------------------------------------------------------

// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// But, JavaScript arrays are best described as arrays.

// Arrays use numbers to access its "elements". In this example, person[0] returns John:

// Array:
const person1 = ["John", "Doe", 46];

// Objects use names to access its "members". In this example, person.firstName returns John:

// Object:
const person2 = {firstName:"John", lastName:"Doe", age:46};
console.log(person2); //{ firstName: 'John', lastName: 'Doe', age: 46 }

//----------------------------------------------------------------------------------

// Array Elements Can Be Objects
// JavaScript variables can be objects. Arrays are special kinds of objects.

// Because of this, you can have variables of different types in the same Array.

// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars11;

//----------------------------------------------------------------------------------

// Accessing the First Array Element
// Example
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits2[0];
console.log(fruit); // Banana

// Accessing the Last Array Element
console.log(fruits[fruits2.length - 1]); // Mango

//----------------------------------------------------------------------------------

// Looping Array Elements
// One way to loop through an array, is using a for loop:

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits3.length;
console.log(fLen);

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
  console.log(text);
}
text += "</ul>";
console.log(text);

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
let fLen1 = fruits4.length;
console.log("List of fruits:");
for (let i = 0; i < fLen1; i++) {
  console.log("- " + fruits4[i]);
}

// You can also use the Array.forEach() function:

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];

let text1 = "<ul>";
fruits5.forEach(myFunction);
text1 += "</ul>";

function myFunction(value) {
  text1 += "<li>" + value + "</li>";
  console.log(text1);
}
//--------------------------------------------------------------

let fruits12 = ['Mongo', 'apple', 'grapes', 'banana'];
// console.log(fruits12);
for (let i = 0; i < fruits12.length; i++) {
  const element = fruits12[i].toLocaleUpperCase();
  console.log(element);
  
}

//--------------------------------------------------------------
// array destructuring

const myArray = ["value1", "value2"];
let myVar1 = myArray[0];
let myVar2 = myArray[1];
console.log("value of myVar1", myVar1); // value of myVar1 value1
console.log("value of myVar2", myVar2); // value of myVar1 value2

let [myvar1, myvar2] = myArray; // this is called array deconstructing
console.log("new value of myVar1 ", myvar1);

// what if, array having only one element.
const myArr = ["value1"];
let myVar3 = myArr[0];
let myVar4 = myArr[1];
console.log("value of myVar3", myVar3); // value of myVar3 value1
console.log("value of myVar4", myVar4); //value of myVar4 undefined

// what if, middle element is not there.
const  myArr2 = ["value1", "value2", "value3"];
// let let myVar5 = myArr2[0];
// let myVar6 = myArr2[1];

let[myVar5, , myVar6] = myArr2;

console.log("value of myVar3", myVar5); // value of myVar3 value1
console.log("value of myVar4", myVar6); // value of myVar4 value3

