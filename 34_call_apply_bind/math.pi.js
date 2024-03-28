const mynewObj = {
    username: 'username'
}

Object.getOwnPropertyDescriptor(mynewObj, "username"); //  returns a descriptor object for the given property of var socket;
const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI); // 3.141592653589793 not change

console.log(descripter);
/*
 Answer is:-
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

const tea = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderTea: function(){
        console.log('Tea is not ready yet!');
    }
}
console.log(tea);// { name: 'ginger chai', price: 250, isAvailable: true } 
console.log(Object.getOwnPropertyDescriptor(tea)); // undefined
console.log(Object.getOwnPropertyDescriptor(tea, 'name'));
/* Answer is:-
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

Object.defineProperty(tea, 'name', {
    // writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(tea, 'name'));
/* Answer is:-
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

for (let [key, value] of Object.entries(tea)) {
    console.log(`${key} :  ${value}`);
}

/*
name :  ginger chai
price :  250
isAvailable :  true
orderTea :  function(){
        console.log('Tea is not ready yet!');
    }
*/

for (let [key, value] of Object.entries(tea)) {
    if(typeof value !== 'function'){
        console.log(`${key} :  ${value}`);
    }
}
/*
name :  ginger chai
price :  250
isAvailable :  true
*/