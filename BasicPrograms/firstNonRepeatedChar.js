let str = "papallindrome";
let len = str.length;
let currentChar = "";
let nextchar = "";
let found = false;


//initially we consider that current char is unique char
for (let i = 0; i < len; i++) {
  currentChar = str.charAt(i);
  let isUnique = true;

  // we make it non unique if any next char matches with current char
  for (let j = 0; j < len; j++) {
    if (i !== j) {
      nextchar = str.charAt(j);
      if (currentChar === nextchar) {
        isUnique = false;
        break;
      }
    }
  }

  //if nothing matches than we find our first non repeated char
  if (isUnique ) {
    console.log("First non-repeated character: " + currentChar);
    found = true;
      break;
  }
}

if (!found) {
  console.log("No unique character found");
}
