

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operator, a, b){
    return operator(a,b);
}

let buttons = document.querySelectorAll('.button')


const display = document.querySelector('.display-space');


let txt;


buttons.forEach(function (button){ 
    const addText =() => {
        txt =  button.innerText;

        display.append(txt);
        
    }
 button.addEventListener("click",addText);
  });



//srcElement .innerText

