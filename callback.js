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



// Callback Hell
getUser(id, function(user) {
  getOrders(user, function(orders) {
    getOrderDetails(orders[0], function(details) {
      processOrder(details, function(result) {
        console.log("Done:", result);
      });
    });
  });
});


// Cleaner with Promises
getUser(id)
  .then(getOrders)
  .then(orders => getOrderDetails(orders[0]))
  .then(processOrder)
  .then(result => console.log("Done:", result))
  .catch(err => console.error(err));

  // Not only readability. Problems with nested callbacks:
//
// Readability – code forms the "pyramid of doom," hard to follow.
//
// Error handling – each callback must catch its own errors, no central catch.
//
// Maintainability – adding new async steps means editing deep inside nested code.
//
// Scalability – hard to reuse or compose logic, since flow is locked inside nested functions.
//
// Inversion of control – callback execution is controlled by the provider function, not you. 
// It might call multiple times or never.
//
// So the issue is readability + reliability + error handling + maintainability.
// Promises and async/await solve these issues.
// Example functions returning Promises
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ id: id, name: "Anish" }), 1000);
  });
}
function getOrders(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(["order1", "order2"]), 1000);
  });
}
function getOrderDetails(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ order: order, details: "Details of " + order }), 1000);
  });
}
function processOrder(details) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Processed " + details.order), 1000);
  });
}

// Example user ID
const id = 1;
// Start the process
processUser(greet); // Output: Hello Anish

// Using Promises to avoid callback hell
getUser(id)
  .then(getOrders)
  .then(orders => getOrderDetails(orders[0]))
  .then(processOrder)
  .then(result => console.log("Done:", result))
  .catch(err => console.error(err));
// Output after ~4 seconds: Done: Processed order1
// This is much cleaner and easier to read/maintain.