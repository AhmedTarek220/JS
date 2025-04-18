let btn = document.getElementById('btn')
let answer = document.querySelector('.answer')
let input = document.querySelector('input')

btn.addEventListener('click',()=>{
    if(input.value === ''){
        alert('Please Enter Your BirthDay')
    }else{
        let date = new Date().getFullYear()
        let updatedAnswer = new Date(input.value).getFullYear()
        const result = date - updatedAnswer
        answer.innerHTML = `Your Age Is ${result} Years Old`
    }

})
