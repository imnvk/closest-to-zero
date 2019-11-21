export const closestToZero = (numbers: number[] | undefined): number => {
  if (numbers === undefined || numbers.length === 0) {
    return 0;
  }

  return numbers.reduce((accumulator: number, currentValue: number): number => {
    return Math.abs(accumulator) < Math.abs(currentValue)
      ? accumulator
      : currentValue;
  });
};
