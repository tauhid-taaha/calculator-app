// Custom Calculator - Compound Interest Calculator
// Formula: A = P * (1 + r/100) ^ t   |  CI = A - P
let basic, advanced;
if (typeof module !== "undefined" && module.exports) {
  basic = require("./basic");
  advanced = require("./advanced");
} else {
  basic = window.basic;
  advanced = window.advanced;
}

function compoundInterest(principal, ratePercent, years) {
  if (principal < 0 || ratePercent < 0 || years < 0) {
    throw new Error("Inputs must be non-negative numbers");
  }

  // 1. rate/100 using basic.divide
  const rateFraction = basic.divide(ratePercent, 100);

  // 2. 1 + rateFraction using basic.add
  const base = basic.add(1, rateFraction);

  // 3. base ^ years using advanced.pow
  const growthFactor = advanced.pow(base, years);

  // 4. principal * growthFactor using basic.multiply
  const amount = basic.multiply(principal, growthFactor);

  // 5. amount - principal using basic.subtract
  const interest = basic.subtract(amount, principal);

  return {
    principal: principal,
    amount: amount,
    interest: interest
  };
}

const customCalc = { compoundInterest };

if (typeof module !== "undefined" && module.exports) {
  module.exports = customCalc;
} else {
  window.custom = customCalc;
}
