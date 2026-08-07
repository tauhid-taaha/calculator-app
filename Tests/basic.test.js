const basic = require("../Scripts/basic");

describe("Basic Calculator", () => {
  test("add", () => {
    expect(basic.add(2, 3)).toBe(5);
  });

  test("subtract", () => {
    expect(basic.subtract(5, 3)).toBe(2);
  });

  test("multiply", () => {
    expect(basic.multiply(4, 3)).toBe(12);
  });

  test("divide", () => {
    expect(basic.divide(10, 2)).toBe(5);
  });

  test("divide by zero throws", () => {
    expect(() => basic.divide(10, 0)).toThrow();
  });

  test("add handles negative numbers", () => {
    expect(basic.add(-2, -3)).toBe(-5);
  });
});
