function sync() {
  console.log("first");
}
sync();
console.log("second");
// first
// second
// ⬆️ normal synchronous code

//++++++++++++++++++++++++++++++++++++++++++
// Asynchronous code
setTimeout(function () {
  console.log("Third");
}, 5000);
function sync() {
  console.log("first");
}
sync();
console.log("second");

//++++++++++++++++++++++++++++++++++++++++++
// API:- application programming interface
// Feature:-  callbacks, async/await, and promises
//            clean & concise
//            better error handling
//            easier bugging

//+++++++++++++++++++++++++++++++++++++++++++

//* Promise:- A Promise in JavaScript is an object that represents the eventual
//* completion or failure of an asynchronous operation. It can be used to handle the results
//* of asynchronous operations in a more efficient and readable way.
//* Promises are created using the new Promise() constructor. The constructor takes two callback functions
//* as arguments: a resolve() function and a reject() function. The resolve() function is called when the asynchronous
//* operation is successful, and the reject() function is called when the asynchronous operation fails.
//* Once a Promise is created, it can be used to attach callbacks to it using the then() and catch() methods. The then()
//* method is called when the Promise is resolved, and the catch() method is called when the Promise is rejected.

let meraPromise = new Promise(function (resolve, reject) {
  console.log("I am inside promise");
  resolve(2003);
});
console.log("pehla");

// async code
let meraPromise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("I am inside promise");
  }, 5000);
  // resolve(123);
  reject(new Error("error aaya hain!"));
});
console.log("pehla");

//meraPromise{<fulfilled>: 2003}

let meraPromise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("I am inside promise2");
  }, 5000);
  // resolve(123);
  reject(new Error("error aaya hain!"));
});

let meraPromise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("I am inside promise3");
  }, 3000);
  // resolve(123);
  reject(new Error("error aaya hain!"));
});
console.log("pehla");

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let meraPromise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("I am inside promise4");
  }, 3000);
  return 2;
  // resolve(123);
  // reject(new Error("error aaya hain!"))
});
meraPromise4.then((value) => {
  console.log(value);
});
meraPromise4.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log("Recieved an error");
  }
);
meraPromise4.catch((error) => {
  console.log("Recieved an error");
});

console.log("pehla");

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let waadaa1 = new prompt(function (resolve, reject) {
  setTimeout(() => {
    console.log("setTimeout1 started");
  }, 2000);
});

let output = waadaa1.then(() => {
  let waadaa2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("setTimeout2 started");
    }, 3000);
    resolve("waadaa2 resolved");
  });
  return waadaa2;
});

output.then((value) => console.log(value));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// async() code
async function abcd() {
  return 7;
}
abcd(); // promise {<fulfilled>: 7}

async function utlity() {
  let delhiMausam = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Delhi me bhot garmi hain");
    }, 1000);
  });

  let hydMausam = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hyderabad is cold");
    }, 5000);
  });
  let dM = await delhiMausam;
  let hM = await hydMausam;

  return [dM, hM];
}
console.log(utlity());

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let obj = {
  head: "heading",
};
async function utlity1() {
  let content = await fetch("https://jsonplaceholder.typicoe.com/posts/1");
  // promise{<>}
  let output = await content.json(); // json=> javascript object notation
  console.log(output);
}
utlity1();

// fetch Api for post method

async function helper() {
  let options = {
    method: "POST",
    body: JSON.stringify({
      title: "Yadav",
      body: "Calmness",
      userId: 2355,
    }),
    headers: {
      "Content-type": "application/json; charset-UTF-8",
    },
  };

  let content = await fetch(
    "https://jsonplaceholder.typicoe.com/posts",
    options
  );
  let response = content.json;
  return response;
}

// another one
async function utility2() {
  let ans = await helper();
  console.log(ans);
}
utility2();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Closures

function init() {
  var name = "Mozilla"; // name is a local variable created by init 
  function displayName(){
    // displayName() is the inner function, that forms the closure 
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();