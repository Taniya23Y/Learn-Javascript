// nullish coalescing operator (??)
/* Definition: The nullish coalescing operator (??) in JavaScript is a logical operator
            that returns the right-hand operand when the left-hand operand is null or
            undefined. Otherwise, it returns the left-hand operand.

        synatx is: 
            leftExpr ?? rightExpr;

        use cases are: 
        (1). To provide a default value for a variable that may be null or undefined.
        (2). To prevent errors when accessing properties of objects that may be null or undefined.
*/
// falsy values kafi sari hoti hain nullish coalescing operator (??) null or undefined 
// ke liye jo eske baad lihkhoge vo return karega.

var num = null ?? 12;
console.log(num); // 12 

// but, if code is->
var num1 = 123 ?? null;
console.log(num1); // 123

// another way
var num2 = 1234 ?? 123;
console.log(num2); // 1234 ( left-hand operand) as definiton says

// Investigation

/*
  Ek object hain , uski name property nikalo aur agar name nahi hai to, name ko 
  default set kar do.
*/

var obj = {

}

console.log(obj?.name?.first); // undefined
console.log(obj?.name?.first ?? "default"); // default

var username = obj?.name?.first ?? "default";
console.log(username); // default