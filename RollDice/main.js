let btn = document.getElementById('roll-dice');
let rollNumber = 1
btn.addEventListener('click', () => {
    let diceArray = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"];

    let diceRandom = Math.floor(Math.random() * 6);
    let diceArrayRandom = diceArray[diceRandom];
    let dice = document.getElementById('dice');


    dice.style.animation = 'none';
    

    setTimeout(function () {
        dice.style.animation = ''; 
    }, 50);

    dice.addEventListener('animationend', function onAnimationEnd() {

        dice.innerHTML = diceArrayRandom;
        
        createElements(diceArrayRandom);
        rollNumber++

        dice.removeEventListener('animationend', onAnimationEnd);
    });
});


function createElements(diceArrayRandom) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.textContent = `Roll ${rollNumber}:`;
    
    let span = document.createElement('span');
    span.innerHTML = diceArrayRandom;
    

    li.appendChild(span);
    

    ul.appendChild(li);
}
