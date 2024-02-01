let arr=['A','B','F','B','L','T','F']
let unique=[];
arr.forEach((val)=>{
    if (!unique.includes(val)) {
        unique.push(val);
    }
})
console.log(unique)