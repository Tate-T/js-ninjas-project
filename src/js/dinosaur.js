const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const title = document.querySelector('.dinosaur__title');
const restartButton = document.getElementById('restartButton');
const endButton = document.getElementById('endButton');
const instruction = document.getElementById('instruction');

let isJumping = false;
let score = 0;
let gameOver = false;


function jump() {
    if (isJumping || gameOver) return;
    isJumping = true;

    dino.classList.add('jump');

    setTimeout(() => {
        dino.classList.remove('jump');
        isJumping = false;
    }, 500); // 
}

// Увеличение счета
const scoreInterval = setInterval(() => {
    if (!gameOver) {
        score++;
    }
}, 1000);


document.addEventListener('mousedown', (event) => {
    if (event.button === 0) { 
        jump();
    }
});

// Проверка столкновения каждые 10 мс
setInterval(() => {
    const cactusPosition = cactus.getBoundingClientRect().left;
    const dinoPosition = dino.getBoundingClientRect().left;


    if (cactusPosition < dinoPosition + 40 && cactusPosition + 20 > dinoPosition) {

        score++;
    }
}, 10);

// Обработчик события для кнопки перезапуска
restartButton.addEventListener('click', restartGame);

// Обработчик события для кнопки завершения игры
endButton.addEventListener('click', endGame);

// Функция перезапуска игры
function restartGame() {
    isJumping = false;
    score = 0;
    gameOver = false;
    cactus.style.animation = ''; 
    cactus.style.right = '-40px'; 
    title.textContent = 'Google динозавр'; 
    instruction.style.display = 'block'; 
    restartButton.style.display = 'none'; 


    // Запускаем счет заново
    setInterval(() => {
        if (!gameOver) {
            score++;
        }
    }, 1000);
}

// Функция завершения игры
function endGame() {
    gameOver = true;
    clearInterval(scoreInterval);
    cactus.style.animation = 'none'; 
    title.textContent = 'Игра окончена! Ваш счет: ' + score;
    instruction.style.display = 'none'; 
    restartButton.style.display = 'none'; 
    endButton.style.display = 'none'; 
}