/*
- The let keyword was introduced in ES6 (2015)
- Variables declared with let have Block Scope
- Variables declared with let must be Declared before use
- Variables declared with let cannot be Redeclared in the same scope
*/


/*
- Before ES6 (2015), JavaScript did not have Block Scope.
- JavaScript had Global Scope and Function Scope.
- ES6 introduced the two new JavaScript keywords: let and const.
- These two keywords provided Block Scope in JavaScript:
*/

{
    let x = 2; 
    console.log(x); 
}


/*
- Variables declared with the var always have Global Scope.
- Variables declared with the var keyword can NOT have block scope:
*/
{
    var x = 2;
    console.log(x); 
}
console.log(x); 

// Variables defined with let can not be redeclared.
let a = "John Doe"; 
// let a = "Goerge"; 
console.log(a); 

// Variables defined with var can be redeclared.
var b = 10; 
var b = 15; 
console.log(b); 

// Redeclaring Variables 
var x = 10; 
console.log(x); 

{
    var x = 15; 
}
console.log(x); 


/*
- let and const have block scope.
- let and const can not be redeclared.
- let and const must be declared before use.
- let and const does not bind to this.
- let and const are not hoisted.

// What is Not Good?
var does not have to be declared.
- var is hoisted.
- var binds to this.
*/