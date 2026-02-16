/*
- The const keyword was introduced in ES6 (2015)
- Variables defined with const cannot be Redeclared
- Variables defined with const cannot be Reassigned
- Variables defined with const have Block Scope
*/

// JavaScript const variables must be assigned a value when they are declared
const pi = 3.14 

/*
Always declare a variable with const when you know that the value should not be changed.

Use const when you declare:
    - A new Array
    - A new Object
    - A new Function
    - A new RegExp
*/

/*
The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:
- Reassign a constant value
- Reassign a constant array
- Reassign a constant object

But you CAN:
- Change the elements of constant array
- Change the properties of constant object
*/

// Constant Arrays
const cars = ["saab", "Volvo", "BMW"]; 
cars[0] = "Toyota"; 
cars.push("Audi"); 
console.log(cars); 

// But you can NOT reassign the array:
// const cars = ["Saab", "Volvo", "BMW"];
// cars = ["Toyota", "Volvo", "Audi"]; 


// You can change the properties of a constant object:
const car = {
    type: "Fiat", 
    model: "500", 
    color: "white"
}; 
console.log(car); 
car.color = "red"
console.log(car); 

// But you can NOT reassign the object
// const car = {type:"Fiat", model:"500", color:"white"};
// car = {type:"Volvo", model:"EX60", color:"red"} 

/*
- let and const have block scope.
- let and const can not be redeclared.
- let and const must be declared before use.
- let and const does not bind to this.
- let and const are not hoisted.
*/

// Declaring a variable with const is similar to let when it comes to Block Scope.
const x = 10; 
{
    const x = 5; 
    console.log(x); 
}
console.log(x); 