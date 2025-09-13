//define array
//take one variable and put first element
//For Max : compare it with next element if next greater than replace else keep current element
//For Min : compare it with next element if next lesser than replace else keep current element
//finally print that variable value for min max 

let arr =[5,4,24,60,25]
let Minval=arr[0];
let Maxval=arr[0];
for (let i=0;i<arr.length;i++){
   
    Maxval=(arr[i+1]>Maxval)?arr[i+1]:Maxval
    Minval=(arr[i+1]<Minval)?arr[i+1]:Minval
}

console.log(`Max value from ${arr} is ${Maxval}`)
console.log(`Min value from ${arr} is ${Minval}`)

