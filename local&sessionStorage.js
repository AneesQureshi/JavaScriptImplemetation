// =============================
// JavaScript: localStorage vs sessionStorage
// =============================

// Both store data in the browser as key-value pairs (strings only).
// Difference:
// - localStorage: persists even after closing browser.
// - sessionStorage: cleared when browser tab is closed.


// --------- localStorage ---------

// Save data
localStorage.setItem("username", "Anish");

// Get data
const userLocal = localStorage.getItem("username");
console.log("localStorage get:", userLocal); // Anish

// Remove specific item
localStorage.removeItem("username");

// Clear all localStorage
// localStorage.clear();


// --------- sessionStorage ---------

// Save data
sessionStorage.setItem("sessionId", "12345");

// Get data
const sessionId = sessionStorage.getItem("sessionId");
console.log("sessionStorage get:", sessionId); // 12345

// Remove specific item
sessionStorage.removeItem("sessionId");

// Clear all sessionStorage
// sessionStorage.clear();


// --------- JSON Example ---------

const user = { name: "Anish", role: "QA" };

// Must stringify objects before storing
localStorage.setItem("user", JSON.stringify(user));

// Parse back when retrieving
const parsedUser = JSON.parse(localStorage.getItem("user"));
console.log("Parsed user:", parsedUser); // {name: "Anish", role: "QA"}
