let x = document.getElementById("h1")
x.innerText = "Hello Earth"            //targeting html element and manipulating
console.log(x)

let p = document.querySelector("p")
let btn = document.querySelector("button")
btn.addEventListener("click",e => {
    p.classList.toggle("change")
})