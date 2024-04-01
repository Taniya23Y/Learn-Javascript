// Javascript Class Inheritance 

//* To create a class inheritance, use the extends keyword
//* A class created with a class inheritance inherits all the methods form another class:

class Car {
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return ' I have a ' + this.carname;
    }
}

class Model extends Car{
    constructor(brand, modelName) {
        super(brand);
        this.model = modelName;
    }
    show(){
        return this.present() + ',it is a ' + this.model;
    }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show()); // I have a Ford,it is a Mustang