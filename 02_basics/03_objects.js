//singleton  (object created with constructor)
//Object.create        //this called object through constructor



//object literals

const mySym=Symbol("key1")
const jsObject={
    name:"arati",
    "Last name":"Chanda",
    [mySym]:"sym1",
    age:24,
    email:"arati@gmail.com",
    location:"Jalna",
    isLoggedIn:false,
    lastLoginDay:["monday","Tuesday"]

}

// console.log(jsObject.email)
// console.log(jsObject["email"])
// console.log(jsObject["Last name"])
// console.log(typeof jsObject[mySym])

// Object.freeze(jsObject)
jsObject.greeting=function(){
    console.log("Hello JS ");
}
console.log(jsObject.greeting())

jsObject.greeting2=function(){
    console.log(`Hello ${this.name}`);
}
console.log(jsObject.greeting2())