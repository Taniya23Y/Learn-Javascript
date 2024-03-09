// Quick recaps and much more.

//* Javascript is a synchronous single-threaded language,It has a callStack and it can only do one thing at a time.
//* The callStack is present in the javascript engine and all the code of js is executed inside this callStack.

// Example:-

function a(){
    console.log("a");
}
a();
console.log("End");

// Understand the above code with the callStack how it works.
//* Whenever any javascript is run a global Execution Context is created and then GEC is pushed inside the Call Stack. 
//* Now In the GEC, the whole code run line by line in GEC.
//* As we move on the first line [ function a() {} ] This is the function definition of a, a will be allocated memory 
//* and the function will be stored.
//* Now, move to the second part [ a(); ] This is function invocation, a Execution Context is created for the function a(), 
//* to executed the code of this function, and this execution is again pushed inside the call Stack.
//* So, over here [in call Stack] now the code of this a function is executed line by line, that means it will prints a in the console
//* so, now this move to next line, it sees that there is nothing to execute inside it so a is popped out.

//*  Then "End" is printed because of the normal execution flow.
//*  But before printing "End", it again looks into the Call Stack if there are any functions left to pop-out from the stack. 
//* console: [a, End]

//* After all functions are executed from  top to bottom then they get removed one by one from the Call Stack.


// So the main job of callStack is whatever in the callStack it executed all the code inside it.
// The time, tide and Javascript wait for none.Because all js code is executed over here and this callStack don't wait  for anything
// If anythings comes inside the callStack it quickly executes.

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// What if, we need to wait for something or we have a program or a script which need to be run after 5secs

//* How does Javascript perform async tasks.
//* Answer:- Let's understand the basics--->
//*   Browser have a javascript engine and JS engine has a callStack, and callStack has a global Execution context where all the codes are runs| Executes.
//*   Browser is most remarkable creation in the history of mankind, so This browser has js engine inside it and also have local storage, timer inside it
//*   and many more. Access all such super power we need web api's.
//*   
//*   call Stack            Web API's
//*                       windows:- 
//*    |     |           (1) setTimeout()
//*    |     |           (2) DOM API's
//*    |     |           (3) fetch()
//*    |     |           (4) localStorage
//*    |     |           (5) console
//*    |     |           (6) location
//*    | GEC |
//*    |_____|

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Understand:- How setTimeout works behind the scenes in browsers.
//*   
//*   call Stack        Example:-                                 Web API's
//*                 _________________________________            windows:- 
//*    |     |     |   console.log("Start")          |         (1) setTimeout()
//*    |     |     |   setTimeout(function cb(){     |         (2) DOM API's
//*    |     |     |        console.log("Callback"); |         (3) fetch()
//*    |     |     |   }, 5000);                     |         (4) console
//*    |     |     |                                 |         
//*    |     |     |   console.log("End");           |         
//*    | GEC |     |_________________________________|
//*    |_____|

// code is:-
 console.log("Start");
 setTimeout(function cb(){
    console.log("Callback");
 }, 5000);
 console.log("End");

// Answer is:- start, end

//Event Loop and CallBack Queue in js
//* So, the above code 5000ms was already running and the callback was registered (cb), as soon as the timer 
//* expires. This callback method (cb) need to go inside the callStack but, it can not directly go inside the callStack.
//* It will go to the callStack through the callBack Queue. So, when the timer expires, the callBack function is put inside the 
//* callBack Queue. And the Event loop, the Job of event loop is check the CallBack Queue and put this function of this callBack Queue
//* into the callStack.
//* Now, the Proper answer is:-

