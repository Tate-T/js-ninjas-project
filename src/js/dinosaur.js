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


let scoreInterval 


document.addEventListener('mousedown', (event) => {
    if (event.button === 0 && gameStart) {
        jump();
    }
});

setInterval(() => {
    if (!gameStart || gameOver) return; 
    const cactusX = cactus.getBoundingClientRect().left;
    const dinoX = dino.getBoundingClientRect().left;
    const cactusY = cactus.getBoundingClientRect().top;
    const dinoY = dino.getBoundingClientRect().top;

    if (cactusX < dinoX + 40 && cactusX + 20 > dinoX && dinoY + 44 > cactusY) {
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
    scoreInterval = setInterval(() => {
        if (!gameOver) {
            score++;
        }
    }, 1000);
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