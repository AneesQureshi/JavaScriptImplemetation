// =============================
// JavaScript: JSON.parse() & JSON.stringify()
// =============================

// JSON = JavaScript Object Notation
// Used for data exchange (API calls, config files, etc.)

// --------- JSON.stringify() ---------
// Converts JavaScript object -> JSON string

const user = {
  name: "Anish",
  age: 34,
  skills: ["QA", "Automation", "JavaScript"]
};

const jsonString = JSON.stringify(user);
console.log("JSON.stringify:", jsonString);
// Output: {"name":"Anish","age":34,"skills":["QA","Automation","JavaScript"]}

// Optional: pretty-print with spacing
const prettyString = JSON.stringify(user, null, 2);
console.log("Pretty JSON:\n", prettyString);


// --------- JSON.parse() ---------
// Converts JSON string -> JavaScript object

const parsedObj = JSON.parse(jsonString);
console.log("JSON.parse:", parsedObj);
// Output: { name: 'Anish', age: 34, skills: [ 'QA', 'Automation', 'JavaScript' ] }

console.log("Access parsed data:", parsedObj.skills[0]); // QA


// --------- Common Use Case ---------
// Storing & retrieving from localStorage

localStorage.setItem("user", JSON.stringify(user)); // store as string
const stored = JSON.parse(localStorage.getItem("user")); // retrieve and parse
console.log("From localStorage:", stored);
