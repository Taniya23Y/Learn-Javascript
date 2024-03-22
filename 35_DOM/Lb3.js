// Performance
// Efficient code 
// ---> Event loop

//+++++++++++++++++++++++++++++++++++++++++++++++++++
// Performance-> speed of code
//            -> how to write efficiency and performing code 
//            -> event loop


// adding 100 para
// code 1
const t1 = performance.now();
for(let i = 1; i<= 100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para' + i;

    document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("This took" + (t2-t1) + "ms");

// optimising a bit code 
// code 2
const t3 = performance.now();
let myDiv = document.createElement('div');
for(let i = 1; i<= 100; i++){
    let element = document.createElement('p');
    element.textContent = 'This is para' + i;

    document.body.appendChild(element);
}
document.body.appendChild(myDiv)
const t4 = performance.now();
console.log("This took" + (t4-t3) + "ms");

// What ever write in DOM, it takes its own reflow and repaint for each element.

// best practice is:-
// Document fragment:- It is a lightWeight DOM object, it does not have any reflow and repaint

// Code using fragment
let fragment = document.createDocumentFragment();
for(let i = 1; i <= 100; i++){
    let element = document.createElement('p');
    element.textContent = 'This is para' + i;

    fragment.appendChild(element);
}
document.body.appendChild(fragment); // 1 Reflow, 1 Repaint

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// callStack
//---> single-threading = (js is single-threaded language )Processing of one command at a time.
function addPara(){
    let para = document.createElement('p');
    para.textContent = 'Js is Single';
    document.body.appendChild(para);
}

function appendNewMessage(){
    let para = document.createElement('p');
    para.textContent = 'Kya haal chaal';
    document.body.appendChild(para);
}

addPara();
appendNewMessage(); 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event Loop => event loop depends on Call stack, browser, Event Queue
/* 
    An event loop is something that pulls stuff out of the queue and places it onto the 
    function execution stack whenever the function stack becomes empty. The event loop is 
    the secret by which JavaScript gives us an illusion of being multithreaded even though 
    it is single-threaded.
*/