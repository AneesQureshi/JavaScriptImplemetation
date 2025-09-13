//spread
function sum1(a, b, c) {
  return a + b + c;
}

const nums = [10, 20, 30];
console.log(sum1(nums[0],nums[1],nums[2])); // 60
console.log(sum1(...nums)); // 60

// Rest in Function Parameters
function logAll(first, ...others) {
  console.log(first);    // "Hello"
  console.log(others);   // ["World", "!"]
}

logAll("Hello", "World", "!");

//Rest in Object Destructuring
const user = { name: "Anish", age: 32, city: "Delhi" };
const { name, ...rest } = user;

console.log(name); // Anish
console.log(rest); // { age: 32, city: "Delhi" }


