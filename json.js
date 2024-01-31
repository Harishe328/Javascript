//JSON-->Javascript object notation
//JSON is a light weight format for storing and transporting data from client to server and vise versa
//JSON can't store with help of variables
let x = {
    name: "Harish",
    age: 22
}
let y = JSON.stringify(x)
console.log(y)
let z = JSON.parse(y)
console.log(z)