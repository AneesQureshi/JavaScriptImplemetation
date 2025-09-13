// =========================
// map() vs filter() vs reduce()
// =========================

let nums = [1, 2, 3, 4, 5];

/*
map():
- Transforms each element
- Returns a new array of SAME length
*/
let squared = nums.map(x => x * x);
console.log(squared); // [1, 4, 9, 16, 25]

/*
filter():
- Selects elements based on condition
- Returns a new array (length can be smaller)
*/
let evens = nums.filter(x => x % 2 === 0);
console.log(evens); // [2, 4]

/*
reduce():
- Combines all elements into ONE result
- Can return any data type (number, object, string, etc.)
*/
let sum = nums.reduce((acc, x) => acc + x, 0);
console.log(sum); // 15
