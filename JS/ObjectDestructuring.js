const person={name:"Anish",age:34,city:"Delhi"}; 
const{name,age}=person;
console.log(name); // Anish
console.log(age);  // 34
// Nested object destructuring
const employee={
    id:101,
    details:{
        firstName:"Anish",
        lastName:"Kumar",
        address:{
            city:"Delhi",
            zip:110001
        }}};
const{details:{firstName,lastName,address:{city}}}=employee;
console.log(firstName); // Anish
console.log(lastName);  // Kumar
console.log(city);      // Delhi    
// Default values
const{country="India"}=person;                                                                  
console.log(country); // India
// Renaming variables
const{age:personAge}=person;
console.log(personAge); // 34
// Function parameter destructuring
function display({name,age,city}){
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}
display(person); // Name: Anish, Age: 34, City: Delhi
// Destructuring in loops
const people=[
    {name:"Anish",age:34},
    {name:"Ravi",age:28},
    {name:"Sita",age:30}
];
for(const{name,age}of people){
    console.log(`${name} is ${age} years old.`);
}   
// Output:
// Anish is 34 years old.
// Ravi is 28 years old.
// Sita is 30 years old.
// Array destructuring
const rgb=[255,0,0];
const[r,g,b]=rgb;
console.log(`R:${r}, G:${g}, B:${b}`); // R:255, G:0, B:0
// Skipping elements
const[red,,blue]=rgb;
console.log(`R:${red}, B:${blue}`); // R:255, B:0
// Rest operator

// --------- ARRAY DESTRUCTURING ---------
const numbers = [10, 20, 30, 40, 50];

// Extract by position
const [first, second] = numbers;
console.log("Array Destructuring:", first, second); // 10 20

// Skip elements with commas
const [, , third] = numbers;
console.log("Skipped elements:", third); // 30

// Rest operator to collect remaining elements
const [one, two, ...rest] = numbers;
console.log("With rest operator:", one, two, rest); // 10 20 [30,40,50]


// --------- MIXED USE ---------
const user = {
  username: "anish123",
  details: { email: "anish@example.com", role: "QA" },
  scores: [99, 85, 92]
};

// Nested object destructuring
const { details: { email, role } } = user;
console.log("Nested object:", email, role); // anish@example.com QA

// Nested array destructuring
const [score1, , score3] = user.scores;
console.log("Nested array:", score1, score3); // 99 92




