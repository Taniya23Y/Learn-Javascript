// Block Scope 
// block scope defined by this {} curly braces.

if(true) {
    // compound-> block scope is also known as compound statement
    var a = 100;
    console.log(a);
}

// We group multiple statements together in a Block, so that we can use it where js excepts one statement.

//-------------------------
{
    var a = 10;
    let b = 20;
    const c = 30; 
    console.log(a);
    console.log(b);
    console.log(c);
}
// console.log(b);// reference error
// console.log(c);// reference error

//--------------------------------
//what is shadowing in js
// if you have a same named variable outside the block then this variable shadow that block.
var a = 200;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); // 10; a is shadowed
    console.log(b);
    console.log(c);
}
console.log(a); // 10 [ a= 10, this variable is shadowed var a = 100 and modified it also.Because they are pointing same memory variable.]

//shadowing in const
var c = 100;
function x(){
    var c = 30;
    console.log(window.c);
    window.c = 20;
}
x();
console.log(c);

// legal shadowing in js 
//Example-1
var a = 20;
{
    var a = 20; // legal shadowing
}

//Example-2
var a = 20;
{
    let a = 20; // legal shadowing
}

//Example-2
const a = 20;
{
    const a = 20; // legal shadowing
}

// Illegal shadowing in js 
let a = 20;
{
    var a = 20; // illegal shadowing
}

//----------------------------------------
//lexical Block Scope
const a = 20;
{
    const a = 100;
    {
        const a = 200;
    }
    console.log(a); // 100
}
