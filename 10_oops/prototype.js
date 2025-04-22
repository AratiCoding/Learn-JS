// let myname="arati   "
// console.log(myname.trim().length);

// let heros=["thor","spiderman"];
// let heroPower={
//     thor:"Hammer",
//     spiderman:"sling",
//     getSpiderPower:function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.arati=function(){
//     console.log(`arati is present in all object`);
// }
// heroPower.arati()

// heros.arati()

// Array.prototype.heyArati=function()
// {
//     console.log("Arati says hello");
// }

// heros.arati()
// heros.heyArati()
// heroPower.heyArati()

const User={
    name:"chai",
    email:"chai@gmail.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailabel:false
}
const TASupport={
    makeAssignment:"JS Assignment",
    fulltime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="ChaiAurCode     ";
String.prototype.trueLength=function(){
    console.log(`${this}`);
  
    console.log(`true legth is :${this.trim().length}`)
}
anotherUsername.trueLength()
