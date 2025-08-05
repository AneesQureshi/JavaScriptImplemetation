function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  let userName = "Anish";
  callback(userName); // Call the passed function
}

//processUser(greet); // Output: Hello Anish

setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);
setTimeout(() => {
  console.log("Arrow callback after 1 second");
}, 1000);

let numbers = [1, 2, 3];

numbers.forEach(function (num) {
  console.log("Number:", num);
});

numbers.forEach(num => console.log("Number:", num));
numbers.forEach(num=>console.log("My Number : ",num ));
