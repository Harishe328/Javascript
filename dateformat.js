let x=new Date();
x.setFullYear(2001,9,10);
x.setHours(1)
let y=x.getHours()
let y1=x.getMinutes()
let y2=x.getSeconds()
console.log(y,y1,y2)
let z=x.getDate()         //Date-->1-31
let z1=x.getDay()         //Day-->0-6
console.log(z,z1)

