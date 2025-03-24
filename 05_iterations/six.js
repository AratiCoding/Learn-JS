const mynum=[1,2,3,4,5,6,7,8,9,10]

// const newnum=mynum.map((num)=>num+10)
// console.log(newnum)

const num2=mynum.map((num)=>num*10)
                 .map((num)=>num+1)
                 .filter((num)=>num>=50);

console.log(num2)