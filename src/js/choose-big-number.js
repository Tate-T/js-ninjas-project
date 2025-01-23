const firstNumber = document.querySelector("#number-first");
const secondNumber = document.querySelector("#number-second");
const thirdNumber = document.querySelector("#number-three");
const resultMax = document.querySelector(".bignum__span");

let firstResult = "";
let secondResult = "";
let thirdResult = "";

const maxNumber = function (one, two, three) {
    if (one != "" && two != "" && three != "")
        return (Math.max(one, two, three));
    else
        return ("(число)");
}


firstNumber.addEventListener("input", () => {
    firstResult = firstNumber.value;
    resultMax.textContent = maxNumber(firstResult, secondResult, thirdResult);
})


secondNumber.addEventListener("input", () => {
    secondResult = secondNumber.value;
    resultMax.textContent = maxNumber(firstResult, secondResult, thirdResult);
})


thirdNumber.addEventListener("input", () => {
    thirdResult = thirdNumber.value;
    resultMax.textContent = maxNumber(firstResult, secondResult, thirdResult);
})


