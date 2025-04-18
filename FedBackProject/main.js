// تعريف العناصر من DOM
const ul = document.querySelector('ul');
const lis = document.querySelectorAll('li');
const activeNow = document.querySelector('.active');
const inactive = document.querySelector('.inactive');
const mark = document.querySelector('.mark');
const submit = document.getElementById('btn');

lis.forEach((li) => {
    li.addEventListener('click', () => {
        lis.forEach((otherLi) => {
            otherLi.classList.remove('classActive');
            otherLi.style.pointerEvents = '';
        });

        li.classList.add('classActive');
        li.style.pointerEvents = 'none';

        mark.textContent = `You Selected ${li.textContent} out of 5`;
    });
});

submit.addEventListener('click', () => {
    activeNow.classList.add('hidden');   
    inactive.classList.remove('hidden');
});
