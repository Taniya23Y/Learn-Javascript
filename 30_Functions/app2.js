//Hoisting
a(); //a called
// b(); //TypeError: b is not a function


// Function statement 
function a(){
  console.log("a called");
}
//Invoke function | call it
// a();


//Function Expression
var b = function (){
  console.log("b called");
}
//Invoke function | call it
b();

//+++++++++++++++++++++++++++++++++++++++++
//Difference between Function statement & function Expression

// * So, the major difference between this two is hoisting

//+++++++++++++++++++++++++++++++++++++++++

//Function Declaration
// * Function statement  is also called Function Declaration

//Anonymous Function 
// * function () {
//
//*  }

//* SyntaxError: Function statements require a function name

// uses of Anonymous Function
/*
  Anonymous Function are used in a place where functions are used as 
  values.
*/

// Named Function Expression
var b1 = function xyz(){
    // console.log("b1 called");
    console.log(xyz);
}
// xyz(); // ReferenceError: xyz is not defined

/*
  Corner case Gotcha using Named Function Expression
  xyz(); // ReferenceError: xyz is not defined
*/

//Difference Between Parameters & Argument ?
// * Parameter : It's like variable declaration inside a function
// * Argument  : The actual value that we pass to the parameter while calling the function

var b3 = function (param1 , param2) { // param1 and param2 is parameters
    console.log("b3 called");
}
b3(3,4); // 3 and 4 are arguments

// First Class Function
//* In JavaScript, a first-class function is a function that can be treated like any other value.
//* This means that functions can be assigned to variables, passed as arguments to other functions, and returned from functions.
//* Function inside another function as an arguments. in first class function 
//Example

var b4 = function(param1){
  // console.log(param1);
  // return function (){

  // }
  return function xyz(){

  }
}
function xyz(){

};
console.log(b());// anonymous function returned.

b3(function(){

});

/*
  Question:- What is first class function? 
  Answer:-  First class function is nothing but this only⬆️.The ability of functions to be used as value, and
          can be passed as in arguments to another function and can be returned from the functions.
*/
/*
  Functions are first class citizens.
*/

// Arrow Functions
let arrowFunc = () =>{
  "use strict";
  let name = "John Doe";
  return `Hello ${name}`;
  
}