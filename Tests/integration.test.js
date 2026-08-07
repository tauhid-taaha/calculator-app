const basic = require("../Scripts/basic");
const advanced = require("../Scripts/advanced");
const custom = require("../Scripts/custom");

describe("Custom Calculator - Unit Tests", () => {
  test("compoundInterest computes correct amount and interest", () => {
    const res = custom.compoundInterest(1000, 10, 2);
    expect(res.amount).toBeCloseTo(1210, 2);
    expect(res.interest).toBeCloseTo(210, 2);
  });

  test("compoundInterest with 0 years returns interest 0", () => {
    const res = custom.compoundInterest(500, 5, 0);
    expect(res.interest).toBeCloseTo(0, 2);
  });

  test("compoundInterest throws on negative principal", () => {
    expect(() => custom.compoundInterest(-100, 5, 1)).toThrow();
  });

  test("compoundInterest throws on negative rate", () => {
    expect(() => custom.compoundInterest(100, -5, 1)).toThrow();
  });
});

describe("Integration Tests (Spy)", () => {
  test("Compound Interest should use both basic and advanced modules", () => {
    const addSpy = jest.spyOn(basic, "add");
    const divideSpy = jest.spyOn(basic, "divide");
    const multiplySpy = jest.spyOn(basic, "multiply");
    const subtractSpy = jest.spyOn(basic, "subtract");
    const powSpy = jest.spyOn(advanced, "pow");

    custom.compoundInterest(1000, 10, 2);

    expect(divideSpy).toHaveBeenCalled();
    expect(addSpy).toHaveBeenCalled();
    expect(powSpy).toHaveBeenCalled();
    expect(multiplySpy).toHaveBeenCalled();
    expect(subtractSpy).toHaveBeenCalled();

    addSpy.mockRestore();
    divideSpy.mockRestore();
    multiplySpy.mockRestore();
    subtractSpy.mockRestore();
    powSpy.mockRestore();
  });
});

describe("Integration Tests (Stub)", () => {
  // Stub: replace advanced.pow so growth factor is fixed to 1
  // This isolates custom.js logic from advanced.js's real implementation.
  test("compoundInterest uses stubbed advanced.pow", () => {
    const powStub = jest.spyOn(advanced, "pow").mockImplementation(() => 1);

    const res = custom.compoundInterest(1000, 10, 2);

    // growthFactor stubbed to 1, so amount === principal, interest === 0
    expect(res.amount).toBe(1000);
    expect(res.interest).toBe(0);
    expect(powStub).toHaveBeenCalledWith(1.1, 2);

    powStub.mockRestore();
  });
});
