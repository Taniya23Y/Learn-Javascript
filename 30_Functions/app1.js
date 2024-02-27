//========= Functions ========

// console.log("Starting...");
// console.log("Ending...");
// console.log("Merging...");
// console.log("Fetching...");
// console.log("Executing...");

function lock1(){
    console.log("Starting...");
    console.log("Ending...");
    console.log("Merging...");
    console.log("Fetching...");
    console.log("Executing...");
}
lock1; // Reference to function
lock1(); // Invocking function
/* 
   Answer is:
   Starting...
   Ending...
   Merging...
   Fetching...
   Executing...
*/

// Basic function
function addTwoNumbers(num1,num2){
    console.log(num1 + num2);
}
addTwoNumbers(); // NaN
addTwoNumbers(5, 7); // 12
addTwoNumbers("4", "4"); // 44
addTwoNumbers("a", 4); // a4
addTwoNumbers(4, null); // 4

const result = addTwoNumbers(50,45); // 95
console.log("Result:",result); // Result: undefined

//++++++++++++++++++++++++++++++++++++
function add2Number(number1, number2){
    // let result2 = number1 + number2;
    console.log("Annie"); // Annie
    // return result2;

    return number1 + number2;

    // console.log("Annie");//Unreachable code detected
}
const result2 = add2Number(50,45);
console.log("Result2:",result2); // 95

//+++++++++++++++++++++++++++++++++++++++++++++++
function loginUserMessage(username){
    return `${username} just logged in`;
}

loginUserMessage("Anny")// nothing will happen
// console.log(loginUserMessage("Anny"));// Anny just logged in
console.log(loginUserMessage(""));// just logged in 
console.log(loginUserMessage());// undefined just logged in

//+++++++++++++++++++++++++++++++++++++++++++++++++
function loginUserMessage1(username1){
    if(username1 === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username1} just logged in`;
}
console.log(loginUserMessage1()); // undefined

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function loginUserMessage2(username2 = "Beautiful"){
    if(username2 === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username2} just logged in`;
}
console.log(loginUserMessage2()); //Beautiful just logged in
console.log(loginUserMessage2("Me")); //Me just logged in