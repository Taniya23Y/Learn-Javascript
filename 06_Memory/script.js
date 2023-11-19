// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Two type Memory: Stack , Heap

// 1) Stack: Stack is used in Primitive type
// Through Stack, we get a Copy of variable(however we define(variable))
//+++++

// 2) Heap: Heap is used in Non-Primitive type
// Through Heap, we get a reference of original value

//Example : stack
let myYoutubename = "AnyaForger";
let anotherName = myYoutubename;
anotherName = "anyaThe";

console.log(myYoutubename) // AnyaForger
console.log(anotherName); // anayThe

// Example : Heap

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "anya@gamil.com";
console.log(userOne.email); // anya@gamil.com
console.log(userTwo.email); // anya@gamil.com