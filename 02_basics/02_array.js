const marvel_heros=["thor", "ironman", "spiderman"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// const newVar=marvel_heros.concat(dc_heros)
// console.log(newVar)
// console.log(marvel_heros[3][2])


//spread operator is preferred over concat() method
const newarr=[...marvel_heros,...dc_heros];
// console.log(newarr)


const newarr2=[1,2,3,[4,5,6],7,8,[3,4,5,[9,2]]]
const arr3=newarr2.flat(2)
// console.log(arr3)


// console.log(Array.isArray("Arati"))
// console.log(Array.from("Arati"))
// console.log(Array.from({name:"Chanda"}))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))


