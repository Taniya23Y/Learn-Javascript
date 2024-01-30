//++++++++++ Practice Question ++++++++++

/* For the given state of an array, chnage it to final form using methods?
 start: ['january', 'july', 'march', 'august']
 final: ['july', 'june', 'march', 'august']
*/

let month = ['january', 'july', 'march', 'august'];
console.log(month); // [ 'january', 'july', 'march', 'august' ]

console.log(month.shift(1)); // january
console.log(month);  // [ 'july', 'march', 'august' ]

console.log(month.shift("july")); // january
console.log(month);  // [ 'july', 'march', 'august' ]

console.log(month.unshift("june")); // 3
console.log(month); // [ 'june', 'march', 'august' ]

console.log(month.unshift("july")); // 4
console.log(month); // [ 'july', 'june', 'march', 'august' ]

