let str = "HHaazzpppkkkk"
let strarr=[]

for(let i =0;i<str.length;i++){
    strarr[i]=str.charAt(i)
} 

console.log(strarr)

for(let i =0;i<strarr.length;i++){
    let currentchar=strarr[i]
    let count =1
    if (currentchar === null) continue; 
   for(let j =i+1;j<strarr.length;j++){
        if(currentchar===strarr[j]){
            count=count+1
            strarr[j]=null
        }

}
console.log(`${currentchar} = ${count} `)
}

