const arr=[1,2,3,4,6,7,"arati",true]
const myHeros=["shaktiman", "nagraj"]
const myarr=new Array(1,2,3,4,5,6)
// console.log(myarr)
// console.log(arr[2])

myarr.push(7)
myarr.unshift(0)
 myarr.shift(0)
 myarr.pop(7)

// console.log(myarr)
// console.log(myarr.includes(4))
// console.log(myarr.indexOf(4))

const arr3=myarr.join()
// console.log(arr3)
// console.log(typeof arr3)



//***     slice and splice     ****/
console.log("A " ,myarr)
const arr4=myarr.slice(1,4)
console.log(arr4)
console.log("B ",myarr)

const arr5=myarr.splice(1,4)
console.log(arr5)
console.log("c ",myarr)