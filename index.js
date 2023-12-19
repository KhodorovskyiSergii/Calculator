let inputNumber = '';
let displayOperator = null;

function selectNumber(number){
  if(inputNumber === '.' || inputNumber === 'let`s continue'){
    inputNumber = number;
  } else {
    inputNumber += number;
  }
  updateDisplay();
}

function selectOperetor(operator){
  if(inputNumber === 'Error' || inputNumber === '+' || inputNumber === '*' || inputNumber === '/' || inputNumber === 'let`s continue'){
    inputNumber = operator;
  } else {
    inputNumber += operator;
  }
  updateDisplay();
}

function calculatePercentage() {
  try {
    const match = inputNumber.match(/(\d+)\s*([+\-*/])\s*(\d+)\s*%/);
                 
       if (match) {
      const num1 = parseFloat(match[1]);
      const operator = match[2];
      const num2 = parseFloat(match[3]);
    

      switch (operator) {
        case '+':
          inputNumber = (num1 + num1 * num2 / 100).toString();
          break;
        case '-':
          inputNumber = (num1 - num1 * num2 / 100).toString();
          break;
        case '*':
          inputNumber = (num1 * num2 / 100).toString();
          break;
        case '/':
          inputNumber = (num1 / num2 * 100).toString();
          break;
        default:
          console.error('Неизвестный оператор');
          inputNumber = 'Error';
          break;
      }
    } else {
      console.error('Некорректный формат строки');
      inputNumber = 'Error else';
    }
  } catch (error) {
    inputNumber = 'Error catch';
  }
  updateDisplay();
}

function selectRandom(){

  try {
        const match = inputNumber.match(/(\d+)\s*Rand/);

    if (match) {
      // Если найдено число, возвращаем случайное число в указанном диапазоне
      const randomNumber = parseInt(match[1]);
      inputNumber = Math.floor(Math.random() * (randomNumber + 1));
    } else {
      console.error('Число не найдено');
      inputNumber = 'Error';
    }
  } 
  catch (error) {
    console.error('Ошибка при вычислении случайного числа');
    inputNumber = 'Error';
  }

 updateDisplay();
}


function clirInput(){
  inputNumber = 'let`s continue';
  displayOperator = null;
  updateDisplay();
}

function selectGoBack(){
  if (inputNumber.length === 1){
    inputNumber = 'let`s continue';
    displayOperator = null;
    updateDisplay();
  } else {
    inputNumber = inputNumber.slice(0, -1);
    updateDisplay();
  }
}

function result(){
  if (inputNumber.includes('%')){
    calculatePercentage();
  } else if (inputNumber.includes('Rand')) { 
    selectRandom();
  }
 else
  {
  try {
    inputNumber = eval(inputNumber).toString();
  } catch(error) {
    inputNumber = 'Error';
  }}
  updateDisplay();
}

function updateDisplay(){
  document.getElementById('display').innerHTML = inputNumber;
}
