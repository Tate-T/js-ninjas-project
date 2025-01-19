const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
const title = document.querySelector('.dinosaur__title');
const restartButton = document.querySelector('#restartButton');
const endButton = document.querySelector('#endButton');
const instruction = document.querySelector('#instruction');
const startButton = document.querySelector("#startButton");

let isJumping = false;
let score = 0;
let gameOver = false;
let gameStart = false;

function jump() {
    if (isJumping || gameOver) return;
    isJumping = true;

    dino.classList.add('jump');

    setTimeout(() => {
        dino.classList.remove('jump');
        isJumping = false;
    }, 500);
}

const scoreInterval = setInterval(() => {
    if (!gameOver) {
        score++;
    }
}, 1000);

document.addEventListener('mousedown', (event) => {
    if (event.button === 0 && gameStart) {
        jump();
    }
});

setInterval(() => {
    if (!gameStart || gameOver) return; 
    const cactusPosition = cactus.getBoundingClientRect().left;
    const dinoPosition = dino.getBoundingClientRect().left;

    if (cactusPosition < dinoPosition + 40 && cactusPosition + 20 > dinoPosition) {
        endGame();
    }
}, 10);

restartButton.addEventListener('click', restartGame);
endButton.addEventListener('click', endGame);




function restartGame() {
    isJumping = false;
    score = 0;
    gameOver = false;
    gameStart = true; 
    cactus.style.animation = '';
    cactus.style.right = '-40px';
    title.textContent = 'Google динозавр';
    instruction.style.display = 'block';
    restartButton.style.display = 'none'; 
}

function endGame() {
    gameOver = true;
    clearInterval(scoreInterval);
    cactus.style.animation = 'none';
    title.textContent = 'Игра окончена! Ваш счет: ' + score;
    instruction.style.display = 'none';
    restartButton.style.display = 'block'; 
    endButton.style.display = 'none';
}