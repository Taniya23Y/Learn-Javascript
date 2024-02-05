/*
   HTML events are "things" that happen to HTML elements.
   When JavaScript is used in HTML pages, JavaScript can "react" on these events.
*/
// Example 1: Click event handler
/*
The following example shows how a click event handler works. It attaches an anonymous function as the
event handler for the onclick event of an element with id="myButton". The anonymous function will be
called whenever this button gets clicked by the user. In this case it just prints out a message to
the console.
*/
document.getElementById("myButton").onclick = function() {
    // Note that you need to use `console.log` instead of `print`, because `
    // print` does not exist in JavaScript and browsers do not support it anymore.
    console.log("You have clicked me!");
};
// Example 2: Keydown event handler
/*
This example demonstrates how to handle keydown events. If the user presses the Enter key while
this text field has focus (i.e., if they click into it), then the code inside
`document.getElementById("myTextField").onkeydown = ...;` will get executed. Here we
simply log the pressed character to the console.
*/
var lastKey;
document.getElementById("myTextField").onkeydown = function(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode
    // Logging the pressed character to the console.
    console.log("Pressed '" + String.fromCharCode(charCode) + "' ("
    + charCode + ")");
    // Remembering what was the last key pressed so we know whether Shift+Enter
    // or just Enter was pressed.
    lastKey = charCode;
}

// Example 3: Handling multiple events at once
/*
In some cases you might want to react on more than one type of event. You can simply add
additional assignment statements like the ones below to the same event handler function. For
example, the following code makes the previous example also work when the user pastes text
into the text field.
*/
document.getElementById("myTextField").onchange = document.getElementById("myTextField").onpaste;
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

//The above codes are examples about event handlers.
/*
Event handlers can be used to handle and verify user input, user actions, and browser actions:

--> Things that should be done every time a page loads
--> Things that should be done when the page is closed
--> Action that should be performed when a user clicks a button
--> Content that should be verified when a user inputs data
And more ...

Many different methods can be used to let JavaScript work with events:

--> HTML event attributes can execute JavaScript code directly
--> HTML event attributes can call JavaScript functions
--> You can assign your own event handler functions to HTML elements
--> You can prevent events from being sent or being handled
And more ...

*/