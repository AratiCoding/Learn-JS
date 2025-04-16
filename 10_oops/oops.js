// const user={
//     username:"Arati",
//     loginCount:7,
//     signedIn:true,
//     getUserDetails:function(){
//         console.log("Got User details from database");
//     }
// }

// console.log(user.getUserDetails());


function User(username, loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

  
}
const userOne=User("Arati",12,true)
    console.log(userOne);
