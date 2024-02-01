class A extends Error {
    constructor(name, message) {
        super()
        this.name = name;
        this.message = message;
    }
}
let a = new A("invalid", "number should be greater than 5")
let x = 2;

try {
    if (x < 5) {
        throw new Error(a)
    } else {
        console.log("Success");
    }
} catch (error1) {
    console.error(error1)
}
