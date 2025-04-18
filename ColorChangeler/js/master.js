// Toggle Spin Class
document.querySelector(".toglle-seting .fa-gear").onclick = function(){
    this.classList.toggle("fa-spin")
    document.querySelector(".setting-box").classList.toggle("open")
}
let mainColor = localStorage.getItem("color_option")
if(mainColor !== null){

document.documentElement.style.setProperty('--main--color', localStorage.getItem("color_option"))
}



// Switch Colors
let colorsLi = document.querySelectorAll(".colors li")
colorsLi.forEach(li =>{
    li.addEventListener("click", (e)=>{
        console.log(e.target.dataset.color)
        document.documentElement.style.setProperty('--main--color', e.target.dataset.color)
        localStorage.setItem("color_option",e.target.dataset.color)
        e.target.parentElement.querySelectorAll(".inactive").forEach(el => {
            el.classList.remove("inactive")
        })
        e.target.classList.add("inactive")

    })
})



// Landing Page
let landingPage = document.querySelector(".Landing-page")
// Get Array Of Imgs
let imgArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"]
// Change BackGround Url
landingPage.style.backgroundImage = "url('imgs/03.jpg')"

// Get Random Number
let randomNumber = Math.floor(Math.random() * imgArray.length)
console.log(randomNumber)
setInterval(function(){
// Get Random Number
let randomNumber = Math.floor(Math.random() * imgArray.length)
// Change BackGround Url
landingPage.style.backgroundImage = 'url("imgs/'+imgArray[randomNumber] +'")'
},7000)
