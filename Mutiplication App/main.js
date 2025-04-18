let userScore = document.getElementById('score')
let num1 = Math.ceil(Math.random() * 10)
let num2 = Math.ceil(Math.random() * 10)
document.getElementById('question').innerHTML = `What is ${num1} multiply by ${num2}?`
let btn = document.getElementById('btn')
let form = document.querySelector('form')
let score = JSON.parse (localStorage.getItem('score'))
if(score < 0){
    score = 0
}
userScore.innerHTML = `score:${score}`


const correctAns = num1 * num2
let answer = document.getElementById('answer')
form.addEventListener('click', ()=>{
    const userAns = +answer.value
    if(userAns == correctAns){
        score++
        updateLocaleStorage()
    }else{
        form.preventDefault()
        score--
        updateLocaleStorage()
    }
})
function updateLocaleStorage(){
    localStorage.setItem('score', JSON.stringify(score))
}