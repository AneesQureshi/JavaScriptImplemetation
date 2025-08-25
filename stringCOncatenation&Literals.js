// =============================
// Simple Examples of Template Literals
// =============================

// 1. Basic string with backticks
const simple = `Hello World`;
console.log(simple); // Hello World

// 2. String interpolation (variables inside string)
const name = "Anish";
const age = 34;
const intro = `My name is ${name} and I am ${age} years old.`;
console.log(intro); // My name is Anish and I am 34 years old.

// 3. Multi-line string
const multiLine = `This is line 1
This is line 2
This is line 3`;
console.log(multiLine);

// 4. Expression inside template literal
const a = 5, b = 10;
const sum = `The sum of ${a} + ${b} = ${a + b}`;
console.log(sum); // The sum of 5 + 10 = 15



// --------- STRING CONCATENATION (old way) ---------
const id = "login";
const concatSelector = "#"+id; // joins "#" with id
console.log("Concatenation selector:", concatSelector); // #login

// Using with Cypress
// cy.get("#" + id).click();


// --------- TEMPLATE LITERALS / INTERPOLATION (modern way) ---------
const btn = "submit";
const interpSelector = `button[type='${btn}']`;
console.log("Interpolation selector:", interpSelector); // button[type='submit']
