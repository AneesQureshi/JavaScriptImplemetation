// Simulated async helpers (2s each)
function loginCb(username, password, cb) {
  setTimeout(() => {
    console.log("Callback: User logged in");
    cb();
  }, 2000);
}
function getUserDetailsCb(userId, cb) {
  setTimeout(() => {
    console.log("Callback: User details fetched:", userId);
    cb();
  }, 2000);
}
function getOrderDetailsCb(orderId, cb) {
  setTimeout(() => {
    console.log("Callback: Order details fetched:", orderId);
    cb();
  }, 2000);
}
function logoutCb(cb) {
  setTimeout(() => {
    console.log("Callback: Logged out");
    cb();
  }, 2000);
}

// --- CALLBACK style
loginCb("Anish", "pwd", () => {
  getUserDetailsCb(1, () => {
    getOrderDetailsCb(101, () => {
      logoutCb(() => {});
    });
  });
});

// --- PROMISE helpers (fixed setTimeout usage)
function loginP() {
  console.log("Promise: Logging in");
  return new Promise((res) => setTimeout(() => {
    console.log("Promise: User logged in");
    res();
  }, 2000));
}
function getUserDetailsP(id) {
  console.log("Promise: Fetching user details");
  return new Promise((res) => setTimeout(() => {
    console.log("Promise: User details fetched:", id);
    res();
  }, 2000));
}
function getOrderDetailsP(id) {
  console.log("Promise: Fetching order details");
  return new Promise((res) => setTimeout(() => {
    console.log("Promise: Order details fetched:", id);
    res();
  }, 2000));
}
function logoutP() {
  return new Promise((res) => setTimeout(() => {
    console.log("Promise: Logged out");
    res();
  }, 2000));
}

// --- PROMISE chaining
loginP()
  .then(() => getUserDetailsP(1))
  .then(() => getOrderDetailsP(100))
  .then(() => logoutP())
  .catch(console.error);

// --- ASYNC / AWAIT
async function runFlow() {
  try {
    await loginP();
    await getUserDetailsP(1);
    await getOrderDetailsP(102);
    await logoutP();
  } catch (err) {
    console.error(err);
  }
}
runFlow();
