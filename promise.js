let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let x = 0;
        if (x < 2) { 
            resolve('Promise resolved')
         }
        else {
            reject('promise rejected')
        }
    }, 1000);
});


promise1.then(function(value){
    document.getElementById("h1").innerHTML = value;
}).catch(function(value){
    document.getElementById("h1").innerHTML = value;
})



