// =============================
// Reading Test Data from Arrays & Objects
// =============================

// --------- FROM ARRAY ---------
const users = [
  ["Anish", "QA", "Delhi"],
  ["Ravi", "Dev", "Mumbai"],
  ["Sara", "Manager", "Bangalore"]
];

// Access specific row/column
console.log("First user name:", users[0][0]); // Anish
console.log("Second user role:", users[1][1]); // Dev

// Loop through array of arrays
users.forEach(user => {
  console.log(`Name: ${user[0]}, Role: ${user[1]}, City: ${user[2]}`);
});


// --------- FROM ARRAY OF OBJECTS ---------
const userObjects = [
  { name: "Anish", role: "QA", city: "Delhi" },
  { name: "Anish1", role: "QA", city: "Delhi" },
  { name: "Ravi", role: "Dev", city: "Mumbai" },
  { name: "Sara", role: "Manager", city: "Bangalore" }
];

// Access properties
console.log("First user role:", userObjects[0].role); // QA
console.log("Second user city:", userObjects[1]["city"]); // Mumbai

// Loop through objects
userObjects.forEach(user => {
  console.log(`Name: ${user.name}, Role: ${user.role}, City: ${user.city}`);
});


// --------- USING TEST DATA IN A FUNCTION ---------
function printUserData(usersData) {
  usersData.forEach(u => {
    console.log(`Testing user: ${u.name}, Role: ${u.role}, City: ${u.city}`);
  });
}

printUserData(userObjects);


// --------- DYNAMIC ACCESS ---------
// Get all names from test data
const allNames = userObjects.map(u => u.name);
console.log("All names:", allNames); // ["Anish","Ravi","Sara"]

// Find user by role first match
const qaUser = userObjects.find(u => u.role === "QA");
console.log("QA User:", qaUser); // {name: "Anish", role: "QA", city: "Delhi"}

