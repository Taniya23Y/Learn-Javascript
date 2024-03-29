//---- Issues with Callbacks
// 1) CallBack Hell
// 2) Inversion of control

// Understanding
//* Javascript is a single threaded language and It can just do one thing at a time
//* Remember, it has just one callstack and it can execute just one thing at a time
//* And what ever code you  give it to js will be quickly executed by js engine
//* [it does not wait for anything]

// suppose here

console.log("Hello Javascript");

console.log("Javascript");

console.log("Javascript Part2");

// The above code is quickly executed by js
/* answer is:-
  Hello Javascript
  Javascript
  Javascript Part2
*/

// but what if we really waits  for something
// Suppose , in this line no. 14 Suppose if we execute this line no 14 js after 5 sec
// How would you do that now:- callback hell are coming
// just rapid inside a callback function

console.log("Hello Javascript");

setTimeout(function printAfterFiveSeconds(callback) {
  console.log("Javascript");
}, 5000);
// console.log("Javascript");

console.log("Javascript Part2");

//* Now we have this callback function inside this setTimeout and we also pass 5000 millisec in it
//* Now, understand we have this callback function to setTimeout now, it is a job of setTimeout to
//* execute this callback function after 5sec.
//* so using callback is a powerful way to do asynchronous things in js
//* by this we take a piece of code inside a function and we can just passing as a callback which can be executed later point of time

//--------------------------------------------------------
// Example:-
// ecommerce card

const cart = ["shoes", "pants", "kurta"];
// create an order and then
// proceed to payment
// order summary
// update the wallet

//* suppose we have access to backend API, one is the create oder API
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
//* and another API, which can proceed to payment

// function(){
//     api.proceedToPayment('')
// }
// api.proceedToPayment('')

// function(){
//     api.showOrderSummary()
// }

// function(){
//     api.updateWallet();
// }


//* The above code is unreadable and unmaintainable.
//* The above code is a pyramid of doom in programming

//----- NOW the inversion of control problem is arries.
//* inversion of control is like that you loose the control of your code when we are using callbacks
//* instead of writing functions inside other functions, write functions outside of other functions.

api.createOrder(cart, function () {
    api.proceedToPayment();
});


//----------- Quick Recap ----------------
// The two Problems with callbacks

//* 1) Callback Hell: Callbacks are useful when we want to perform some extra functionality with our already existing 
//* function for example passing an error handling callback to our already created function, BUT when callbacks within
//*  themselves start taking in other functions as callbacks then that mess that you are left with is known as the Callback 
//* Hell leading to unreadable code, hence unmaintainable code.

//* 2) Inversion Of Control: when we pass a function to other function as a callback we are giving the called function the 
//* control of whether to even call it or not or maybe call it in a wrong context. For example a success callback is called 
//* when an error occurs inside a called function (maybe due to human error while writing the code  for called function),
//*  this type of giving up of control over our functions is known as inversion of control.