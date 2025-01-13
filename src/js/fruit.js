const redApple = document.querySelector('#red-apple');
const goldApple = document.querySelector('#gold-apple');
const greenApple = document.querySelector('#green-apple');
const basket = document.querySelector('#basket');
const block = document.querySelector('#fruit-block');
const button = document.querySelector(`[data-fruit="play"]`);
const backdrop = document.querySelector(`[data-fruit="backdrop"]`);
const scoreText = document.querySelector('#fruit-score');
const gameOver = document.querySelector(`[data-fruit="over"]`);
const win = document.querySelector(`[data-fruit="win"]`);
let score = 0;

redApple.style.top = `${-redApple.scrollHeight}px`;
goldApple.style.top = `${-redApple.scrollHeight}px`;
greenApple.style.top = `${-redApple.scrollHeight}px`;

const blockWidth = block.scrollWidth;
const blockHeight = block.scrollHeight;

let basketX = (blockWidth - basket.scrollWidth) / 2 + basket.scrollWidth / 2;
let basketY = blockHeight - basket.scrollHeight / 2 - 10;

basket.style.left = `${basketX}px`;
basket.style.top = `${basketY}px`;

let isPlaying = false;

button.addEventListener('click', () => {
  backdrop.classList.add('is-hidden');
  isPlaying = true;
  const intervalId = setInterval(() => {
    if (score >= 0 && score < 10) {
      console.log('dddd');
      const randomNum = Math.round(Math.random() * (3 - 1) + 1);
      switch (randomNum) {
        case 1:
          manageFruit(redApple);
          break;
        case 2:
          manageFruit(goldApple);
          break;
        case 3:
          manageFruit(greenApple);
          break;
        default:
          manageFruit(redApple);
      }
    } else if (score >= 10) {
      win.classList.remove('is-hidden');
      clearInterval(intervalId);
    } else {
      gameOver.classList.remove('is-hidden');
      clearInterval(intervalId);
    }
  }, 4500);
});

window.addEventListener('keydown', e => {
  if (isPlaying === false) {
    return;
  }
  if (e.code === 'ArrowLeft' && basketX - 20 > 100) {
    basketX -= 20;
  }
  if (e.code === 'ArrowRight' && basketX + 20 < blockWidth - 100) {
    basketX += 20;
  }
  basket.style.left = `${basketX}px`;
});

function manageFruit(fruit) {
  let fruitY = Number.parseInt(fruit.style.top);
  const fruitX = Math.random() * (blockWidth - 100 - 100) + 100;
  fruit.style.left = `${fruitX}px`;
  const intervalId = setInterval(() => {
    if (fruitY < blockHeight) {
      fruitY += 4;
      fruit.style.top = `${fruitY}px`;
      if (
        fruitY > basketY - basket.scrollHeight / 2 &&
        fruitY < basketY + basket.scrollHeight / 2 &&
        fruitX > basketX - basket.scrollWidth / 2 &&
        fruitX < basketX + basket.scrollWidth / 2
      ) {
        score += 1;
        scoreText.textContent = score;
        fruitY = -fruit.scrollHeight;
        fruit.style.top = `${fruitY}px`;
        clearInterval(intervalId);
      }
    } else {
      console.log(fruit);
      fruitY = -fruit.scrollHeight;
      fruit.style.top = `${fruitY}px`;
      score -= 1;
      scoreText.textContent = score;
      clearInterval(intervalId);
    }
  }, 40);
}
