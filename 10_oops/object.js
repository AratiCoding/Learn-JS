// function multi(num){
//     return num*5;
// }

// multi.power=2
// console.log(multi(5));
// console.log(multi*power);
// console.log(multi.prototype);

function createUser(username,score){
    this.username=username;
    this.score=score;
}
createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printme=function(){
    console.log(`score is ${this.score}`);
}

const chai=new createUser("chai",20);
const tea=new createUser("arati",25);

chai.printme()