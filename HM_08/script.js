"use strict";


const operandAEl = document.getElementById('operandA');
const operandBEl = document.getElementById('operandB');
const operatorAEl = document.getElementById('operator');
const resultEl = document.getElementById('result');
const errorEl = document.getElementById('error');
const calculatorBtEl = document.getElementById('calculateBt');

calculatorBtEl.addEventListener('click' , onCalculateBtnClick);

function onCalculateBtnClick() {
    const operandA = getOperandA();
    const operandB = getOperandB();
    const operator = getOperator();

    const result = calculate(+operandA, +operandB, operator);
    showResult(result);
}

function getOperandA() {
    return getOperandValue(operandAEl);
}

function getOperandB() {
    return getOperandValue(operandBEl);
}

function getOperandValue(el) {
    return el.value;
}

function getOperator(value) {
    return operatorAEl.value;
}

function calculate(x, y, action) {
    switch (action) {
        case '*': return x * y;
        case '/': return x / y;
        case '+': return x + y;
        case '-': return x - y;
        default: alert('invalid Operator')
        return null;
    }
}

function showResult(value) {
    resultEl.textContent = value;
}

