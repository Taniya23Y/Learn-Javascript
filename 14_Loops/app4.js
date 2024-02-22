//==========================  JavaScript For Of  =============================


// The For Of Loop
// The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

/*
Syntax
for (variable of iterable) {
  // code block to be executed
}
*/
// variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

// iterable - An object that has iterable properties.

// Looping over an Array

const cars = ["BMW", "Volvo", "Mini"];

let text = " ";
for (let x of cars) {
  text += " " + x;
}
console.log("Looping over an Array: ", text); // Looping over an Array:    BMW Volvo Mini

//----------------------------------------

// Looping over a String
let language = "JavaScript";

let text2 = "";
for (let x of language) {
text2 += " "+ x;
}
console.log("Looping over a String: ", text2); // Looping over a String:   J a v a S c r i p t

//---------------------------------------------
// JavaScript While Loop

// Loops can execute a block of code as long as a specified condition is true.

// The While Loop
// The while loop loops through a block of code as long as a specified condition is true.

/*
Syntax
while (condition) {
  // code block to be executed
}
*/

// Example
// In the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10:

let text5 = 0;
let i1 = 0;
while ( i1 < 10) {
  text5 +=  "The number is " + i1 + "\n";
  i1++;
}
console.log("while() loop: ",text5);

// If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.

//------------------------------------------

// The Do While Loop
// The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

/*
Syntax
do {
  // code block to be executed
}
while (condition);
*/

// Example
// The example below uses a do while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:

let text6 = 0;
let i = 0;
do {
  text6 += "The number is " + i + "\n";
  i++;
}
while (i < 10);
console.log("do-while() loop: ",text6);

// Do not forget to increase the variable used in the condition, otherwise the loop will never end!

