// 1
// 2 3
// 4 5 6
// 7 8 9 10


let row=4
let pattern=""
let variable=1
for(let i=1;i<=row;i++){
    for(num=1;num<=i;num++){
        pattern=pattern+variable +" "
        variable++
        
    }
    pattern=pattern+'\n'
}
console.log(pattern)