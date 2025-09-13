// =============================
// Random Data Generation in JavaScript
// =============================

// --------- MATH.RANDOM ---------
// Math.random() gives a float between 0 (inclusive) and 1 (exclusive)

console.log("Random number (0–1):", Math.random());

// Random integer between 0 and 9
const rand0to9 = Math.floor(Math.random() * 10);
console.log("Random int 0–9:", rand0to9);

// Random integer between 1 and 100
const rand1to100 = Math.floor(Math.random() * 100) + 1;
console.log("Random int 1–100:", rand1to100);

// Random element from array
const colors = ["red", "blue", "green", "yellow"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log("Random color:", randomColor);


// --------- DATE.NOW ---------
// Date.now() gives timestamp in milliseconds since Jan 1, 1970
console.log("Date.now():", Date.now());

// Use timestamp to generate unique IDs
const uniqueId = "user_" + Date.now();
console.log("Unique ID:", uniqueId);

// Combine with Math.random for more uniqueness
const uniqueToken = "token_" + Date.now() + "_" + Math.floor(Math.random() * 1000);
console.log("Unique token:", uniqueToken);


// --------- FUNCTION EXAMPLES ---------

// Random string of given length
function randomString(len) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length: len }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join("");
}

console.log("Random string:", randomString(8)); // e.g. "aZ9kLm3P"

// Random email generator
function randomEmail() {
  return `user${Date.now()}${Math.floor(Math.random() * 100)}@test.com`;
}

console.log("Random email:", randomEmail());
