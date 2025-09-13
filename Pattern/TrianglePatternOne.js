// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let rows=10
let pattern=""
for(let i =1;i<=rows;i++){
    for( num =1;num<=i;num++){
pattern=pattern+num+" "
    }
    pattern=pattern+'\n'
}
console.log(pattern)