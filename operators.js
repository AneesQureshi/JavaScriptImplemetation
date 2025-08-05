function test() {
// Comparison Operators
let a = 10;
let b = "10";

console.log("== (a == b):", a == b);     // true (value comparison, type is not checked)
console.log("=== (a === b):", a === b);  // false (strict comparison: value & type)
console.log("!= (a != b):", a != b);     // false (only value is compared)
console.log("!== (a !== b):", a !== b);  // true (value or type is different)

// Arithmetic Operators
let x = 5;
let y = 3;

console.log("x + y:", x + y);            // 8
console.log("x - y:", x - y);            // 2

// Logical Operators
let isAdult = true;
let hasID = false;

console.log("&& (isAdult && hasID):", isAdult && hasID);  // false
console.log("|| (isAdult || hasID):", isAdult || hasID);  // true

// Ternary Operator
let age = 18;
let access = (age >= 18) ? "Allowed" : "Denied";
console.log("Ternary (access):", access);  // Allowed

}

test();