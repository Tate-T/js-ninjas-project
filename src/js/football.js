const ball = document.querySelector('#football-ball');
const gates = document.querySelector('#football-gates');
const field = document.querySelector('#football-field');
const countOutput = document.querySelector('#football-count');
const button = document.querySelector(`[data-football="play"]`);
const backdrop = document.querySelector(`[data-football="backdrop"]`);
const gameOver = document.querySelector(`[data-football="end"]`);
const timeOutput = document.querySelector('#football-time');
const spanOutput = document.querySelector('#football-output');
const restartBtn = document.querySelector(`[data-football="restart"]`);
let countOfGoals = 0;
let timeScore = 30;
timeOutput.textContent = `0:${timeScore}`;
let isPlaying = false;
let isGoal = false;

const ballWidth = ball.scrollWidth;
const ballHeight = ball.scrollHeight;
let ballX = 60 + ballWidth / 2;
let ballY = (field.scrollHeight - ballHeight) / 2 + ballHeight / 2;

ball.style.left = `${ballX}px`;
ball.style.top = `${ballY}px`;

const gatesWidth = gates.scrollWidth;
const gatesHeight = gates.scrollHeight;
const gatesX = field.scrollWidth - gatesWidth - 30;
const gatesY = (field.scrollHeight - gatesHeight) / 2;

gates.style.right = `${30}px`;
gates.style.top = `${gatesY}px`;

function setTime() {
  const interval = setInterval(() => {
    if (timeScore > 0) {
      timeScore -= 1;
      timeOutput.textContent = `0:${String(timeScore).padStart(2, '0')}`;
    } else {
      isPlaying = false;
      spanOutput.textContent = `${countOfGoals}`;
      gameOver.classList.toggle('is-hidden');
      clearInterval(interval);
    }
  }, 1000);
}

restartBtn.addEventListener('click', () => {
  isPlaying = true;
  countOfGoals = 0;
  timeScore = 30;
  timeOutput.textContent = `0:${timeScore}`;
  gameOver.classList.toggle('is-hidden');
  setTime();
});

button.addEventListener('click', () => {
  isPlaying = true;
  backdrop.classList.add('is-hidden');
  setTime();
});

field.addEventListener('click', e => {
  if (!isPlaying || isGoal) {
    return;
  }
  let ballX = e.offsetX;
  let ballY = e.offsetY;

  if (ballX < ballWidth / 2) {
    ballX = ballWidth / 2;
  } else if (ballX > field.scrollWidth - ballWidth / 2) {
    ballX = field.scrollWidth - ballWidth / 2;
  }
  if (ballY < ballWidth / 2) {
    ballY = ballWidth / 2;
  } else if (ballY > field.scrollHeight - ballHeight / 2) {
    ballY = field.scrollHeight - ballHeight / 2;
  }

  if (ballX + ballWidth / 2 > gatesX + gatesWidth) {
    ballX = gatesX + gatesWidth - ballWidth / 2;
    ball.style.left = `${ballX}px`;
  }

  if (
    ballX - ballWidth / 2 >= gatesX &&
    ballX + ballWidth / 2 <= gatesX + gatesWidth &&
    ballY - ballHeight / 2 < gatesY
  ) {
    ballY = gatesY + ballHeight / 2;
    ball.style.top = `${ballY}px`;
  } else if (
    ballX - ballWidth / 2 >= gatesX &&
    ballX + ballWidth / 2 <= gatesX + gatesWidth &&
    ballY + ballHeight / 2 > gatesY + gatesHeight
  ) {
    ballY = gatesY + gatesHeight - ballHeight / 2;
    ball.style.top = `${ballY}px`;
  }
  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;

  if (
    ballX - ballWidth / 2 >= gatesX &&
    ballX + ballWidth / 2 <= gatesX + gatesWidth &&
    ballY - ballHeight / 2 >= gatesY &&
    ballY + ballHeight / 2 <= gatesY + gatesHeight
  ) {
    isGoal = true;
    countOfGoals += 1;
    countOutput.textContent = countOfGoals;
    ballX = 60 + ballWidth / 2;
    ballY = (field.scrollHeight - ballHeight) / 2 + ballHeight / 2;
    setTimeout(() => {
      ball.style.left = `${ballX}px`;
      ball.style.top = `${ballY}px`;
    }, 1000);
    setTimeout(() => {
      isGoal = false;
    }, 1000);
  }
});
