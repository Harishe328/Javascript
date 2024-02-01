// let str = "Hello good morning";
// let result = /e/.exec(str);  //return condition if its match otherwise null
// console.log(result);
// let pattern = /[A-Za-z ]/;
// let result1 = pattern.test(str)  //if condition satisfied return true otherwise false
// console.log(result1)
// let result2 = pattern.toString();   //use to change pattern to string
// console.log(result2)

//regular expression for email
let mail = document.getElementById("mail").value;
let pass = document.getElementById("pass").value;
let m = /^[a-z0-9]+[@]+[a-z]+[.][a-z]{2,3}$/;
let p = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\s\d\w])[^\s]{8,14}$/g;
let form = document.getElementById("form");

form.addEventListener("submit", function (event) {

    if (m.test(mail)) {
        document.getElementById("print").innerHTML = "Mail success";
        console.log("success")
    } else {
        document.getElementById("print").innerHTML = "Mail fail";
        console.log("Fail")
    }
    if (p.test(pass)) {
        document.getElementById("printpassword").innerHTML = "Password success";
        console.log("success")
    } else {
        document.getElementById("printpassword").innerHTML = "Password fail";
        console.log("Fail")
    }
    event.preventDefault()
})

function edit() {
    location.reload()
}