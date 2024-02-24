// what is global space => The global space is nothing but Any code is written inside in javascript which is not inside in function is called global space.

var a = 10;   

//This abc() is also in global space but if i create any variable inside in function is not called global space which is [x: x is not in global space]
function abc() {
    var x = 100;
    console.log(x);
}

console.log(window.a);
console.log(a);
// console.log(x);
console.log(this.a);