// Define an object 'name' with firstname and lastname properties
let name = {
  firstname: "Taniya",
  lastname: "Yadav",
  // we can also write it as function expression
  // printFullName: function(){
  //     console.log(this.firstname + " " + this.lastname);
  // }
};
// name.printFullName();

// Define a function expression 'printFullName' to log full name, hometown, and state
let printFullName = function (homeTown, state) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " " +
      "from" +
      " " +
      homeTown +
      " " +
      state
  );
};
// Invoke 'printFullName' function with 'name' object's context using 'call', passing hometown and state
printFullName.call(name, "Khargone", "Madhya Pradesh");

// Define another object 'name2' with different firstname and lastname
let name2 = {
  firstname: "Annie",
  lastname: "forger",

  //* Don't repeat the method, se call method:-
  // printFullName: function(){
  //     console.log(this.firstname + " " + this.lastname);
  // }
};

// function borrowing
// name.printFullName.call(name2);
// Instead of redefining 'printFullName' for 'name2', borrow it from 'name' using 'call' with 'name2' context
printFullName.call(name2, "Mumbai", "Maharashtra");

// Apply method:-
// Invoke 'printFullName' with 'name2' context using 'apply', passing hometown and state as an array
printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

// bind method
// Create a new function 'printMyName' bound to 'name2' context with predefined hometown and state
let printMyName = printFullName.bind(name2, "Delhi", "Maharashtra")
// Log the function definition of 'printMyName'
console.log(printMyName);

/*
  (homeTown, state) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " " +
      "from" +
      " " +
      homeTown +
      " " +
      state
  );
}
*/

// Invoke 'printMyName' to execute the function with predefined hometown and state
printMyName();