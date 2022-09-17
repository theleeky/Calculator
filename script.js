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
let num2 = 0;

function reset(){
    displayTwo.textContent = "";
    displayOne.textContent = "";
    typedNumber = "";
    finalValue = 0;
    operation = "";
    num1 = 0;
    num2 = 0
}



function btnClick() {
    let btn = document.querySelectorAll('.btn');
    btn.forEach((selectedBtn) => {
        selectedBtn.addEventListener('click', () => {
            // if a number is picked
            if (selectedBtn.id <= 9 || selectedBtn.id >= 0) {
                typedNumber += selectedBtn.id;
                displayTwo.textContent = typedNumber;
                console.log(operation.id)
                num1 = (operation.id  == null) ? typedNumber : num1;
                num2 = (operation.id != null) ? typedNumber : num2;
            } else if (selectedBtn.classList.contains('operation')){
                if (num1 != 0 && num2 != 0){
                    finalValue = operate(operation.id, parseFloat(num1), parseFloat(num2));
                    displayTwo.textContent = finalValue;
                    num1 = finalValue;
                }
                operation = selectedBtn;
                displayOne.textContent = num1 + " " + operation.textContent;
                typedNumber = "";
            } else if (selectedBtn.id === "equals" && num1 != 0 && num2 != 0 && operation != ""){
                if(num1 != 0 && num2 != 0 && operation != "")
                displayOne.textContent = num1 + " " + operation.textContent + " " + num2;
                finalValue = operate(operation.id, parseFloat(num1), parseFloat(num2));
                num1 = finalValue;
                num2 = 0;
                displayTwo.textContent = finalValue;
            }  else if (selectedBtn.id === "AC") {
                reset();
            } else if (selectedBtn.id === "del") {
                typedNumber = typedNumber.slice(0,typedNumber.length - 1);
                num1 = (operation.id  == null) ? typedNumber : num1;
                num2 = (operation.id != null) ? typedNumber : num2;
                displayTwo.textContent = typedNumber;
            } else if (selectedBtn.id === "dot") {
                typedNumber = (typedNumber.includes(".")) ? typedNumber : (typedNumber + ".");
                num1 = (operation.id  == null) ? typedNumber : num1;
                num2 = (operation.id != null) ? typedNumber : num2;
                displayTwo.textContent = typedNumber;
            }
        })
    })
}

reset();
btnClick()

//console.log(operate("&#43;", 3,4))