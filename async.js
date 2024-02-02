let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promise resolved")
    },2000)
})

async function asyncfunc(){
    let result = await promise1;
    console.log(result);
   
}
asyncfunc()