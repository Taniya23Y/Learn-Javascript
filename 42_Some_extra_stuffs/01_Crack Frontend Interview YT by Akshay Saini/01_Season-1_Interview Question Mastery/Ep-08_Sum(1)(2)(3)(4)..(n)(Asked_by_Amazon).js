// Question 
// sum(1)(2)(3)(4)........(n)


// Recap
let x = function(){}
function y(x){
    return x
}
function y(x){
    return function(){

    }
}

//-------------------------------------------
// sum(1)(2)(3)(4)........(n)
// ----> sum(1)(2) => (3)
//           a  b

// way 1
let sum = function(a){
   return function(b){
    // console.log("Sum of " + a  + " and " + b + " is: "+ (a+b));
       if(b){
        return sum(a + b);
       }
       return a;
   }
}
console.log(sum(1)(2)(3)(4)()); // 10

// way 2
let add = (num1) => {
   return (num2) => {
     return num2 ? add(num1 + num2) : num1;
   }
}
console.log(add(1)(2)(3)(4)(5)()); // 15

// way 3
let addition = (a1) => (b1) =>  b1 ? addition(a1+b1) : a1;
console.log(addition(1)(2)(3)());