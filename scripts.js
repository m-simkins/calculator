let a;
let operator;
let b;

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
    document.getElementById("display").innerText = result;
    console.log(`${a} ${operator} ${b} = ${result}`);
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
    button.addEventListener("click", () => {
        document.getElementById("display").innerText = button.value;
        if (!a) {
            a = Number(button.value);
        } else {
            if (b) {
                a = b;
            } 
            b = Number(button.value);
        }
        console.log(a, operator, b);
    })
})

const operators = Array.from(document.getElementsByClassName("operator"))
operators.forEach(button => {
    button.addEventListener("click", () => {
        operator = button.value;
        console.log(a, operator, b);
    })
})

document.getElementById("button=").addEventListener("click", () => {
    if (a && operator && b) {
        operate(a, operator, b);
    }
})

document.getElementById("buttonC").addEventListener("click", () => {
    a = undefined;
    operator = undefined;
    b = undefined;
    document.getElementById("display").innerText = 0;
    console.log(a, operator, b);
})