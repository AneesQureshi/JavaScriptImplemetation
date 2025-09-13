// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

let row=5
let pattern=""
for(let i=1;i<=row;i++){
    for(num=1;num<=i;num++){
        pattern=pattern+i+" "
    }
    pattern=pattern+'\n'
}
console.log(pattern)