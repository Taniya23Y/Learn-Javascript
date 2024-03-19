// Window => window is global object, it is created by browser. It represent a browser window.
//--> DOM, BOM, and JS Core lies.

//DOM => Document object model.
//* The Document Object Model (DOM) is a programming interface that allows you to create, change, or remove elements from the document. You can also add events to these elements to make your page more dynamic. The DOM views an HTML document as a tree of nodes.
//* Each node in the tree represents a part of the document, such as an element, an attribute, or a piece of text. You can use the DOM to access and manipulate these nodes. For example, you can use the DOM to change the text of an element, add a new element to the document, or remove an element from the document.
//* The DOM is a very important part of JavaScript. It allows you to interact with the HTML document and make it more dynamic. For example, you can use the DOM to create a navigation menu that changes when the user clicks on a link, or you can use the DOM to create a slideshow that automatically changes the image every few seconds.
//* Here are some of the things you can do with the DOM:
//* Create, change, or remove elements from the document.
//* Add events to elements.
//* Change the style of elements.
//* Get and set the content of elements.
//* Navigate the document tree. 


// In console Window 
document
document.window;

// BOM => (browser object model) It allows js to talk to browser about matters other than content.
//* The Browser Object Model (BOM) is a collection of objects that allows JavaScript to interact with the browser. It includes objects such as the window, document, location, history, and navigator objects.
//* The BOM allows JavaScript to access and manipulate the browser window, frames, and other browser-related objects. This enables JavaScript to control the browser's behavior, such as opening and closing windows, navigating to new pages, and displaying messages.
//* The BOM also provides information about the browser and the user's environment, such as the browser's type and version, the screen resolution, and the user's language preferences. This information can be used to tailor the web page's content and behavior to the user's needs.
//* Here are some examples of how the BOM can be used:
//* The window object can be used to open and close windows, resize windows, and move windows around the screen.
//* The document object can be used to access and manipulate the HTML and CSS of the web page.
//* The location object can be used to get the current URL of the web page, navigate to a new page, and reload the current page.
//* The history object can be used to get the list of pages that the user has visited, and to navigate back and forward through the history.
//* The navigator object can be used to get information about the browser, such as the browser's type and version, the screen resolution, and the user's language preferences.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// DOM => Document Object Model
//* character -> tag -> token(converted by tokenizer) -> Nodes -> DOM ready.

// Fetch a particular element-->
document.getElementById('#id');
document.getElementById('.class');

//* getElementById => it is called on Document object
//* It returns a single object.

// To get multiple Object use getElementByIdClassName()
document.getElementsByIdClassName() 
// The getElementByIdClassName method of document interface returns an array-like object of all child elements which have all of the given class name(s)
// HTMLCollection me aaega.

// Things to keep in mind:-
getElementsByIdClassName() 
getElementsByIdTagName() 
// Both methods use document object
// Both methods returns multiple items
// the list returned is not a array 

// Trick
$0; // It copies whole things which is hold on browser inspect.

//++++++++++++++++++++++++++++++++++++++++++++++

// Access Element
getElementById()
getElementsByIdClassName()
getElementsByIdTagName()

// method
querySelector()  //It selects first one if you want all then use querySelectorAll().
querySelectorAll()  //  It returns NodeList, not an Array. 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// update
.innerHTML
.outerHTML
.textContent
.innerText

// .innerHTML => get an element | all of its descendent
//               set an elements HTML content

// .outerHTML => The outerHTML attribute of the Element DOM interface 
//               gets the serialized HTML fragment describing the element including its descendants. It can also be set to replace the element with nodes parsed from the given string.

// .textContent => get an element | all of its descendent text 
//                set an elements text

// .innerText => The innerText property of the HTMLElement interface represents the rendered text content of a node and its descendants.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Adding new elements / content
Element1.createElement();
Element2.appendChild();

// for Example 
let content = document.querySelector('.paraClass');
content;
let newPara = document.createElement('p');
newPara;
content.appendChild(newPara);
content;

//---> If we append a child then it stores in the end of the content.

// Creating TextNode:-
// approach 1
let newPara1 = document.createElement('p');
let textPara = document.createElement('I am a js learner');

newPara1.appendChild(textPara);
content.appendChild(newPara1);

// approach 2 easy one
let newPara3 = document.createElement('p');
newPara3.textContent = "I am js learner";
content.appendChild(newPara3);

// appendChild() adds element in the last sibling

// another approach that fix above problem by

document.insertAdjacentElement()
// has to be called 2 adj.
// location / position -> where --->  beforebegin, afterbegin, beforeend, afterend
// HTML text/content to be inserted

//remove
removeChild()
// opposite of appendChild()
// parent element
// child element to remove

//* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// CSS properties listed-> style page content by js
.style
.cssText
.setAttribute
.className
.classList

// Example:-

let content2 = $0;
content2;
content2.style.color="red";
content2.style.backgroundColor="white";

// same thing done by cssText
content2.style.cssText ="color: red; background-color: white;, font-size: 4em";

content2.setAttribute('style', "backgroundColor= white;");
content2.setAttribute('style', "color= orange;");
content2.setAttribute('id', "Heading ki id");
content2.setAttribute('class', "Heading ki class"); // by separation of concern is break

// .className
content2.className;
typeof content2.className(); // string
content2.className.split(' ');
// [ '' , 'first'. 'second', 'third', 'fourth', 'five'];
let classNames = content2.className.split(' ');
classNames;
content2.className.trim().split(' ');
//[ 'first'. 'second', 'third', 'fourth', 'five'];
classNames = content2.className.trim().split(' ');
// [ 'first'. 'second', 'third', 'fourth', 'five'];

// iterate -> for loop
//++++++++++++++++++++++

// classList
content2.classList; // protoType:- DOMTokenList
typeof content2.classList; // object

// classList-> add(), remove(), toggle(), continue();
