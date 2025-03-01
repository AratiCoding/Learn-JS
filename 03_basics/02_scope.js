// var c=300
let a=10

if(true){
    let a=20
// const b=20
// var c=30
// console.log("inside if block ",a);

}

// console.log(a)
// console.log(b)
// console.log(c)


// function one(){
//     const username="arati"

//     function two(){
//         const web="youtube"
//         console.log(username)
//     }
//     // console.log(web)
//     two()
// }
// one()

if(true){
    const username="arati"
    if(username=="arati"){
        const web="youtube"
        // console.log(username+web)
    }
    // console.log(web)

}
// console.log(username)



//fucntion
console.log(addone(2,4))
function addone(num1,num2){
    return num1+num2
}
// addone(2,4)


//function expression
// console.log(addtwo(2,3))
const addtwo= function(num1,num2){
    return num1+num2
}
console.log(addtwo(2,3))