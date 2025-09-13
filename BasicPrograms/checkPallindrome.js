let str="madam"
let j = str.length
let result="";

for (let i = 0; i <= str.length; i++) {
  result=result+str.charAt(j)
    j--;
}

if (result==str){
console.log(`"${str} is pallindrome"`)
}else{
console.log(`"${str} is Not a  pallindrome"`)
}
