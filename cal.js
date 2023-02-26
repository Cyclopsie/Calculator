function add(a, b){
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
    return operator(a, b);
    
    
}

/////////number input

let buttonStorage = [];
let buttonTogether = ""

let buttAll = document.querySelectorAll('.num');
buttAll.forEach((button) => {
    button.addEventListener('click', () => {
       //I need to catetcon each of the buttons pressed, but also store them together until an operator is chosen
       buttonStorage.push(button.id);
            for(i = 0; i <= buttonStorage.length-1; i++) {
                if(i === 0) {
                    buttonTogether = buttonStorage[0];
                    document.querySelector('.display').textContent = buttonTogether;
                } else if (i >= 1) {
                    buttonTogether = buttonStorage.join('');
                    document.querySelector('.display').textContent = buttonTogether;
                }
            }
    })
});



let operatorChoice = '';
let operAll = document.querySelectorAll('.operator');
operAll.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id === 'multiply') {
            document.querySelector('.display').textContent = "*";
            //operator = multiply;
            a = +buttonTogether;
            buttonTogether = "";
            buttonStorage = [];
            
        } else if (button.id === 'subtract') {
            document.querySelector('.display').textContent = "-";
            a = +buttonTogether;
            buttonTogether = "";
            buttonStorage = [];
        } else if (button.id === 'divide') {
            document.querySelector('.display').textContent = "/";
            a = +buttonTogether;
            buttonTogether = "";
            buttonStorage = [];

        } else if (button.id === 'add') {
            document.querySelector('.display').textContent = "+";
            a = +buttonTogether;
            buttonTogether = "";
            buttonStorage = [];
        } else {
            console.log(operatorChoice)
        }
       operatorChoice = button.id
       
       
    }
    )
});


let d = '';
let equalButt = '';
let equalAll = document.querySelectorAll('.equalsign');
equalAll.forEach((button) => {
    button.addEventListener('click', () => {
        if (operatorChoice === 'multiply') {
         //  operator = operatorChoice;
            b = +buttonTogether;
            //operator = ;
            document.querySelector('.display').textContent = operate(a, b, multiply);
        } else if (operatorChoice === 'subtract') {
            b = +buttonTogether;
            document.querySelector('.display').textContent = operate(a, b, subtract);
        } else if (operatorChoice === 'divide') {
            b = +buttonTogether;
            document.querySelector('.display').textContent = operate(a, b, divide);
        } else if (operatorChoice === 'add') {
            b = +buttonTogether;
            document.querySelector('.display').textContent = operate(a, b, add);
        }
        
    })
    
});




let clearLog = document.querySelector('.clear');
clearLog.forEach((button) => {
    button.addEventListener('click', () => {
        document.location.reload(true);
    })
})















/*
-store the number input into a variable
-when an operator is clicked
    -store the number variable
    -store the operator
-clear the number variable
-store new variable
-when equal sign is clicked
    -perform the operation
        -store new variable
    -clear the variables
    or - if another operator is clicked
            -store second variable
            -perform operation and store as new variable
            */