const birthYear = document.getElementById("birthYear").value;
const resultText = document.getElementById("result");

function checkLeapYear(event) {
    event.preventDefault();

    const year = Number.parseInt(birthYear);

    if (year % 4 === 0 && year % 100 !== 0) {
        resultText.textContent = `Ви народилися у високосний рік`;
        resultText.classList.remove("error");
    } else {
        resultText.textContent = `Ви народилися не у високосний рік!`;
        resultText.classList.add("error");
    }
}

document.getElementById("yearForm").addEventListener("submit", checkLeapYear);