
const items = document.querySelectorAll('#item');
const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const lines = document.querySelectorAll('.team__line1');

let basicIndex = 0;

function updateSlider() {

    items.forEach((items, index) => {
        items.style.display = index === basicIndex ? 'block' : 'none';
    });
    lines.forEach(line => {
        line.classList.remove("active");
    })
     if (basicIndex === 0) {
         lines[0].classList.add("active");
     } else if (basicIndex === 1) {
        lines[1].classList.add("active")
     } else if (basicIndex === 2) {
         lines[2].classList.add("active")
    }
}

leftButton.addEventListener('click', function () {
    basicIndex = (basicIndex > 0) ? basicIndex - 1 : items.length - 1;
    updateSlider();


});

rightButton.addEventListener('click', function () {
    basicIndex = (basicIndex < items.length - 1) ? basicIndex + 1 : 0;
    updateSlider();


});



// lines.forEach(line => {
//     line.addEventListener('click', function () {
//         lines.forEach(l => l.classList.remove('active'));
//         this.classList.add('active');
//     });
// });



