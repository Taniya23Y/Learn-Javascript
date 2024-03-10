// Immediately Invoked Function Expression (IIFE)

// case 1:-
function code(){
    console.log(`DB CONNECTED!`);
}

code();

// case 2:-
(function moreCode(){
    // Named IIFE
    console.log("DB CONNECTED TWO!");
})();
// moreCode();

// case 3:-
((name) => {
    console.log(`DB CONNECTED THREE! ${name}`);
}) ('Okay Done!')


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// IIFE:-

// IIFEs are self-contained blocks of code that execute once. They are a combination of function expressions, closures, and immediate execution. 
// IIFEs can be used for different purposes, including:
// Declaring global variables
// Preventing pollution of the global JS scope
// Eliminating errors 
