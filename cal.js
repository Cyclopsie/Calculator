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
        operatorChoice = button.id
        return document.querySelector('.display').textContent = operatorChoice;
    }
    )
});



let equalButt = '';
let equalAll = document.querySelectorAll('.equalsign');
equalAll.forEach((button) => {
    button.addEventListener('click', () => {
        c = buttonStorage[0];
        d = buttonStorage[1];
        e = operatorChoice
        return operate(c, d, e);
    }
    )
});