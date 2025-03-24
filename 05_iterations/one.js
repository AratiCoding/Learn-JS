//for

// for (let i = 0; i < 10; i++) {
//     const element = i;

//     if(element==7){
//         console.log(`Outer loop value is ${i}`);
//     }
//     console.log(element)

// }

// for(i=0;i<=10;i++){
//     console.log(`this is outer loop ${i}`)
//     for(j=1;j<=10;j++){
//         // console.log(`this is inner loop ${j}`)
//         console.log(i + '*' + j + ' = ' + i*j);
//     }
// }

// const colors=["orange","red","white","blue"];
// console.log(colors.length)
// for (let index = 0; index < colors.length; index++) {
//     const element = colors[index];
//     console.log(element);
// }

for (let index = 0; index < 10; index++) {
    if(index==5){
        console.log(`this is no ${index}`);
        // break;
        continue;
    }
    console.log(`this is value ${index}`)
    
}