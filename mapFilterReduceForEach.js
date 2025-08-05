let numbers=[1,2,3,4];

let doubled= numbers.map(num => num*2);
console.log(doubled);

let filtered = numbers.filter(num =>num>3)
console.log(filtered);

let sum= numbers.reduce((a,b) => (a+b),0);

console.log(sum)

