import Calculator from "./calculator.js";

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear]");
const negateButton = document.querySelector("[data-negate]");
const percentButton = document.querySelector("[data-percent]");
const operand1Display = document.querySelector("[data-operand-1]");
const operand2Display = document.querySelector("[data-operand-2]");

const calculator = new Calculator(operand1Display, operand2Display);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperator(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.calculate();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

negateButton.addEventListener("click", (button) => {
  calculator.negate();
  calculator.updateDisplay();
});

percentButton.addEventListener("click", (button) => {
  calculator.calculatePercent();
  calculator.updateDisplay();
});
