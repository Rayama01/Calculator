const output = document.querySelector(".screenOutput");
const buttons = document.querySelectorAll("[data-attt]");
const operators = document.querySelectorAll("[data-operators]");
const addBtn = document.querySelector(".addBtn");
const equalBtn = document.querySelector(".equalBtn");
let firstNum = ''
let operator
let secondNum = ''
let sum = 0

let add = function(firstNum, secondNum) {
    sum = parseInt(firstNum) + parseInt(secondNum)
    return sum
}

let subtract = function(firstNum, secondNum) {
    sum = parseInt(firstNum) - parseInt(secondNum)
    return sum
}

let multiply = function(firstNum, secondNum) {
    sum = parseInt(firstNum) * parseInt(secondNum)
    return sum
}

let divide = function(firstNum, secondNum) {
    sum = parseInt(firstNum) / parseInt(secondNum)
    return sum
}

let operate = function() {
    if(operator === "+") {
        output.textContent = add(firstNum, secondNum);
    }else if(operator === "-") {
        output.textContent = subtract(firstNum, secondNum);
    } else if (operator === "x") {
        output.textContent = multiply(firstNum, secondNum);
    } else if(operator === "÷") {
        output.textContent = divide(firstNum, secondNum);
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
        } 
        else {
            firstNum += btnValue;
            output.textContent = firstNum;
            
        }
        if(sum >= 1 & operator == "+" ||operator == "-" ||operator == "÷") {
            firstNum = parseInt(sum);
            console.log(firstNum);
        } else if (sum >= 1 & operator == "x") {
            firstNum = parseInt(sum);
            console.log(firstNum);
        }
    })
})

operators.forEach(button => {
    button.addEventListener("click", (event) => {
        const opValue = event.target.getAttribute('data-operators');
        operator = opValue;
        output.textContent = opValue;
    })
})

equalBtn.addEventListener("click", () => {
    operate();
    firstNum = '';
    secondNum = '';
    operator = "";
});


let result = operate();