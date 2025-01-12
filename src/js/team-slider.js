
const items = document.querySelectorAll('#item');
const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const box = document.querySelector("#line");
const photo = document.querySelector(".team__img")

let basicIndex = 0;

function updateSlider() {
    items.forEach((items, index) => {
        items.style.display = index === basicIndex ? 'block' : 'none';
    });
}

leftButton.addEventListener('click', function () {
    basicIndex = (basicIndex > 0) ? basicIndex - 1 : items.length - 1;
    updateSlider();


});

rightButton.addEventListener('click', function () {
    basicIndex = (basicIndex < items.length - 1) ? basicIndex + 1 : 0;
    updateSlider();


});



const lines = document.querySelectorAll('.team__line1');

lines.forEach(line => {
    line.addEventListener('click', function () {
        lines.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});



