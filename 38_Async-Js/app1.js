// Javascript -> synchronous
//            -> Single threaded

// Execution Context -> execute one line of code at a time.
//                   -> console log - 1      Each operation waits gor the last
//                   -> console log - 2      one to complete before executing
//                    call stack      memory Heap


//*     Blocking Code          VS     Non Blocking Code
//  Block the flow of program           Does not block execution
// Read file sync                       Read file Async

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
setTimeout(function(){
    console.log("SetTimeout function - 1");
}, 2000);

const setTimeoutFun = function(){
    console.log("SetTimeout function");
}

setTimeout(function(){
    console.log("SetTimeout function - 2");
}, 2000);


//------------------------------------
// change h1 content
const changeH1 = function (){
    document.querySelector('h1').innerHTML = "Best Javascript Doc.";
}
const changeMe = setTimeout(changeH1, 4000);

// clearTimeout(changeMe)
const button = document.querySelector('button').addEventListener('click', function(){
    clearTimeout(changeMe);
    console.log('Stopped')
});

//-----------------------------------------
