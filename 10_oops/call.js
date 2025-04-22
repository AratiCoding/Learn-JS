function setUserName(username)
{
this.username=username;
}

function createUser(username,email,password){
    setUserName.call(username)
   
    this.email=email
    this.password=password

}

const chai=new createUser("chai","chai@gmail.com",123)
console.log(chai)