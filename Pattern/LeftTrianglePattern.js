// *
// **
// ***
// ****
// *****


let row = 5
let pattern= ""

for ( let i= 1;i<=row;i++){
    // for(let space=i;space<=row-1;space++){
    //     pattern+=" "
    // }
    for(let star=1;star<=i;star++){
        pattern+="*"
    }
    pattern+='\n'
    
}
console.log(pattern)