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
    if (a !== undefined && a !== '') operate(a, b, operator); 
    a = +temp;
    temp = '';
    operator = e.target.innerText;
}

function equalsClicked(e) {
    operate(a, b, operator);
    a = '';
    b = '';
}

function clearClicked(e) {
    a = '';
    b = '';
    operator = '';
    temp = '';
    display.innerText = temp;
}

function operate(a, b, operator) {
    b = +temp;
    let result;
    if (operator === '+') result = add(a,b);
    if (operator === '-')result = subtract(a,b);
    if (operator === '*') result = multiply(a,b);
    if (operator === '/') result = divide(a,b);
    temp = result;
    display.innerText = temp;
};

function add(a,b) {return a+b};
function subtract(a,b) {return a-b};
function multiply(a,b) {return a*b};
function divide(a,b) {return a/b};