// =============================
// JavaScript Hoisting
// =============================

// Hoisting = JavaScript moves declarations (not initializations) to the top of scope
// Variables declared with var are hoisted (initialized as undefined)
// let and const are hoisted too, but stay in "temporal dead zone" until declared
// Function declarations are hoisted completely (can be called before definition)


// --------- FUNCTION HOISTING ---------
sayHello(); // works because function declarations are hoisted

function sayHello() {
  console.log("Hello, I am hoisted!");
}


// --------- VAR HOISTING ---------
console.log("var before declaration:", x); // undefined (hoisted, but not initialized)
var x = 10;
console.log("var after initialization:", x); // 10


// --------- LET / CONST HOISTING ---------
// console.log(y); // ❌ ReferenceError (hoisted but in temporal dead zone)
let y = 20;
console.log("let:", y);

// console.log(z); // ❌ ReferenceError (same reason)
const z = 30;
console.log("const:", z);


// --------- FUNCTION EXPRESSION ---------
/*
sayHi(); // ❌ TypeError: sayHi is not a function
Because only the variable "sayHi" is hoisted, not the function assignment
*/
var sayHi = function() {
  console.log("Hi, from function expression");
};
sayHi();
