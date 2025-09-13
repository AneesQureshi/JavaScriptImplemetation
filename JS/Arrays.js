// =============================
// JavaScript Arrays - Common Methods
// =============================

const numbers = [1, 2, 3, 4, 5];


// 1. push() - Add element(s) to END of array
numbers.push(6);
console.log("push:", numbers); // [1,2,3,4,5,6]


// 2. pop() - Remove LAST element
numbers.pop();
console.log("pop:", numbers); // [1,2,3,4,5]


// 3. shift() - Remove FIRST element
numbers.shift();
console.log("shift:", numbers); // [2,3,4,5]


// 4. unshift() - Add element(s) to START
numbers.unshift(1);
console.log("unshift:", numbers); // [1,2,3,4,5]


// 5. slice(start, end) - Returns a shallow copy of part of array (non-destructive)
const sliced = numbers.slice(1, 3); 
console.log("slice:", sliced); // [2,3]


// 6. splice(start, deleteCount, ...items) - Remove/replace/add items (destructive)
const spliced = numbers.splice(2, 1, 99); // remove 1 element at index 2 and insert 99
console.log("splice removed:", spliced); // [3]
console.log("after splice:", numbers);   // [1,2,99,4,5]


// 7. map() - Transform each element and return new array
const doubled = numbers.map(num => num * 2);
console.log("map:", doubled); // [2,4,198,8,10]


// 8. filter() - Return elements that satisfy condition
const evens = numbers.filter(num => num % 2 === 0);
console.log("filter:", evens); // [2, 4]


// 9. reduce() - Accumulate values into single result
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("reduce (sum):", sum); // 111


// 10. find() - Return first element that matches condition
const found = numbers.find(num => num > 3);
console.log("find:", found); // 99 (first > 3)


// 11. forEach() - Execute callback for each element (no return)
numbers.forEach((num, index) => {
  console.log(`forEach index ${index}: value = ${num}`);
});
