
function pow(base, exponent) {
  return Math.pow(base, exponent);
}

function sqrt(a) {
  if (a < 0) {
    throw new Error("Cannot take square root of a negative number");
  }
  return Math.sqrt(a);
}

function percentage(value, percent) {
  return (value * percent) / 100;
}

const advancedCalc = { pow, sqrt, percentage };

if (typeof module !== "undefined" && module.exports) {
  module.exports = advancedCalc;
} else {
  window.advanced = advancedCalc;
}
