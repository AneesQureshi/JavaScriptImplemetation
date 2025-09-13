let str = "Hello World!"
let j = str.length-1
let result="";

for (let i = 0; i < str.length; i++) {
  result=result+str.charAt(j)
    j--;
}
console.log(result)

let str1 = "Hello World!";
let reversed = str1.split("").reverse().join("");
console.log(reversed);
