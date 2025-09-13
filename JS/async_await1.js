function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data received!"), 2000);
  });
}

async function process() {
    console.clear();
console.log("Hello again!");

  console.log("Fetching...");
  
  const result = await fetchData();   // waits here without blocking
  console.log(result);
  
  console.log("Processing finished.");
}

process();
