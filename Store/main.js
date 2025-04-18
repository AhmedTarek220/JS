let bottomWear = document.getElementById('bottomWear');
let topWear = document.getElementById('topWear')
let jackets = document.getElementById('jackets')
let watches = document.getElementById('watches')
let all = document.getElementById('all')
let productContainer = document.querySelector('.product-container');
let imageBox = document.querySelectorAll('.image-box');
const searchInput = document.getElementById('searchinput')
const searchBtn = document.getElementById('search')



searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim(); // تحويل النص إلى أحرف صغيرة وإزالة المسافات الزائدة
    productContainer.innerHTML = ''; // تفريغ الحاوية

    imageBox.forEach((box) => {
        // التحقق من النصوص أو الفئات التي تحتوي على النص المدخل
        if (box.textContent.toLowerCase().includes(query) || 
            [...box.classList].some((className) => className.toLowerCase().includes(query))) {
            productContainer.appendChild(box.cloneNode(true));
        }
    });
});



function filterBoxes(id) {
    productContainer.innerHTML = '';

    // تحويل id إلى أحرف صغيرة
    const lowerCaseId = id.toLowerCase();

    // عرض كل العناصر إذا كان id هو "all"
    if (lowerCaseId === 'all') {
        imageBox.forEach((box) => {
            productContainer.appendChild(box.cloneNode(true));
        });
    } else {
        // عرض العناصر المطابقة للفئة
        imageBox.forEach((box) => {
            // التحقق من الفئات باستخدام toLowerCase
            if ([...box.classList].some((className) => className.toLowerCase() === lowerCaseId)) {
                productContainer.appendChild(box.cloneNode(true));
            }
        });
    }
}



