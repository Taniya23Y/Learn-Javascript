// let myName = "Taniya    ";

// console.log(myName.trueLength);

//-------------------------------------------------
let myHeros = ['thor', 'spiderman'];

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(` Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.taniya = function(){
    console.log('Taniya is present in all Objects.');
}

Array.prototype.heyTaniya = function(){
    console.log(`Taniya says hello`);
}
heroPower.taniya();
myHeros.taniya();
// heroPower.heyTaniya(); // Taniya says hello
// myHeros.heyTaniya(); // TypeError: heroPower.heyTaniya is not a function


//--------------------------------------------------
// Inheritance

const User ={
    username: 'anya',
    email: 'anya@gmail.com',
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, User);

//--------------------------------------------------------
let anotherUsername = "AnyaForger     ";

String.prototype.trueLength = function(){
    console.log(`${this}`); // AnyaForger
    console.log(`${this.name}`); // undefined
    console.log(`True Length is: ${this.trim().length}`); // True Length is: 10
}

anotherUsername.trueLength();
'taniya'.trueLength();
'iceTea'.trueLength();