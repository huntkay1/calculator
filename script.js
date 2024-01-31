function add(array) {
    return array.reduce((total, num) => total + num, 0)
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

function operate(num1, num2, operator) {
    switch (operator) {
        case "add":
            console.log (add([num1, num2]));
            break;
        
        case "sub":
            console.log (subtract([num1, num2]));
            break;
        
        case "div":
            console.log (divide([num1, num2]));
            break;
        
        case "mul":
            console.log (multiply([num1, num2]));
            break;

    }
}


const display = document.querySelector("#display-contents");
const numButtons = [...document.querySelectorAll(".num")];
const clearButton = document.querySelector("#clear");
const dltButton = document.querySelector("#delete");

//Display the button's number on the display when clicked 
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.innerHTML += button.textContent;
    });
}); 

//Clear display when clicked
clearButton.addEventListener('click', () => display.innerHTML = "");

//Delete last number when clicked
dltButton.addEventListener('click', () => {
    display.innerHTML = display.innerHTML.slice(0, -1);
})


let num1
let num2
let operator

