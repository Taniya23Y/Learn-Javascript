console.log("Chalo start karte hain!");

// Object creation {} literal
// singleton [constructor]

let rectangle = {
    length: 1,
    breadth: 2,

    draw: function(){ // behavior-> method()
        console.log("drawing something");
    }
};
console.log(rectangle);
console.log(rectangle.draw());

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* 
    Object Creation ->
    (1) Factory Function
    (2) Constructor Function
*/

// (1) Factory Function->  
function createRectangle(length,breadth){

    return rectangle = {
        // length: length,
        // breadth: breadth,
        length,
        breadth,
    
        draw: function(){ // behavior-> method()
            console.log("drawing something");
        }
    };
    // return rectangle;
};

let obj1 = createRectangle(5,4);
console.log(obj1);

//++++++++++++++++++++++++++++++++++++++++++++++++++++
// (2) Constructor Function-> pascal Notation

function Rectangle1(){
    this.length1 = 1;
    this.breadth2 = 2;
    this.draw = function(){
        console.log("drawing something");
    }
}

// object creation using constructor
let rectangle1 = new Rectangle1();
console.log(rectangle1);
