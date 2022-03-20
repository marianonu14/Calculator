const btn = document.querySelectorAll('.btn.num');
const operator = document.querySelectorAll('.btn.operator');
const equal = document.querySelector('.btn.equal');
const point = document.querySelector('.btn.point');
const screenPrevious = document.querySelector('#valor-anterior');
const screenCurrent = document.querySelector('#valor-actual');
const clear = document.querySelector('#clear');
const reset = document.querySelector('#delete');

let firstValue;
let secondValue;
let operatorValue;

screenPrevious.innerText = "";
screenCurrent.innerText = "";

btn.forEach(function(button){
    button.addEventListener('click', e =>{
        if (screenCurrent.innerText.length < 15) {
            screenCurrent.innerText += e.target.innerText;
        }
        }); 
    }); 

operator.forEach(function(operator){
    operator.addEventListener('click', e =>{
        screenPrevious.innerText = screenCurrent.innerText
        screenCurrent.innerText = ''
        operatorValue = e.target.innerText
        screenCurrent.innerText = e.target.innerText
        }); 
    });  

equal.addEventListener('click', () =>{
    firstValue = screenPrevious.innerText
    secondValue = screenCurrent.innerText.slice(1)
    operation(parseFloat(firstValue),parseFloat(secondValue),operatorValue);
}); 

point.addEventListener('click', e =>{
    if (!screenCurrent.innerText.includes(".")){
        screenCurrent.innerText += e.target.innerText;
    }
}); 

clear.addEventListener('click', () => screenCurrent.innerText = ""); 

reset.addEventListener('click', () =>{
    resetScreen();
    resetValue();
}); 


function operation(a,b,op) {
 if (op === "+"){
    screenPrevious.innerText = "";
    screenCurrent.innerText = a + b;
    resetValue();
 } else if (op === "-"){
    screenPrevious.innerText = "";
    screenCurrent.innerText = a - b;
    resetValue();
 } else if (op === "/"){
    screenPrevious.innerText = "";
    screenCurrent.innerText = a / b;
    resetValue();
 } else if (op === "*"){
    screenPrevious.innerText = "";
    screenCurrent.innerText = a * b;
    resetValue();
 } else {
    screenPrevious.innerText = "";
    screenCurrent.innerText = "Error";
 }
};

function resetValue() {
    firstValue
    secondValue
    operatorValue
};

function resetScreen() {
    screenPrevious.innerText = "";
    screenCurrent.innerText = "";
};