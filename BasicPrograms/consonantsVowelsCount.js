let str="My java code"
let consonantCount=0
let vowelCount=0

for(let i=0;i<=str.length;i++){
    let ch =str.charAt(i)
    if(ch>='a'&& ch<='z'){
        if('aeiou'.includes(ch)){
            vowelCount++
        }else{
            consonantCount++;
        }
    }

}
console.log(`"consonant count ${consonantCount}"`)

console.log(`"vowels count ${vowelCount}"`)