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
    if (!Number.isInteger(Number(result))) {
        return parseFloat(result).toFixed(3);
    } else {
        return (Number(result));
    }
};

const inputs = "987654321←.0C/*-+=".split("");


makeButtons();

function makeButtons() {
    inputs.forEach((input) => {
        const button = document.createElement("button");
        button.value = input;
        button.id = `button${input}`;
        button.innerText = `${input}`;
        button.classList.add("button");
        arrangeButtons(button);
    });
}

function arrangeButtons(button) {
    if (Number(button.value)) {
        button.classList.add("number");
        document.getElementById("nonops").appendChild(button);
    } else if (inputs.slice(-5).includes(button.value)) {
        if (button.value !== "=") {
            button.classList.add("operator");
        }
        document.getElementById("ops").appendChild(button);
    } else {
        button.classList.add("special");
        if (button.value === "0") {
            button.classList.add("number");
        } else if (button.value === "C") {
            button.classList.add("big");
        }
        document.getElementById("nonops").appendChild(button);
    }
}

const numbers = Array.from(document.getElementsByClassName("number"))
numbers.forEach(button => {
    let display = document.getElementById("display");
    button.addEventListener("click", () => {
        if (display.innerText === "0" || (operator && display.innerText === `${a}`)) {
            display.innerText = button.value;
        } else {
            display.innerText += button.value;
        }
    })
})

const operators = Array.from(document.getElementsByClassName("operator"));
operators.forEach(button => {
    button.addEventListener("click", () => {
        if (!a) {
            a = Number(document.getElementById("display").innerText);
        }
        operator = button.value;
    });
});

document.getElementById("button=").addEventListener("click", () => {
    if (a && operator && document.getElementById("display").innerText !== `${a}`) {
        b = Number(document.getElementById("display").innerText);
        if (operator === "/" && b === 0) {
            alert("not in my house");
        } else {
            setInitial(operate(a, operator, b));
        }
    }
})

document.getElementById("buttonC").addEventListener("click", () => {
    setInitial(0);
});

function setInitial(n) {
    a = n;
    operator = undefined;
    b = undefined;
    document.getElementById("display").innerText = a;
}