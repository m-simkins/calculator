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

const inputs = "1234567890C=+-*/".split("");
const numbers = inputs.slice(0, 9);
const specials = inputs.slice(9, 12);
const operators = inputs.slice(-4);

makeButtons();

function makeButtons() {
    inputs.forEach((input) => {
        const button = document.createElement("button");
        button.value = input;
        button.id = `button${input}`;
        button.classList.add("button");
        button.innerText = `${input}`;
        document.getElementById("buttons").appendChild(button);
    });
}

// function createButtons() {
//     const buttons = document.createElement("div");
//     buttons.id = "buttons";
//     const buttonValues = "1234567890+-*/".split("");
//     buttonValues.forEach(val => {
//         const button = document.createElement("button");
//         button.id = `button${val}`;
//         button.innerText = `${val}`;
//         button.value = val;
//         button.classList.add(isNaN(Number(val)) ? "operator-button" : "number-button");
//         buttons.appendChild(button);
//     });
//     document.getElementById("calculator").appendChild(buttons);
//     addSpecialButtons();
// }

// function addSpecialButtons() {
//     ["=", "Clear"].forEach(value => {        
//         const button = document.createElement("button");
//         button.id = `button${value}`;
//         button.innerText = `${value}`;
//         document.getElementById("buttons").appendChild(button);
//     });
// }

// Array.from(document.getElementsByClassName("number-button")).forEach(button => {
//     button.addEventListener("click", () => {
//         if (!a) {
//             a = Number(button.value);
//         } else {
//             b = Number(button.value);
//         }
//         document.getElementById("display").innerText = button.value;
//         console.log(a, b);
//     })
// });