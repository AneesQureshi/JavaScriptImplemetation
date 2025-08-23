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
