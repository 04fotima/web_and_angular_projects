const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

let cur = '';
let prev = '';
let op = '';
let hasDot = false;

function show(value) {
    display.textContent = value;
}

function addNum(num) {
   
    if (num === '0' && cur === '') return; 
    if (num === '.' && hasDot) return; 
    if (num === '.') hasDot = true;     

    cur += num;
    show(formatResult(cur)); 
}

function chooseOp(operator) {
    if (cur === '') return;  
    if (prev !== '') calc();  

    op = operator;
    prev = cur;
    cur = '';  
    hasDot = false;  
}

function formatResult(value) {
    const numValue = parseFloat(value);
    return Number.isInteger(numValue) ? numValue.toString() : numValue.toString();
}

function calc() {
    const a = parseFloat(prev);
    const b = parseFloat(cur);
    if (isNaN(a) || isNaN(b)) return;  

    let result;
    switch (op) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b !== 0) {
                result = a / b;
            } else {
                show('Error: Division by zero');
                return;
            }
            break;
    }

    cur = Math.floor(result).toString(); 
    show(formatResult(cur));
    op = '';
    prev = '';
    hasDot = cur.includes('.');
}

function clearAll() {
    cur = '';
    prev = '';
    op = '';
    show('0');
    hasDot = false;
}

function removeLast() {
    cur = cur.slice(0, -1);
    if (cur === '') {
        cur = '0';
    } else {
        cur = formatResult(Math.floor(Number(cur))).toString();
    }
    show(formatResult(cur)); 
    hasDot = cur.includes('.');
}

function toggleSign() {
    if (cur !== '') {
        cur = formatResult(parseFloat(cur) * -1).toString();
        show(formatResult(cur)); 
    }
}

function toPercent() {
    if (cur !== '') {
        cur = formatResult(parseFloat(cur) / 100).toString();
        show(formatResult(cur)); 
        hasDot = cur.includes('.');  
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value >= '0' && value <= '9' || value === '.') {
            addNum(value);  
        } else if (value === 'C') {
            clearAll();  
        } else if (value === '=') {
            calc();  
        } else if (value === '←') {
            removeLast();  
        } else if (value === '±') {
            toggleSign();  
        } else if (value === '%') {
            toPercent();  
        } else {
            chooseOp(value);  
        }
    });
});

show('0');
