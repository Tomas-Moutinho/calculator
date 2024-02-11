let number1;
let operator;
let number2;
let displayContent = [];
let index = 0;

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



/////////////////////////////////////BUTTONS/////////////////////////////////////

btnClear.addEventListener("click", () => 
{
    displayContent.length = 0;
    displayScreen.textContent = displayContent.toString();
    index = 0;
})

btnDelete.addEventListener("click", () => 
{
    displayContent.pop();
    displayScreen.textContent = displayContent.toString().replaceAll(",","");
    if(index > 0)
    {
        index--;
    }
})

btn0.addEventListener("click", () => 
{
    displayContent[index] = 0;
    displayScreen.textContent = displayContent.toString().replaceAll(",","");
    index++;
})

btn1.addEventListener("click", () => 
{
    displayContent[index] = 1;
    displayScreen.textContent = displayContent.toString().replaceAll(",","");
    index++;
})

btn2.addEventListener("click", () => 
{
    displayContent[index] = 2;
    displayScreen.textContent = displayContent.toString().replaceAll(",","");
    index++;
})

btn3.addEventListener("click", () => 
{
    displayContent[index] = 3;
    displayScreen.textContent = displayContent.toString().replaceAll(",","");
    index++;
})

btn4.addEventListener("click", () => 
{
    displayContent[index] = 4;
    displayScreen.textContent = displayContent.toString().replaceAll(",","");
    index++;
})

btn5.addEventListener("click", () => 
{
    displayContent[index] = 5;
    displayScreen.textContent = displayContent.toString().replaceAll(",","");
    index++;
})

btn6.addEventListener("click", () => 
{
    displayContent[index] = 6;
    displayScreen.textContent = displayContent.toString().replaceAll(",","");
    index++;
})

btn7.addEventListener("click", () => 
{
    displayContent[index] = 7;
    displayScreen.textContent = displayContent.toString().replaceAll(",","");
    index++;
})

btn8.addEventListener("click", () => 
{
    displayContent[index] = 8;
    displayScreen.textContent = displayContent.toString().replaceAll(",","");
    index++;
})

btn9.addEventListener("click", () => 
{
    displayContent[index] = 9;
    displayScreen.textContent = displayContent.toString().replaceAll(",","");
    index++;
})

btnTimes.addEventListener("click", () => 
{
    displayContent[index] = '×';
    displayScreen.textContent = displayContent.toString().replaceAll(",","");
    index++;
})

btnDivide.addEventListener("click", () => 
{
    displayContent[index] = '÷';
    displayScreen.textContent = displayContent.toString().replaceAll(",","");
    index++;
})

btnAdd.addEventListener("click", () => 
{
    displayContent[index] = '+';
    displayScreen.textContent = displayContent.toString().replaceAll(",","");
    index++;
})

btnSubtract.addEventListener("click", () => 
{
    displayContent[index] = '-';
    displayScreen.textContent = displayContent.toString().replaceAll(",","");
    index++;
})

btnPoint.addEventListener("click", () => 
{
    displayContent[index] = '.';
    displayScreen.textContent = displayContent.toString().replaceAll(",","");
    index++;
})

btnEqual.addEventListener("click", () => 
{
    
})

/////////////////////////////////////FUNCTIONS/////////////////////////////////////

function operate(number1, number2, operator)
{
    switch(operator)
    {
        case "+":
        return add(number1,number2);

        case "-":
        return subtract(number1,number2);

        case "*":
        return multiply(number1,number2);

        case "/":
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