// Event Bubbling And Capturing:-

// Event Bubbling And Capturing are two ways of event propagation in DOM tree.
// Example:  suppose we have nested html elements
//    #grandParent
//        #parent
//           #child

//* Event bubbling and capturing are two ways that events are handled in JavaScript. 
//* When an event occurs, it is first captured by the innermost element that has an 
//* event listener for that event. The event then propagates up the DOM tree, 
//* bubbling up to each parent element that also has an event listener for that event.

// For example, if you have a nested div structure like this:
// Code
/*
<div id="grandParent">
  <div id="parent">
    <div id="child"></div>
  </div>
</div>
*/

// And you add the following event listener to the button:
// JavaScript

// Bubbling example:-
document.querySelector("#grandParent")
.addEventListener("click", () => {
  console.log("GrandParent is clicked");
}); // when useCapture is true => capturing and if you pass false or not then bubbling happens

/* Answer is bubbling
 GrandParent is clicked
*/

document.querySelector("#parent")
.addEventListener("click", () => {
  console.log("Parent is clicked");
});

/* Answer is bubbling
 Parent is clicked
 GrandParent is clicked
*/

document.querySelector("#child")
.addEventListener("click", () => {
  console.log("Child is clicked");
});

/* Answer is bubbling
 Child is clicked
 Parent is clicked
 GrandParent is clicked
*/

//------------------------------------------------------

// Capturing example:-
document.querySelector("#grandParent")
.addEventListener("click", () => {
  console.log("GrandParent is clicked");
}, true); // when useCapture is true => capturing and if you pass false or not then bubbling happens

/* Answer is capturing
 GrandParent is clicked
*/

document.querySelector("#parent")
.addEventListener("click", () => {
  console.log("Parent is clicked");
}, true);

/* Answer is bubbling
  GrandParent is clicked (because of the useCapture=true)
  Parent is clicked
*/

document.querySelector("#child")
.addEventListener("click", () => {
  console.log("Child is clicked");
}, true);

/* Answer is bubbling
  GrandParent is clicked
  Parent is clicked
  Child is clicked
*/

//------------------------------------------------

// mix [capturing and bubbling] example:-
document.querySelector("#grandParent")
.addEventListener("click", () => {
  console.log("GrandParent is clicked");
}, true); // when useCapture is true => capturing and if you pass false or not then bubbling happens

/* Answer is capturing
 GrandParent is clicked
*/

document.querySelector("#parent")
.addEventListener("click", () => {
  console.log("Parent is clicked");
}, false);

/* Answer is bubbling
  GrandParent is clicked (because of the useCapture=true)
  Child is clicked
  Parent is clicked
*/

document.querySelector("#child")
.addEventListener("click", () => {
  console.log("Child is clicked");
}, true);

/* Answer is bubbling
  GrandParent is clicked
  Parent is clicked
  Child is clicked
*/

//============== how to stop propagation ==============
document.querySelector("#child")
.addEventListener("click", (e) => {
    e.stopPropagation();
  console.log("Child is clicked");
}, true);