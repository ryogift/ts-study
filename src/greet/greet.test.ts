import Greet from "./greet";

test("hello", () => {
  const greet = Greet("Maddison");
  expect(greet).toBe("Hello Maddison!");
});
