const coding=['js','Java','cpp','py','ruby','php']
// coding.forEach(function (item){
//     console.log(item);
// })

// coding.forEach((item,index,arr)=>{
//     console.log(item, index,arr);
// })

const myCoding=[
    {
        lang:"Javascript",
        shortname:"JS"
    },
    {
        lang:"Python",
        shortname:"PY"
    },
    {
        lang:"Javascript",
        shortname:"JS"
    },
]

// myCoding.forEach((item)=>{
//     console.log(item.shortname);
// })

// const value=coding.forEach((item)=>{
//     return item;
// })
// console.log(value);

// const mynum=[1,2,3,4,5,6,7,8,9,10]

// const newnum=mynum.filter((num)=>{
//    return  num>4
// })
// console.log(newnum);

const books=[
    { title:"Book one", genre:"History",edition:1998},
    { title:"Book two", genre:"Fiction",edition:1999},
    { title:"Book three", genre:"History",edition:1996},
    { title:"Book four", genre:"Non Fiction",edition:1996},
    { title:"Book five", genre:"Fiction",edition:1997},
    { title:"Book six", genre:"History",edition:1998}
]

const usersbook=books.filter((book)=> book.genre==="History");
// console.log(usersbook);

const user2=books.filter((book)=>{
    return book.edition<=1998 && book.genre ==="Fiction"
})
console.log(user2)