const numButtonContainer = document.querySelectorAll(".number-container button");
const display = document.querySelector(".display");
let temp = '';

numButtonContainer.forEach(button => {
    button.addEventListener('click', e => {
        temp += e.target.innerText.toString();
        display.innerText = temp;
        console.log(temp);
    })
});

let a;
let b;
let operator;

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

