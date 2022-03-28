const firstNumber = +prompt('Введите первое число:');

const secondNumber = +prompt('Введите второе число:');

const action = prompt('Какое действие хотите произвести ("*", "/", "+", "-") ?: ');

if ( isNaN(firstNumber) || isNaN(secondNumber) ) {
    alert('Вы ввели не число ')
};

switch (action){
    case '*':
        const multiply = firstNumber * secondNumber;
        alert(`${firstNumber} * ${secondNumber} = ${multiply} `);
        break;
    case '/':
        const division = firstNumber / secondNumber;
        alert(`${firstNumber} / ${secondNumber} = ${division} `);
        break;
    case '+':
        const addition = firstNumber + secondNumber;
        alert(`${firstNumber} + ${secondNumber} = ${addition} `);
        break;
    case '-':
        let subtraction = firstNumber - secondNumber;
        alert(`${firstNumber} - ${secondNumber} = ${subtraction} `);
        break;
    default:
        alert('вы ввели ахинею...')
}