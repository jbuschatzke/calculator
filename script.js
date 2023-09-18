//calculation functions

let add = (a,b) => a + b;

let subtract = (a,b) => a - b;

let multiply = (a,b) => a * b;

let divide = (a,b) => a / b;

// calculator display variables
let num1 = "";
let num2 = "";
let operator = "";
let result = "";

//operate function will take two user inputs and call a
//calculation function based on the chosen operator

let operate = function(num1, num2, operator) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    } else {
        return "Erm...hi....";
    }
};

//clicking a button updates the calculator display and display variable
let display = document.getElementById("display");


let buttons = function makeButtons(){
    for (i = 0; i <= 9; i++){
        let buttonsDisplay = document.getElementById("buttons");
        let btn = document.createElement("button");
        btn.setAttribute("id", "button" + `${i}`);
        btn.textContent = `${i}`;
        btn.addEventListener("click", () => {
            if (display.textContent == num1 || display.textContent == result ) {
            display.textContent = "";
            display.textContent += btn.textContent;
            } else {
            display.textContent += btn.textContent;
            }
        });
        buttonsDisplay.appendChild(btn);
    }
};

buttons();

//add event listeners for each operator call


// let addOperator = function(){
//     num1 = document.textContent;
//     display.textContent = "";
//     alert("I work!");
// };


let addBtn = document.getElementById("add");
addBtn.addEventListener("click", () => {
    if (num1 == ""){
    num1 = +display.textContent;
    operator = "+";
    console.log(num1);
    } else if (operator != "+") {
        operator = "+";
        num1 = +display.textContent;
        result = +display.textContent;
    } else if (typeof num1 == "number") {
        num2 = +display.textContent;
        operator = "+";
        display.textContent = operate(num1, num2, operator);
        num1 = +display.textContent;
        console.log(num1, num2);
    }
});

let subBtn = document.getElementById("subtract");
subBtn.addEventListener("click", () => {
    if (num1 == ""){
    num1 = +display.textContent;
    operator = "-";
    console.log(num1);
    } else if (operator != "-") {
        operator = "-";
        num1 = +display.textContent;
        result = +display.textContent;
    } else if (typeof num1 == "number") {
        num2 = +display.textContent;
        operator = "-";
        display.textContent = operate(num1, num2, operator);
        num1 = +display.textContent;
        console.log(num1, num2);
    }
});

let multBtn = document.getElementById("multiply");
multBtn.addEventListener("click", () => {
    if (num1 == ""){
    num1 = +display.textContent;
    operator = "*";
    console.log(num1);
    } else if (operator != "*") {
        operator = "*";
        num1 = +display.textContent;
        result = +display.textContent;
    } else if (typeof num1 == "number") {
        num2 = +display.textContent;
        operator = "*";
        display.textContent = operate(num1, num2, operator);
        num1 = +display.textContent;
        console.log(num1, num2);
    }
});

let divBtn = document.getElementById("divide");
divBtn.addEventListener("click", () => {
    if (num1 == ""){
    num1 = +display.textContent;
    operator = "/";
    console.log(num1);
    } else if (operator != "/") {
        operator = "/";
        num1 = +display.textContent;
        result = +display.textContent;
    } else if (typeof num1 == "number") {
        num2 = +display.textContent;
        operator = "/";
        display.textContent = operate(num1, num2, operator);
        num1 = +display.textContent;
        console.log(num1, num2);
    }
});


let equalsBtn = document.getElementById("equals");
equalsBtn.addEventListener("click", () => {
    if (typeof num2 != "number"){
    num2 = +display.textContent;
    display.textContent = operate(num1, num2, operator);
    result = +display.textContent;
    operator = "=";
    console.log(num1, num2, operator);
    } else {
    num2 = +display.textContent;
    display.textContent = operate(num1, num2, operator);
    result = +display.textContent;
    operator = "=";
    }
});