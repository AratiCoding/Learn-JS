const facebookUser=new Object()   // singleton object
// console.log(facebookUser)

const instaUser={}
instaUser.id="abc07"
instaUser.name="arati"
instaUser.age=20
instaUser.city="Jalna"
instaUser.isLoggedIn=false
// console.log(instaUser)

const regularUser={
    email:"arati@gmail.com",
    fullname:{
        userFullName:{
            firstName:"Arati",
            lastName:"Chanda"
        }
    }
}
// console.log(regularUser.fullname.userFullName)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3)

const users=[
    {
        id:1,
        name:"arati"
    },
    {
        id:2,
        name:"chanda"
    },
    {
        id:3,
        name:"krishna"
    },
]
// console.log(instaUser)
// console.log(Object.keys(instaUser))
// console.log(Object.values(instaUser))
// console.log(Object.entries(instaUser))
// console.log(instaUser.hasOwnProperty("name"))

const course={
    course:"JS course",
    price:999,
    instructor:"Hitesh"
}

// const {price}=course
// console.log(price)

const {instructor:mentor}=course
// console.log(mentor)

