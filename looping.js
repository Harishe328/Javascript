let a=1

while(a<10){
    console.log(a);
    a++;
}


// do{
//     console.log(a);
//     a++;
// }while(a>10)


let str="hpw are you"
let rev=""
for(let i=str.length-1;i>=0;i--){
    rev=str.charAt(i)+rev;
}
console.log(rev)