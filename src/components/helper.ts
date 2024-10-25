export const findFibonacci = (num: number): number => {
  if (num < 2) {
    return num;
  }

  return findFibonacci(num - 1) + findFibonacci(num - 2);
};
