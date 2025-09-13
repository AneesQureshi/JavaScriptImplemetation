// 12345
// 1234
// 123
// 12
// 1

let row =6
let pattern=""

for(let i=1;i<=row;i++){
  for(let num=1;num<=row-i;num++){
pattern=pattern+num
  }
  pattern=pattern+'\n'
}
console.log(pattern)