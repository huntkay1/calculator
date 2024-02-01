let num1;
let num2;
let operator;
let displayValue;
let newCalc = false;
let plusMinus = false;

const display = document.querySelector("#display-contents");
const numButtons = [...document.querySelectorAll(".num")];
const clearButton = document.querySelector("#clear");
const dltButton = document.querySelector("#delete");
const operatorButtons = [...document.querySelectorAll(".operator")];
const equalButton = document.querySelector(".equals");
const plusMinusButton = document.querySelector("#plusMinus");

//Functions that perform operations
function add(array) {
    return array.reduce((total, num) => total + num, 0);
};

function subtract(array) {
    return array.reduce((total, num) => total - num)
};

function divide(array) {
    return array.reduce((total, num) => total / num)
};

function multiply(array) {
    return array.reduce((total, num) => total * num)
}

//Perfoms proper calcuation based on operator given
function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            displayValue = (display.innerHTML = add([num1, num2]));
            newCalc = true;
            break;
        
        case "-":
            display.innerHTML = subtract([num1, num2]);
            newCalc = true;
            break;
        
        case "/":
            display.innerHTML = divide([num1, num2]);
            newCalc = true;
            break;
        
        case "*":
            display.innerHTML = multiply([num1, num2]);
            newCalc = true;
            break;

    }
}

//Display the button's number on the display when clicked 
//First checks to see if a new calculation is being made. If so, the displayValue is cleared. 
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        let num = button.textContent;
        if (newCalc === true && displayValue.includes(operator) === false) {
            display.innerHTML = "";
            display.innerHTML += num;
            displayValue = display.innerHTML;
            newCalc = false;
        } else {
            display.innerHTML += num;
            displayValue = display.innerHTML;
        }
    });
}); 

//Clear display when clicked
clearButton.addEventListener('click', () => {
    display.innerHTML = "";
    displayValue = display.innerHTML;
});

//Delete last number when clicked
dltButton.addEventListener('click', () => {
    display.innerHTML = display.innerHTML.slice(0, -1);
    displayValue = display.innerHTML;
})

//Displays operator. Operator button acts as equals button if clicked a second time
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!displayValue.includes(operator)) { 
            operator = button.textContent;
            displayValue = (display.innerHTML += operator); 
        } else {
            num1 = parseInt(display.innerHTML.slice(0, -1));
            index = displayValue.indexOf(operator);
            num2 = parseInt(displayValue.slice(index +1));
            operate(num1, num2, operator);
            operator = button.textContent;
            display.innerHTML += operator;
            displayValue = display.innerHTML;
        }
    })
})

//Collects second number and sends values to be calculated
equalButton.addEventListener('click', () => {
   num1 = parseInt(display.innerHTML.slice(0, -1));
   index = displayValue.indexOf(operator);
   num2 = parseInt(displayValue.slice(index + 1));
   operate(num1, num2, operator);
   displayValue = display.innerHTML;
})

//Adds negative sign if clicked and removes it when clicked again
plusMinusButton.addEventListener('click', () => {
    plusMinus = !plusMinus; 

    if (plusMinus) {
        display.innerHTML = "-" + display.innerHTML;
        displayValue = display.innerHTML;
    } else if (!plusMinus){
        display.innerHTML = display.innerHTML.slice(1);
        displayValue = display.innerHTML;
    }
})





