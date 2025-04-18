setInterval(()=>{
    let date = new Date()
    let d = date.getDate()
    let ms = date.getMonth()
    let y = date.getFullYear()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    h = h % 12 || 12;
    document.getElementById("hours").innerHTML = h.toString().padStart(2,'0')
    document.getElementById("minutes").innerHTML = m.toString().padStart(2,'0')
    document.getElementById("Seconds").innerHTML = s.toString().padStart(2,'0')
    day.innerHTML = `${d} ${months[ms]} ${y}`
},1000)

let day = document.getElementById('day')

const months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September',
    'October',
    'November', 
    'December'
];
