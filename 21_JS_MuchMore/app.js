//================= JavaScript Bitwise Operations ===============

/*
  Operator ||	Name   ||  	Description
------------------------------------------------------------------
    &	   ||   AND	   ||   Sets each bit to 1 if both bits are 1
    |	   ||   OR	   ||   Sets each bit to 1 if one of two bits is 1
    ^	   ||   XOR	   ||   Sets each bit to 1 if only one of two bits is 1
    ~	   ||   NOT	   ||   Inverts all the bits
    <<	   ||   Zero   ||   fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
    >>	   ||   Signed ||   right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
    >>>	   ||   Zero   ||   fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off
*/

/*
        Operation   ||	Result	 ||   Same as	Result
-------------------------------------------------------------------
          5 & 1	    ||    1	     ||    0101 & 0001	 0001
          5 | 1	    ||    5	     ||    0101 | 0001	 0101
          ~ 5	    ||    10	 ||    ~0101	 1010
          5 << 1    ||	  10	 ||    0101 << 1	 1010
          5 ^ 1	    ||    4	     ||    0101 ^ 0001	 0100
          5 >> 1    ||	  2	     ||    0101 >> 1	 0010
          5 >>> 1   ||	  2	     ||    0101 >>> 1	 0010
*/

// JavaScript Uses 32 bits Bitwise Operands
// JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.

// Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.
// After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.
// The examples above uses 4 bits unsigned binary numbers. Because of this ~ 5 returns 10.
// Since JavaScript uses 32 bits signed integers, it will not return 10. It will return -6.
// 00000000000000000000000000000101 (5)
// 11111111111111111111111111111010 (~5 = -6)
// A signed integer uses the leftmost bit as the minus sign.

//------------------------------------------------------------------------------
// JavaScript Bitwise AND
// When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1.
console.log("One bit example:");
console.log("0 & 0: ", 0 & 0); // 0
console.log("0 & 1: ",0 & 1);	// 0
console.log("1 & 0: ",1 & 0);	// 0
console.log("1 & 1: ", 1 & 1);  // 1

console.log("4 bits example:");
console.log("1111 & 0000: ", 1111 & 0o0000); //0000
console.log("1111 & 0001:", 1111 & 0o0001);  //0001
console.log("1111 & 0010:",0o1111 & 0o0010); 
console.log("1111 & 0100:", 1111 & 0o0100);

//-------------------------------------------------------
// JavaScript Bitwise OR
// When a bitwise OR is performed on a pair of bits, it returns 1 if one of the bits is 1:

console.log("One bit example:");
console.log("0 | 0:", 0 | 0);  // 0
console.log("0 | 1:", 0 | 1);	 // 1
console.log("1 | 0: ", 1 | 0); // 1
console.log("1 | 1: ",1 | 1); // 1

//-------------------------------------------------------
// JavaScript Bitwise XOR
// When a bitwise XOR is performed on a pair of bits, it returns 1 if the bits are different:

console.log("One bit example:");
console.log("0 ^ 0:", 0 ^ 0); // 0
console.log("0 ^ 1: ", 0 ^ 1); // 1
console.log("1 ^ 0:", 1 ^ 0);// 1	
console.log("1 ^ 0: ",1 ^ 0); // 1

//-----------------------------------------------------
// JavaScript Bitwise AND (&)
// Bitwise AND returns 1 only if both bits are 1:

console.log("Decimal	Binary");
// 5	00000000000000000000000000000101
// 1	00000000000000000000000000000001
// 5 & 1	00000000000000000000000000000001 (1)

let x = 5 & 1;
console.log("x:",x); // 1

//-----------------------------------------------------
// JavaScript Bitwise OR (|)
// Bitwise OR returns 1 if one of the bits is 1:

console.log("Decimal	Binary");
// 5	00000000000000000000000000000101
// 1	00000000000000000000000000000001
// 5 | 1	00000000000000000000000000000101 (5)

let x1 = 5 | 1;
console.log("x1:", x1); // 5

//-----------------------------------------------------
// JavaScript Bitwise XOR (^)
// Bitwise XOR returns 1 if the bits are different:

console.log("Decimal Binary");
// 5	00000000000000000000000000000101
// 1	00000000000000000000000000000001
// 5 ^ 1	00000000000000000000000000000100 (4)

let x2 = 5 ^ 1;
console.log("x2: ", x2); // 4

//-----------------------------------------------------
// JavaScript Bitwise NOT (~)
console.log("Decimal Binary");
// 5	00000000000000000000000000000101
// ~5	11111111111111111111111111111010 (-6)

let x3 = ~5;
console.log("x3:", x3); // -6

//-----------------------------------------------------
// JavaScript (Zero Fill) Bitwise Left Shift (<<)
// This is a zero fill left shift. One or more zero bits are pushed in from the right, and the leftmost bits fall off:

console.log("Decimal Binary");
// 5	00000000000000000000000000000101
// 5 << 1	00000000000000000000000000001010 (10)

let x5 = 5 << 1;
console.log("x5:", x5); // 10

//-----------------------------------------------------
// JavaScript (Sign Preserving) Bitwise Right Shift (>>)
// This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off:

console.log("Decimal Binary");
// -5	11111111111111111111111111111011
// -5 >> 1	11111111111111111111111111111101 (-3)

let x6 = -5 >> 1;
console.log("x6:", x6);

//-----------------------------------------------------
// JavaScript (Zero Fill) Right Shift (>>>)
// This is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off:

console.log("Decimal Binary");
// 5	00000000000000000000000000000101
// 5 >>> 1	00000000000000000000000000000010 (2)

let x7 = 5 >>> 1;
console.log("x7:", x7); // 2

//-----------------------------------------------------
// Converting Decimal to Binary
console.log("Converting Decimal to Binary");
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}
console.log(dec2bin(-5)); // 11111111111111111111111111111011
//-----------------------------------------------------
// Converting Binary to Decimal
console.log("Converting Binary to Decimal");
function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}
console.log(bin2dec(110)); // 6