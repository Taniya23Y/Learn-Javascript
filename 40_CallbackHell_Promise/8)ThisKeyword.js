/**
 * this in global space
 * this inside a function
 * this in strict mode - (this substitution)
 * this value depends on how this is called(window)
 * this inside a object's method
 * call apply bind methods (sharing methods)
 * this inside arrows function
 * this inside DOM
*/
"use strict";

//* this in global space

this; // This keyword in global space have value of global object.
console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//---------------------------------------------

//* this inside a function
function thisInsideFunc(){
    // the value depends on strict and non-strict mode.
    console.log(this);
}
thisInsideFunc(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// The above two console.logs are not same, as its results are behaving same but it is not same(windowObject).
// If the above code is executing in "use strict" then this in global space as same results but in function it gives undefined

//---------------------------------------------

//* this in strict mode - (this substitution)
/*
   According to this substitution, the value of this keyword is undefined  or null,
   this keyword will be replaced with globalObject.
   only in non-strict mode.
*/

//---------------------------------------------

//* this value depends on how this is called(window)

// In normal way
thisInsideFunc(); // it is undefined in strict mode.
// BUT,
window.thisInsideFunc();//Window {window: Window, self: Window, document: document, name: '', location: Location, …}

/**
 * If the function is called without any reference then it is undefined but 
 * If the function is called with any reference then it is window
*/

//---------------------------------------------

//* this inside a object's method
const student = {
    name: 'sudarshan',
    printName: function(){
        console.log(this);
        console.log(this.name); // sudarshan
    }
}

student.printName(); // {name:10, printName:f} 

//---------------------------------------------
//* Three importance function->
//* call apply bind methods (sharing methods)
/**
 * call
 * apply
 * bind
*/

const student2 = {
    name: 'diya',
};
// student2.printName(); // It throw an error while with call function it gives result.
student.printName.call(student2); // diya

//---------------------------------------------
//* this inside arrows function
/**
 * Arrow function does not have their own this, they take the value of their lexical environment where they are enclosed.
 * Arrow function don't provide their own `this binding`(it retains this value of the enclosing lexical context).
*/

const obj = {
    a: 20,
    x: function(){
        console.log(this);
    }
}
obj.x();// {a: 20, x: ƒ}

// By arrow function Example - 1
const obj1 = {
    a: 20,
    x1: () => {
        console.log(this);
    }
}
obj1.x1(); // window object

// By arrow function Example - 2
const obj2 = {
    a: 20,
    x1: function () {
        const y = () => {
            console.log(this);
        }
        y();
    }
}
obj2.x1(); // {a: 20, x1: f}

//---------------------------------------------
//* this inside DOM

//* <button onclick="alert(this)">Click me</button> 
// answer is: - [object HTMLButtonElement]
// The value is reference to the HTMLElements
