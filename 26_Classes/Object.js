function multipleBy5(num){
    return num*5;
}
multipleBy5.power = 2;
console.log(multipleBy5(2)); // 10
console.log(multipleBy5()); // NaN
console.log(multipleBy5); // [Function: multipleBy5] { power: 2 }
console.log(multipleBy5.prototype); // {}
console.log(multipleBy5().power); // undefined
console.log(multipleBy5.power); // 2
console.log(multipleBy5().prototype); // undefined

//-----------------------------------
function CreateUser(username, score){ 
    this.username = username;
    this.score = score;
}

CreateUser.prototype.increment = function(){
    score++;
}
CreateUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new CreateUser("chai", 25)
const tea = new CreateUser("tea", 250)
console.log(CreateUser);
chai.printMe(); // score is 25

/*
//* Here's what happens behind the scenes when the new keyword is used:-

//* A new Object is created: The new keyboard initiate the creation of a new 
//* Javascript object.
//* 
//* A prototype is linked: The newly created object gets linked to the prototype 
//* property of the construction function. This means that it has access to properties 
//* and method defined on the constructor's function.
//*
//* The constructor is called: The constructor function is called with the specified arguments
//* and this is bound to the newly created object. If no explicit return value is specified form 
//* the constructor, javascript assumes this, the newly created object, to be the intended return 
//* value.

//* The new object is returned: After the constructor function has been called, if it doesn't return 
//* a non-primitive value (object, array, function, etc), they newly created object is returned
*/