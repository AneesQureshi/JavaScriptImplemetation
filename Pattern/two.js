// 7654321
//  54321
//   321
//    1


let row = 4
let pattern  =""
for(let i=row;i>=1;i--){

    for(let space=row-i;space>=1;space--){
    pattern=pattern+ " "
}

for(let num=2*i-1;num>=1;num--){
    pattern=pattern+num
}

pattern=pattern+"\n"
}
console.log(pattern)