// Answer is:- start, end, Callback

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Understand:- How Event listners Work in JS
//*   
//*   call Stack        Example:-                                       Web API's
//*                 ___________________________________________        windows:- 
//*    |     |     |   console.log("Start")                    |    (1) setTimeout()
//*    |     |     |   document.getElementById("btn")          |    (2) DOM API's 
//*    |     |     |   .addEventListner("click",function cb(){ |    (3) fetch()   
//*    |     |     |        console.log("Callback");           |    (4) console
//*    |     |     |   }, 5000);                               |
//*    |     |     |                                           |
//*    |     |     |   console.log("End");                     |
//*    | GEC |     |___________________________________________|
//*    |_____|
//*
//*            _____________
//*           |             |
//*           |  Event Loop |
//*           |_____________|
//*                                     CallBack Queue:-       
//*                                    ___________________________________________
//*                                   |                                           |
//*                                   |     _____                                 |
//*                                   |    | cb  |                                |
//*                                   |    |_____|                                |    
//*                                   |                                           |
//*                                   |___________________________________________|


// Understand:-
//* Again, Whenever you run a js code a GEC is created and pushed inside the callStack, and code executes line by line.
//* It sees console.log("Start"); and it goes to the console (it calls the web api method [console]) and prints start in console
//* Now, the code moves to the next line [document.getElementById("btn").addEventListner], this [addEventListner] is another super power 
//* which is given by browser to the js engine through the window object(global object) in form a web api, which is the DOM APIs.
//* This .addEventListner registers a callBack on a event, that event is [click]
//* Now, the code moves to next line, which is console.log("End");

//Understand:- More About Event Loop
//* The Event loop has a only one job, the job is to continuously checks|monitors the CallStack and CallBack Queue, so if the callStack is empty and
//* event loop sees that their is also a function [callBack queue] waiting to be executed inside the callBack Queue, it just take the  function and
//* just push it inside the callStack.

// code is:-
console.log("Start");
document.getElementById("btn")
.addEventListener('click', function cb(){
   console.log("Callback");
}, 5000);
console.log("End");


// Answer is:- start, end, Callback

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Understand:- How fetch() function Works in JS

//*   
//*   call Stack        Example:-                                       Web API's
//*                 ___________________________________________        windows:- 
//*    |     |     |   console.log("Start")                    |    (1) setTimeout()
//*    |     |     |   setTimeout(function cbT() {             |    (2) DOM API's 
//*    |     |     |      console.log("CB SetTimeout");        |    (3) fetch()   
//*    |     |     |   }, 5000);                               |    (4) console
//*    |     |     |                                           |
//*    |     |     |   fetch("https://api/netflix.com")        |
//*    |     |     |   .then(function cbF() {                  |
//*    | GEC |     |       console.log("CB Netflix");          |
//*    |_____|     |   });                                     |
//*                |    console.log("End");                    |
//*                |___________________________________________|
//*            _____________
//*           |             |
//*           |  Event Loop |
//*           |_____________|
//*                                     CallBack Queue:-       
//*                                    ___________________________________________
//*                                   |                                           |
//*                                   |     _____                                 |
//*                                   |    | cb  |                                |
//*                                   |    |_____|                                |    
//*                                   |                                           |
//*                                   |___________________________________________|


// code is:-

console.log("Start");

setTimeout(function cbT(){
    console.log("CB SetTimeout");
}, 5000);

fetch("https://api.netflix.com")
.then(function cbF(){
    console.log("CB Netflix");
})

console.log("End");

//Understand the whole code:-
//* Fetch basically goes and request a api call. So, the fetch function returns a promise
//* and we have to pass a callBack function, which will be executed once the promise is resolved.

//Understand:- Micro Task Queue
//* The microTask Queue is exactly similar to the callback queue but it has higher priority. 
//* what ever function come inside the queue, will be executed first and function inside the callback queue 
//* are executed later.


//Question:- what can come inside this microTask Queue
//Answer:- All the callBack function which come through promises will go inside this microtask queue
//        and there is something know as, (mutation observer):- it keeps on checking  whether there 
//        is some mutation on the dom tree or not, If there is some mutation in the dom tree, it can 
//        execute some callBack function 