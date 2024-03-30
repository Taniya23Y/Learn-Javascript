/**
 * what is async ?
 * what is await ?
 * How async await works behind the scenes ?
 * Examples of using async/await ?
 * Interviews
 * Async await vs promises.then/.catch
 */

// create async function
//* notes:-This async function always returns a promise. there are two cases, return a promise inside function
// If you don't return a promise from it, for example:[return value], then this function will automatically wrapped this value inside a promise and return a promise

// example with a value -1
async function getData() {
  // return Promise();
  return "hello !";
}

const dataPromise = getData();
console.log(dataPromise);
/* Promise {<fulfilled>: 'hello !'}
   [[Prototype]]: Promise
   [[PromiseState]]: "fulfilled"
   [[PromiseResult]]: "hello !"
*/

dataPromise.then((res) => console.log(res)); // hello !

// Example with a promise in async function - 2

const p = new Promise((resolve, reject) => {
  resolve("promise Resolved Value!");
});

async function getPromiseData() {
  return p;
}

const getDataPromise = getPromiseData();
console.log(getDataPromise);
/*
   Promise {<pending>}
    [[Prototype]]: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: "promise Resolved Value!"
*/

getDataPromise.then((res) => {
  console.log(res);
}); // promise Resolved Value!

//==================================================================================

// How we can use async with
//* Async and await combo is used to handle Promises.

const pr = new Promise((resolve, reject) => {
  resolve("promise Resolved Value!");
});

//------> first, how do we use to handle promise before async await

function getdata() {
  pr.then((res) => console.log(res));
}
getdata(); //promise Resolved Value!

//---> now, use it with async await to handle the above code

// here await is:- await is a keyword that can only used inside a async function.
async function handlePromise() {
  const val = await pr;
  console.log(val);
  console.log("This line will be  printed after the promise has been resolved");
}
handlePromise();
// promise Resolved Value!
// This line will be  printed after the promise has been resolved

//--------------------------------------------------------------
// Diving deep into async/await
// and
// How async await works behind the scenes ?

//* Difference between handling a normal function and handling with a async/await
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Pr1 Resolved Value!");
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Pr1 Resolved Value!");
  }, 10000);
});

console.log(promise1);

// For understand
function getInfo() {
  // Js engine is not wait for promise to be executed
  promise1.then((res) => console.log(res));
  console.log("Hello Javascript");
}
getInfo();

// Now for async await
async function handlePromiseInfo() {
  console.log("To check Js");
  // Js engine is wait for promise to be resolved
  const val = await promise1;
  console.log("Hello Javascript in async func!");
  console.log(val);

  const val2 = await promise2;
  console.log("Hello Javascript in async func! twice");
  console.log(val2);
}
handlePromiseInfo();

//=========================================================================
// Real world Example of Async Await
const API_URL = "https://api.github.com/users/Taniya23Y";

async function realWorldExample() {
  const data = await fetch(API_URL);
  console.log(data);
  const jsonValue = await data.json();
  console.log(jsonValue);

  // fetch() functions is basically a promise so, when it resolve it gives you a response.
  // fetch() => Response.json() and this .json is also a promise and when this promise is resolved it basically gives you a response value
  // fetch() => Response.json() => jsonValue
}
realWorldExample();

//==============================================================================
// Error Handling
const API_URL_1 = "https://apis.github.com/users/Taniya23Y";

async function ErrorHandlingRealWorldExample() {
  try {
    const data = await fetch(API_URL_1);
    console.log(data);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (error) {
    console.log(error);
  }

  // fetch() functions is basically a promise so, when it resolve it gives you a response.
  // fetch() => Response.json() and this .json is also a promise and when this promise is resolved it basically gives you a response value
  // fetch() => Response.json() => jsonValue
}
ErrorHandlingRealWorldExample();
// or by 
ErrorHandlingRealWorldExample().catch( (err) => console.log(err));

//===============================================================================

// Async/await vs Promise.then/catch
//* Promises are a cleaner way to handle asynchronous code that allows for chaining 
//* . then() and . catch() methods, while Async/await provides a more procedural syntax
//*  that makes asynchronous code look similar to synchronous code, with better error 
//* handling capabilities.

// But for handling promises use async / await and for chaining promises use .then/.catch