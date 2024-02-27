// objects can be declared by two ways
/*     1) literals
       2) constructor 
*/

// singleton(constructor se jo bhi object banega, which is singleton)

// object literals
//-----> object.create // (constructor)

/*-------------Object knowledge---------------

    if we use let and const,& want to change const, 
    but it can't change but in object [const can be change by their key]

*/

/*
    Do Not Declare Strings, Numbers, and Booleans as Objects!
*/

const mySym = Symbol("key1");

const jsUser = {
  // object
  name: "Anya",
  "full name": "Anya Forger",
  // mySym: "mykey1",
  [mySym]: "mykey1",
  age: 3,
  location: "Ostania",
  email: "anyaForger@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["mondays", "saturday"],
};

console.log(jsUser.email); // anyaForger@gmail.com
console.log(jsUser["email"]); // anyaForger@gmail.com
console.log(jsUser["full name"]); // Anya Forger
console.log(jsUser.mySym); // mykey1
console.log(typeof jsUser.mySym); // string
console.log(typeof jsUser[mySym]); // string

// change value of object
jsUser.email = "anyaForger123@gmail.com";
//object lock
// Object.freeze(jsUser);
// jsUser.email = "anya123Forger@gmail.com";
console.log(jsUser);
/*
   Answer is:
   {
        name: 'Anya',
        'full name': 'Anya Forger',
        age: 3,
        location: 'Ostania',
        email: 'anyaForger123@gmail.com',
        isLoggedIn: false,
        lastLoginDays: [ 'mondays', 'saturday' ],
        [Symbol(key1)]: 'mykey1'
    }
*/

//--------------------------------------
// add a function to object
jsUser.greeting = function(){
    console.log("Hello, how are you!");
}
console.log(jsUser.greeting); // [Function (anonymous)]
console.log(jsUser.greeting()); // TypeError: jsUser.greeting is not a function because object is freeze.

jsUser.greeting2 = function(){
    console.log(`Hello, how are you!, ${this.name}`); //Hello, how are you!, Anya
}
console.log(jsUser.greeting2()); // undefined