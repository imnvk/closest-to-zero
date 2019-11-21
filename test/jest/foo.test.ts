import { closestToZero } from "./foo";

test("Random numbers with 2 numbers either negative/positive, should return 1", () => {
  expect(closestToZero([-1, 2, 4, 3, -2, -5, 6, -3, 1])).toBe(1);
});

test("Random numbers, should return 1", () => {
  expect(closestToZero([7, 10, 4, 8, 9, 6, 3, 11, 13])).toBe(3);
});

test("Random numbers, should return -2", () => {
  expect(closestToZero([7, -4, 10, 4, 8, 9, 6, -2, 3, -6, 11, 13])).toBe(-2);
});

test("Empty array, should return 0", () => {
  expect(closestToZero([])).toBe(0);
});

test("Undefined array, should return 0", () => {
  expect(closestToZero(undefined)).toBe(0);
});
