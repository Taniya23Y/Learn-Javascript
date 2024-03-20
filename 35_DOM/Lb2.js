// Browser Events => Browser events are actions or occurrences that happen in a system, and the system notifies the user about 
// them so they can respond. Events are fired inside the browser window and are usually attached to a specific item, such as a single 
// element, a set of elements, the HTML document loaded in the current tab, or the entire browser window.

// ---> events
// ---> respond to event
// ---> data stored in event
// ---> stop an event
// ---> lifeGuide of events

// Events has invisible(monitorEvents())
// turn on
// turn off -> unmonitorEvents();

monitorEvents(document);   // monitor all events on the whole page 

// form-> submit(Action)
// EventListner:-
// eventTarget(3 method):- addEventListner(), removeEventListner(), dispatchEvent()

let content = "hello, javascript";
content = document.querySelector('h1').addEventListener('click', function (){
    console.log("hello, javascript");
});

// removeEventListner() => The removeEventListner method of the EventTarget interface removes an event listner previously registered with eventTarget.addEventListner() from the target
// The event listner to be removed is identified using a combination of the event listner function itself, and various optional options that may affect the matching process.
// removeEventListner()=> checks == and === 

// for example:-
function print(){
    console.log("Hii");
}

document.addEventListener("click", print());
document.removeEventListener("click", print());

// But when you do with another function

document.addEventListener("click", function(){
    console.log("Hii!!!");
}); // it works.

document.removeEventListener("click", function(){
    console.log("Hii!!!");
}); // but it does not work.

// Because both the function ae stored in another memory.

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Phases of Events
// -------<> capturing phase
// -------<> At target phase
// -------<> bubbling phase

/*
//* <html>
//*     <body>
//*           <div id="wrapper">
//*                <p>-------------</p>
//*           </div>
//*     </body>
//* </html>
*/

// Understanding the above code:- let say i attach listner on p tag,
// To find p, called capturing phase
//* Flow is:- html   ⬇️                           ⬆️
//*            ⬇️    ⬇️                          ⬆️
//*           body   ⬇️                          ⬆️
//*            ⬇️    ⬇️ --> capturing phase      ⬆️  ----> bubbling phase
//*            div   ⬇️                          ⬆️
//*            ⬇️    ⬇️                         ⬆️
//*             p    ⬇️  ---> At target phase    ⬆️
//*            ⬇️
//*           /div

//----> By Default addEventListner is executed on bubbling phase.
// So if we want to execute on capturing phase then we need to pass {capture:  true} 

// syntax for addEventListner()
/*
   <event.target>.addEventListner(type, listner, true)
*/
document.addEventListener('click', print(), true);

// Yes, you can use addEventListener in at target phase in JS. The addEventListener() method takes three arguments:
// The type of event to listen for
// The function to run when the event occurs
// A boolean value indicating whether the listener should be called in the capturing or bubbling phase.
// The default value for the third argument is false, which means that the listener will be called in the 
// bubbling phase. To call the listener in the capturing phase, you need to pass true as the third argument.
// Here is an example of how to use addEventListener to listen for a click event in the capturing phase:
// JavaScript
const button = document.querySelector('button');

button.addEventListener('click', function(event) {
  // This function will be called when the button is clicked, in the capturing phase.
}, true);

// When the user clicks on the button, the function will be called immediately, before the event has a chance to bubble up to the parent elements.
// The capturing phase is rarely used, but it can be useful in some cases. For example, you might use it to prevent an event from bubbling up to a parent element.

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// the event object:- when an event occurs, addEventListner function.
// preventDefault() => The preventDefault () method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

let links = document.querySelector('a');
let thirdLink = links[2]

thirdLink.addEventListener('click', function (){
    event.preventDefault();
    console.log('maza aaya, acha laga');
})

// Avoid to many event
// Example:-
let myDiv = document.createElement('div');
for(let i = 1; i <= 100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;
    newElement.addEventListener('click', function (){
        console.log("I have clicked on para");
    });
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv)

// Above Example optimized
let myDiv1 = document.createElement('div');

function createParagraph(event) {
    console.log("I have clicked on para");
}
myDiv1.addEventListener('click', createParagraph);

for(let i = 1; i <= 100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    myDiv1.appendChild(newElement);
}
document.body.appendChild(myDiv1)

// by target event
let myDiv2 = document.createElement('div');

function paraStatus(event) {
    console.log("Para" + event.target.textContent);
}
myDiv2.addEventListener('click', paraStatus);

for(let i = 1; i <= 100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    myDiv2.appendChild(newElement);
}
document.body.appendChild(myDiv2)