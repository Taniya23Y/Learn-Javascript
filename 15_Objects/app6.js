// object constructor

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // create object
  const obj = new Person("anya", "Forger", 3, "brown");
  console.log(`My name is ${obj.firstName} ${obj.lastName}`); // My name is anya Forger
  
  //++++++++++++++++++++++++++++++++++++
  // Managing objects
  
  // create a object with an existing object as prototype
  // Object.create();
  const object = {};
  let property, descriptors;
  
  // add or change an object property
  Object.defineProperty(object, property, descriptors);
  
  // adding or changing object properties
  Object.defineProperties(object, descriptors);
  
  // accessing properties
  Object.getOwnPropertyDescriptor(object, property);
  
  // return all properties as an array
  Object.getOwnPropertyNames(object);
  
  //accessing the prototype
  Object.getPrototypeOf(object);
  
  // returns Object.keys(object) properties as an array
  Object.keys(object);
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++
  
  // Preventing objects
  
  // prevents adding properties to an object
  Object.preventExtensions(object);
  
  // returns true if properties can be added to an object
  Object.isExtensible(object);
  
  // prevents changes of the object properties (not values)
  Object.seal(object)
  
  // returns true if object is sealed
  Object.isSealed(object);
  
  //prevents any changes to an object
  Object.freeze(object)
  
  // returns true if object is frozen
  Object.isFrozen(object)
  
  //+++++++++++++++++++++++++++++++++++++++++++++
  // changing a Property Value
  const person = {
      firstName : 'Anie',
      lastName: 'Forger',
      language: 'EN'
  };
  
  // change a property
  console.log(Object.defineProperty(person, "language", {value: "No"}));