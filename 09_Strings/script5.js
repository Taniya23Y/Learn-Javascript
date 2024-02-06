// Practice_Question

/*Ques 1) Prompt the user to enter their full name. 
Generate a username for them based on the input. start username with @,
followed by their full name and ending name with full name
length.  

eg: user name = "Taniya Yadav", username should be "@taniyaYadav23"
*/

let fullName = prompt("Please Enter Your Full Name: ");
let front = "@".concat(fullName);
console.log(front.concat(fullName.length));


