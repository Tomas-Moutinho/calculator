const displayScreen = document.querySelector("#display");
const btnClear = document.querySelector("#clearBtn");
const btnDelete = document.querySelector("#deleteBtn");
const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btnTimes = document.querySelector("#btnTimes");
const btnDivide = document.querySelector("#btnDivide");
const btnAdd = document.querySelector("#btnAdd");
const btnSubtract = document.querySelector("#btnSubtract");
const btnEqual = document.querySelector("#btnEqual");
const btnPoint = document.querySelector("#btnPoint");

let firstNumber = "";
let secondNumber = "";
let operator = null;
let displayMem = "";

/////////////////////////////////////BUTTONS/////////////////////////////////////////////////
btnClear.addEventListener("click", () => {
    clear();
})

btnDelete.addEventListener("click", () => {
    deleteLastCharacter();
})

btn0.addEventListener("click", () => {
    append("0");
})

btn1.addEventListener("click", () => {
    append("1");
})

btn2.addEventListener("click", () => {
    append("2");
})

btn3.addEventListener("click", () => {
    append("3");
})

btn4.addEventListener("click", () => {
    append("4");
})

btn5.addEventListener("click", () => {
    append("5");
})

btn6.addEventListener("click", () => {
    append("6");
})

btn7.addEventListener("click", () => {
    append("7");
})

btn8.addEventListener("click", () => {
    append("8");
})

btn9.addEventListener("click", () => {
    append("9");
})

btnPoint.addEventListener("click", () => {
    append(".");
})

btnAdd.addEventListener("click", () => {
    append("+");
})

btnSubtract.addEventListener("click", () => {
    append("-");
})

btnTimes.addEventListener("click", () => {
    append("×");
})

btnDivide.addEventListener("click", () => {
    append("÷");
})

btnEqual.addEventListener("click", () => {
    let result;
 
    result = calculateOperation(displayMem);
    displayMem = result;
    displayScreen.textContent = displayMem;
})


/////////////////////////////////////LOGIC FUNCTIONS/////////////////////////////////////////
function calculateOperation(str)
{
    for(let i = 0; i < str.length; i++)
    {
        if(str.at(i) === "+" || str.at(i) === "-" || str.at(i) === "×" || str.at(i) === "÷")
        {
            for(let j = i + 1; j < str.length; j++)
            {
                if(str.at(j) === "+" || str.at(j) === "-" || str.at(j) === "×" || str.at(j) === "÷")
                {
                    let subStr = str.substring(0, j);
                    subStr = strToResult(subStr);
                    str = str.substring(j, str.length);
                    str = subStr + str;
                    console.log(str);
                }
            }
        }

    }
    return str = strToResult(str);
}

function strToResult(str)
{
    let result;

    for(let i = 0; i < str.length; i++)
    {
        if(str.at(i) === "+" || str.at(i) === "-" || str.at(i) === "×" || str.at(i) === "÷")
        {
            firstNumber = str.substring(0, i);
            operator = str.at(i);
            secondNumber = str.substring(i + 1, str.length);
            result = operate(firstNumber, operator, secondNumber)
            //console.log(result);
            return result.toString();
        }
    }

}

function append(character)
{
    displayMem += character;
    displayScreen.textContent = displayMem;
}

function clear()
{
    displayMem = "";
    displayScreen.textContent = displayMem;
}

function deleteLastCharacter()
{
    displayMem = displayMem.substring(0, displayMem.length - 1);
    displayScreen.textContent = displayMem;
}

/////////////////////////////////////OPERATION FUNCTIONS/////////////////////////////////////
function operate(number1, operator, number2)
{
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    switch(operator)
    {
        case "+":
        return add(number1,number2);

        case "-":
        return subtract(number1,number2);

        case "×":
        return multiply(number1,number2);

        case "÷":
        return divide(number1,number2);
    }
}

function add(number1, number2)
{
    return number1 + number2;
}

function subtract(number1, number2)
{
    return number1 - number2;
}

function multiply(number1, number2)
{
    return number1 * number2;
}

function divide(number1, number2)
{
    if(number2 == 0)
    {
        alert("ERROR: DO NOT TRY TO DIVIDE BY ZERO!");
    }
    else
    {
        return number1 / number2;
    }
}
