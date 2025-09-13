const mySet = new Set();

// Add values
mySet.add(1);
mySet.add(2);
mySet.add(2); // duplicate ignored
mySet.add("Hello");

console.log("Set:", mySet); // Set {1, 2, "Hello"}


// Check existence
console.log("Has 2?", mySet.has(2)); // true

// Delete value
mySet.delete(1);
console.log("After delete:", mySet); // Set {2, "Hello"}

// Size of set
console.log("Set size:", mySet.size); // 2

// Iterate set
mySet.forEach(value => console.log("Set value:", value));