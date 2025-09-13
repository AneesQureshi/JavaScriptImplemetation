let arr=[1,2,3,4,5,6,7,9]
let ActualSum=0
let ExpectedSum=0
let Minval=arr[0]
let Maxval=arr[arr.length-1]

for (let i=0;i<arr.length;i++){
    ActualSum=ActualSum+arr[i]
}

for (let i=0;i<=Maxval;i++){
   
    ExpectedSum=ExpectedSum+i
}

let missingNumber= ExpectedSum-ActualSum

console.log(`Missing number is ${missingNumber}`)
