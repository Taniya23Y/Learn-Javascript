// Hoisting in Javascript.

// getName(); // invoking the function
// console.log(x); // 7
// console.log(getName); //[Function: getName]


var x = 7;

// arrow function

// var getName = () => {
//     console.log("Namaste Javascript");
// }

function getName() {
    console.log("Namaste Javascript");
}
getName(); // invoking the function
console.log(x); // 7
console.log(getName); // [Function: getName]