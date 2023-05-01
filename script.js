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

console.log(add(1,2));
console.log(subtract(1,2));
console.log(multiply(4,7));
console.log(divide(9,3));
console.log('solutions: 3, -1, 28, 3');

console.log(operate(1,2,'+'));
console.log(operate(1,2,'-'));
console.log(operate(4,7,'*'));
console.log(operate(9,3,'/'));