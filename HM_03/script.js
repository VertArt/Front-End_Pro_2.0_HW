const firstNumber = getNumber();

const secondNumber = getNumber();

const operator = getOperator();

let result = calculate(firstNumber, secondNumber, operator)

showResult(firstNumber, secondNumber, operator, result);

function getNumber() {
    a = +prompt ('What number?');
    while ( isNaN(a)) {
        alert('You didn`t enter a number!');
        a = +prompt ('please enter a number');
    }
    return a;
}

function getOperator() {
    b = prompt ('What action do you want to take?')
    return b;
}

function calculate(x, y, action) {
    switch (action) {
        case '*': return x * y;
        case '/': return x / y;
        case '+': return x + y;
        case '-': return x - y;
    }
}

function showResult (x, y, operator, result) {
    alert(`${x} ${operator} ${y} = ${result}`)
}
