// =============================
// JavaScript Objects - Basics
// =============================

// 1. CREATE OBJECT
const person = {
  name: "Anish",
  age: 34,
  city: "Delhi"
};
console.log("Created Object:", person);


// 2. ACCESS PROPERTIES
console.log("Dot notation:", person.name);     // Anish
console.log("Bracket notation:", person["age"]); // 34


// 3. UPDATE PROPERTIES
person.age = 35; // update existing
person.country = "India"; // add new
console.log("Updated Object:", person);


// 4. DELETE PROPERTIES
delete person.city;
console.log("After delete:", person);


// 5. LOOP THROUGH OBJECT

// for...in -> iterates keys
for (let key in person) {
  console.log(`for...in -> ${key}: ${person[key]}`);
}

// Object.keys() -> array of keys
Object.keys(person).forEach(key => {
  console.log(`Object.keys -> ${key}: ${person[key]}`);
});

// Object.values() -> array of values
console.log("Object.values:", Object.values(person)); // ["Anish", 35, "India"]

// Object.entries() -> array of [key, value] pairs
console.log("Object.entries:", Object.entries(person)); 
// [["name", "Anish"], ["age", 35], ["country", "India"]]
