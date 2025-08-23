// =============================
// JavaScript Strings - Common Methods
// =============================

const str = "  Hello JavaScript World  ";


// 1. length - Returns number of characters (including spaces)
console.log("length:", str.length); // 25


// 2. split(separator) - Splits string into array based on separator
const words = str.split(" ");
console.log("split:", words); // ["", "", "Hello", "JavaScript", "World", "", ""]


// 3. substring(start, end) - Extracts part of string (end not included)
const sub = str.substring(2, 7); // chars from index 2 to 6
console.log("substring:", sub); // Hello


// 4. includes(substring) - Returns true if substring found
console.log("includes 'JavaScript':", str.includes("JavaScript")); // true
console.log("includes 'Python':", str.includes("Python")); // false


// 5. toUpperCase() - Converts to uppercase
console.log("toUpperCase:", str.toUpperCase()); // "  HELLO JAVASCRIPT WORLD  "


// 6. toLowerCase() - Converts to lowercase
console.log("toLowerCase:", str.toLowerCase()); // "  hello javascript world  "


// 7. trim() - Removes whitespace from start and end
console.log("trim:", str.trim()); // "Hello JavaScript World"
