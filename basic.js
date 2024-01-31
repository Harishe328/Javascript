//variables ->var,let ,const
// let & const introduced in ES6

var a;   //Declaration
a = 10;
console.log(a)    //initialzation
a = 20;    //Re-initialzation
console.log(a)
a = "HI";  //Re-declaration
console.log(a)
var d = 10
var d = "HI"

let b;
b = 30;
console.log(b)
b = 40;
console.log(b)
// let c=40;          //Re-declaration not possible
// let c="hi"

const ch = 40;         //Re-initialzation & Re-declaration not possible

//Datatypes
//String
let Name = "Harish"
let age = 22;
console.log("My name is " + Name + " My age is " + age);
console.log('My name is ' + Name + ' My age is ' + age);
console.log(`My name is ${Name} My age is ${age}`);
//obj-->string
let str = new String("Hello");
console.log(typeof (str));
let x = str.valueOf();
console.log(x)
console.log(typeof (x));
//primitive datatype -->string
let x1 = 100
let y = String(x1)
console.log(typeof (x1))

//Number
let n1 = 10;
console.log(n1);
console.log(typeof (n1));
//obj-->number
let n = new Number(100)
console.log(typeof (n));
let n2 = n.valueOf();
//primitive datatype -->Number
let n3 = Number(x)
console.log(n3)
console.log(typeof (n3))

//undefined  //variable that not been assigned a value it said to be undefinrd
var a;
console.log(a);        //undefined

//Null    //Null represent empty value or absents of object value
let p = null;
console.log(p);
console.log(typeof (p));  //-->it will return as object 

//Boolean
let t = true;
console.log(typeof (t))
//obj-->Boolean
let t1 = new Boolean(true);
let t2 = t1.valueOf()
//primitive datatype-->boolean
let t3 = "true";
let t4 = Boolean(t3)
console.log(typeof (t4))

//symbol-->ES6
let s1 = Symbol(100)
let s2 = Symbol(100)
console.log(s1 == s2)//-->return false because both will return unique value

//Bigint-->ES8
let i = 10n   //->number suffix with n
console.log(typeof (i));

