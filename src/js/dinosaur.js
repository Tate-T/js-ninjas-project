const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
const title = document.querySelector('.dinosaur__title');
const restartButton = document.querySelector('#restartButton');
const endButton = document.querySelector('#endButton');

const startButton = document.querySelector("#startButton");


const GameStateInitial = 'game_state_initial';
const GameStatePlaying = 'game_state_playing';
const GameStateOver = 'game_state_over';


cactus.style.animation = 'none';
let isJumping = false;
let score = 0;
let gameState = GameStateInitial;
let scoreInterval = undefined;


function jump() {
    if (gameState !== GameStatePlaying) return;
    if (isJumping) return;
    isJumping = true;

    dino.classList.add('jump');

    setTimeout(() => {
        dino.classList.remove('jump');
        isJumping = false;
    }, 500);
}

document.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        jump();
    }
});

setInterval(() => {
    if (gameState !== GameStatePlaying) return;

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
    gameState = GameStatePlaying;
    isJumping = false;
    score = 0;
    cactus.style.animation = '';
    cactus.style.right = '-40px';
    title.textContent = 'Google динозавр';
    restartButton.style.display = 'none';
    endButton.style.display = 'block';
    scoreInterval = setInterval(() => {
        if (gameState !== GameStateOver) {
            score++;
        }
    }, 1000);
}

function endGame() {
    gameState = GameStateOver;
    clearInterval(scoreInterval);
    cactus.style.animation = 'none';
    title.textContent = 'Игра окончена! Ваш счет: ' + score;
    restartButton.style.display = 'block';
    endButton.style.display = 'none';
}