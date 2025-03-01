//Imediately Invoked Function Expression(IIFE)
//to prevent global scope polution
// ()()
// remember to add semicolon in the end to end IIFE
(function chai()
{
    console.log("DB connected")
})();        //don't miss the semicolon


(function secondchai(){
    console.log("second chai")
})();

(()=>{
    console.log("this is an arrow function")
})();

((count)=>{
    console.log(`this is ${count} function`)
})("forth");