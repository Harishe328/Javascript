//function-->Nom primitive datatype [Fundamental building block of JS]
//Normal function
function sum(a, b) {
    console.log(a + b)
}
sum(5, 6);

//Anonymus function
// function () {
//     console.log("Anonymus function")  //Anonnymus function is invoked with help of function expression
// }
// ();

//function Expression
let x = function () {
    console.log("Function Expression")
}
x();

//Immediatly invoke function expression
(function () {
    console.log("Immediatly invoke function expression");  //it will execute only once
})();

//Pure function
function demo(a, b) {
    console.log(a * b)  //output of the function is only depends upon agruments passed it
}
demo(5, 6)

//Impure function 
let n1 = 100;
function demo1(a, b) {
    console.log(a * b + n1)  //output of the function is only depends upon external factors also
}
demo1(5, 6);

//Higher order function-->the function that takes 1 or more function as arguments
function val(data) {
    console.log(data);
}
val(demo(5, 6))  //callback function passed as an argument into another function

// Arrow function-->ES6  alternative for traditional function.implicit return is possible only in arrow function
let arrow = () => {
    console.log("Arrow function")
}

let arr = () => console.log("Hello");

//Argument object
function value() {
    return arguments;
}
let v = value(5, 6, 7, 8);
console.log(v);//it will return array with key and value

//closure

function num() {
    var nu = 1;
    function num1() {
        console.log(nu);       //memory space created when nested function created to access outer function 
    }                         //variable in inner function
    num1();
}
num();