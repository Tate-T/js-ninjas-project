document.addEventListener('DOMContentLoaded', function () {
    const firstNumInput = document.getElementById('firstNum');
    const secondNumInput = document.getElementById('secondNum');
    const resultElement = document.getElementById('result1');

    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');
    const equalsButton = document.getElementById('equals');

    let operation = null;

    addButton.addEventListener('click', function (event) {
        event.preventDefault();
        operation = 'add';
    });

    subtractButton.addEventListener('click', function (event) {
        event.preventDefault();
        operation = 'subtract';
    });

    multiplyButton.addEventListener('click', function (event) {
        event.preventDefault();
        operation = 'multiply';
    });

    divideButton.addEventListener('click', function (event) {
        event.preventDefault();
        operation = 'divide';
    });

    equalsButton.addEventListener('click', function (event) {
        event.preventDefault();
        const firstNum = parseFloat(firstNumInput.value);
        const secondNum = parseFloat(secondNumInput.value);
        let result;

        if (isNaN(firstNum) || isNaN(secondNum)) {
            resultElement.textContent = 'Будь ласка, введіть дійсні числа';
            return;
        }

        switch (operation) {
            case 'add':
                result = firstNum + secondNum;
                break;
            case 'subtract':
                result = firstNum - secondNum;
                break;
            case 'multiply':
                result = firstNum * secondNum;
                break;
            case 'divide':
                if (secondNum === 0) {
                    resultElement.textContent = 'Не можна ділити на нуль';
                    return;
                }
                result = firstNum / secondNum;
                break;
            default:
                resultElement.textContent = 'Виберіть операцію';
                return;
        }

        resultElement.textContent = `Результат: ${result}`;
    });
});
