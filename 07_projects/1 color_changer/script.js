const buttons=document.querySelectorAll('.button');
// console.log(buttons);
const body=document.querySelector("body");

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id=== "orange"){
            body.style.backgroundColor="orange";
        }
        if(e.target.id==="gray"){
            body.style.backgroundColor="gray";
        }
        if(e.target.id==="purple"){
            body.style.backgroundColor="purple";
        }
        if(e.target.id==="yellow"){
            body.style.backgroundColor="yellow";
        }
        if(e.target.id==="white"){
            body.style.backgroundColor="white";
        }
    })
})