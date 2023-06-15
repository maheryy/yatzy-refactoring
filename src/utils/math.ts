export const sum = (...args: number[]): number => args.reduce((a, b) => a + b, 0);

export const sumOf = (value: number, numbers: number[]): number =>
  sum(...numbers.filter((n) => n === value));
