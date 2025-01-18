function calculate(operation) {
    const firstNumber = parseFloat(document.getElementById('firstNum').value);
    const secondNumber = parseFloat(document.getElementById('secondNum').value);
    let result;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        result = 'Будь ласка, введіть коректні числа';
    } else {
        switch (operation) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = secondNumber !== 0 ? firstNumber / secondNumber : 'Ділити на нуль не можна';
                break;
            default:
                result = 'Невідома операція';
        }
    }

    document.getElementById('result').textContent = `Результат: ${result}`;
}

document.getElementById('add').addEventListener('click', () => calculate('+'));
document.getElementById('subtract').addEventListener('click', () => calculate('-'));
document.getElementById('multiply').addEventListener('click', () => calculate('*'));
document.getElementById('divide').addEventListener('click', () => calculate('/'));

