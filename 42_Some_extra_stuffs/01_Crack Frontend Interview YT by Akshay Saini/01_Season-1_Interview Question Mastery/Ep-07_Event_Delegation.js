// Event Delegation

// Example - 1
document.querySelector("#category").addEventListener("click", (e) => {
  console.log("Category parent clicked"); // Category parent clicked
// check which one is clicked!
  console.log(e); //, PointerEvent {isTrusted: true, pointerId: 3, width: 1, height: 1, pressure: 0, …}
  console.log(e.target); // <li id=""></li>
  console.log(e.target.id); // target id is printed here!
  if (e.target.tagName === "LI") {
    window.location.href = "/" + e.target.id;
  }
});

// Example - 2
document.querySelector("#form").addEventListener("keyup", (e) => {
  console.log(e);
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

//* Event delegation in JavaScript is a technique where you attach an event listener to a parent element, 
//* and then use the event object to determine which child element triggered the event. This can be useful 
//* when you have a large number of child elements, as it allows you to avoid having to attach an event 
//* listener to each individual element.

