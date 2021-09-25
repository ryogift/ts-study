import Calc from "./calc";

test("add", () => {
  const calc = new Calc(1, 2);
  expect(calc.add()).toBe(3);
});

test("minus", () => {
  const calc = new Calc(2, 1);
  expect(calc.minus()).toBe(1);
});

test("multiply", () => {
  const calc = new Calc(2, 2);
  expect(calc.multiply()).toBe(4);
});

test("divide", () => {
  const calc = new Calc(4, 2);
  expect(calc.divide()).toBe(2);
});
