function test() {
let fruits = ["Apple", "Banana", "Mango"];
let person = { name: "Anish", age: 30, city: "Delhi" };

// for loop
console.log("== For loop ==");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// while loop
console.log("\n== While loop ==");
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

// do...while loop
console.log("\n== Do...While loop ==");
let j = 0;
do {
  console.log(fruits[j]);
  j++;
} while (j < fruits.length);

// for...of loop (for arrays or iterables)
console.log("\n== For...of loop ==");
for (let fruit of fruits) {
  console.log(fruit);
}

// for...in loop (for objects)
console.log("\n== For...in loop ==");
for (let key in person) {
  console.log(key + ":", person[key]);
}

}

test();