# Projects related to DOM
## project link
[click here](https://github.com/hiteshchoudhary/)
# solution code
## Project 1

```javascript

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
```

## Project 2

```javascript
const form =document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
  const height= parseInt(document.querySelector('#height').value)
  const weight= parseInt(document.querySelector('#weight').value)
  const results=document.querySelector('#results');

  if(height==='' || height < 0 || isNaN(height)){
    results.innerHTML=`Please Enter a valid height ${height}`;
  }else if(weight==='' || weight < 0 || isNaN(weight)){
    results.innerHTML=`Please Enter a valid weight ${weight}`;
  }else{
    const bmi=(weight / ((height*height) / 10000)).toFixed(2);
    results.innerHTML=`<span>${bmi}</span>`;

  }
 
})
```
## Project 3

```javascript
const clock=document.getElementById('clock');

setInterval(function(){
    let date =new Date();
    console.log(date.toLocaleTimeString());
    clock.innerHTML=date.toLocaleTimeString();
     
    
},1000)
```