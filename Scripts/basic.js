// Basic Calculator - simple one-by-one operations
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
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

const basicCalc = { add, subtract, multiply, divide };

if (typeof module !== "undefined" && module.exports) {
  module.exports = basicCalc;
} else {
  window.basic = basicCalc;
}
