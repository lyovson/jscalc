export default class Calculator {
  constructor(operand1Display, operand2Display) {
    this.operand1Display = operand1Display;
    this.operand2Display = operand2Display;
    this.clear();
  }

  clear() {
    this.operand2 = "";
    this.operand1 = "";
    this.operator = undefined;
  }

  appendNumber(number) {
    if (number === "." && this.operand2.includes(".")) return;
    this.operand2 = this.operand2.toString() + number.toString();
  }

  chooseOperator(operator) {
    if (this.operand2 === "") return;
    if (this.operand1 !== "") {
      this.calculate();
    }
    this.operator = operator;
    this.operand1 = this.operand2;
    this.operand2 = "";
  }

  calculate() {
    let computation;
    const prev = parseFloat(this.operand1);
    const current = parseFloat(this.operand2);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operator) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "x":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.operand2 = computation;
    this.operator = undefined;
    this.operand1 = "";
  }

  calculatePercent() {
    let computation;
    switch (this.operator) {
      case "+":
        computation =
          parseFloat(this.operand1) + (this.operand1 * this.operand2) / 100;
        break;
      case "-":
        computation =
          parseFloat(this.operand1) - (this.operand1 * this.operand2) / 100;
        break;
      case "x":
        computation =
          (parseFloat(this.operand1) * (this.operand1 * this.operand2)) / 100;
        break;
      case "÷":
        computation =
          parseFloat(this.operand1) / ((this.operand1 * this.operand2) / 100);
        break;
      default:
        return;
    }

    this.operand2 = computation;
    this.operator = undefined;
  }

  negate() {
    if (this.operand2 === "") return;
    this.operand2 *= -1;
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.operand2Display.innerText = this.getDisplayNumber(this.operand2);
    if (this.operator != null) {
      this.operand1Display.innerText = `${this.getDisplayNumber(
        this.operand1
      )} ${this.operator}`;
    } else {
      this.operand1Display.innerText = "";
    }
  }
}
