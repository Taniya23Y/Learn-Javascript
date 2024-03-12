// Map function:- map function is basically used to transform in array

const arr = [5, 1, 3, 2, 6];

// transform it

//Double - [10, 2, 6, 4, 12]
//Triple - [15, 3, 9, 6, 18]
//Binary - [ '101', '1', '11', '10', '110']

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

function binary(x) {
  return x.toString(2);
}

const output = arr.map(double);
console.log(output); // [ 10, 2, 6, 4, 12 ]

const output2 = arr.map(triple);
console.log(output2); // [ 15, 3, 9, 6, 18 ]

const output3 = arr.map(binary);
console.log(output3); // [ '101', '1', '11', '10', '110' ]

// more interesting, instead of writing the above code. we can write this also.
// higher order function
const output4 = arr.map(function binary(x) {
  return x.toString(2);
});
console.log(output4); // [ '101', '1', '11', '10', '110' ]

// Arrow function
const output5 = arr.map((x) => {
  return x.toString(2);
});
console.log(output5); // [ '101', '1', '11', '10', '110' ]

// instead of writing return we can write this also.

const output6 = arr.map((x) => x.toString(2));
console.log(output6); // [ '101', '1', '11', '10', '110' ]

//++++++++++++++++++++++++++++++++++++++++++++++
// filter() function

const array = [5, 1, 3, 2, 6];

// filter odd values
function isOdd(x) {
  return x % 2;
}
const result = array.filter(isOdd);
console.log(result); // [ 5, 1, 3 ]

// filter Even values
function isEven(x) {
  return x % 2 === 0;
}
const result2 = array.filter(isEven);
console.log(result2); // [ 2, 6 ]

// filter values greater than 4
function greaterThanFour(x) {
  return x > 4;
}
let result3 = array.filter(greaterThanFour);
console.log(result3); // [ 5, 6 ]

// More interesting
result3 = array.filter(function greaterThanFour(x) {
  return x > 4;
});
console.log(result3); // [ 5, 6 ]

//Arrow function
result3 = array.filter((x) => {
  return x > 4;
});
console.log(result3); // [ 5, 6 ]

// More precise arrow function
result3 = array.filter((x) => x > 4);
console.log(result3); // [ 5, 6 ]

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Reduce() function:- As name suggest reduce, it doesnot reduce it😂
// Reduce function is basically used as a place where You have to take all the element in a array
// and come with the single value.

const Arr = [5, 1, 3, 2, 6];

// Sum or Max
function findSum(Arr) {
  let sum = 0;
  for (let i = 0; i < Arr.length; i++) {
    sum = sum + Arr[i];
  }
  return sum;
}
console.log(findSum(Arr)); // 17

// The above is done by basic function

// By reduce()
// acc = accumulator:-  It carries the returned value from each iteration in the next.
// curr = currentValue:-  It will contain the value of each element present at that particular index
const res = Arr.reduce(function (acc, curr) {
  console.log(`Accumulator is ${acc} and currentValue is ${curr}`);
  acc = acc + curr;
  return acc;
}, 0);
console.log(res);

/* Answer is:-
 Accumulator is 0 and currentValue is 5
 Accumulator is 5 and currentValue is 1
 Accumulator is 6 and currentValue is 3
 Accumulator is 9 and currentValue is 2
 Accumulator is 11 and currentValue is 6
 17
*/

//Find maximum number
function findMax(Arr) {
  let max = 0;
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] > max) {
      max = Arr[i];
    }
  }
  return max;
}
console.log(findMax(Arr)); // 6

// By reduce()

let arr_max = Arr.reduce(function (acc, curr) {
    if(curr > acc) {
        acc = curr;
    }
    return acc;
}, 0)
console.log(arr_max);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const users = [
    { firstName: "taniya", lastName: "yadav", age: 20 },
    { firstName: "bill", lastName: "gates", age: 76 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 54 },
    { firstName: "enu", lastName: "mehra", age: 20 },
];

// Task 1 to find list of full names
// ["taniya yadav", "donald trump", ....]

const fullNamesList = users.map((user)  => `${user.firstName} ${user.lastName}`);
console.log(fullNamesList); // [ 'taniya yadav', 'bill gates', 'donald trump', 'elon musk', 'enu mehra' ]

// Task 2:- find how many users has a particular age
// { 20: 2, 76: 1, 75: 1, 54: 1 }

const  agesCounts = users.reduce((acc, curr) => { 
//    acc[curr.age]  = acc[curr.age] ?  ++acc[curr.age] :  1 ;
//    return acc;
   if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age];
   } else {
    acc[curr.age] = 1;
   }
   return acc;
}, {});
console.log(agesCounts); // { '20': 2, '54': 1, '75': 1, '76': 1 }

// filter out firstName of all the people who age is less than 30

const  findAge = users.reduce((acc, curr) => { 
    acc[curr.age]  = acc[curr.age] < 30;
    return acc;
}, {});
console.log(findAge); // { '20': true, '54': false, '75': false, '76': false }  

// second approach 
const findAgeWithFirstName = 
users.filter((x) => x.age < 30).map((x)=> x.firstName );
console.log(findAgeWithFirstName); // [ 'taniya', 'enu' ]

//--------------------------------------------------
const  findAge30 =  users.reduce((res, user) => {
    if (user.age <= 30) {
      res.push(user.firstName)
    }
    return res;
  }, []);
console.log(findAge30); // [ 'taniya', 'enu' ]