let userScore = 0;
let computerScore = 0;
const maxScore = 3;
const resultOfText = document.querySelector("#round");
console.log(resultOfText);

function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let outcome;
  if (userChoice === computerChoice) {
    outcome = "Це краватка!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    outcome = "Ви виграли раунд!";
    userScore++;
  } else {
    outcome = "Комп’ютер виграв раунд!";
    computerScore++;
  }

  document.getElementById('you').textContent = `Ви: ${userScore}`;
  document.getElementById('computer').textContent = `Комп’ютер: ${computerScore}`;

  if (userScore === maxScore) {
    document.getElementById("round").textContent = "Ви виграли раунд!";
    disableButtons();
   resultOfText.textContent = "Ви виграли раунд!";
  } else if (computerScore === maxScore) {
    document.getElementById("round").textContent = "Комп’ютер виграв раунд!";
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));