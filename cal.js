function add(a,b){
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a/b;
}

function multiply(a, b) {
    return a * b;
}

function operate(a, b, operator) {
    let answer = operator(a, b);
    return document.querySelector('.display').textContent = answer;
    
}

let buttonStorage = [];
let buttPressed = ""

let buttAll = document.querySelectorAll('.num');
buttAll.forEach((button) => {
    button.addEventListener('click', () => {
        buttPressed = button.id;
        
        buttonStorage.push(button.id);
        console.log(buttonStorage);
        return document.querySelector('.display').textContent = buttPressed;
    }
    )
});

let operatorChoice = "";
let operAll = document.querySelectorAll('.operator');
operAll.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id === 'multiply') {
            return document.querySelector('.display').textContent = "*";
        } else if (button.id === 'subtract') {
            return document.querySelector('.display').textContent = "-";
        } else if (button.id === 'divide') {
            return document.querySelector('.display').textContent = "/";
        } else {
            return document.querySelector('.display').textContent = "+";
        }
        operatorChoice = button.id
        return document.querySelector('.display').textContent = operatorChoice;
    }
    )
});



let equalButt = '';
let equalAll = document.querySelectorAll('.equalsign');
equalAll.forEach((button) => {
    button.addEventListener('click', () => {
        if (operatorChoice === 'multiply') {
            let mul = operate(buttonStorage[0], buttonStorage[1], multiply);
            return document.querySelector('.display').textContent = mul;
        } else if (operatorChoice === 'subtract') {
            let sub = operate(buttonStorage[0], buttonStorage[1], subtract);
            return document.querySelector('.display').textContent = sub;
        } else if (operatorChoice === 'divide') {
            let divi = operate(buttonStorage[0], buttonStorage[1], divide);
            return document.querySelector('.display').textContent = divi;
        } else {
            let addition = operate(buttonStorage[0], buttonStorage[1], add);
            return document.querySelector('.display').textContent = addition;
        }
    }
    )
});