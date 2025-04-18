let title = document.querySelector('.title')
let turn = "x"
function checkWinner() {
    const square = [];
    
    // جمع القيم من المربعات
    for (let i = 1; i < 10; i++) {
        square[i] = document.getElementById('item' + i).innerHTML;
    }

    // تحديد التركيبات الفائزة
    const winPatterns = [
        [1, 2, 3], // الصف الأول
        [4, 5, 6], // الصف الثاني
        [7, 8, 9], // الصف الثالث
        [1, 4, 7], // العمود الأول
        [2, 5, 8], // العمود الثاني
        [3, 6, 9], // العمود الثالث
        [1, 5, 9], // القطر الرئيسي
        [3, 5, 7]  // القطر الثانوي
    ];

    // التحقق من الفائز
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            title.innerHTML = `${square[a]} is the Winner`;
            document.getElementById('item' + a).style.backgroundColor = '#000';
            document.getElementById('item' + b).style.backgroundColor = '#000';
            document.getElementById('item' + c).style.backgroundColor = '#000';
            endGame()
            let dotCount = 0;
            let intervalId = setInterval(() => {
                if (dotCount < 3) {
                    title.innerHTML += ".";
                    dotCount++;
                } else {
                    clearInterval(intervalId); // إيقاف التكرار بعد إضافة ثلاث نقاط
                }
            }, 1000);
            setTimeout(()=>{
                let btn = document.querySelector("button")
                btn.style.pointerEvents = 'fill'
                btn.style.opacity = '1'
            },3000)
            return;
        } 
    }
    let isDraw = true;
    for(let i = 1; i < 10; i++){
        if(square[i] ===''){
            isDraw = false
            break;
        }
    }
    if(isDraw){
        title.innerHTML = 'Drawwww!'
        endGame()
        setTimeout(() => {
            let btn = document.querySelector("button");
            btn.style.pointerEvents = 'fill';
            btn.style.opacity = '1';
        }, 1000);
    }

}

function game(id){
    let element = document.getElementById(id)
    if(turn === "x" && element.innerHTML == '') {
        element.innerHTML = 'x'
        turn = 'o'
        title.innerHTML = 'O Turn'
    }
    else if (turn === 'o' && element.innerHTML == ''){
        element.innerHTML = 'O'
        turn = 'x'
        title.innerHTML = 'X Turn'
    }
    checkWinner()
}
let sqauers = document.querySelectorAll(".square")
function endGame(){
    sqauers.forEach(square =>{
        square.style.pointerEvents = 'none'
    })
}


