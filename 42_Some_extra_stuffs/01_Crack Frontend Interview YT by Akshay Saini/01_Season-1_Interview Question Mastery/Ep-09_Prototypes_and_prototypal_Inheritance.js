// Prototype and prototypal inheritance

//* JavaScript is a prototype-based language, which means that objects are linked 
//* to other objects, forming a prototype chain. This allows objects to inherit properties 
//* and methods from other objects.

//* The prototype of an object is the object from which it inherits properties and methods.
//* All objects in JavaScript have a prototype, except for the Object.prototype object,
//* which is the prototype of all other objects.

//* Prototypal inheritance is a mechanism that allows objects to share properties and methods with each other. 
//* This happens through a prototype system, which works as follows:

// (1). When an object is created, it is linked to its prototype.
// (2). When a property or method is accessed on an object, the property or method is first looked up on the object itself.
// (3). If the property or method is not found on the object, the prototype is searched.
// (4). This process continues up the prototype chain until the property or method is found or the end of the chain is reached.

let arr = ["Abhay", "Akash", "Akshay"];
console.log(arr.__proto__ === Array.prototype); // true

let object = {
    name: "akshay",
    city: "Dehradun",
    getIntro: function(){
        console.log(this.name + " " + "from" + " " + this.city);
    },
}
// Never do this --> there are different ways to do that but this approach is not good at all.
object.__proto__ = {
    country: "India",
    getCountry: function() {
        return this.country;
    },
    getCity: function() {
        return this.city;
    }
}

let object2 = {
    name: "Annie",
}

object2.__proto__ = object;

//------------------------------
Function.prototype.myBind = function(){
    console.log("Some Random Things");
}

function fun (){

}