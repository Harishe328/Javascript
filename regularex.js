let str="Hello good morning";
let result=/e/.exec(str);  //return condition if its match otherwise null
console.log(result);
let pattern=/[A-Za-z ]/;
let result1=pattern.test(str)  //if condition satisfied return true otherwise false
console.log(result1)      
let result2=pattern.toString();   //use to change pattern to string
console.log(result2)   