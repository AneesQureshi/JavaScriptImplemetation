// *****
// *****
// *****
// *****
// *****

let row = 5
let pattern = ""
for (let i = 1; i <= row; i++) {
    for (let i = 1; i <= row; i++) {
        pattern=pattern+"*"
    }
    pattern=pattern+'\n'
}
console.log(pattern)