function Timer() {
  this.seconds = 0;
  setInterval(function () {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}
//new Timer(); // ❌ NaN or undefined – because 'this' is not what you expect

//with arrow function
function TimerArrow() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}
//new TimerArrow(); // ✅ Works – arrow function uses 'this' from Timer

//Callbacks

function test() {
let numbers = [1, 2, 3];
let doubled = numbers.map(n => n * 2); // Cleaner than using function(n) { return n * 2 }
console.log(doubled);
}

test();