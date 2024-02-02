let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let x = 0;
        if (x < 2) {
            // resolve('Promise resolved')
            resolve("promise resolved 1")
        }
        else {
            reject('promise rejected 1')
        }
    },2000);
});


// promise1.then(function(value){
//     document.getElementById("h1").innerHTML = value;
// }).catch(function(value){

//     document.getElementById("h1").innerHTML = value;
// }).finally(()=>{
//     console.log("Experiment completed");
// })

let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promise resolved  2")
    }, 1000)
})
let promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promise resolved 3")
    }, 2500)
})


// let n1 = prompt("Please enter the name")
// let promise4 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         if (n1 === "Harish") {
//             resolve("Promise resolved ")
//         } else {
//             reject("Promise reject ")
//         }
//     },1000)
// })
// promise4.then(function(value){
//         document.getElementById("h1").innerHTML = value;
//     }).catch(function(value){
//         document.getElementById("h1").innerHTML = value;
//     }).finally(()=>{
//         console.log("Experiment completed");
//     })


let a = document.createElement("h2")
a.setAttribute("id", "h2")
document.body.appendChild(a);


// Promise.all([promise1, promise2, promise3,promise4]).then(() => {
//     document.getElementById("h2").innerText = "All Promise are resolved";
//     console.log("Yes");
// }).catch(() => {
//     document.getElementById("h2").innerText = "Some promise are in rejected state";
//     console.log("No");
// }).finally(() => {
//     console.log("Experiment completed");
// })

// Promise.allSettled([promise1, promise2,promise4,promise3]).then((results) => 
//     results.forEach((result) => console.log(result.status)),
// )

// Promise.any([promise1, promise2, promise3,promise4]).then(() => {
//         document.getElementById("h2").innerText = "Some Promise are resolved";
//         console.log("Yes");
//     }).catch(() => {
//         document.getElementById("h2").innerText = "All promise are in rejected state";
//         console.log("No");
//     }).finally(() => {
//         console.log("Experiment completed");
//     })

Promise.race([promise1, promise2, promise3]).then((value) =>

    document.getElementById("h1").innerHTML = value,

);
