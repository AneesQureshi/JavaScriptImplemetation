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
