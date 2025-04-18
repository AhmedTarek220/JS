const toggler = document.getElementById('switch')
let label = document.querySelector('label')

toggler.addEventListener('click',()=>{
    // if(toggler.checked){
    //     document.body.style.backgroundColor = 'black'
    //     label.style.backgroundColor = 'white'
    // }else{
    //     document.body.style.backgroundColor = 'white'
    //     label.style.backgroundColor = 'black'
    // }
    toggler.checked? 
    (document.body.style.backgroundColor = 'black', label.style.backgroundColor = 'white'):
    (document.body.style.backgroundColor = 'white',label.style.backgroundColor = 'black')
})