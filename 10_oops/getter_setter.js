class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){
        return this._eamil.toUpperCase()
    }
    set email(value){
    this._email=value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
    this._password=value
    }
}

const arati=new User("arati@gmail.com","abc");
console.log(arati);
