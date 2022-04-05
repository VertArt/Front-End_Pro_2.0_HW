// спрашиваем что хочет сделать пользователь + - / *
// проверяем на корректность и "отмену"  цикл что бы он ввел нужные значения

const operator = getOperator();

const operand = getOperand();

// result = calculate(operand[0], operand[1], operator);


function getOperator() {
    let op = prompt('What action do you want to take?')
    while (isOperatorValid(op)) {
        alert('Wrong!');
        op = prompt('What action do you want to take?');
    }
    return op;
}

function isOperatorValid(value) {
    return value !== '+' && value !== '-' && value !== '/' && value !== '*';
}

// спрашиваем  с какими числами он хочет произвести действие через запятую
// првоеряем на пустую строку и нул

function getOperand() {
    let numbers =  prompt('What numbers?')
    // while ( isOperandValid (numbers)) {
    //     alert('You need to enter numbers separated by commas');
    //     numbers =  [prompt('What numbers?')];
    // }
    numbersSplit = numbers.split(',');
    return numbersSplit;
}

// function isOperandValid(value) {
//     return value !== '' && value !== null;
// }

// разделяем полученые операнды и производим действие и получаем результат


// считаем резульат

// function calculate(x, y, action) {
//     switch (action) {
//         case '*': return x * y;
//         case '/': return x / y;
//         case '+': return x + y;
//         case '-': return x - y;
//     }
// }
//

// выводим результат