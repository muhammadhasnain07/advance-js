console.log('line 1')
setTimeout(function(){
    console.log('line 2')
}, 3000)
console.log('line 3')
//promises:
let p = new Promise(function(resolve , reject){
let num = 2 + 3
if (num == 5){
    resolve('success')
}
else{
    reject('rejected')
}
})
p.then(function(m){
    document.getElementById('para').innerHTML = m 
})
p.catch((msg)=>{
    document.write(msg)
})
// console.log(p)
// document.getElementById('para').innerHTML