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
    if (operator === "+"){
        return add(num1, num2);
    } else if (operator === "-"){
        return subtract(num1, num2);
    } else if (operator === "*"){
        return multiply(num1, num2);
    } else if (operator === "/"){
        return divide(num1,num2);
    }
}

let displayOne = document.querySelector('.top');


function btnClick() {
    let btn = document.querySelectorAll('.btn');
    btn.forEach((selectedBtn) => {
        selectedBtn.addEventListener('click', () => {
            // if a number is picked
            if (selectedBtn.id <= 9 || selectedBtn.id >= 0) {
                displayOne.textContent += selectedBtn.id;
            } else if (selectedBtn.classList.contains('operation')){
                displayOne.textContent += " " + selectedBtn.id + " ";
            }
        })
    })
}

btnClick();