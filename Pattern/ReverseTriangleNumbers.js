// 54321
// 5432
// 543
// 54
// 5

let row =5
let pattern=""

for(let i=1;i<=row;i++){
  for(let num=row;num>=i;num--){
pattern=pattern+num
  }
  pattern=pattern+'\n'
}
console.log(pattern)