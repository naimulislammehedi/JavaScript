// JavaScript has 8 Datatypes
/*
- String = A text of characters enclosed in quotes
- Number = A number representing a mathematical value
- Bigint = A number representing a large integer
- Boolean = A data type representing true or false
- Object = A collection of key-value pairs of data
- Undefined = A primitive variable with no assigned value
- Null = A primitive value representing object absence
- Symbol = A unique and primitive identifier
*/

// string 
let color = "Yellow"; 
let lastName = "Johnson"; 

// Number 
let length = 16; 
let weight = 7.5; 

// BigInt 
let x = 8546123865128546219854621894568564123n; 
let y = BigInt(85685638464528562485858458654465); 

// Boolean 
let a = true; 
let b = false; 

// Object 
const person = {
    firstName: "John", 
    lastName: "Doe"
}

// Array object 
const cars = ["Saab", "Volvo", "BMW"]; 

// Date object 
const date = new Date("2022-03-25"); 

// Undefined 
let c; 
let d; 

// Null
let e = null; 
let f = null; 

// Symbol 
const g = Symbol(); 
const h = Symbol(); 
console.log(g); 

// the typeof operator 
console.log(typeof(x)); 

// JavaScript Strings 
let carName1 = "Volvo XC60"; 
let carName2 = 'Volvo XC60'; 
console.log(carName2); 

// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';

// JavaScript Numbers 
let x1 = 34.00; 
let x2 = 34; 

// JavaScript Booleans
/*
- JavaScript booleans can only have one of two values: true or false

- The boolean value of an expression is the basis for JavaScript comparisons.
*/
let a1 = 10; 
let a2 = 5; 
console.log(a1 == a2); // false
console.log(a1 != a2); // false
console.log(a1 > a2); // false
console.log(a1 < a2); // false
// All JavaScript comparison operators (like ==, !=, <, >) return true or false from the comparison.

// Datatype undefined
let carName;

// Empty Values 
let car = ""; 
