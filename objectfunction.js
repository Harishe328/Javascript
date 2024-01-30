let obj={
    Name:"Harish",
    age:22,
    comp:"claritytts"
}
obj.designation="GET"    //add property using . notation
obj["city"]="chennai"    //add property using [] notation
console.log(obj)
console.log(obj.city)    //access element using key name
let en=Object.entries(obj)
console.log(en)
console.log(Object.keys(obj))
console.log(Object.values(obj))
Object.seal(obj);       //we can't delete & add property but we can modify          
obj.city="Bangalore"
console.log(obj)
console.log(Object.isSealed(obj)) //check whethere obj is sealed or not
Object.freeze(obj)        //we can't delete,add,modifed the properties
console.log(Object.isFrozen(obj))
let obj1={
    a:1,
    b:2
}
let obj2={
    b:4,
    c:6
}
let obj3=Object.assign(obj1,obj2)
console.log(obj3)

function test(){
    return `My name is ${this.Name}`  //this key refer to windows object when we use call method it 
}                                     // refer to object(obj)
let t=test.call(obj)
console.log(t)

let t1={
    a:45,
    b:55
}
function test1(c,d){
    return c+d+this.a+this.b
}
let t2=test1.call(t1,3,6)
console.log(t2)
let t3=test1.apply(t1,[2,8])
console.log(t3)
let t4=test1.bind(t1,4,7)
console.log(t4())            //it should be call as function