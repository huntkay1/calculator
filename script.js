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

//Display the button's number on the display when clicked 
let numButtons = [...document.querySelectorAll(".num")];
let display = document.querySelector("#display-contents")

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.innerHTML += button.textContent;
    });
}); 


let num1
let num2
let operator

