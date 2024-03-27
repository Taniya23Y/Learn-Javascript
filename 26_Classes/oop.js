const user = {
    username: "anya",
    loginCount: 8,
    signIn: true,

    getUserDetails: function(){
        console.log(`username: ${this.username}`);
        console.log("Got user details from database.");
        console.log(this); // whole objects
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // {}

//-----------------------------------------

// Constructor Function
// const promiseOne = new Promise();
function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  // method
  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
  }

  return this; // byDefault this code is present  
}

const userOne = new User("anya", 12, true);
const userTwo = new User("vanya", 12, true);
console.log(userOne);
console.log(userOne.constructor); // [Function: User]
console.log(userTwo);

//-------------------------------------------------
// Instance of_;
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

const auto = new Car('Honda', 'Accord', 1998);
console.log(auto instanceof Car);
// Expected answer: true
console.log(auto instanceof Object);
// Expected answer: true