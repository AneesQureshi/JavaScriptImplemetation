// =============================
// Looping Through JSON Responses
// =============================

// Example JSON response (like from an API)
const response = {
  users: [
    { id: 1, name: "Anish", role: "QA" },
    { id: 2, name: "Ravi", role: "Dev" },
    { id: 3, name: "Sara", role: "Manager" }
  ],
  status: "success"
};

// --------- LOOP THROUGH ARRAY INSIDE JSON ---------
response.users.forEach(user => {
  console.log(`ID: ${user.id}, Name: ${user.name}, Role: ${user.role}`);
});

// --------- ACCESSING SPECIFIC FIELDS ---------
const allNames = response.users.map(u => u.name);
console.log("All names:", allNames); // ["Anish","Ravi","Sara"]

const firstUser = response.users[0];
console.log("First user role:", firstUser.role); // QA

// --------- FINDING DATA ---------
const devUser = response.users.find(u => u.role === "Dev");
console.log("Dev User:", devUser); // {id:2, name:"Ravi", role:"Dev"}

// --------- NESTED JSON EXAMPLE ---------
const nestedResponse = {
  data: {
    teams: [
      { team: "Alpha", members: [{ name: "A1" }, { name: "A2" }] },
      { team: "Beta", members: [{ name: "B1" }, { name: "B2" }] }
    ]
  }
};

// Loop through nested JSON
nestedResponse.data.teams.forEach(team => {
  console.log("Team:", team.team);
  
  team.members.forEach(member => {
    console.log("  Member:", member.name);
  });
});
