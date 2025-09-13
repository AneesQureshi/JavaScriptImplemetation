function test() {
let day = "Friday";
let temperature = 35;

// if-else if-else block
if (temperature > 40) {
  console.log("It's too hot outside!");
} else if (temperature >= 30 && temperature <= 40) {
  console.log("It's warm. Stay hydrated.");
} else {
  console.log("Weather is pleasant.");
}

// switch statement
switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Friday":
    console.log("It's almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy your weekend!");
    break;
  default:
    console.log("Just another weekday.");
}

}

test();