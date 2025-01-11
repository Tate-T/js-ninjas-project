const inputIns = document.getElementById("guessNumber");
const form = document.getElementById("formNumber");
const resultText = document.getElementById("res");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userNumber = inputIns.value;
    const randomNumber = Math.round(Math.random() * (100 - 0) + 0);
  if (userNumber === randomNumber) {
    resultText.innerHTML = `Вітаю, ви вгадали число! ${randomNumber}`;
    resultText.classList.add("error");
  } else {
    resultText.innerHTML = `Ви програли, комп’ютер загадав ${randomNumber}`;
    resultText.classList.add("error");
  }
});