// *
// **
// * *
// *  *
// *   *
// ******


let row=6
let pattern=""

for(i=1;i<=row;i++){

    for(j=1;j<=i;j++){
        if(j==1||j==i||i==row){pattern+="*"}else{pattern+=" "}
    }
pattern+='\n'

}
console.log(pattern)