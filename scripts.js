let a = 0;
let operator;
let b;

document.getElementById("display").innerText = a;

function add(a,b) {return a + b;}
function subtract(a,b) {return a - b;}
function multiply(a,b) {return a * b;}
function divide(a,b) {return a / b;}

function operate(a, operator, b) {
    let result;
    switch (operator) {
        case "+":
            result = add(a,b);
            break;
        case "-":
            result = subtract(a,b);
            break;
        case "*":
            result = multiply(a,b);
            break;
        case "/":
            result = divide(a,b);
            break;
        default:
            break;
    }
    return parseFloat(result).toFixed(3);
};

const inputs = "1234567890C=+-*/".split("");

makeButtons();

function makeButtons() {
    inputs.forEach((input) => {
        const button = document.createElement("button");
        button.value = input;
        button.id = `button${input}`;
        button.innerText = `${input}`;

        if (inputs.slice(0, 10).includes(input)) {
            button.classList.add("number");
        } else if (inputs.slice(-4).includes(input)) {
            button.classList.add("operator");
        }

        if (button.classList.contains("operator")) {
            document.getElementById("operators").appendChild(button);
        } else {
            document.getElementById("nonops").appendChild(button);
        }

    });
}

const numbers = Array.from(document.getElementsByClassName("number"))
numbers.forEach(button => {
    let display = document.getElementById("display");
    button.addEventListener("click", () => {
        if (Number(display.innerText) === a) {
            display.innerText = button.value;
        } else {
            display.innerText += button.value;
        }
    })
})

const operators = Array.from(document.getElementsByClassName("operator"))
operators.forEach(button => {
    button.addEventListener("click", () => {
        if (!a) {
            a = Number(document.getElementById("display").innerText);
            operator = button.value;
        } else {
            b = Number(document.getElementById("display").innerText);
            a = operate(a, operator, b);
            document.getElementById("display").innerText = a;
            b = undefined;
        }
        console.log(a, operator, b);
    })
})

document.getElementById("button=").addEventListener("click", () => {
    if (a && operator) {
        b = Number(document.getElementById("display").innerText);
        a = operate(a, operator, b);
        document.getElementById("display").innerText = a;
        b = undefined;
        operator = undefined;
    }
})

document.getElementById("buttonC").addEventListener("click", () => {
    a = 0;
    operator = undefined;
    b = undefined;
    document.getElementById("display").innerText = 0;
    console.log(a, operator, b);
})

