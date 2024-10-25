import {describe, expect, test} from 'vitest';
import {findFibonacci} from './helper';

describe('findFibonacci', () => {
  test('should check fibonacci output', () => {
    const expected = [0, 1, 1, 2, 3, 5, 8];
    expected.forEach((expectedVal, i) => {
      expect(findFibonacci(i)).toBe(expectedVal);
    });
  });
});
