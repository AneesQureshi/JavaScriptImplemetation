// =============================
// JavaScript Template Literals
// =============================

// Template literals use backticks (`) instead of quotes.
// They allow:
// 1. String interpolation (embed variables and expressions).
// 2. Multi-line strings without \n.
// 3. Embedding expressions directly.

// 1. STRING INTERPOLATION
const name = "Anish";
const age = 34;

// Using concatenation (old way)
const oldWay = "My name is " + name + " and I am " + age + " years old.";
console.log(oldWay);

// Using template literals (modern way)
const newWay = `My name is ${name} and I am ${age} years old.`;
console.log(newWay);


// 2. MULTI-LINE STRINGS
// Old way with \n
const oldMulti = "This is line 1\nThis is line 2\nThis is line 3";
console.log(oldMulti);

// Template literals preserve formatting
const newMulti = `This is line 1
This is line 2
This is line 3`;
console.log(newMulti);


// 3. EXPRESSIONS INSIDE TEMPLATE LITERALS
const a = 5, b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}`;
console.log(result); // The sum of 5 and 10 is 15


// 4. FUNCTION CALLS INSIDE TEMPLATE LITERALS
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(`${greet("Anish")} Welcome to JavaScript.`);




// 5. TAGGED TEMPLATES (Advanced)
// A tag function processes the template literal before output
function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    return `${acc}${str}${values[i] ? values[i].toUpperCase() : ""}`;
  }, "");
}

const lang = "javascript";
console.log(highlight`I am learning ${lang} right now.`);
// Output: I am learning JAVASCRIPT right now.
// Tagged templates can be used for localization, sanitization, etc.
// They provide powerful ways to manipulate template literals.
// Note: Tagged templates are an advanced feature and may not be needed in everyday coding.
// This overview covers the most common and useful features of template literals.
// For most use cases, string interpolation and multi-line strings are sufficient.
// Tagged templates are more specialized and used in specific scenarios.
// Practice using template literals in your code to get comfortable with them.
// Experiment with embedding variables, expressions, and multi-line text.
// Try creating your own tag functions for custom processing of template literals.
// Happy coding!
// =============================
// End of JavaScript Template Literals
    
