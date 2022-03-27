const firstNumber = +prompt('Введите первое число:');

const secondNumber = +prompt('Введите второе число:');

const action = prompt('Какое действие хотите произвести ("*", "/", "+", "-") ?: ');

if ( isNaN(firstNumber) ) {
    alert('Вы ввели не число ')
};

if ( isNaN(secondNumber) ) {
    alert('Вы ввели не число ')
};

switch (action){
    case '*':
        let multiply = firstNumber * secondNumber;
        alert(`${firstNumber} * ${secondNumber} = ${multiply} `);
        brake;
    case '/':
        let division = firstNumber / secondNumber;
        alert(`${firstNumber} / ${secondNumber} = ${division} `);
        brake;
    case '+':
        let addition = firstNumber + secondNumber;
        alert(`${firstNumber} + ${secondNumber} = ${addition} `);
        brake;
    case '-':
        let subtraction = firstNumber - secondNumber;
        alert(`${firstNumber} - ${secondNumber} = ${subtraction} `);
        brake;
    default:
        alert('вы ввели ахинею...')
}