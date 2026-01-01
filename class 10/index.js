//lazy loading

let btn  = document.getElementById('btn')
btn.addEventListener('click',async ()=>{
    let module = await import ('./index.js')
    module.myApp()
})