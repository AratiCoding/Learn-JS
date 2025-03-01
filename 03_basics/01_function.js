function myname(){
    // console.log("Arati")
}

myname()   // without () it is function reference when add () it will execute


//function definition has parameters

function add(num1,num2){  
    let result=num1+num2;
    // console.log(result)
    // return result;
    
}
add(2,3)
// add(1,2)    //arguments 

// const result=add(3,4)
// console.log("result ", result)


// function userLoggedIn(username){
//     if(!username){
//         console.log("please enter a username");
//     }
//    return `${username} is just logged in`
// }
// console.log(userLoggedIn("arati"))  //if we don't pass argument here then it will show undefined

function calculateCartPrice(...num1){
    return num1

}
// console.log(calculateCartPrice(100,200,300))


const user1={
    id:1,
    name:"Arati",
    city:"Jalna"
}
const user2={
    id:2,
    name:"Madhav",
    city:"Vrindavan"
}
function handleObject(anyobject){
    console.log(`student ID of ${anyobject.name} is ${anyobject.id} he/she lives in ${anyobject.city}.`);
}

handleObject(user2)
handleObject(user1)

