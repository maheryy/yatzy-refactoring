import assert from 'assert';
import { sum } from '../src/utils/math';

describe('sum function', () => {
  it('should sum up a given set of number', () => {
    const res = sum(2, 3, 4, 5, 1);
    assert.strictEqual(res, 15);
  });
  
  it('should return 0 when giving no argument', () => {
    const res = sum();
    assert.strictEqual(res, 0);
  });
});
