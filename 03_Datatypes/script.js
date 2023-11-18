"use strict"; // treat all JS code as newer version

// alert( 5 + 6 );  // we are using node.js, not browser

console.log(3 + 3); // code readability should be high

let name = "anya"; // string
let age = 18; // number
let isLoggedIn = false; // boolean
let state; // undefined

/****All are Primitive Datatypes *****/
// number => 2 to power 53
// bigInt => If number is more greater specially in trading, stock market, bug websites
// string => " " // quotes 
// boolean => true|false 
// null => standalone value 
// undefined => abhi value assign nahi hue hai
// symbol => find uniqueness

// object
console.log(typeof "anya"); // string
console.log(typeof age); // number
console.log(typeof null); // object
console.log(typeof undefined); // undefined


// # Primitive Datatypes

// 7 types: 
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 300; // number
const scoreValue = 100.3; // number

const isLogged1 = false; // Boolean
const outSideTemp = null; // null
const isLoggedIn1 = false; // Undefined

const id = Symbol('123'); // symbol
const anotherId = Symbol('123'); // symbol

console.log(id === anotherId); // false

const bigNumber = 34567892334238956n; // BigInt


//  Is Javascript, Dynamically typed langugae
// Ans = JavaScript is a dynamically typed language, which means 
// that data types of variables are determined by the value they hold 
// at runtime and can change throughout the program as we assign different values to them.


// #Reference(Non-primitive)

// Objects, Arrays, Functions, Dates

const heros = ["shaktiman", "naagraj", "doga"]; // Array
let myObj = { // Object
    name: "Anya" , 
    age: 20,
}

const myFunction = function(){ // function
    console.log("Hello World"); 
}


// How to know datatypes of variable
// Ans = typeof

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined => undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function => function
       Object  =>  object
*/

