const output = document.querySelector(".screenOutput");
const buttons = document.querySelectorAll("[data-attt]");
let firstNum = ''
let operator
let secondNum = ''
let sum = 0

let add = function(firstNum, secondNum) {
    let sum = parseInt(firstNum) + parseInt(secondNum)
    return sum
}

let subtract = function(firstNum, secondNum) {
    let sum = firstNum - secondNum
    return sum
}

let multiply = function(firstNum, secondNum) {
    let sum = firstNum * secondNum
    return sum
}

let divide = function(firstNum, secondNum) {
    let sum = firstNum / secondNum
    return sum
}

let operate = function() {
    if(operator === "+") {
        console.log(add(firstNum, secondNum))
    }else if(operator === "-") {
        console.log(subtract(firstNum, secondNum))
    } else if (operator === "*") {
        console.log(multiply(firstNum, secondNum))
    } else if(operator === "/") {
        console.log(divide(firstNum, secondNum))
    } else {
        console.log("que")
    }
}




buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const btnValue = event.target.getAttribute('data-attt');
        if(operator == "+"  ||operator == "-" ||operator == "x" ||operator == "÷") {
            secondNum += btnValue
            
            output.textContent = secondNum;
            console.log(secondNum);
        } else {
            firstNum += btnValue;
            output.textContent = firstNum;
            console.log(firstNum);
        }
    })
})

let result = operate();