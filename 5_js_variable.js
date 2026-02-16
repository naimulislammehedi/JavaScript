/*
Variables are labels for data values.

Variables are containers for storing data.
*/

// using let 
let x = 5; 
let y = 6; 
let z = x + y; 
console.log(z); 

// using const 
const a = 5; 
const b = 10; 
const c = a + b; 
console.log(c); 

/*
JavaScript Identifiers
==========================
=> Variables are identified with unique names called identifiers.
=> Names can be short like x, y, z.
=> Names can be descriptive age, sum, carName.
=> The rules for constructing names (identifiers) are:
    => Names can contain letters, digits, underscores, and dollar signs.
    => Names must begin with a letter, a $ sign or an underscore (_).
    => Names are case sensitive (X is different from x).
    => Reserved words (JavaScript keywords) cannot be used as names.
=> Numbers are not allowed as the first character in names.
*/


// A convention among professional programmers is to start a name with underscore for "private" variables.
let _lastName = "Johnson"

// Creating a variable in JavaScript is called declaring a variable.

// Create a variable called carName and assign the value "Volvo" to it
let carName = "Volvo"; 

// Always use const if the value should not be changed
const name = "John"; 

// A Mixed Example
const price1 = 5; 
const price2 = 6; 
let total = price1

// It's a good programming practice to declare all variables at the beginning of a script.

// The var keyword was used in all JavaScript code before 2015.  (Not Recommended)
var aa = 5; 
var bb = 5; 
var cc = aa + bb; 
console.log(cc); 

/*
1. Always use const if the value should not be changed
2. Always use const if the type should not be changed (Arrays and Objects)
3. Only use let if you cannot use const
4. Never use var if you can use let or const.
*/


/*
JavaScript variables can hold 8 datatypes, but for now, just think of numbers and strings.

Strings are text written inside quotes.

Numbers are written without quotes.
*/
const pi = 3.14; 
const person = "John Doe"; 
let answer = "Yes I'm!"; 


// You can declare many variables in one statement.
let personInfo = "John Doe", car_Name = "Volvo", price = 200; 
// A declaration can span multiple lines:

// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
let d = '5' + 2 + 3; 
console.log(d); 