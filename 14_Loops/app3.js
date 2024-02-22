//=================== JavaScript For In =======================
// The For In Loop
// The JavaScript for in statement loops through the properties of an Object:

/*
Syntax
for (key in object) {
  // code block to be executed
}
*/

const person = {
    fname:"John", 
    lname:"Doe", 
    age:25
};

let text = "";
for (let x in person) {
  text += " " + person[x];
}
console.log(text); //  John Doe 25

/*
The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]
*/

//--------------------------------------------
// For In Over Arrays
// The JavaScript for in statement can also loop over the properties of an Array:

/*
Syntax
for (variable in array) {
  code
}
*/

const numbers = [45, 4, 9, 16, 25];

let txt2 = " ";
for (let x1 in numbers) {
  txt2 += " " + numbers[x1];
}
console.log(txt2); //   45 4 9 16 25

//------------------------------------------------
// Array.forEach()
// The forEach() method calls a function (a callback function) once for each array element.

const numbers4 = [45, 4, 9, 16, 25];

let txt4 = "";
numbers4.forEach(myFunction);

function myFunction(value, index, array) {
  txt4+= value;
}
console.log("ForEach(): ", numbers4); // ForEach():  [ 45, 4, 9, 16, 25 ]
