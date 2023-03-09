

/////Calculator Functions///////////////
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

////NaN or Num//////////
function numberCheck(x){
    if (Number.isNaN(x)) {
        document.querySelector('.display').textContent = storedNum[storedNum.length-1];
    } else {
        let decimalTest = (x - Math.floor(x)) !== 0;
            if(decimalTest) {
                storedNum.push(+x.toFixed(2));
                document.querySelector('.display').textContent = (x.toFixed(2));;
            } else {
                storedNum.push(x);
                document.querySelector('.display').textContent = x;
            }
        
        
    }
}

////number pressed////
let temporaryNum = [];
let storedNum = [];

let numPress = document.querySelectorAll('.num');

numPress.forEach((button) => {
    button.addEventListener('click', () => { 
        temporaryNum.push(button.id);
        a = +temporaryNum.join('');
        document.querySelector('.display').textContent = a;
        operatorPress.forEach((button) => {button.style.backgroundColor = "purple"});
        equalSign.style.backgroundColor = "purple";
    })
});

////operator pressed ////
let operatorArray = [];
let answer = "";

let operatorPress = document.querySelectorAll('.operator');

operatorPress.forEach((button) => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = '#B08BBB';
        operatorArray.push(button.innerHTML);
        storedNum.push(a);
        temporaryNum = [];
            if(operatorArray[operatorArray.length -2] === "+") {
                answer = operate(storedNum[storedNum.length-2], storedNum[storedNum.length-1], add)
                    numberCheck(answer);
            } else if (operatorArray[operatorArray.length -2] === "-") {
                answer = operate(storedNum[storedNum.length-2], storedNum[storedNum.length-1], subtract)
                    numberCheck(answer);
            } else if (operatorArray[operatorArray.length -2] === "*") {
                answer = operate(storedNum[storedNum.length-2], storedNum[storedNum.length-1], multiply)
                    numberCheck(answer);
            } else if (operatorArray[operatorArray.length -2] === "/") {
                if(storedNum[storedNum.length-1] === 0) {
                    document.querySelector('.display').textContent = "ERROR: CAN'T DIVIDE BY 0";
                    storedNum = [];
                } else {
                answer = operate(storedNum[storedNum.length-2], storedNum[storedNum.length-1], divide)
                    numberCheck(answer);
                }
                ////////this stores the answer and allows the use of the answer as the first # ///////////
            } else if (operatorArray[operatorArray.length -2] === "=") {
                numberCheck(answer);
            } else {
                document.querySelector('.display').textContent = operatorArray;
            } 
                document.querySelector('.display').textContent = operatorArray;
                if (storedNum.length < 2) {
                    document.querySelector('.display').textContent = operatorArray[operatorArray.length-1];
                } else {
                    document.querySelector('.display').textContent = operatorArray[operatorArray.length-1];
                    document.querySelector('.display').textContent = storedNum[storedNum.length-1];
                }
        })
});

/////equal sign button/////////
let equalSign = document.querySelector('.equal');

equalSign.addEventListener('click', () => {
    equalSign.style.backgroundColor = '#B08BBB';
    operatorArray.push(equalSign.innerHTML);
    storedNum.push(a);
    temporaryNum = [];
    console.log(storedNum);
    if (storedNum.length === 2) {
         if(operatorArray[0] === "+") {
             answer = operate(storedNum[storedNum.length-2], storedNum[storedNum.length-1], add);
                numberCheck(answer);
        } else if (operatorArray[0] === "-") {
            answer = operate(storedNum[storedNum.length-2], storedNum[storedNum.length-1], subtract)
                numberCheck(answer); 
        } else if (operatorArray[0] === "*") {
            answer = operate(storedNum[storedNum.length-2], storedNum[storedNum.length-1], multiply)
                numberCheck(answer); 
        } else if (operatorArray[0] === "/") {
            if(storedNum[storedNum.length-1] === 0) {
                document.querySelector('.display').textContent = "ERROR: CAN'T DIVIDE BY 0";
            } else {
                answer = operate(storedNum[storedNum.length-2], storedNum[storedNum.length-1], divide)
                    numberCheck(answer);
            }
        } else {
            document.querySelector('.display').textContent = operatorArray;
        }
    } else if(storedNum.length > 2) {
        if(operatorArray[operatorArray.length -2] === "+") {
            answer = operate(storedNum[storedNum.length-2], storedNum[storedNum.length-1], add);
                numberCheck(answer);
        } else if (operatorArray[operatorArray.length -2] === "-") {
            answer = operate(storedNum[storedNum.length-2], storedNum[storedNum.length-1], subtract);
                numberCheck(answer);
        } else if (operatorArray[operatorArray.length -2] === "*") {
            answer = operate(storedNum[storedNum.length-2], storedNum[storedNum.length-1], multiply);
                numberCheck(answer);
        } else if (operatorArray[operatorArray.length -2] === "/") {
            if(storedNum[storedNum.length-1] === 0) {
                document.querySelector('.display').textContent = "ERROR: CAN'T DIVIDE BY 0";
            } else {
                answer = operate(storedNum[storedNum.length-2], storedNum[storedNum.length-1], divide);
                numberCheck(answer);
            }
        } else {
            document.querySelector('.display').textContent = storedNum;
         } 
    }
});



