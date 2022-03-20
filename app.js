const btnNumber = document.querySelectorAll('.btn.number');
const btnOperator = document.querySelectorAll('.btn.operator');
const btnEqual = document.querySelectorAll('.btn.equal');
const btnPoint = document.querySelectorAll('.btn.point');
const btnClear = document.querySelectorAll('#clear');
const btnDelete = document.querySelectorAll('#delete');
const valorAnterior = document.querySelectorAll('#valor-anterior');
const valorActual = document.querySelectorAll('#valor-actual');

valorAnterior[0].innerText = ['Hola'];
valorActual[0].innerText = ['Gola'];

btnNumber.forEach(function(number){
    number.addEventListener('click', e =>{
        newNumber = parseInt(e.target.outerText);
        valorActual[0].innerText = newNumber; 
    })  
});

btnOperator.forEach(function(operator){
    operator.addEventListener('click', () =>{
       console.log('Operador');
    })  
});

btnEqual.forEach(function(equal){
    equal.addEventListener('click', () =>{
       console.log('Equal');
    })  
});

btnClear.forEach(function(clear){
    clear.addEventListener('click', () =>{
        valorActual[0].innerText = [];
    })  
});

btnDelete.forEach(function(dele){
    dele.addEventListener('click', () =>{
        valorActual[0].innerText = [];
        valorAnterior[0].innerText = [];
    })  
});

