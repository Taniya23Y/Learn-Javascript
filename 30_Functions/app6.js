// Higher Order Functions:- A function which takes another function inside it as an arguments or returns a function from it.

function x() {
  console.log("Namaste");
}

function y(x) {
  x();
}
// so, y here is the higher order function
// and x is the callback function

const radius = [3, 1, 2, 4];

// case 1:- area of circle
const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log(calculateArea(radius));

// case 2:- Circumference of circle

const calculateCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};

console.log(calculateCircumference(radius));

// case 3:- Diameter of circle
const calculateDiameter = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
      output.push(2 * radius[i]);
    }
    return output;
  };
  
  console.log(calculateDiameter(radius));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// The above three cases has a problems in writing this kind of code.
// Optimized Code is:-

const radius2 = [3, 1, 2, 4];

const area = function (radius2){
    return Math.PI * radius2 * radius2;
};

const Circumference2 = function (radius2){
    return 2 * Math.PI * radius2;
}

const Diameter2 = function (radius2){
    return 2 * radius2;
}

// const calculate = function (radius2, logic) {
Array.prototype.calculate = function (arr, logic) {
    const output1 = [];
    for (let i = 0; i < radius2.length; i++) {
      output1.push(logic(radius2[i]));
    }
    return output1;
}

console.log(radius.map(area));
console.log(radius.map(Circumference2));
console.log(radius.map(Diameter2));

// console.log(calculate(radius2, area));
// console.log(calculate(radius2, Circumference2));
// console.log(calculate(radius2, Diameter2));