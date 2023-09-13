// let firstNum = parseInt(prompt("enter first number: "))
// let operator = prompt("enter operator: ")
// let secondNum = parseInt(prompt("enter second number: "))

let add = function(firstNum, secondNum) {
    let sum = firstNum + secondNum
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


let result = operate();