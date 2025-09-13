function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function doWork() {
  console.log("Task started");

  // This "pauses" here, but only for this function
  await delay(3000);

  console.log("Task resumed after 3 seconds");
}

doWork();

// Meanwhile, setInterval keeps running:
let counter = 0;
const intervalId=setInterval(() => {
  console.log("Tick:", ++counter);

   if (counter === 5) {
    clearInterval(intervalId);
    console.log("Stopped ticking!");
  }


}, 1000);   
