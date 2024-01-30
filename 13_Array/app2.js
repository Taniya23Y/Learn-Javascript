const Heros = ["thor", "Ironman", "Spiderman"];
const Dc_heros = ["Superman", "Duperman", "Batman"];

Heros.push(Dc_heros);
console.log(Heros); /* [ 'thor', 'Ironman',  'Spiderman',  [ 'Superman', 'Duperman', 'Batman' ] ]*/

console.log(Heros[3][1]); // Duperman

const AllHeros = Heros.concat(Dc_heros);
console.log(AllHeros); /* [ 'thor', 'Ironman',  'Spiderman',  [ 'Superman', 'Duperman', 'Batman' ], 'Superman', 'Duperman', 'Batman' ]*/

const all_new_Heros = [...Heros, ...Dc_heros]; 
console.log(all_new_Heros); /* [ 'thor', 'Ironman',  'Spiderman',  [ 'Superman', 'Duperman', 'Batman' ], 'Superman', 'Duperman', 'Batman' ]*/

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]];
console.log(another_array); // [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]

const real_another_array = another_array.flat();
console.log(real_another_array);  // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] 

const real_array = another_array.flat(Infinity);
console.log(real_array);  /* [ 1, 2, 3, 4, 5,
                               6, 7, 6, 7, 4, 
                               5 
                            ] */

// for data scrapping
console.log(Array.isArray("Anya")); // false
console.log(Array.from("Anya")); // [ 'A', 'n', 'y', 'a' ]
console.log(Array.from({name: "Anya"})); // [] (interesting)

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]