const array = [-1, 2, 4, 3, -2, -5, 6, -3, 1];
const emptyArray: number[] = [];
const undefinedArray = undefined;

const closestToZero = (numbers: number[] | undefined): number => {
  if (numbers === undefined || numbers.length === 0) {
    return 0;
  }

  return numbers.reduce((accumulator: number, currentValue: number): number => {
    return Math.abs(accumulator) < Math.abs(currentValue)
      ? accumulator
      : currentValue;
  });
};

console.log("Empty array :", closestToZero(emptyArray));
console.log("Undefined array :", closestToZero(undefinedArray));
console.log("Array :", closestToZero(array));
