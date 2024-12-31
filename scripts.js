function add(a,b) {return a + b;}

function subtract(a,b) {return a - b;}

function multiply(a,b) {return a * b;}

function divide(a,b) {
    return a / b;
}

let a;
let operator;
let b;

function operate(a, operator, b) {
    switch (operator) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
        default:
            break;
    }
};

createDisplay();
createButtons();
addClearButton();

function createDisplay() {
    const inputDisplay = document.createElement("div");
    inputDisplay.id = "inputDisplay";
    inputDisplay.innerText = "23487";
    document.getElementById("calculator").appendChild(inputDisplay);
}

function createButtons() {
    const buttons = document.createElement("div");
    buttons.id = "buttons";
    const buttonValues = "1234567890+-*/".split("");
    buttonValues.forEach(val => {
        const button = document.createElement("button");
        button.id = `button${val}`;
        button.innerText = `${val}`;
        button.value = val;
        button.classList.add(isNaN(Number(val)) ? "operator-button" : "number-button");
        buttons.appendChild(button);
    });
    document.getElementById("calculator").appendChild(buttons);
}

function addClearButton() {
    const button = document.createElement("button");
    button.id = "clearButton";
    button.innerText = "clear";
    document.getElementById("buttons").appendChild(button);
}