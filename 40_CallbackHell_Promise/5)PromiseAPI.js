// Promise API
// Their are four Promise API's
//* (1) Promise.all()
//* (2) Promise.allSettled()
//* (3) Promise.race()
//* (4) Promise.any()

//----------------------------------------------------
// Theory Portion

//* (1) Promise.all():-

//* Example:- Suppose we have to make parallel api's, suppose we have 10 ids(userId) and you has an api call for
//* userInfo and you want to take 10 parallel api's calls
//* and get the result for 10 different users.

// The contracted of Promise.all() is it takes a array of promises as an input.
// Promise.all(iterables)

// Definition:-
//* Promise.all() in JavaScript is a method that takes an array of promises as an input and returns a single promise.
//* This single promise is resolved when all of the promises in the input array are resolved. If any of the promises
//* in the input array are rejected, the Promise.all() method is rejected as well.

// Suppose all the api are success, so the output of promise.all will be an array with the result of this three api call.

// Promise.all([p1, p2, p3]);
// ⬆️ it will make three parallel api and take an input

const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Promise 1 resolved"), 3000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Promise 2 resolved"), 1000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Promise 3 resolved"), 2000);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // ['Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved' ]
});

// It will wait for all of them to finish.

//-----------------------------------------------------------------------------------
// Suppose all the api are failure, so the output of promise.all will be an array with the result of this three api call.

// Promise.all([pr1, pr2, pr3]);
// ⬆️ it will make three parallel api and take an input

const pr1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Promise 1 resolved"), 3000);
});

const pr2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("Promise 2 resolved"), 1000);
});

const pr3 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Promise 3 resolved"), 2000);
});

Promise.all([pr1, pr2, pr3]).then((values) => {
  console.log(values); // ['Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved' ]
});

//---> as soon as any of these promises are rejected, then promise.all() will throw an error
// Output will be Error(this will be the same error result by pr2) and what will happen immediately is
// As soon as error happens, it will result an error, in this case pr2 take 1 sec, after 1 sec throw an error
// [it doesn't wait for none]

// Now but what will happen to pr1 and pr3, will it get rejected or succeed. So, it depends on promise itself.

//==========================================================================================================================

//* (2) Promise.allSettled():-

//* Promise.allSettled() method in JavaScript is used to handle multiple promises concurrently and return a single promise.
//* This promise is fulfilled with an array of promise state descriptors, each describing the outcome of the corresponding
//* promise in the input array. Unlike Promise.all(), Promise.allSettled() does not short-circuit when one of the promises
//* is rejected; instead, it waits for all promises to settle, providing information about each one.

// Illustration of Promise.allSettled()
// Method in Javascript with Example

const promise1 = Promise.resolve(50);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "js")
);
const prm = [promise1, promise2];

Promise.allSettled(prm).then((results) =>
  results.forEach((result) => console.log(result.status, result.value))
);

//=======================================================================================

//* (3) Promise.race():-
//* The Promise.race() static method takes an iterable of promises as input and returns a single 
//* Promise. This returned promise settles with the eventual state of the first promise that settles.

// promise that finish first will be the winner.
const PR1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'one');
});

const PR2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'two');
});

const PR3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'three');
});

Promise.race([PR1, PR2, PR3]).then((value) => {
  console.log(value);
  // All resolve, but promise2 is faster
});
// Expected output: "two"

//=======================================================================================================

//* (4) Promise.any():- You will wait for first success

//* The Promise.any() method takes an iterable of promises as an input and returns a single Promise. 
//* This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value.

//* The Promise.any() method ignores all rejected promises up until the first promise that fulfills. 
//* If all of the promises in the iterable reject, the Promise.any() method rejects with an AggregateError, 
//* which is an error that contains all of the rejection reasons of the input promises.

const promises1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'one');
});

const promises2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'two');
});

const promises3 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, 'three');
});

Promise.any([promises1, promises2, promises3]).then((value) => {
  console.log(value); // 'two'
});

// If all of them fails then it collects all the error and give you back the aggregate errors