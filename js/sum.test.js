// FILE WITH THE SAME NAME OF THE JS FILE WITH THE METHOD TO TEST
//1. IMPORT SUM FUNCTION
const { test, expect } = require("@jest/globals");
const sum = require("./sum");

// EXCECUTE TEST FUNCTION
test("Properly adds two numbers", () => {
  expect(
      sum(1, 2)
  ).toBe(3);
});
