function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  return operator(a, b);
}

let buttons = document.querySelectorAll(".button");

const display = document.querySelector(".display-space");

let txt;

let digitsA = "";
let digitsB = "";

let number1;
let number2;
let operator;
//  operate(operator,number1,number2)

const clear = () => {
  display.innerHTML = "";
};

buttons.forEach(function (button) {
  const addText = () => {
    txt = button.innerText;
    console.log(txt);
    if (["+", "-", "÷", "*"].includes(txt)) {
      number1 = parseInt(digitsA);
      display.append(txt);
      operator = txt;
      switch (operator) {
        case "+":
          operator = add;
          break;
        case "-":
          operator = subtract;
          break;
        case "÷":
          operator = divide;
          break;
        case "*":
          operator = multiply;
          break;
      }
      // console.log(operator)
    } else if (number1 === undefined && txt != "C") {
      digitsA += txt;
      display.append(txt);
    }
    console.log(
      `number1=${number1} number2=${number2} operator=${operator} digitsA=${digitsA} digitsB=${digitsB}`
    );
    if (operator != undefined) {
      if (["+", "-", "÷", "*", "=", "C"].includes(txt) == false) {
        digitsB += txt;
        display.append(txt);
        // console.log(digitsB)
      }
      if (txt == "=") {
        number2 = parseInt(digitsB);
        clear;
        let result = operate(operator, number1, number2);
        display.innerHTML = result;

        digitsA = result;
        digitsB = "";
        number1 = undefined;
        number2 = undefined;
        operator = undefined;
      }
    }
    if (txt == "C") {
      display.innerHTML = "";
      digitsA = "";
      digitsB = "";
      number1 = undefined;
      number2 = undefined;
      operator = undefined;
    }
  };

  button.addEventListener("click", addText);
});

//srcElement .innerText
