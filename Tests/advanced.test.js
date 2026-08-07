const advanced = require("../Scripts/advanced");

describe("Advanced Calculator", () => {
  test("pow", () => {
    expect(advanced.pow(2, 3)).toBe(8);
  });

  test("sqrt", () => {
    expect(advanced.sqrt(9)).toBe(3);
  });

  test("sqrt of negative throws", () => {
    expect(() => advanced.sqrt(-4)).toThrow();
  });

  test("percentage", () => {
    expect(advanced.percentage(200, 10)).toBe(20);
  });

  test("pow with 0 exponent", () => {
    expect(advanced.pow(5, 0)).toBe(1);
  });
});
