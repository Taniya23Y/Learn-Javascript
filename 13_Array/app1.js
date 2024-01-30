//++++++++++++++++ Arrays ++++++++++++++++

const myArray = [0, 1, 2, 3, 4, 5, "true", "Anya"];
console.log(myArray[6]); // true

const myHeros = ["Antonio Banderas", "Antonio Banderas", "Tom Cruise", "Daniel Craig"];
console.log(myHeros[1]); // Antonio Banderas

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr2[4]); // 5

// Array Method

myArr2.push(6);
console.log(myArr2); // [ 1, 2, 3, 4, 5, 6 ]

myArr2.push(7);
console.log(myArr2); /* [
                            1, 2, 3, 4,
                            5, 6, 7
                        ] */

myArr2.pop();
console.log(myArr2); // [ 1, 2, 3, 4, 5, 6 ]

myArr2.unshift(9);
console.log(myArr2); /* [
                            9, 1, 2, 3,
                            4, 5, 6
                        ] */

myArr2.shift(); // shift has no parameter
console.log(myArr2); // [ 1, 2, 3, 4, 5, 6 ]

console.log(myArr2.includes(9)); //false
console.log(myArr2.indexOf(9)); //-1
console.log(myArr2.indexOf(3)); //2 (index number)

const newArr3 = myArr2.join();
console.log(myArr2); // [ 1, 2, 3, 4, 5, 6 ]
console.log(newArr3); // 1,2,3,4,5,6
console.log(typeof newArr3); // string

/////// Slice, splice

// Slice

console.log("A", myArr2); // A [ 1, 2, 3, 4, 5, 6 ]

const myn1 = myArr2.slice(1, 3);
console.log(myn1); // [ 2, 3]
console.log("B", myArr2); // B [ 1, 2, 3, 4, 5, 6 ]

const myn2 = myArr2.splice(1, 3);
console.log("C", myArr2); // C [ 1, 5, 6 ]
console.log(myn2); // [ 2, 3, 4 ]