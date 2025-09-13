const myMap = new Map();

// Set key-value pairs
myMap.set("name", "Anish");
myMap.set(1, "One");
myMap.set({ role: "QA" }, "Engineer");

console.log("Map:11", myMap);


// Get value
console.log("Get by key:", myMap.get("name")); // Anish

// Check key
console.log("Has key 1?", myMap.has(1)); // true

// Delete entry
myMap.delete(1);
console.log("After delete:", myMap);

// Size of map
console.log("Map size:", myMap.size);

// Iterate map (forEach)
myMap.forEach((value, key) => {
  console.log(`Map key = ${key}, value = ${value}`);
});

// Iterate with for...of
for (let [key, value] of myMap) {
  console.log("for...of:", key, value);
}