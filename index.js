// Калькулятор простых операций:
// Создайте веб-страницу с формой, включающей два поля для ввода чисел и кнопками для основных математических операций (сложение, вычитание, умножение, деление). Используйте JavaScript для выполнения выбранной операции и вывода результата на странице.

let currentInput = '0';
let currentOperation = null;

function appendNumber(number) {
    if (currentInput === '0' || currentInput === 'Error') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function setOperation(operation) {
    if (currentInput !== 'Error'){
   currentInput += operation;
    
    updateDisplay();
}}

function clearDisplay() {
    currentInput = '0';
    currentOperation = null;
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}
