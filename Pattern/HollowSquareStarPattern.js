// *****
// *   *
// *   *
// *   *
// *****

let row = 6
let pattern = ""
let num;

for (let i = 1; i <= row; i++) {

    for (let num = 1; num <= row; num++) {
        if (i == 1 || i == row) {
            pattern = pattern + "*"
        } else{

              
         if (num == 1 || num == row) {
            pattern += "*"
        } else {
            pattern += " "
        }
        }
    }
        pattern += '\n'
    }

console.log(pattern)