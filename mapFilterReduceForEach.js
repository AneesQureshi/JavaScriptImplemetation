let numbers=[1,2,3,4];

let doubled= numbers.map(num => num*2);
console.log(doubled);

let filtered = numbers.filter(num =>num>3)
console.log(filtered);

let sum= numbers.reduce((a,b) => (a+b),0);

console.log(sum)

// every operation is done on the original array
console.log(numbers);
numbers.forEach(num => console.log(num*3));
// Output:  3
//          6                   
//          9
//          12
// forEach does not return a new array
console.log(numbers);
// Output: [1, 2, 3, 4]

