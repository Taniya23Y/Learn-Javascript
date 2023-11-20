// Practice Question
// Question 1) For the given string:
/*
    let msg = "help!";
    Trim it & convert it to uppercase
*/ 


let msg = "Hello!";
console.log(msg.trim().toUpperCase()); // HELLO!


// Question 2) For the string-> let name = "AnyaForger", predict the output for following:
/*
    name.slice(4,9)
    name.indexOf("na")
    name.replace("Anya","Forger")
*/

let name = "AnayaForger"; 
console.log(name.slice(4,9)); // Forge
console.log(name.indexOf("na")); // 1
console.log(name.replace("Anaya","The")); // TheForger

// Question 3) seperate the "College" part in above string & replace "I" with 't' in it.
let NameLast = "AnyaForger";
console.log(NameLast.slice(4).replace('F', 'y')); // yorger