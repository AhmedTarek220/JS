let textArea = document.getElementById('textarea')
let totalCharater = document.querySelector('.total-character')
let totalRemaining = document.querySelector('.total-remaining')
totalRemaining.innerHTML = textArea.maxLength

textArea.addEventListener('input',()=>{
    totalCharater.innerHTML = textArea.value.length
    totalRemaining.innerHTML = textArea.maxLength - textArea.value.length
})