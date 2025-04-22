const descripter=Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);
const chai={
    name:"ginger chai",
    price:20,
    isAvailabel:true,
    orderChai:function(){
        console.log("chai nahi bani");
    }
}
// console.log(chai);

// console.log(Object.getOwnPropertyDescriptors(chai,"name"));
// Object.defineProperty(chai,'name',{
    // writable:false,
    // enumerable:false,
// })
// console.log(Object.getOwnPropertyDescriptors(chai,"name"));

for (const [key,value] of Object.entries(chai)) {
    if(typeof value!== "function"){

        console.log(`${key}:${value}`);    
    }

}