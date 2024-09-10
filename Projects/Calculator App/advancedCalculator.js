
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.number) {
            currentInput += button.dataset.number;
            display.textContent = currentInput;
        } else if (button.dataset.operator) {
            if (currentInput === '') return;
            operator = button.dataset.operator;
            previousInput = currentInput;
            currentInput = '';
        } else if (button.id === 'equals') {
            if (operator && previousInput !== '' && currentInput !== '') {
                currentInput = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
                display.textContent = currentInput;
                operator = '';
                previousInput = '';
            }
        } else if (button.id === 'clear') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.textContent = '0';
        } else if (button.id === 'percentage') {
            if (currentInput !== '') {
                currentInput = (parseFloat(currentInput) / 100).toString();
                display.textContent = currentInput;
            }
        } else if (button.id === 'square-root') {
            if (currentInput !== '') {
                currentInput = Math.sqrt(parseFloat(currentInput)).toString();
                display.textContent = currentInput;
            }
        }
    });
});

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return (a + b).toString();
        case '-':
            return (a - b).toString();
        case '*':
            return (a * b).toString();
        case '/':
            return (a / b).toString();
        default:
            return '';
    }
}
