// promise is an object representing eventual completion
//  or failure of an asynchronus operation.

// there two part in promises one is consume promises and creating promises
// resolve and rejection


const promiseOne=new Promise(function(resolve,reject){
    // do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("async task is completed");
        resolve()
    },1000);
});

// then() has direct connection to resolve

promiseOne.then(function(){
    console.log("promise consume");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()

    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
     resolve({userName:"chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);

})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"arati",password:"123"})
        }else{
            reject("ERROR: Something went wrong !")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{

    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("promise either resolved or rejected"));


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"arati",password:"123"});

        }else{
            reject("ERROR: something went wrong");
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response=await promiseFive;
    console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()


// async function getAllUsers(){
//   try{
//     const response=await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//     const data=await response.json();
//     console.log(data);
//   }catch(error){
//     console.log(error);
//   }


// }
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))