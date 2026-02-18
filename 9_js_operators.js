// ===============================
// 1. Arithmetic Operators
// ===============================

let a = 10;
let b = 3;

console.log(a + b);  // Addition → 13
console.log(a - b);  // Subtraction → 7
console.log(a * b);  // Multiplication → 30
console.log(a / b);  // Division → 3.333...
console.log(a % b);  // Modulus (remainder) → 1
console.log(a ** b); // Exponentiation (10^3) → 1000


// ===============================
// 2. Assignment Operators
// ===============================

let x = 5;

x += 3;  // Same as x = x + 3 → 8
x -= 2;  // Same as x = x - 2 → 6
x *= 2;  // Same as x = x * 2 → 12
x /= 4;  // Same as x = x / 4 → 3
x %= 2;  // Same as x = x % 2 → 1


// ===============================
// 3. Comparison Operators
// ===============================

console.log(5 == "5");   // true  (checks value only)
console.log(5 === "5");  // false (checks value + type)
console.log(10 != 5);    // true
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 <= 9);    // false


// ===============================
// 4. Logical Operators
// ===============================

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin); // AND → false (both must be true)
console.log(isLoggedIn || isAdmin); // OR  → true (at least one true)
console.log(!isLoggedIn);           // NOT → false (reverse value)


// ===============================
// 5. Increment / Decrement
// ===============================

let count = 5;

console.log(count++); // Post-increment → prints 5, then becomes 6
console.log(++count); // Pre-increment  → becomes 7, then prints 7
console.log(count--); // Post-decrement → prints 7, then becomes 6
console.log(--count); // Pre-decrement  → becomes 5, then prints 5


// ===============================
// 6. Ternary Operator
// ===============================

let age = 18;

let status = (age >= 18) ? "Adult" : "Minor";
console.log(status);  // Adult


// ===============================
// 7. Type Operator
// ===============================

console.log(typeof 123);        // "number"
console.log(typeof "Hello");    // "string"
console.log(typeof true);       // "boolean"
console.log(typeof {});         // "object"
console.log(typeof []);         // "object"


// ===============================
// 8. Nullish Coalescing (??)
// ===============================

let userName = null;
let displayName = userName ?? "Guest"; 
console.log(displayName); // "Guest" (only replaces null or undefined)



