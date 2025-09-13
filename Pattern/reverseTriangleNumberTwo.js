// 54321
// 4321
// 321
// 21
// 1


let row =6
let pattern=""
let variable=row

for(let i=1;i<=row;i++){
  for(let num=row-i+1;num>=1;num--){
pattern=pattern+num
  }
  pattern=pattern+'\n'
}
console.log(pattern)