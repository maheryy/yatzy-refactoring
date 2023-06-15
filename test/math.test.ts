import assert from 'assert';
import { countOccurrence, findFirstOccurrenceAbove, sum, sumOf } from '../src/utils/math';

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

describe('sumOf function', () => {
  it('should sum up a matching set of number', () => {
    const res = sumOf(2, [2, 2, 4, 5, 2]);
    assert.strictEqual(res, 6);
  });

  it('should return 0 when no matching number is found in the given set', () => {
    const res = sumOf(1, [2, 2, 4, 5, 2]);
    assert.strictEqual(res, 0);
  });

  it('should return 0 when having an empty set of number', () => {
    const res = sumOf(1, []);
    assert.strictEqual(res, 0);
  });
});

describe('countOccurrence function', () => {
  it('should count the occurrence of a specific number in a list', () => {
    const res = countOccurrence(2, [2, 2, 4, 5, 2]);
    assert.strictEqual(res, 3);
  });

  it('should return 0 when no occurrence found for the given number', () => {
    const res = countOccurrence(1, [2, 2, 4, 5, 2]);
    assert.strictEqual(res, 0);
  });
});

describe('findFirstOccurrenceAbove function', () => {
  it('should return the first number that occurs above a given condition', () => {
    const res = findFirstOccurrenceAbove(3, [2, 2, 4, 5, 2]);
    assert.strictEqual(res, 2);
  });

  it('should return 0 when no number occurs more than the given condition', () => {
    const res = findFirstOccurrenceAbove(3, [1, 2, 4, 5, 2]);
    assert.strictEqual(res, 0);
  });
});
