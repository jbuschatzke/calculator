//calculation functions

let add = (a,b) => a + b;

let subtract = (a,b) => a - b;

let multiply = (a,b) => a * b;

let divide = (a,b) => a / b;

// calculator display variables

let num1;
let num2;
let operator;

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


let buttons = function makeButtons(){
    for (i = 0; i <= 9; i++){
        let display = document.getElementById("buttons");
        let btn = document.createElement("button");
        btn.setAttribute("id", "button" + `${i}`);
        btn.textContent = `${i}`;
        btn.addEventListener("click", () => document.getElementById("display").textContent += btn.textContent);
        display.appendChild(btn);
    }
}
buttons();
//clicking a button updates the calculator display and display variable
// const button0 = document.getElementById("0");
// button0.addEventListener("click", () => document.getElementById("display").textContent += "0");