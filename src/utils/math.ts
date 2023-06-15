export const sum = (...args: number[]): number => args.reduce((a, b) => a + b, 0);

export const sumOf = (value: number, numbers: number[]): number =>
  sum(...numbers.filter((n) => n === value));

export const countOccurrence = (value: number, numbers: number[]): number =>
  numbers.filter((n) => n === value).length;

export const findFirstOccurrenceAbove = (minOccurrence: number, numbers: number[]): number =>
  numbers.find((n) => countOccurrence(n, numbers) >= minOccurrence) || 0;
