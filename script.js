function add(num1, num2) {
    return num1 + num2;  
}
function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2){
    if (operator === "add"){
        return add(num1, num2);
    } else if (operator === "subtract"){
        return subtract(num1, num2);
    } else if (operator === "multiply"){
        return multiply(num1, num2);
    } else if (operator === "divide"){
        return divide(num1,num2);
    }
}

let displayOne = document.querySelector('.top');
let displayTwo = document.querySelector('.bottom')
let typedNumber = "";
let finalValue = 0;
let operation = "";
let num1 = 0;


function btnClick() {
    let btn = document.querySelectorAll('.btn');
    btn.forEach((selectedBtn) => {
        selectedBtn.addEventListener('click', () => {
            // if a number is picked
            if (selectedBtn.id <= 9 || selectedBtn.id >= 0) {
                typedNumber += selectedBtn.id;
                displayTwo.textContent = typedNumber;
            } else if (selectedBtn.classList.contains('operation')){
                operation = selectedBtn.id;
                num1 = typedNumber;
                displayOne.textContent = typedNumber + " " + operation;
                typedNumber = "";
                
            } else if (selectedBtn.id === "equals"){
                finalValue += operate(operation, finalValue, parseInt(typedNumber));
                console.log(finalValue);
            }   
        })
    })
}

btnClick();
//console.log(operate("&#43;", 3,4))