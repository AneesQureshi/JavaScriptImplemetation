// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let rows=5
let pattern =""
for(let i =1;i<=rows;i++){
for(let j=1;j<=rows-i;j++){
pattern=pattern +" "
}
    
for(let k=1;k<=2*i-1;k++){
 pattern=pattern+k
}
  pattern=pattern+"\n"
}
 console.log(pattern)