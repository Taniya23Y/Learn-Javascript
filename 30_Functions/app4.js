function calculateCartPrice(num1){
   return num1;
}
console.log(calculateCartPrice(2)); // 2
console.log(calculateCartPrice(200, 400, 500)); // 200

// to solve above problem, we have a rest operator.
// case 1
function calculateTotal(...number1) {
    return number1;
}
calculateTotal(200,300,400);// [200, 300, 400]

// case 2
function calculateCartPrice2(val1, val2, ...numb){
    return numb;
}
console.log(calculateCartPrice2(200, 300, 400, 500, 600)); // [400, 500, 600]

//++++++++++++++++++++++++++++++++++++++++++++++++

const user= {
    username: "kenny",
    price: 199
}

function handleObject(anyObject){
  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user); // username is kenny and price is 199
handleObject({
    username: "sam",
    price: 399
}); // username is sam and price is 399

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([200, 400, 500, 1000])); // 400