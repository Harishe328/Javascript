let obj = {
    name: "Harish",
    age: 22
}
let obj1 = obj;     //obj1 is an object with the properties of obj
obj1.name = "Harish Ethendran" //changes made in obj1 will reflect back to obj
console.log(obj)
console.log(obj === obj1)     //both variables reference the same object