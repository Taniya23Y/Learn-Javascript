// Function currying :- It is done by two ways
// 1) by bind functions
// 2) concept of closures

let multiply = function(x, y){
    console.log(x*y);
}

// For understanding
// let multiplyBy2 = function(y){
//     let x = 2;
//     console.log(x*y);
// }

// let multiplyBy2 = multiply.bind(this, 2);
let multiplyBy2 = multiply.bind(this, 2, 3);
multiplyBy2(5); // 10

//------ Example-2

// function expression
let divide = function(x1,y1){
  console.log(x1*y1);
}

let divideBYTwo = function(){
    let args = Array.prototype.slice.call(arguments);
    return divide.apply(null, [args[0], 2]);
}
console.log(divideBYTwo(4)); // 2

let divideBYTwo1 = divide.bind(this, 28)
divideBYTwo1(14);

//-------------------------------------------------------
// By Closure
let multiplyOne = function(x){
   return function(y){
    console.log(x*y);
   }
}

let multiplyByTwo = multiplyOne(2)
multiplyByTwo(3);

let multiplyByThree = multiplyOne(2)
multiplyByThree(4);