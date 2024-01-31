class A {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    demo() {
        return "I am from demo function";
    }
}
let a = new A("Harish", 22)
console.log(a.demo())
console.log(a.age)
console.log(a.name)