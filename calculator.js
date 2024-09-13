let display=document.querySelector("input");

let currentNum='';
let previousOperand='';
let operation = null;

function appendnumber(number){
     currentNum = currentNum.toString() + number.toString();
    updateDisplay();
}

function updateDisplay(){
    display.value=currentNum;
}

function setOperation(symbol){
     currentNum = currentNum.toString() + symbol.toString();
     updateDisplay();
    
}
function clearNum(){
    currentNum='';
    updateDisplay();
}

function Calculate() {
    currentNum=eval(currentNum);
    updateDisplay();
}
