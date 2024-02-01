// let str="Hello world";
// let str1="Hello Earth"
// console.log(str.length)
// console.log(str.charAt(3))
// console.log(str1.indexOf("e"))
// console.log(str.lastIndexOf("l"))
// console.log(str.concat(str1))
// console.log(str.startsWith("H"))
// console.log(str.endsWith("t"))
// console.log(str.includes("Hello"))
// console.log(str.trim())
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())
// console.log(str.repeat(3))
// console.log(str.replace("Hello","Hi"))
// console.log(str.slice(-1))
// console.log(str.substring(2,5))//negative value will give full string
// let a=str.split()
// console.log(a)
// let b=str.split("")
// console.log(b)
// let c=str.split(" ")
// console.log(c)
// let st="polce";
// console.log(st.toLocaleLowerCase())
// console.log(st.toLocaleUpperCase())

let n1 = "hello sir good morning";
const n2 = n1.split(" ");  //["hello","sir","good","morning"]
for (let i = 0; i < n2.length; i++) {
    let a = n2[i].charAt(0).toUpperCase();
    let b = n2[i].slice(1).toLowerCase()
    n2[i] = a + b;
}
n1=n2.join().replaceAll(","," ")
console.log(n1);
