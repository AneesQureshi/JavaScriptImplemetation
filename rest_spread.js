// =============================
// JavaScript: Spread Operator & Rest Parameters
// =============================

// --------- SPREAD OPERATOR (...) ---------
// Spread "expands" arrays or objects into individual elements/properties

// 1. Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

// Combine arrays
const combined = [...arr1, ...arr2];
console.log("Spread arrays:", combined); // [1,2,3,4,5]

// Copy array (shallow copy)
const copyArr = [...arr1];
console.log("Copy array:", copyArr); // [1,2,3]

// 2. Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

// Merge objects (later keys overwrite earlier)
const merged = { ...obj1, ...obj2 };
console.log("Spread objects:", merged); // {a:1, b:3, c:4}

// Copy object
const copyObj = { ...obj1 };
console.log("Copy object:", copyObj); // {a:1, b:2}


// --------- REST PARAMETERS (...) ---------
// Rest "collects" multiple arguments into a single array

// 1. In functions
function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log("Rest in function:", sum(1, 2, 3, 4)); // 10

// 2. In array destructuring
const numbers = [10, 20, 30, 40];
const [first, ...rest] = numbers;
console.log("Rest in destructuring:", first, rest); // 10 [20,30,40]

// 3. In object destructuring
const person = { name: "Anish", age: 34, city: "Delhi", country: "India" };
const { name, ...otherDetails } = person;
console.log("Rest in object destructuring:", name, otherDetails);
// Anish {age:34, city:"Delhi", country:"India"}
