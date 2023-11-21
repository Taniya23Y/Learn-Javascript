//++++++++++++++ Maths ++++++++++++++++

console.log(Math);
console.log(Math.abs(4)); // 4
console.log(Math.round(4.3)); // 4 (round of)
console.log(Math.ceil(4.2)); // 5 (highest value)
console.log(Math.floor(4.2)); // 4 (lowest value)
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8

// Random value lies in 0 and 1
console.log(Math.random()); // 0.7021926470155082
console.log(Math.random()*10); // 1.8341706727440799
console.log(Math.random()*10 + 1); // 7.345008568639807
console.log((Math.random()*10) + 1); // 6.810596367638478

// math.floor provides 0 values 
console.log(Math.floor(Math.random()*10) + 1); // 1

const min = 10;
const max = 20;

// Math.random() * (max - min + 1) + min;
console.log(Math.random() * (max - min + 1)); // 6.216342218338877
console.log(Math.random() * (max - min + 1) + min); // 11.26470707865731