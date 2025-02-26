
const name="arati"
const repocount=10

//console.log(name+repocount+"Value")    //not preferred (out dated)



// string interpolation in JS is used to concatenate multiple strings and 
// this is preferred way in modern JS
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

// one more way to define string 
const game=new String("x-game")
// console.log(game.length)
// console.log(game.toUpperCase())
// console.log(game.charAt(3))
// console.log(game.indexOf('g'))

const str1="Chanda"
const str2=str1.substring(0,3)
// console.log(str2)

const str3=str1.slice(-2,3)
// console.log(str3)

const str4="   arati    "

// console.log(str4.trim())

const url="https://arti.com/arti%20chanda"
// console.log(url.replace('%20','-'))
// console.log(url.includes('chanda'))

const var1="arati-hariram-chanda"
console.log(var1.split('-'))