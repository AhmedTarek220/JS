let typeTextSpan = document.getElementById('generate');

let words = ['AweSome', 'Fun', 'Cool', 'Life', 'Famous'];
const textDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    if (words.length) {
        setTimeout(type, textDelay);
    }
});

function type() {
    if (charIndex < words[index].length) {
        typeTextSpan.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, textDelay);
    } else {
        setTimeout(erase, newLetterDelay); 
    }
}

function erase() {
    if (charIndex > 0) {
        typeTextSpan.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        index++;
        if (index >= words.length) {
            index = 0; 
        }
        setTimeout(type, textDelay + 1100);
    }
}
