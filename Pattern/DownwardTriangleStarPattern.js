// *****
// ****
// ***
// **
// *

let row=5
let pattern=""

for(let i =1;i<=row;i++){
    for(star=row;star>=i;star--){pattern+="*"}
    pattern+='\n'
}
console.log(pattern)