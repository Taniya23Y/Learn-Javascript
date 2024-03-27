// Promise => The promise Object represents the eventual completion(or failure) of an asynchronous operation and its resulting Value.

// A promise is in one of these states
//* pending:- Initial state, neither fulfilled nor rejected.
//* fulfilled:- meaning that the operation was completed successfully.
//* rejected:- meaning that the operation failed.

//=============================================================
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task:-
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async Task 1 is Complete!");
    resolve(); // resolve is directly connected to then
  }, 1000);
});

promiseOne.then(function (value) {
  console.log("Promise consumed");
});

//-----------------------------------------------
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2 completed!");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise resolved");
});

//-------------------------------------------------
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Anya", email: "anya@123gmail.com" }); // resolve has parameter[object]
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user); // { username: 'Anya', email: 'anya@123gmail.com' }
});

//---------------------------------------------------
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // error true
    //   let error = true;
    let error = false;
    if (!error) {
      resolve({ username: "vanya", password: 123 });
    } else {
      reject("error Found! Something went wrong");
    }
  }, 1000);
});
// understanding  rejection reason

// const username = promiseFour.then((user) => {
//     console.log('User logged in');
//     console.log(user);
//     return user.username; //
// })
// console.log(username);

// chaining
promiseFour
  .then((user) => {
    console.log("User logged in");
    console.log(user);
    return user.username; //
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The Promise is either resolved or rejected"));

//----------------------------------------------------------------------
const promiseFive = new Promise(function (resolved, reject) {
  setTimeout(function () {
    // error true
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: 123 });
    } else {
      reject("error Found! JS went wrong");
    }
  }, 1000);
});

// async function consumePromiseFive(){
//     const response = await promiseFive;
//     console.log(response);
// }

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//------------------------------------------------------------------
// async function getAllUsers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = response.json()
//     console.log(data);
// }

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}
getAllUsers();

// optimised code
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
