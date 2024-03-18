// document.getElementById('owl').onclick = function (){
//     alert("owl clicked")
// }

//attachEvent();
//jQuery - on

//*****************************************/
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
//interview Perspective:- clientX, clientY, view, position, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode
//*****************************************/

// what is event propagation?
//Event propagation in JavaScript refers to the way events are handled and propagated through the DOM (Document Object Model) tree when an element on a web page triggers an event. There are two phases of event propagation: capturing and bubbling.
//In the capturing phase, the event starts at the outermost element and moves down through the DOM tree to the target element. This phase is less commonly used and not supported by all browsers.
//In the bubbling phase, the event starts at the target element and moves up through the DOM tree to the outermost element. This is the default behavior and is supported by all browsers.
//Event propagation can be stopped using the event.stopPropagation() method, which prevents the event from propagating further up the DOM tree.

// document.getElementById('owl').addEventListener('click', function(e){
//     alert("owl clicked");
// }, false)

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("Clicked inside the ul");
// }, false)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("owl clicked");
//     e.stopPropagation();
// }, false)

// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("clicked");
// })

document.querySelector("#images").addEventListener(
  "click",
  function (e) {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
    // removeIt.parentNode.removeChild(removeIt);
  },
  false
);
