function test (){

// 🟢 Primitive Data Types
let str = "Hello, JavaScript";           // String
let num = 42;                             // Number
let bool = true;                          // Boolean
let und;                                  // Undefined
let nul = null;                           // Null
let bigInt = 1234567890123456789012345678901234567890n; // BigInt
let sym = Symbol("id");                   // Symbol

// 🟢 Reference (Non-Primitive) Data Types
let arr = [1, 2, 3, "four", true];        // Array
let obj = {                               // Object
  name: "Anish",
  age: 30,
  isMarried: true
};
let func = function () {                  // Function
  return "I am a function";
};
let date = new Date();                    // Date object
let regex = /abc/gi;                      // Regular Expression

// 🟢 Logging all values
console.log("String:", str);
console.log("Number:", num);
console.log("Boolean:", bool);
console.log("Undefined:", und);
console.log("Null:", nul);
console.log("BigInt:", bigInt);
console.log("Symbol:", sym.toString());

console.log("Array:", arr);
console.log("Object:", obj);
console.log("Function:", func());
console.log("Date:", date);
console.log("RegExp:", regex);
}

test();