const output = document.querySelector(".output")
const curr = document.querySelector(".currentCalc")
let firstNum
let operator
let secondNum
let displayValue 
let currValue
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


document.getElementById("1").onclick = () => displayValue = output.textContent = parseInt(output.textContent) + `1`

document.getElementById("2").onclick = () => displayValue = output.textContent = parseInt(output.textContent) + `2`  

document.getElementById("3").onclick = () => displayValue = output.textContent = parseInt(output.textContent) + `3`  

document.getElementById("4").onclick = () => displayValue = output.textContent = parseInt(output.textContent) + `4`  

document.getElementById("5").onclick = () => displayValue = output.textContent = parseInt(output.textContent) + `5`

document.getElementById("6").onclick = () => displayValue = output.textContent = parseInt(output.textContent) + `6`

document.getElementById("7").onclick = () => displayValue = output.textContent = parseInt(output.textContent) + `7`

document.getElementById("8").onclick = () => displayValue = output.textContent = parseInt(output.textContent) + `8`

document.getElementById("9").onclick = () => displayValue = output.textContent = parseInt(output.textContent) + `9`

document.getElementById("0").onclick = () => displayValue = output.textContent = parseInt(output.textContent) + `0`


let result = operate();