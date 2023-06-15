import { countOccurrence, findFirstOccurrenceAbove, sum, sumOf } from './utils/math';

export default class Yatzy {
  private dice: number[];

  constructor(d1: number, d2: number, d3: number, d4: number, d5: number) {
    this.dice = [d1, d2, d3, d4, d5];
  }

  static chance(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return sum(d1, d2, d3, d4, d5);
  }

  static yatzy(...dice: number[]): number {
    return dice.some((d) => d !== dice[0]) ? 0 : 50;
  }

  static ones(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return sumOf(1, [d1, d2, d3, d4, d5]);
  }

  static twos(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return sumOf(2, [d1, d2, d3, d4, d5]);
  }

  static threes(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return sumOf(3, [d1, d2, d3, d4, d5]);
  }

  static onePair(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const allDice = [d1, d2, d3, d4, d5];
    return allDice.reduce(
      (highest, dice) =>
        countOccurrence(dice, allDice) >= 2 && dice * 2 > highest ? dice * 2 : highest,
      0
    );
  }

  static twoPairs(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const allDice = [d1, d2, d3, d4, d5];
    let firstPair: null | number = null;

    for (const dice of allDice) {
      // the current dice has no pair
      if (countOccurrence(dice, allDice) < 2) {
        continue;
      }

      // first pair
      if (firstPair === null) {
        firstPair = dice;
      }

      // the current dice has the same value as the first found pair
      if (firstPair === dice) {
        continue;
      }

      // second pair is found, so return the sum of both pairs
      return dice * 2 + firstPair * 2;
    }

    return 0;
  }

  static threeOfKind(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return findFirstOccurrenceAbove(3, [d1, d2, d3, d4, d5]) * 3;
  }

  static fourOfKind(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return findFirstOccurrenceAbove(4, [d1, d2, d3, d4, d5]) * 4;
  }

  static smallStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const straight = [1, 2, 3, 4, 5];
    const allDice = [d1, d2, d3, d4, d5];
    return straight.every((value) => allDice.includes(value)) ? 15 : 0;
  }

  static largeStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const straight = [2, 3, 4, 5, 6];
    const allDice = [d1, d2, d3, d4, d5];
    return straight.every((value) => allDice.includes(value)) ? 20 : 0;
  }

  static fullHouse(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const allDice = [d1, d2, d3, d4, d5];
    const targets = new Set(allDice);

    // quick check if there are only two different values
    if (targets.size !== 2) {
      return 0;
    }

    const firstValueOccurences = countOccurrence([...targets][0], allDice);

    // when one of the two values occurs 2 or 3 times, it's automatically a full house
    return [2, 3].includes(firstValueOccurences) ? sum(...allDice) : 0;
  }

  fours(): number {
    return sumOf(4, this.dice);
  }

  fives(): number {
    return sumOf(5, this.dice);
  }

  sixes(): number {
    return sumOf(6, this.dice);
  }
}
