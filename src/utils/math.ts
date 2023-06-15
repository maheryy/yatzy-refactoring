/**
 * @returns Sum of all numbers
 */
export const sum = (...args: number[]): number => args.reduce((a, b) => a + b, 0);

/**
 * @returns Sum of all numbers with the given value
 */
export const sumOf = (value: number, numbers: number[]): number =>
  sum(...numbers.filter((n) => n === value));

/**
 * @returns Number of occurrences of the given value
 */
export const countOccurrence = (value: number, numbers: number[]): number =>
  numbers.filter((n) => n === value).length;

/**
 * @returns The first number with at least the given number of occurrences
 */
export const findFirstOccurrenceAbove = (minOccurrence: number, numbers: number[]): number =>
  numbers.find((n) => countOccurrence(n, numbers) >= minOccurrence) || 0;
