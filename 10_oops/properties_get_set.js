function User(email,password){
   this._eamil=email
   this._password=password

   Object.defineProperty(this,'email',{
    get:function(){
        return this._email.toUpperCase()
    },
    set:function(value){
         this._email=value;
    }
   })

   Object.defineProperty(this,'password',{
    get:function(){
        return this.password.toUpperCase()
    },
    set:function(value){
         this._password=value;
    }
   })
}

const chai=new User("chai@gmail.com","chai")

console.log(chai.email);