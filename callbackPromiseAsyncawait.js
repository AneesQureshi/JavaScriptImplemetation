// // =============================
// // Callbacks vs Promises vs Promise Chaining vs Async/Await
// // =============================
// // Example task: getUser -> getOrders -> getOrderDetails
// // Each step takes some time (simulated with setTimeout)


// // --------- 1. CALLBACK STYLE ---------
// function getUser(id, callback) {
//   setTimeout(() => callback({ id, name: "Anish" }), 2000);
// }
// function getOrders(user, callback) {
//   setTimeout(() => callback(["order1", "order2"]), 2000);
// }
// function getOrderDetails(order, callback) {
//   setTimeout(() => callback({ order, details: "Order details" }), 2000);
// }

// // Nested callbacks (Callback Hell)
// getUser(1, (user) => {
//   console.log("User:", user);
//   getOrders(user, (orders) => {
//     console.log("Orders:", orders);
//     getOrderDetails(orders[0], (details) => {
//       console.log("Details:", details);
//     });
//   });
// });


// // --------- 2. PROMISE STYLE ---------
// function getUserP(id) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ id, name: "Anish" }), 2000);
//   });
// }
// function getOrdersP(user) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(["order1", "order2"]), 2000);
//   });
// }
// function getOrderDetailsP(order) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ order, details: "Order details" }), 2000);
//   });
// }

// // Basic Promise usage
// getUserP(1)
//   .then(user => {
//     console.log("User:", user);
//     return getOrdersP(user);
//   })
//   .then(orders => {
//     console.log("Orders:", orders);
//     return getOrderDetailsP(orders[0]);
//   })
//   .then(details => {
//     console.log("Details:", details);
//   })
//   .catch(err => console.error(err));


// // --------- 3. PROMISE CHAINING (cleaner) ---------
// getUserP(1)
//   .then(getOrdersP)                  // directly pass function
//   .then(orders => getOrderDetailsP(orders[0]))
//   .then(console.log)                 // details directly logged
//   .catch(console.error);


// // --------- 4. ASYNC / AWAIT ---------
// async function runFlow() {
//   try {
//     const user = await getUserP(1);
//     console.log("User:", user);

//     const orders = await getOrdersP(user);
//     console.log("Orders:", orders);

//     const details = await getOrderDetailsP(orders[0]);
//     console.log("Details:", details);
//   } catch (err) {
//     console.error(err);
//   }
// }

// runFlow();

// // Explanation

// // Callback: Works, but creates nesting and error handling is messy.

// // Promise: Flattens async flow, .then/.catch for clean error handling.

// // Promise chaining: Removes unnecessary nesting by returning Promises.

// // Async/await: Synchronous-like style, easiest to read and maintain.


// /*
// Step 1: Simulate login with username/password.

// Step 2: Once logged in, simulate fetching a user profile.

// Step 3: Once profile is fetched, simulate loading user settings.
// */


// function login(username, password, callback) {
//     console.log("User logged in");
//     console.log("waiting to get user details");
//     setTimeout(() => { callback() }, 2000);
// }



// function getUserDetails(userId, callback) {
//     console.log("User Details fetched : " + userId);
//     console.log("waiting to get Order details");
//     setTimeout(() => { callback() }, 2000);
// }

// function OrderDetails(OrderId, callback) {
//     console.log("Order Details fetched : " + OrderId)
//     console.log("waiting to logout")
//     setTimeout(() => {
//         callback();
//     }, 2000);
// }

// function Logout() {
//     console.log("Logged out")
// }


// // Using Callbacks
// login("Anish", "Pwd",  ()=> {
//     getUserDetails(1, function () {
//         OrderDetails(101, ()=> {
//             Logout()
//         })
//     })
// })

//Promise style 
function login(){
    console.log("User logged in Promise style");
    console.log("waiting to get user details");
    return new Promise((resolve)=>{setTimeout(() => { resolve() }, 2000);})

}

function getUserDetails(UserId){
 console.log("User Details fetched : " + UserId);
    console.log("waiting to get Order details");
    return new Promise((resolve)=>{setTimeout(() => { resolve() }, 2000);})
    
}

function getOrderDetails(OrderId){
    console.log("Order details fetched : " +OrderId)
    console.log("Waiting to logout")
    return new Promise((resolve)=>{setTimeout(resolve(),2000)})
}

function Logout(){
    console.log("Logged Out promise style")
}

//Promise chaining
login()
.then(()=>{
   console.log("inside first function call of promise chaining");
  return getUserDetails(1)
 
})
.then(()=>{return getOrderDetails(100)})
.then(()=>{return Logout()})

//Async await style
async function orderCheck(){
  await login();
  await getUserDetails(1);
  await getOrderDetails(102);
  await Logout
}

//orderCheck();