
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


  const rateFraction = basic.divide(ratePercent, 100);

 
  const base = basic.add(1, rateFraction);


  const growthFactor = advanced.pow(base, years);


  const amount = basic.multiply(principal, growthFactor);


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
