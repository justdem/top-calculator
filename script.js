const numButtons = document.querySelectorAll(".number-container button");
const operatorButtons = document.querySelectorAll(".operator-container button");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const display = document.querySelector(".display");

numButtons.forEach(button => {
    button.addEventListener('click', e => recordNumInput(e))
});
operatorButtons.forEach(button => {
    button.addEventListener('click', e => operatorClicked(e))
});
equalsButton.addEventListener('click', e => equalsClicked(e));
clearButton.addEventListener('click', e => clearClicked(e));

let a;
let b;
let operator;
let temp = '';

function recordNumInput(e) {
    temp += e.target.innerText.toString();
    display.innerText = temp;
}

function operatorClicked(e) {
    a = +temp;
    temp = '';
    operator = e.target.innerText;   
}

function equalsClicked(e) {
    b = +temp;
    temp = operate(a, b, operator);
    display.innerText = temp;
}

function operate(a, b, operator) {
    if (operator === '+') return add(a,b);
    if (operator === '-')return subtract(a,b);
    if (operator === '*') return multiply(a,b);
    if (operator === '/') return divide(a,b);
};

function add(a,b) {return a+b};
function subtract(a,b) {return a-b};
function multiply(a,b) {return a*b};
function divide(a,b) {return a/b};

