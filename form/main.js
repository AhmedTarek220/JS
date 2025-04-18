let closeBtn = document.getElementById('close')
let unvisable = document.querySelector('.unvisable')
let visable = document.querySelector('.visable')
let signBtn = document.getElementById('btn')


signBtn.addEventListener('click',()=>{
    unvisable.style.display = 'block'
    closeBtn.addEventListener('click',()=>{
        unvisable.style.display = 'none'
        visable.style.background = 'none'
    })
    visable.style.background = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))'
})

const allLables = document.querySelectorAll("label");
console.log(allLables)

allLables.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join("");
});
