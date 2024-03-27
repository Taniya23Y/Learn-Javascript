# JavaScript and Classes

## OOP (Object-oriented Programming)

### Object
- A collection of properties and methods.
- Example: `toLowerCase()` method converts a string to lowercase.

### Why Use OOP

## Parts of OOP

### Object Literal
- Directly defines an object with its properties and methods.

### Constructor Function
- A function used to create multiple objects with the same structure.
- Example: `function Car(make, model) { this.make = make; this.model = model; }`

### Prototypes
- Mechanism for sharing properties and methods across multiple objects.
- Improves memory efficiency by not duplicating methods for each instance.

### Classes
- Introduced in ES6 as syntactic sugar over constructor functions and prototypes.
- Provides a more familiar syntax for classical inheritance.
- Example:
  ```javascript
  class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }

### Instance (new, this)
- `new` keyword is used to create an instance of a class or constructor function.
- `this` refers to the current instance of the object being created or operated on.

### 4 Pillars of OOP

## Abstraction

- Hides the complexities of implementation and only shows the necessary features of an object.
- Helps in reducing programming complexity and effort.

## Encapsulation
- Bundles data (properties) and methods (functions) that operate on the data into a single unit (object).
- Controls access to the data and prevents unintended modification.

## Inheritance
- Mechanism where a new class inherits properties and behaviors from another class (parent or base class).
- Promotes code reuse and allows for creating a hierarchy of classes.

## Polymorphism
- Allows objects of different classes to be treated as objects of a common superclass.
- Enables a single interface to represent entities of different types.