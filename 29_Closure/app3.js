//Good example of closure:

//Question 1
// What a closure in js is?
/*
  Answer is: 
  A Function along with a reference to its outer environment binds together to form a closure 
  In other words: a Closure is a combination of function and its lexical scope bundled together 
  forms a closure

  --> little bit more
  Each and function in javascript has access to its outer lexical environment
  [access to their variable and functions which is present in the environment of its 
  parents.(each and every has access to them)] so even when this function is like executed 
  in some other scope not in its original scope.But even its is others scope it still remembers 
  its outer lexical environment where it was originally present in the code.
*/

//Example

function outer() {
  var a = 20;
  function inner() {
    console.log(a);
  }
  return inner;
}
outer()(); // 20

// ⬆️⬆️⬆️⬆️⬆️ ()() calling the inner function

//-------------------------------------------------------
// corner cases: place var a = 20; to line no. 37
function outer() {
  function inner() {
    console.log(a);
  }
  var a = 20;
  return inner;
}
outer()(); // 20

// answer: it results the same
// outer()(); it is also equal to
/* var close = outer();
close();
*/

//--------------------------------------------------------
// corner case: var a = 20; Replace var with let what will happen?
function outer() {
  function inner() {
    console.log(a);
  }
  let a = 20;
  return inner;
}
outer()(); // 20

//------------------------------------------------------
// case: when we have a extra parameter.
function outer(b) {
  function inner() {
    console.log(a, b);
  }
  let a = 20;
  return inner;
}
var close = outer("helloworld");
close();
/*
  In this case, it behaves the same way. 
  inner function forms a closure for with its outer environment and b is also part of
  outer environment of inner function. so it will prints 10 "helloworld "
*/

//------------------------------------
// case:what if the outer function nested inside the function.
function outest() {
  var c = 30;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 20;
    return inner;
  }
  return outer();
}
var close = outest()("helloworld");
close();

/*
   Answer: 10 helloworld 30
   If outer function is nested inside an another function then 
   it will again form a closure with environment of that function.
*/

//--------------------------------------------
// case: Conflicting name Global variables in js
// If we have a global variable conflicted name

function outest() {
  var c = 30;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 20;
    return inner;
  }
  return outer();
}
let a = 110;
var close = outest()("helloworld");
close();

/*
   Answer: 10 helloworld 30
*/

//-------------------------------------------------
// Data Hiding & Encapsulation in js?
/*
  Answer is:
  Data hiding and encapsulation are important concepts in 
  object-oriented programming that help protect data and improve 
  the security and reliability of code.

  Data hiding: Data hiding, also known as information hiding, is the 
  practice of restricting direct access to data members or variables
  within an object. In JavaScript, this can be achieved by using private 
  variables or properties. Private variables are prefixed with an underscore (_), 
  which indicates that they should not be accessed directly outside of the object.

  Encapsulation: Encapsulation is the bundling of data and methods together into a 
  single unit, known as an object. In JavaScript, this is achieved by using classes. 
  Classes allow us to create objects that contain both data and functions that operate
  on that data.
*/

/*
var count = 0;

function incrementCounter(){
    count++;
}
*/

// the above can be modified by other's.

function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
    console.log(count);
  }
}
// console.log(count);
var counter1 = counter();
console.log(counter1()); // 1
console.log(counter1()); // 2

//It will again create a closure and this increment function will form a closure and new count itself.
// whenever a function is run, it create a new independent copy itself. 
var counter2 = counter();
console.log(counter2); // 1
console.log(counter2); // 2

//-------------------------------------------------------------------
// the above is not scalable this is also done by function constructor

function Counter() {
    var count = 0;
    this.incrementCounter =  function () {
      count++;
      console.log(count);
    }
    this.decrementCounter =  function () {
        count--;
        console.log(count);
    }
}
var counter1 = new Counter();
console.log(counter1.incrementCounter()); // 1
console.log(counter1.incrementCounter()); // 2
console.log(counter1.decrementCounter()); // 1

//--------------------------------------------------------------
// Disadvantages of closures
/*
1) Closures prevent variables inside functions from being released by memory i.e.
 as long as the closure is active, the memory can't be garbage collected.

2) Closures consume a lot of memory. Creating a function within a function causes memory 
 duplication, which slows down the application.
*/

/*
what is garbage collector:
garbage collector is like a program in  the browser or in the js engine which kind of freeze 
up the utilize the memory.This garbage collector, whenever their is some unused variables. it 
just takes it out the memory or freeze the memory,whenever it finds out this variables are no 
longer is needed.
*/

//---------------------------------------------------------------------
// Relation between garbage collection , memory leaks and closures? 

function a(){
    var x = 0;
    return function b(){
        console.log(x);
    }
}
a();
var y = a();