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

const jsUser = {     // obejct
    name: "Anya",
    "full name": "Anya Forger", 
    mySym: "mykey1",
    age: 3,
    location: "Ostania",
    email: "anyaForger@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["mondays", "saturday"]
} 

console.log(jsUser.email); // anyaForger@gmail.com
console.log(jsUser["email"]); // anyaForger@gmail.com
console.log(jsUser["full name"]); // Anya Forger