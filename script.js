//calculation functions

let add = (a,b) => (a + b);

let subtract = (a,b) => (a - b);

let multiply = (a,b) => (a * b);

let divide = (a,b) => (a / b);

// calculator display variables
let num1 = "";
let num2 = "";
let operator = "";
let result = "";

//operate function will take two user inputs and call a
//calculation function based on the chosen operator

let operate = function(num1, num2, operator) {
    if (operator == "+") {
        return Math.round((add(num1, num2)) * 10) / 10;
    } else if (operator == "-") {
        return Math.round((subtract(num1, num2)) * 10) / 10;
    } else if (operator == "*") {
        return Math.round((multiply(num1, num2)) * 10) / 10;
    } else if (operator == "/") {
        if (num2 == 0){
            return "Are you TRYING to destroy the universe?"
        } else {
        return Math.round((divide(num1, num2)) * 10) / 10;
        }
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
            document.getElementById("add").disabled = false;
            document.getElementById("subtract").disabled = false;
            document.getElementById("multiply").disabled = false;
            document.getElementById("divide").disabled = false;
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
    } else if (operator != "+"  && operator == "=") {
        num1 = +display.textContent;
        operator = "+";
    } else if (operator != "+"){
        num2 = +display.textContent;
        display.textContent = operate(num1, num2, operator);
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
    addBtn.disabled = true;
});

let subBtn = document.getElementById("subtract");
subBtn.addEventListener("click", () => {
    if (num1 == ""){
    num1 = +display.textContent;
    operator = "-";
    console.log(num1);
    }  else if (operator != "-"  && operator == "=") {
        num1 = +display.textContent;
        operator = "-";
    } else if (operator != "-"){
        num2 = +display.textContent;
        display.textContent = operate(num1, num2, operator);
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
    subBtn.disabled = true;
});

let multBtn = document.getElementById("multiply");
multBtn.addEventListener("click", () => {
    if (num1 == ""){
    num1 = +display.textContent;
    operator = "*";
    console.log(num1);
    }  else if (operator != "*"  && operator == "=") {
        num1 = +display.textContent;
        operator = "*";
    } else if (operator != "*"){
        num2 = +display.textContent;
        display.textContent = operate(num1, num2, operator);
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
    multBtn.disabled = true;
});

let divBtn = document.getElementById("divide");
divBtn.addEventListener("click", () => {
    if (num1 == ""){
    num1 = +display.textContent;
    operator = "/";
    console.log(num1);
    }  else if (operator != "/"  && operator == "=") {
        num1 = +display.textContent;
        operator = "/";
    } else if (operator != "/"){
        num2 = +display.textContent;
        display.textContent = operate(num1, num2, operator);
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
    divBtn.disabled = true;
});


let equalsBtn = document.getElementById("equals");
equalsBtn.addEventListener("click", () => {
    if (typeof num1 == "number" && typeof num2 != "number"){
    num2 = +display.textContent;
    display.textContent = operate(num1, num2, operator);
    result = +display.textContent;
    operator = "=";
    console.log(num1, num2, operator);
    } else if (typeof num1 != "number"){
    return display.textContent;
    } else {
    num2 = +display.textContent;
    display.textContent = operate(num1, num2, operator);
    result = +display.textContent;
    operator = "=";
    }
});

let clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    display.textContent = "";
    operator = "";
});