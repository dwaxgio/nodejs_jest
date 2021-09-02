const { test, expect } = require("@jest/globals");
const subtract = require("./subtract");

test("Properly subtracting two numbers", () => {
  expect(subtract(2, 1)).toBe(1);
});
