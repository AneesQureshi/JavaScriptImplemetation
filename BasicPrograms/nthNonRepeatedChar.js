let str = "papallindrome";
let len = str.length;
let currentChar = "";
let found = false;
let charNumber = 0;   
let n=1;

for (let i = 0; i < len; i++) {
  currentChar = str.charAt(i);
  let isUnique = true;

 
  for (let j = 0; j < len; j++) {
    if (i !== j && currentChar === str.charAt(j)) {
      isUnique = false;
      break;
    }
  }

  if (isUnique) {
    charNumber++;

    if (charNumber === n) {
      console.log(`${n}th non-repeated character: ` + currentChar);
      found = true;
      break; // stop after finding 2nd unique
    }
  }
}

if (!found) {
  console.log("No second unique character found");
}
