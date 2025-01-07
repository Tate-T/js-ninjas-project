const ball = document.querySelector('#football-ball');
const gates = document.querySelector('#football-gates');
const field = document.querySelector('#football-field');
const countOutput = document.querySelector('#football-count');
let countOfGoals = 0;

const ballWidth = ball.scrollWidth;
const ballHeight = ball.scrollHeight;
let ballX = 60 + ballWidth / 2;
let ballY = (field.scrollHeight - ballHeight) / 2 + ballHeight / 2;

ball.style.left = `${ballX}px`;
ball.style.top = `${ballY}px`;

const gatesX = field.scrollWidth - gates.scrollWidth - 30;
const gatesY = (field.scrollHeight - gates.scrollHeight) / 2;
const gatesWidth = gates.scrollWidth;
const gatesHeight = gates.scrollHeight;

gates.style.left = `${gatesX}px`;
gates.style.top = `${gatesY}px`;

field.addEventListener('click', e => {
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
  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;

  if (
    ballX - ballWidth / 2 >= gatesX &&
    ballX + ballWidth / 2 <= gatesX + gatesWidth &&
    ballY - ballHeight / 2 >= gatesY &&
    ballY + ballHeight / 2 <= gatesY + gatesHeight
  ) {
    countOfGoals += 1;
    countOutput.textContent = countOfGoals;
    ballX = 60 + ballWidth / 2;
    ballY = (field.scrollHeight - ballHeight) / 2 + ballHeight / 2;
    setTimeout(() => {
      ball.style.left = `${ballX}px`;
      ball.style.top = `${ballY}px`;
    }, 1000);
  }

  console.log(`Ball x: ${ballX}, y: ${ballY}`);
});
