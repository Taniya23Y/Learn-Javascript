// what is a Callback Functions in Javascript

// Javascript is a synchronous and single-threaded language.

// Blocking the main thread
//* In the context of JavaScript, "blocking the main thread" refers to a situation where the
//* execution of the main thread is paused or delayed due to a time-consuming operation, such as
//* a synchronous API call, a large computation, or a long-running loop.
//* Since JavaScript is a single-threaded language, it can only execute one task at a time in the main thread.
//* When a task takes a long time to complete, it can prevent other tasks from being executed, leading to a blocked
//* main thread. This can result in a poor user experience, as the web page may become unresponsive or slow to update.
//* To avoid blocking the main thread, JavaScript provides several techniques, such as using asynchronous functions, web workers,
//* and callback functions. These techniques allow developers to offload time-consuming operations to separate threads or execute
//* them in the background, freeing up the main thread to handle user interactions and other tasks.

// Power of Callbacks

// Deep about event listners

// Closures Demo with Event Listners

// Scope Demo with Event listners

// Garbage Collections & removeEventListners

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// what is a Callback Functions in Javascript
//* As we know, Functions are first class citizens in js that means we can take a function and pass it into another function. This is called callback function

//* Callback Functions are very powerful, it gives as access through the whole asynchronous world in a synchronous single-threaded language.

function x(y) {}
x(function y() {});
// y function here is callback function

// In asynchronous task how it is used?
setTimeout(function () {
  console.log("timer");
}, 5000);
function x1(y1) {
  console.log("x1");
  y();
}
x1(function y1() {
  console.log("y1");
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Deep about event listners
document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("Button Clicked!");
});

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
// Closures Demo with Event Listners

// Take a example, suppose a button has clicked so how many times button is clicked

function attachEventListners() {
  let count = 0;
  document.getElementById("clickMe")
  .addEventListener("click", function xyz() {
     console.log("Button Clicked", ++count);
  });
} 

attachEventListners();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Garbage Collections & removeEventListners
/*
  Question:- why do we need to removeEventListners? 
  Answer:- First of all eventListners are heavy, that means it takes memory whenever you attach a eventListners it forms a closure
         for example(in button clicked! ), it forms a closure with this count and even this callStack is empty(we are not executing any of the code )
         but still this program is not freeing up this memory. That is why eventListners are heavy.
         so that is why, we remove EventListners when we are not using them. 
         And suppose has a thousand of button, thousand of eventListners, then our page can go slow, a lot of eventListners, so many closures
         are sitting into our memory, consuming a lot of memory of their scopes. so that is why a good practice is generally to remove it or free up.

         suppose (i remove this [attachEventListners] eventListners then all this variables which was held this Closure is called garbage Collector )
*/