//////clear button//////
let reloadPage = document.querySelector('.clear').addEventListener('click', () => {
    window.location.reload();
});
































































/*


function isNum(x) {
    if(Number.isNaN(x)) {
        document.querySelector('.display').textContent = aArray[aArray.length-1];
    } else {
        document.querySelector('.display').textContent = answer;
        aArray.push(x);
        answerArray.push(x);
    }
}






/////////number input

// store the number into a string and when the operator is choosen then stored into a, then next chosen number string into b, then
// storing the numbers chosen then any operator and equal sign


let buttonStorage = [];
let oArray = [];
let aArray = [];
let answerArray = [];
let answer = '';

//let allButt = document.querySelectorAll("")




let buttAll = document.querySelectorAll('.equation');
buttAll.forEach((button) => {
    button.addEventListener('click', () => {
    ///////////number input///////////
        if(button.className ===  "equation num") {
                //need to join the numbers
            buttonStorage.push(button.id);
            for(i = 0; i <= buttonStorage.length-1; i++) {
                if(i === 0) {
                   a = buttonStorage[0];
                   console.log(a);
                    document.querySelector('.display').textContent = a;
                } else if (i >= 1) {
                    a = buttonStorage.join('');
                    console.log(a);
                    document.querySelector('.display').textContent = a;
                } 
            }
    //////////// operation input ///////////////
        } else if (button.className === "equation operator") {
            //document.querySelector('.display').textContent = button.innerHTML;
            oArray.push(button.innerHTML);
            buttonStorage = [];
            
                if (button.id === "add") {
                    aArray.push(+a);
                    //document.querySelector('.display').textContent = oArray[oArray.length-1];
                    answer = operate(aArray[aArray.length-2], aArray[aArray.length-1], add);
                        isNum(answer);
                } else if (button.id === "subtract"){
                    aArray.push(+a);
                    answer = operate(aArray[aArray.length-2], aArray[aArray.length-1], subtract);
                        isNum(answer);
                } else if (button.id === "multiply") {
                    aArray.push(+a);
                    answer = operate(aArray[aArray.length-2], aArray[aArray.length-1], multiply);
                        isNum(answer);
                } else if (button.id === "divide") {
                    aArray.push(+a);
                    answer = operate(aArray[aArray.length-2], aArray[aArray.length-1], divide);
                        isNum(answer);
                } 
                
        } else if (button.className === "equation equal") {
            if (oArray[oArray.length -1] === '*') {
                //document.querySelector('.display').textContent = "=";
                aArray.push(+a);
                answer = operate(aArray[aArray.length-2], aArray[aArray.length-1], multiply);
                aArray.push(answer);
                answerArray.push(answer);
                document.querySelector('.display').textContent = answer;
            } else if (oArray[oArray.length -1] === '-') {
                document.querySelector('.display').textContent = "=";
                aArray.push(+a);
                answer = operate(aArray[aArray.length-2], aArray[aArray.length-1], subtract);                     aArray.push(answer);
                answerArray.push(answer);
                document.querySelector('.display').textContent = answer;
            } else if (oArray[oArray.length -1] === '/') {
                document.querySelector('.display').textContent = "=";
                aArray.push(+a);
                answer = operate(aArray[aArray.length-2], aArray[aArray.length-1], divide);
                aArray.push(answer);
                answerArray.push(answer);
                document.querySelector('.display').textContent = answer;
            } else if (oArray[oArray.length -1] === '+') {
                document.querySelector('.display').textContent = "=";
                aArray.push(+a);
                answer = operate(aArray[aArray.length-2], aArray[aArray.length-1], add);
                aArray.push(answer);
                answerArray.push(answer);
                document.querySelector('.display').textContent = answer;
            }
        }
    
    })
});
/*
buttAll.forEach((button) => {
    button.addEventListener('click', () => {

        if (button.id === "add") {
            oArray.push(button.innerHTML);
            buttonStorage = [];
            aArray.push(+a);
            answer = operate(aArray[aArray.length-2], aArray[aArray.length-1], add);
                        if(Number.isNaN(answer)) {
                            document.querySelector('.display').textContent = aArray[aArray.length-1];
                        } else {
                            document.querySelector('.display').textContent = answer;
                            aArray.push(answer);
                            answerArray.push(answer);
                        } 
                
                } /* else if (button.id === "subtract"){
                    buttonStorage = [];
                    aArray.push(+a);
                    answer = operate(aArray[aArray.length-2], aArray[aArray.length-1], subtract);
                        if(Number.isNaN(answer)) {
                            document.querySelector('.display').textContent = aArray[aArray.length-1];
                        } else {
                            document.querySelector('.display').textContent = answer;
                            aArray.push(answer);
                            answerArray.push(answer); 
                        }
                } else if (button.id === "multiply") {
                    buttonStorage = [];
                    aArray.push(+a);
                    answer = operate(aArray[aArray.length-2], aArray[aArray.length-1], multiply);
                        if(Number.isNaN(answer)) {
                            document.querySelector('.display').textContent = aArray[aArray.length-1];
                        } else {
                            document.querySelector('.display').textContent = answer;
                            aArray.push(answer); 
                        }
                } else if (button.id === "divide") {
                    buttonStorage = [];
                    aArray.push(+a);
                    answer = operate(aArray[aArray.length-2], aArray[aArray.length-1], divide);
                        if(Number.isNaN(answer)) {
                            document.querySelector('.display').textContent = aArray[aArray.length-1];
                        } else {
                            document.querySelector('.display').textContent = answer;
                           aArray.push(answer);
                        }
                } else {
                    console.log(aArray);
                }
           } else if (button.className === "equation equal") {
                if (oArray[oArray.length -1] === '*') {
                    document.querySelector('.display').textContent = "=";
                    aArray.push(+a);
                    answer = operate(aArray[aArray.length-2], aArray[aArray.length-1], multiply);
                    aArray.push(answer);
                    answerArray.push(answer);
                    document.querySelector('.display').textContent = answer;
                } else if (oArray[oArray.length -1] === '-') {
                    document.querySelector('.display').textContent = "=";
                    aArray.push(+a);
                    answer = operate(aArray[aArray.length-2], aArray[aArray.length-1], subtract);
                    aArray.push(answer);
                    answerArray.push(answer);
                    document.querySelector('.display').textContent = answer;
                } else if (oArray[oArray.length -1] === '/') {
                    document.querySelector('.display').textContent = "=";
                    aArray.push(+a);
                    answer = operate(aArray[aArray.length-2], aArray[aArray.length-1], divide);
                    aArray.push(answer);
                    answerArray.push(answer);
                    document.querySelector('.display').textContent = answer;
                } else if (oArray[oArray.length -1] === '+') {
                    document.querySelector('.display').textContent = "=";
                    aArray.push(+a);
                    answer = operate(aArray[aArray.length-2], aArray[aArray.length-1], add);
                    aArray.push(answer);
                    answerArray.push(answer);
                    document.querySelector('.display').textContent = answer;
               } */
          // }
   // })
//});

/*




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



*/











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

/*
///////////old coding ---condensed ---- //////////
let operatorChoice = '';
let operAll = document.querySelectorAll('.operator');
operAll.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id === 'multiply') {
            document.querySelector('.display').textContent = "*";
            //operator = multiply;
            a = +aNum;
            aArray.push(a);
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
*/