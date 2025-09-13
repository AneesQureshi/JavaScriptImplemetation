let rows=3
let pattern =""
let variable=1
for(let i =1;i<=rows;i++){
for(let j=1;j<=rows-i;j++){
pattern=pattern +" "
}
    
for(let k=1;k<=2*i-1;k++){
 pattern=pattern+variable
 variable++
}
  pattern=pattern+"\n"
}
 console.log(pattern)