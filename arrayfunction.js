let arr = [1, 23, 66, 78];  //homogenius array

console.log(arr[0])    // printing array element element using index value
let arr2 = new Array();
arr2[0] = "Hello";       //adding element in array using index value
arr2[1] = "Javascript";
console.log(arr2)

let arr1 = [1, "Hi", 34, "hello", "clarity"]//heterogenius array
arr1.push("Good Morning")
console.log(arr1);
arr1.pop()
console.log(arr1);
arr1.unshift("Javascript")
console.log(arr1);
arr1.shift()
console.log(arr1);
console.log(arr1.slice(1, 3));//not includes end index value will not affect the original array
// console.log(arr1.splice(1,2));
// console.log(arr1.splice(1,2,"Harish")); //includes end index value will affect the original array
console.log(arr1.join())
console.log(arr1.join(""))
console.log(arr1.join("/"))
console.log(arr1.join("/OR/"))
console.log(arr1.reverse())        // affect the original array
console.log(arr1.indexOf("Hi"))
console.log(arr1.lastIndexOf("clarity"))
console.log(arr1.concat(arr))
let x = arr1.find((val) => val == 1)    //if value not there it returns undefined
console.log(x)
console.log(arr1.findIndex((val) => val == 34)) //if value not there it returns -1
// console.log(arr1.fill("k"))           // affect the original array
let f = [1, 2, 3, ["hi", 78, ["super"]]]
console.log(f.flat(3))
let num = [10, 34, 56, 21, 44, 53]
// let y=num.some((val)=>val<50)   //any one condition satisfied return true otherwise false
// let y=num.every((val)=>val>=10)
console.log(num.includes(34))
// let y=num.sort()  //return array in ascending order
// let y=num.sort((a,b)=>b-a);//return array in desending order
let p = num.keys();
console.log(p.next())
console.log(p.next())        //it is used to move cursor to next index value
console.log(p.next())
let q = num.values()
console.log(q.next())
console.log(q.next())
console.log(q.next())
let r = num.entries()
console.log(r.next().value)
console.log(r.next().value)
console.log(r.next().value)
let s = num.map((val, index) => {
    return val + 5
})
console.log(s)
let t = num.forEach((val, index) => {
    console.log(val, index)             //return will give undefined

})
let u = num.filter((val, index) => {
    return val > 50;        //creates new array with the element that satisfied the condition
})
console.log(u)
let v = num.reduce((acc, val) => {
    return acc + val
})
console.log(v)
let w = num.reduce((acc, val) => {
    return acc * val
})
console.log(w)
function test(a, b, ...c) {
    console.log(a)
    console.log(b)
    console.log(c)           //it returns an impure array
}
let e = test(1, 2, 3, 4, 5, 6)
console.log(Array.isArray(e))
function demo(a, b, c) {
    console.log(a, b, c)
}
demo(...num)

//Determine depth of an array
function depth(a){
    return Array.isArray(a)?1+Math.max(...a.map(t=>depth(t))):0;
}
console.log(depth(f))