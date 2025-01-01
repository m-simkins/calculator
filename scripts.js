let a;
let b;
let operator;

function add(a,b) {return a + b;}
function subtract(a,b) {return a - b;}
function multiply(a,b) {return a * b;}
function divide(a,b) {return a / b;}

function operate(a, b, operator) {
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

const inputs = "9876543210C=+-*/".split("");

makeButtons();

function makeButtons() {
    inputs.forEach((input) => {
        const button = document.createElement("button");
        button.value = input;
        button.id = `button${input}`;

        let type;
        if (inputs.slice(0, 9).includes(input)) {
            type = "number";
        } else if (inputs.slice(9, 12).includes(input)) {
            type = "special";
        } else if (inputs.slice(-4).includes(input)) {
            type = "operator";
        }

        button.classList.add("button", `${type}`);
        button.innerText = `${input}`;
        document.getElementById(`${type}s`).appendChild(button);

    });
}