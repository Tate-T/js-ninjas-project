
    const items = document.querySelectorAll('#item');
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');

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



