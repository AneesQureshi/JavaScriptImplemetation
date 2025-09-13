

// define arr
// define new arr
// hold first element as current element
// compare current element with next element upto last element
// if both are equal then skip 
// else (when both are not equal then until end)then 
//     add this element to new array 

// iterate until current element reach till last element 
// print new array 

let arr = [1, 2, 3, 1, 2, 4, 5];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  let current = arr[i];
  let isDuplicate = false;

  // compare current with every later element
  for (let j = i + 1; j < arr.length; j++) {
    if (current === arr[j]) {
      isDuplicate = true;
      break;
    }
  }

  // only add if no duplicate found later
  if (!isDuplicate) {
    newArr.push(current);
  }
}

console.log("Unique array (your style):", newArr);


let arr1 = [1, 2, 3, 1, 2, 4, 5];
let uniqueArr = [];

for (let i = 0; i < arr1.length; i++) {
  let current = arr[i];

  // add only if not already present in uniqueArr
  if (!uniqueArr.includes(current)) {
    uniqueArr.push(current);
  }
}

console.log("Unique array (cleaner style):", uniqueArr);



