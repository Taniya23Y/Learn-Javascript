// Question
/*Ek object hai and usme kuch property ho sakti hain aur wo object blank bhi ho sakta
  hain, apko us object ki name property ko touch karna hai, jo ki again object ho sakti 
  hain, aur uske ander apko first name ki property ko access karna hain, aisa code likhiye
  ki type error na aaye.
*/

/*
 a programming scenario involving objects and properties. It mentions the possibility
 of an object having properties and being empty. The task is to interact with the 
 "first name" property of the object without encountering a type error. The objective
 is to write a code snippet that successfully accesses the "first name" property
 without triggering a type error.
 */

// var obj = {
//   name: {
//     first: "Taniya",
//     middle: "sadhana",
//     last: "Yadav",
//   },
// };

// console.log(obj.name.middle);

var obj = {};
// this topic is in ES11 2022 version called javascript optional chaining

// console.log(obj.name.first); 
// answer is--> TypeError: Cannot read properties of undefined (reading 'first') at Object
// so we use optional chaining which will check if the object or its property exists or not.
console.log(obj?.name?.first); // now anser is --> undefined 
