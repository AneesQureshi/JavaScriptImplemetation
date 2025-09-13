// =============================
// JavaScript Functions Overview
// =============================

// 1. FUNCTION DECLARATION
// - Defined with the "function" keyword.
// - Hoisted: can be called before its definition.
// - Has its own "this", "arguments", and "prototype".
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5


// 2. FUNCTION EXPRESSION
// - Function assigned to a variable.
// - Not hoisted: cannot be used before definition.
// - Useful for passing around as values.
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // 20


// 3. ARROW FUNCTION
// - Short syntax using =>.
// - Does NOT have its own "this" or "arguments".
// - Cannot be used as constructor functions.
// - Great for callbacks and concise logic.
const subtract = (a, b) => a - b;
console.log(subtract(10, 6)); // 4

// Single parameter can omit parentheses
const square = n => n * n;
console.log(square(5)); // 25

// No parameters
const greet = () => "Hello";
console.log(greet()); // Hello
