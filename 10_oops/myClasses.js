
class User{
    constructor(username,email,password){
        this.username=username
        this.password=password
        this.email=email
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUppercase()}`
    }

}

const chai=new User("chai","chai@gmail.com","123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene


function User(username,email,password){
    this.username=username
    this.password=password
    this.email=email

}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
User.prototype.changeUsername=function(){
    return `${this.username.toUppercase()}`
}

const tea=new createUser("tea","tea@gmail.com","1234")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());